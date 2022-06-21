export default {
  methods: {
    parseLink(link) {
      return this.is_preview ? this.$route.fullPath : link;
    }
  },
  computed: {
    is_preview() {
      return (+this.$route.query.preview === 1 && this.$route.name === 'partners-partner_id' || this.$route.name === 'product-product_id');
    }
  }
}
