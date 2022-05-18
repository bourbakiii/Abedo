import Vue from "vue";
import qs from 'qs';
let local_storage_name = "cart";
export const state = () => ({
    products: [],
    partner: {},
    promo: null
});
export const mutations = {
    action(state, action) {
        action(state);
        localStorage.setItem(local_storage_name, JSON.stringify(state));
    },
    set(state, { index, product }) {
        Vue.set(state.products, index, product)
        localStorage.setItem(local_storage_name, JSON.stringify(state));
    },
    remove(state, index) {
        Vue.delete(state.products, index);
        localStorage.setItem(local_storage_name, JSON.stringify(state));
    },
    clear(state) {
        Vue.set(state, "products", []);
        localStorage.setItem(local_storage_name, JSON.stringify(state));
    },
    set_partner(state, partner) {
        Vue.set(state, 'partner', partner);
        localStorage.setItem(local_storage_name, JSON.stringify(state));
    },
    local_set(state) {
        const local_data = JSON.parse(localStorage.getItem(local_storage_name));
        if (local_data != null) {
            console.log(local_data);
            state.products = local_data.products;
            state.partner = local_data.partner;
            console.log(state.products);
            // for (const key in local_data) state[key] = local_data[key];
        }

    }
};
export const actions = {
    action(state, action) {
        action(state);
    },
    add_to_cart(state, { product, partner }) {
        product.count = product.min_count;
        Vue.set(product, "count", product.min_count);
        if (!+state.state?.partner?.id || !state.state.products.length) state.dispatch("change_shop", { product, partner })
        else if (+state.state?.partner?.id == +partner.id) {
            state.commit('set_partner', partner);
            state.commit('set', { index: state.state.products.length, product });
        }
        else this.commit('modals/open', { modal_name: 'switch_shop', product: product, partner: partner });
    },
    crease(state, product) {
        state.commit("action", () => product.count++);
        state.commit('set', { index: state.state.products.findIndex(el => +el.id == +product.id), product });
    },
    decrease(state, product) {
        state.commit("action", () => product.count--);
        if (product.count < product.min_count) state.commit("remove", state.state.products.findIndex(el => +el.id == +product.id));
        else state.commit('set', { index: state.state.products.findIndex(el => +el.id == +product.id), product });
    },
    remove(state, product) {
        state.commit("remove", state.state.products.map(element => +element.id).indexOf(+product.id));
    },
    change_shop(state, { product, partner }) {
        this.commit("modals/close");
        state.commit('clear');
        state.commit("set", { index: state.commit('set', { index: state.state.products.length, product }), product: product });
        state.commit("set_partner", partner);
    },
    synchronization(state) {
        console.log("ты девочка искра");
        const { promo, products } = state.state;
        let product_entries_final = products.map(el => Object.entries(el).filter(el => el[0] == 'id' || el[0] == 'props' || el[0] == 'count'));
        let products_final = [];
        for(let entire of product_entries_final){
            // products_final.push({entire[0]: entire[1]});
        }
        // console.log("products final are");
        // console.log(products_final);
        // console.log(promo);
        // let params = qs.stringify({
        //     products: products,
        // });
        // console.log("the params is");
        // console.log(params);

        // this.$axios.get('/api/order/getOrder',{params: params});
    }
};


export const getters = {
    total_price(state) {
        let summ = 0;
        summ = state.products.map(product => +product.price.toFixed(2) * +product.count).reduce(function (accumulator, currentValue) {
            return accumulator + currentValue;
        }, 0) ?? 0;
        return summ % 1 == 0 ? +summ : +summ.toFixed(2);
    },
    total_discount_price(state) {
        let summ = 0;
        summ = state.products.map(product => (+product.price.toFixed(2) - (product.price.toFixed(2) * (product.discount?.percent ?? 0) / 100).toFixed(2)) * +product.count).reduce(function (accumulator, currentValue) {
            return accumulator + currentValue;
        }, 0) ?? 0;
        return summ % 1 == 0 ? +summ : +summ.toFixed(2);
    },

};
