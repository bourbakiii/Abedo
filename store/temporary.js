export const state = () => ({
  confirmation_phone: null, search_keyword: null
});
export const mutations = {
  action(state, action) {
    action(state);
  },
};
