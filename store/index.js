export const actions = {
    async nuxtServerInit(context) {
        console.log("nuxtserverinit hook");
        console.log(Object.keys(context));
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
