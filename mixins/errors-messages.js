export default{
    data(){
        return{
            errors: [],
            errorsTimer: null,
        }
    },
    watch: {
        errors() {
          clearTimeout(this.errorsTimer);
          this.errorsTimer = setTimeout(() => {
            clearTimeout(this.errorsTimer);
            this.errorsTimer = null;
            this.errors = [];
          }, 6000);
        },
      },
}