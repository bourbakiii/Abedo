export const state = () => ({
  navigation_transition_to: 100,
  navigation_transition_back: 60,
  adaptive_navigation: {
    text: null, slot: 'main', info_click: null
  }
});

export const mutations = {
  action(state, action) {
    action(state);
  }
}