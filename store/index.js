import axios from 'axios';
export const actions = {
    async nuxtServerInit({ state, dispatch }) {
    },
    async clientHook({ state, dispatch, commit }, context) {
        const account_function = () => {
            commit("account/local_set");
            if (state.account.token) {
                dispatch("account/get");
            }
        }



        account_function();

    }
}
