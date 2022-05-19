export const actions = {
    async nuxtServerInit({ state, dispatch, commit }, { req }) {
        // console.log("nuxtserverinit hook");
        // console.log(Object.keys(_));
        // console.log(req.headers.cookie);
        commit("cart/local_set");
        console.log(this.$cookies.get('token'));
        commit("account/local_set");
    },
    clientHook({ state, dispatch, commit }) {
        ////// USER
        if (state.account.token) {
            dispatch("account/get");
        }
    }
}
