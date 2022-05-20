export default {
    methods: {
        parseDate(date, { with_time = true }) {
            return date[0];
        },
        parseAddress(address) {
            return `${address.city}, ${address.street ? "ул. " + address.street : ""} ${address.house}${address.block ? ", " + address.block : ""}`;
        },
        final_delivery_price(delivery_price) {
            let products = this.$store.state.cart.products
            let free_order_price = +this.$store.state.cart.partner?.free_order_price
            if (!delivery_price) delivery_price = this.$store.state.cart.partner?.delivery?.price
            if (!delivery_price) delivery_price = 0;
            if (free_order_price) {
                let summ = 0;
                summ = products.map(product => (+product.price.toFixed(2) - (product.price.toFixed(2) * (product.discount?.percent ?? 0) / 100).toFixed(2)) * +product.count).reduce(function (accumulator, currentValue) {
                    return accumulator + currentValue;
                }, 0) ?? 0;
                return +summ >= +free_order_price ? 0 : delivery_price;
            }

            return delivery_price;
        },
        final_delivery_price_text() {
            return +this.final_delivery_price() == 0 ? "Бесплатно" : `${this.final_delivery_price()}₽`;
        }
    }
}