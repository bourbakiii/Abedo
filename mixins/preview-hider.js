export default {
  methods: {
    parseLink(link) {
      return this.is_preview ? this.$route.fullPath : link;
    }
  },
  computed:{
    is_preview() {
      return +this.$route.query.preview === 1;
    }
  }
}
