export const actions = {
    async nuxtServerInit({ state, dispatch }) {
    },
    clientHook({ state, dispatch, commit }) {
        commit("cart/local_set");
        ////// USER
        commit("account/local_set");
        if (state.account.token) {
            dispatch("account/get");
        }

    }
}
