export default {
  data() {
    return {
      ads: []
    }
  },
  directives: {
    'advertise-margin': {
      inserted(el, binding) {
        el.classList.add(binding.value)
      }
    },
  },
  mounted() {
    this.$axios.get('/api/advertisements',).then(({data: {advertisements}}) => {
        this.ads = advertisements;
      }
    )
  }
}
