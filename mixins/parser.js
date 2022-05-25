export default {
  methods: {
    parseDate(date, {with_time = true}) {
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
        products.forEach(product => {
          let discount_percent = +product.discount?.percent || +product.section.discount?.percent || 0;
          summ += (+product.price.toFixed(2) - (product.price.toFixed(2) * (discount_percent) / 100).toFixed(2)) * +product.count;
          // summ += product.selected_options.map(option => +option.price * +product.count).reduce(function (accumulator, currentValue) {
          //     return accumulator + currentValue;
          // }, 0);
        });
        summ -= this.$store.state.cart.promo.discount;
        return +summ >= +free_order_price ? 0 : delivery_price;
      }

      return delivery_price;
    },
    final_delivery_price_text() {
      const final_delivery_price = this.final_delivery_price();
      return +final_delivery_price == 0 ? "Бесплатно" : `${final_delivery_price}₽`;
    }
  }
}
