import Vue from "vue";
let local_storage_name = "cart";
export const state = () => ({
    products: [],
    partner: {}
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
    set_shop(state, partner) {
        Vue.set(state, 'partner', partner);
        localStorage.setItem(local_storage_name, JSON.stringify(state));
    },
    local_set(state) {
        const local_data = JSON.parse(localStorage.getItem(local_storage_name));
        if (local_data != null) {
            console.log(local_data);
            state.products = local_data.products;
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
        if (+state.state?.partner?.id == +partner.id) {
            state.commit('set_shop', partner);
            state.commit('set', { index: state.state.products.length, product });
        }
        else {
            this.commit('modals/open', { modal_name: 'switch_shop', product: product, partner: partner });
            console.log("da dis");
            console.log(this);
        }
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
        state.commit("set", {index: state.commit('set', { index: state.state.products.length, product }), product: product});
        state.commit("set_shop", partner);
    }
};
