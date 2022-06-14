export default {
  methods: {
    parseDate(date, {with_time = true}) {
      return date.substr(0,with_time?20:10);
    },
    parseAddress(address) {
      return `${address.city}, ${address.street ? "ул. " + address.street : ""} ${address.house}${address.block ? ", " + address.block : ""}`;
    },
    parsePhone(phone) {
      return phone
        ? `(${phone[0]}${phone[1]}${phone[2]}) ${phone[3]}${phone[4]}${phone[5]}-${phone[6]}${phone[7]}-${phone[8]}${phone[9]}`
        : null;
    },

  },
  computed: {
    final_delivery_price() {
      let delivery_price = this.$store.state.cart.partner.delivery?.price || null;
      let total_products_discount_summ = this.$store.getters['cart/total_discount_price'];
      let free_order_price = +this.$store.state.cart.partner?.free_order_price || null;
      if (free_order_price && free_order_price <= total_products_discount_summ) delivery_price = 0;

      return +delivery_price;
    },
    parsed_delivery_text({price} = {}) {
      if (!price) price = this.final_delivery_price;

      if (this.$store.state.cart.partner.delivery?.price === 0) return null;
      if (price === 0) return "Бесплатно";
      return `${+price % 1 === 0 ? +price : price.toFixed(2)}₽`;
    }
  }
}
