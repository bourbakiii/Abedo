export default {
  data() {
    return {
      phone: '',
      called: false,
      loading_call: false,
      recall_time: null,
      recall_interval: 0,
      call_errors: [],
      call_errors_timer: null,
    }
  },

  created() {
    if (this.phone == null) return this.$router.push('/');
    const recall_time = this.$cookies.get(`phone-to-call-${parseInt(`${this.phone}`.replace(/\D+/g, ""))}` || null);
    if (recall_time) this.recall_time = new Date(recall_time);
  },
  methods: {
    getTimeNowWithAdding({seconds = 0}) {
      const time_now = new Date();
      return new Date(time_now.setSeconds(time_now.getSeconds() + seconds));
    },
    getTimeInterval(start, end) {
      let interval = new Date(end - start);
      let [minutes, seconds] = [interval.getUTCMinutes(), interval.getUTCSeconds()];
      if (minutes.toString().length === 1) minutes = '0' + minutes;
      if (seconds.toString().length === 1) seconds = '0' + seconds;
      return `${minutes}:${seconds}`;
    },
    call() {
      this.loading_call = true;
      this.$axios.$post('/api/confirm/phone', {phone: this.phone}).then(() => {
        this.called = true;
        this.recall_time = this.getTimeNowWithAdding({seconds: 120});
        console.log("поставь блять идиот");
        console.log(parseInt(this.phone.replace(/\D+/g, "")));
        this.$cookies.set(`phone-to-call-${parseInt(this.phone.replace(/\D+/g, ""))}`, JSON.stringify(this.recall_time), {expires: this.recall_time});
      }).catch(error => {
          if (error?.response?.status === 422) {
            this.call_errors = Object.values(error.response.data.errors)
              .map((el) => el.flat())
              .flat();
          }
          if (error?.response?.data?.message) {
            let index_of_double_dot = error.response.data.message.indexOf(':');
            if (index_of_double_dot === -1) return;
            let minutes = error.response.data.message.substring(index_of_double_dot - 2, index_of_double_dot);
            let seconds = error.response.data.message.substring(index_of_double_dot + 1, index_of_double_dot + 3);
            this.recall_time = null;
            this.recall_time = this.getTimeNowWithAdding({seconds: (+minutes * 60) + +seconds});
            this.$cookies.set(`phone-to-call-${this.phone}`, JSON.stringify(this.recall_time), {expires: this.recall_time});
          }
        }
      ).finally(() => this.loading_call = false);
    },
  },
  watch: {
    call_errors() {
      clearTimeout(this.call_errors_timer);
      this.call_errors_timer = setTimeout(() => {
        clearTimeout(this.call_errors_timer);
        this.call_errors_timer = null;
        this.call_errors = [];
      }, 6000);
    }, recall_time(value) {
      if (!value) return;
      this.recall_interval = setInterval(() => this.$forceUpdate(), 1000);
      const difference = new Date(value - new Date());
      setTimeout(() => {
        this.recall_time = null;
        clearInterval(this.recall_interval)
      }, 1000 * (difference.getMinutes() * 60 + difference.getSeconds()));
    },
  }

}
