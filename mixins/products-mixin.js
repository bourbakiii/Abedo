export default {
    methods: {
        openProductModal() {
            this.$store.commit('modals/open', {
                modal_name: 'product',
                product: {
                    name: 'Забыл передать продукт'
                }
            });
        }
    }
}