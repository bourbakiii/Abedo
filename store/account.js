export const state = () => ({
    token: null,
    user:{}
});
export const mutations = {
    action(state, action) {
        action(state);
        localStorage.setItem('account', JSON.stringify(state));
    },
    clear(state){
        state.token = null,
        state.user= {};
        localStorage.setItem('account', JSON.stringify(state));
    },
    local_set(state){
        console.log("Local set");
        const local_data = JSON.parse(localStorage.getItem('account'));
        console.log(state);
        if(local_data)
        for(const key in state)
        {
            console.log(key);
        state[key] = local_data[key]??null
        }
    }
};

export const actions = {
    get(state) {
        this.$axios.get(`/api/user`, {
            headers:{
                "Authorization": "Bearer "+state.state.token
            }
        }).then(({data: {user}})=>{
            state.commit("action", (state)=>{
                state.user = user;
            })
        }).catch(()=>{
            state.dispatch("logout");
        })
    },
    logout(state)
    {
        const token = state.state.token;
        state.commit("clear");
        this.$axios.get(`/api/logout`, {
            headers:{
                "Authorization": "Bearer "+ token
            }
        });
    }
};
