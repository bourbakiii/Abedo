export default {
    props: {
      partner: {
        required: true,
      },
    },
    computed: {
      cuisines() {
        return this.partner.cuisines.map((cuisine) => cuisine.name).join("/");
      },
    },
  };