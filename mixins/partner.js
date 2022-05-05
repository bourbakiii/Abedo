export default {
  props: {
    partner: {
      required: true,
    },
  },
  methods: {
    like() {

if(!this.token) return this.$store.commit("modals/open",{modal_name:"login"}) 

      const add_if_true = (value) => {
        if (value)
          this.$store.commit('account/action', (state) => state.favourites.splice(state.favourites.map(partner => +partner.id).indexOf(+this.partner.id), 1));
        else this.$store.commit('account/action', (state) => state.favourites.push(this.partner));
      }
      const before_is_favourite = this.is_favourite;
      add_if_true(before_is_favourite);
      this.$axios.patch(`/api/shops/${this.partner.id}/like`, {}, {
        headers: {
          "Authorization": "Bearer " + this.token
        }
      }).catch(() => {
        add_if_true(!before_is_favourite);
      });


    }
  },
  computed: {
    token() {
      return this.$store.state.account.token;
    },
    is_favourite() {
      return this.$store.state.account.favourites.map(favourite => +favourite.id).includes(+this.partner.id)
    },
    cuisines() {
      return this.partner.cuisines.map((cuisine) => cuisine.name).join("/");
    },
  },
};