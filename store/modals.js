export const state = () => ({
  // product: {
  //   show: false,
  //   product: null,
  // },
  rate: {
    show: false,
    order_id: null
  },
  login: {
    show: false
  },
  switch_shop: {
    show: false,
    product: null,
    partner: null,
  },
  partner: {
    show: false,
    partner: null
  },
  authorisation: {
    show: false,
  },
});
export const mutations = {
  action(state, action) {
    action(state);
  },
  open(state, props) {
    for (let modal_key in state) state[modal_key].show = false;
    state[props.modal_name].show = true;
    document.lastChild.classList.add("html_overflow");
    switch (props.modal_name) {
      case "product": {
        state.product.product = props.product;
        break;
      }
      case "rate": {
        state.rate.order_id = props.order_id;
        break;
      }
      case "partner": {
        state.partner.partner = props.partner;
        break;
      }
      case "switch_shop": {
        state.switch_shop.partner = props.partner;
        state.switch_shop.product = props.product;
        break;
      }
    }
  },
  close(state, props = {modal_name: null}) {
    for (let modal_key in state) state[modal_key].show = false;
    document.lastChild.classList.remove("html_overflow");
    // state.product.product = null;
    state.partner.partner = null;
    state.switch_shop.partner = null;
    state.switch_shop.product = null;
    state.rate.order_id = null;
    if (!props.modal_name) return;
  },
};
export const actions = {
  action(state, action) {
    action(state);
  },
};
