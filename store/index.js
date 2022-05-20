export const actions = {
    async nuxtServerInit({ state, dispatch, commit }, { req }) {
    },
    clientHook({ state, dispatch, commit }) {
        commit("cart/local_set");
        commit("account/local_set");
        if (state.account.token) dispatch("account/get");
    }
}
