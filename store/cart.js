import Vue from "vue";
import qs from 'qs';

let local_storage_name = "cart";
export const state = () => ({
  products: [], partner: {}, promo: {
    success: null, value: null, message: null, discount: 0, loading: false
  }, gifts: [], synchronization_timer: null
});
export const mutations = {
  action(state, action) {
    action(state);
    localStorage.setItem(local_storage_name, JSON.stringify(state));
  }, unlocal_action(state, action) {
    action(state);
  }, set(state, {index, product}) {
    Vue.set(state.products, index, product)
    localStorage.setItem(local_storage_name, JSON.stringify(state))
  }, remove(state, index) {
    Vue.set(state.products[index], 'selected_options', []);
    Vue.delete(state.products, index);
    localStorage.setItem(local_storage_name, JSON.stringify(state));
  }, clear(state) {
    console.log(1)
    Vue.set(state, "products", []);
    localStorage.setItem(local_storage_name, JSON.stringify(state));
  },

  clearPromo(state) {
    state.promo = Object.assign(state.promo, {
      success: null, value: null, message: null, discount: 0,
    })
    localStorage.setItem(local_storage_name, JSON.stringify(state));
  }, set_partner(state, partner) {
    Vue.set(state, 'partner', partner);
    localStorage.setItem(local_storage_name, JSON.stringify(state));
  }, localSet(state) {
    const local_data = JSON.parse(localStorage.getItem(local_storage_name) ?? null);
    if (local_data) {
      state.partner = local_data.partner;
      state.products = local_data.products;
      state.gifts = local_data.gifts;
    }
  }
};
export const actions = {
  action(state, action) {
    action(state);
  }, add_to_cart(state, {product, partner}) {
    product.count = product.min_count;
    Vue.set(product, "count", product.min_count);
    if (!+state.state?.partner?.id || !state.state.products.length) state.dispatch("change_shop", {
      product, partner
    }); else if (+state.state?.partner?.id === +partner.id) {
      state.commit('set_partner', partner);
      state.commit('set', {index: state.state.products.length, product})
      state.dispatch('checkForAInCartMessage', product);
    } else this.commit('modals/open', {modal_name: 'switch_shop', product: product, partner: partner});
    state.dispatch("synchronization");
  }, crease(state, product) {

    state.commit("action", () => product.count++);
    state.commit('set', {index: state.state.products.findIndex(el => +el.id == +product.id), product});
    state.dispatch("synchronization");

  }, decrease(state, product) {
    state.commit("action", () => product.count--);
    if (product.count < product.min_count) state.commit("remove", state.state.products.findIndex(el => +el.id == +product.id)); else state.commit('set', {
      index: state.state.products.findIndex(el => +el.id == +product.id), product
    });
    state.dispatch("synchronization");

  }, remove(state, product) {
    state.commit("remove", state.state.products.map(element => +element.id).indexOf(+product.id));
    state.dispatch("synchronization");

  }, change_shop(state, {product, partner}) {
    this.commit("modals/close");
    state.commit('clear');
    state.commit("set", {index: state.commit('set', {index: state.state.products.length, product}), product: product});
    state.dispatch('checkForAInCartMessage', product)
    state.commit("set_partner", partner);
    state.dispatch("synchronization");

  }, checkForAInCartMessage(state, product) {
    if (product.in_cart_message) this.commit('modals/open', {
      modal_name: 'add_to_cart', message: product.in_cart_message
    });
  }, async refreshPartner(state) {
    console.log("Send me free")
    if (!state.state.partner) return;
    await this.$axios.get(`/api/shop/${state.state.partner.id}`).then(({data: {shop}}) => {
      state.commit('set_partner', shop);
    })

  }, async synchronization(state) {
    const sync = async () => {

      const {promo, products, partner} = state.state;
      if (!products.length) return;
      let products_final = [];
      for (let product of products) products_final.push({id: product.id, count: product.count, props: product.props});
      let params = qs.stringify({
        promo_code: promo.value, products: products_final, shop_id: partner.id
      });

      state.commit('action', state => {
        state.promo.discount = 0;
        clearTimeout(state.synchronization_timer);
        state.synchronization_timer = null;
        state.promo.loading = true;
      });

      await this.$axios.get(`/api/order/getOrder?${params}`).then(({data: {order}}) => {
        if (state.synchronization_timer == null) {
          state.commit('action', state => {
            state.promo.message = null;
            state.promo.success = null;

            if (order.promo) {
              state.promo.success = true;
              state.promo.discount = order?.promoDiscount || 0;
              state.promo.message = 'Промокод применен';
            }
            if (order.gifts) state.gifts = order.gifts; else state.gifts = [];
          });
        }
      }).catch(error => {
        if (error?.response?.status == 422) {
          state.commit('action', state => {
            state.promo.success = false;
            state.promo.message = error.response.data.errors.promo_code[0] ?? null
          });
        }
        state.gifts = [];
      }).finally(() => {
        state.commit('action', state => {
          state.promo.loading = false;
        });
      })
    };
    state.commit('action', (state) => {
      clearTimeout(state.synchronization_timer);
      state.synchronization_timer = setTimeout(sync, 600);
    });
  }
};


export const getters = {
  total_price(state) {
    let summ = 0;
    state.products.forEach(product => {
      summ += product.price.toFixed(2) * +product.count;
      summ += product.selected_options.map(option => +option.price * +product.count).reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);
    });
    return summ % 1 == 0 ? +summ : +summ.toFixed(2);
  }, total_discount_price(state) {
    let summ = 0;
    state.products.forEach(product => {
      let discount_percent = +product.discount?.percent || +product.section.discount?.percent || 0;
      summ += (+product.price.toFixed(2) - (product.price.toFixed(2) * (discount_percent) / 100).toFixed(2)) * +product.count;
      summ += product.selected_options.map(option => +option.price * +product.count).reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);
    });
    summ -= state.promo.discount;
    return summ % 1 == 0 ? +summ : +summ.toFixed(2);
  },

};
