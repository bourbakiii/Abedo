export default {
    methods: {
        add_to_cart(partner) {
            if (!partner) alert("Не передан партнер");
            this.$store.dispatch('cart/add_to_cart', { product: this.product, partner });
        },
        crease() {
            this.$store.dispatch('cart/crease', this.product);
        },
        decrease() {
            this.$store.dispatch('cart/decrease', this.product);
        },
        remove() {
            this.$store.dispatch('cart/remove', this.product);
        }
    },
    computed: {
        discount_percent(){
            return this.product.discount?.percent??null;
        },
        product_price_with_discount(){
            let price_with_discount = this.product.price - (this.product.price * this.discount_percent/100??0);
            return price_with_discount%1==0?price_with_discount:price_with_discount.toFixed(2);
        },
        cart_products() {
            return this.$store.state.cart.products;
        },
        in_cart() {
            return this.cart_products.map(product => +product.id).includes(+this.product.id);;
        },
        count() {
            if (!this.in_cart) return -1;
            this.product.count = this.cart_products.find(product => +product.id == +this.product.id).count;
            return this.product.count;
        },
        price() {
            return this.product.price;
        },
        product_total_price() {
            let price = this.count * this.product.price
            return price%1==0?price:price.toFixed(2);
        },
        product_total_price_with_discount() {
            let price = this.count * this.product_price_with_discount
            return price%1==0?price:price.toFixed(2);
        }
    },

}