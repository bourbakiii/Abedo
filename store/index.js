export default {
  state() {
    return {
      pages: [],
      preview: false,
    }
  }, mutations: {
    action(state, action) {
      action(state);
    }
  }, actions: {
    async nuxtServerInit({state, dispatch, commit}, {req}) {
      commit("account/actionWithoutLocalStorage", (state) => {
        state.token = this.$cookies.get('token') ?? null;
      });

    }, clientHook({state, dispatch, commit}) {
      commit("cart/local_set");
      commit("account/local_set");
      commit("variables/local_set");
      if (state.account.token) dispatch("account/get");

      this.$axios('/api/statics/pages').then(({data: {pages}}) => {
        this.commit('action', (state) => state.pages = pages);
      })


    }
  }
}
