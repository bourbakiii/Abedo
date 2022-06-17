export const state = () => ({
  token: null,
  shop_id: null
});
export const mutations = {
  actionWithoutLocalStorage(state, action) {
    action(state);
  },
  action(state, action) {
    action(state);
    localStorage.setItem('admin_account', JSON.stringify(state));
  },
  localSet(state) {
    const local_data = JSON.parse(localStorage.getItem('admin_account') ?? null);
    if (local_data) for (const key in state) state[key] = local_data[key] ?? null
  }
};

