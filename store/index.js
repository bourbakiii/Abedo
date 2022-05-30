export const actions = {
    async nuxtServerInit({ state, dispatch, commit }, { req }) {
        commit("account/actionWithoutLocalStorage", (state)=>{
            state.token = this.$cookies.get('token')??null;
        });

    },
    clientHook({ state, dispatch, commit }) {
        commit("cart/local_set");
        commit("account/local_set");
        commit("variables/local_set");
        if (state.account.token) dispatch("account/get");
    }
}
