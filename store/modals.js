export const state = () => ({
  product: {
    show: false,
    product: null,
  },
  rate: {
    show: true
  },
  partner: {
    show: false,
    shop: null
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
      case "partner": {
        state.partner.partner = props.partner;
        break;
      }
    }
  },
  close(state, props={modal_name:null}) {
    console.log("Это работает вообще или нет?");
    for (let modal_key in state) state[modal_key].show = false;
    document.lastChild.classList.remove("html_overflow");
    if (!props.modal_name) return;
    switch (props.modal_name) {
      case "product": {
        state.product.product = null;
        break;
      }
      case "product": {
        state.partner.partner = null;
        break;
      }
      case "authorisation": {
        // state.login
        break;
      }
    }
  },
};
export const actions = {
  action(state, action) {
    action(state);
  },
};
