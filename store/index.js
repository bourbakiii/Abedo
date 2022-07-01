export default {
  state() {
    return {
      pages: [], preview: false, announcement: true
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
      commit("cart/localSet");
      dispatch("cart/refreshPartner");
      commit("account/localSet");
      commit("admin_account/localSet");

      dispatch("cart/synchronization");

      commit("variables/localSet");
      if (state.account.token) dispatch("account/get");

      this.$axios('/api/statics/pages').then(({data: {pages}}) => {
        const hostname = window.location.origin;
        pages.forEach(el => el.is_inner = Boolean(!el.link || el.link.includes(hostname)));
        pages.filter(el => el.is_inner && el.link).forEach(el => el.link = el.link.substring(hostname.length, el.link.length));
        pages.filter(el => el.is_inner && el.link === null).forEach(el => el.link = `/statics/${el.id}`);
        this.commit('action', state => state.pages = pages);
      })

    }
  }
}
