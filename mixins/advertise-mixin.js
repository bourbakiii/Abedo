export default {
  data() {
    return {
      advertise: [1, 2, 3, 4, 5, 6]
    }
  },
  mounted() {
    this.$axios.get('/api/advertisements',).then(({data: {advertisements}}) => {
        this.advertise = advertisements;
        console.log(2);
        console.log(this.advertise);

      }
    )
    console.log(this.advertise)
  }
}
