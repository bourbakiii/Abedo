export default {
  data() {
    return {
      ads: []
    }
  },
  mounted() {
    this.$axios.get('/api/advertisements',).then(({data: {advertisements}}) => {
        this.ads = advertisements;
      }
    )
  }
}
