const local_storage_name = "admin_account";
export const state = () => ({
  token: null,
  shop_id: null
});
export const mutations = {
  actionWithoutLocalStorage(state, action) {
    action(state);
  },
  set(state, {token, shop_id}) {
    state.token = token;
    state.shop_id = shop_id;
    this.$cookies.setAll([
      {name: "admin_token", value: token},
      {name: 'preview_shop_id', value: shop_id}
    ]);
    localStorage.setItem(local_storage_name, JSON.stringify(state));
  },
  action(state, action) {
    action(state);
    localStorage.setItem('admin_account', JSON.stringify(state));
  },
  localSet(state) {
    const local_data = JSON.parse(localStorage.getItem('admin_account') || null);
    if (local_data) for (const key in state) state[key] = local_data[key] || null
  }
};

