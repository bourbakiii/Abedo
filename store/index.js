export const actions = {
    async nuxtServerInit({ state, dispatch, commit }, { req }) {
        commit("cart/local_set");
        commit("account/local_set");
        if (state.account.token) dispatch("account/get");
    },
    clientHook({ state, dispatch, commit }) {}
}
