export const state = () => ({
    products: []
});
function save_at_local({
    name = null,
    value = null }) {
    if (!name || !value) return alert(`Переданы не все параметры - name:${name ?? 'ПУСТО'}, value:${value ?? 'ПУСТО'}`);
    if (typeof localStorage != undefined) localStorage.setItem(name, value);
    else alert('LocalStorage не прогружен');
}
function delete_by_id({
    array = null,
    id = null }) {
    if (!array || !id) return alert(`Переданы не все параметры - array:${array ?? 'ПУСТО'}, id:${id ?? 'ПУСТО'}`);
    array = array.filter(element => +element['id'] != +id);
    return array;
}
export const mutations = {
    crease(state, product) {
        if(!product.count) product.count = product.min_count;
        if (+product.count++ == product.min_count) state.products.unshift(product);
        save_at_local({ name: 'basket', value: JSON.stringify(state) });
    },
    decrease(state, product) {
        product.count = Math.max(product.count-=1, product.min_count);
        state.products = state.products.filter(element=>+element.count>product.min_count);
        save_at_local({ name: 'basket', value: JSON.stringify(state) });
    },
    remove(state, product) {
        product.count = -1;
        state.products = state.products.filter(element=>+element.count>product.min_count);
        save_at_local({ name: 'basket', value: JSON.stringify(state) });
    },
    action(state, action) {
        action(state);
    }
};

export const actions = {};
