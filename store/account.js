export const state = () => ({
    token: null,
    user: {},
    favourites: []
});
export const mutations = {
    actionWithoutLocalStorage(state, action) {
        action(state);
    },
    action(state, action) {
        action(state);
        localStorage.setItem('account', JSON.stringify(state));
    },
    clear(state) {
        state.token = null,
            state.user = {},
            state.favourites = [];
        localStorage.setItem('account', JSON.stringify(state));
    },
    local_set(state) {
        const local_data = JSON.parse(localStorage.getItem('account') ?? null);
        if (local_data) for (const key in state) state[key] = local_data[key] ?? null
    }
};

export const actions = {
    async get(state) {
        await this.$axios.get(`/api/user`, {
            headers: {
                "Authorization": `Bearer ${state.state.token}`,
            }
        }).then(async ({ data: { user } }) => {
            await state.commit("action", state => {
                user.addresses.forEach(el => {
                    el.is_default = Boolean(el.is_default);
                    el.value = `${el.city}, ${el.street} ${el.house}${el.block ? ", " + el.block : ""}`;
                    el.flat = el.apartment;
                    el.get_lat = el.lat;
                    el.get_lon = el.lon;
                    delete el.apartment;
                    delete el.lat;
                    delete el.lon;
                });
                user.gender = user.gender == 'male' ? 'Мужской' : 'Женский';
                state.user = user;
            })
            await state.dispatch("favourites");
        }).catch(error => {
            if (error?.response?.status == 401)
                state.dispatch("logout");
        })
    },
    async favourites(state) {
        await this.$axios.get(`/api/shops/favourites`, {
            headers: {
                "Authorization": "Bearer " + state.state.token
            }
        }).then(({ data: { shops: { data } } }) => {
            state.commit("action", (state) => {
                state.favourites = data;
            })
        });
    },
    async logout(state) {
        const token = state.state.token;
        state.commit("clear");
        this.$router.push('/');
        this.$cookies.remove("token");
        await this.$axios.get("/api/logout", {
            headers: {
                "Authorization": "Bearer " + token
            }
        });
    }
};
