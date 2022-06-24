export default{
    data(){
        return{
            errors: [],
            errors_timer: null,
        }
    },
    watch: {
        errors() {
          clearTimeout(this.errors_timer);
          this.errors_timer = setTimeout(() => {
            clearTimeout(this.errors_timer);
            this.errors_timer = null;
            this.errors = [];
          }, 6000);
        },
      },
}
