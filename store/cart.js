import Vue from "vue";

export const state = () => ({
    products:[]
  });
  export const mutations = {
    action(state, action) {
      action(state);
    },
    add_to_cart(state, product){
        Vue.set(state.products, state.products.length, product);
        state.products.push(product);
    },
    crease(state,product){
        console.log(123);
        product.count++;
    },
    decrease(state,product){
        product.count = Math.max(product.min_count, product.count);
    }
  };
  export const actions = {
    action(state, action) {
      action(state);
    },
    add_to_cart(state, product){
        state.commit("add_to_cart",product);
    },
    crease(state,product){
        state.commit("crease",product);
    },
    decrease(state,product){
        state.commit("decrease",product);
    }
  };
  