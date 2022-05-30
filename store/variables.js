import Vue from "vue";

export const state = () => ({
  navigation_transition_to: 100,
  navigation_transition_back: 60,
  adaptive_navigation: {
    text: null, slot: 'main', info_click: null
  },
  loaded: false
});

export const mutations = {
  action(state, action) {
    action(state);
    localStorage.setItem('variables', JSON.stringify(state));
  },
  local_set(state) {
    const local_data = JSON.parse(localStorage.getItem('variables')) ??  {
      text: null, slot: 'main', info_click: null
    }
    local_data.loaded = true;
    Vue.set(this.state,'variables',local_data);
  }
}