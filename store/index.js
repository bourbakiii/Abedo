
export const actions = {
    async nuxtServerInit({ state, dispatch }) {
    },
    clientHook({ state, dispatch, commit }) {
        ////// USER
        commit("account/local_set");
        if (state.account.token) {
            dispatch("account/get");

        }
    }
}
