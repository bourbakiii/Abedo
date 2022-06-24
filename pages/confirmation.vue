<template>
  <div class="page confirmation-page wrapper">
    <div class="confirmation-page__over content">
      <h1 class="confirmation-page__title title-normal">Подтверждение</h1>
      <form
        @submit.prevent="call"
        class="confirmation-page__content_call"
      >
        <h4 class="title title-extra-normal">Звонок</h4>
        <p class="confirmation-page__content_call__text">
          Для верификации профиля нужно подтвердить номер телефона. После нажатия на кнопку
          «{{ called ? "Позвонить еще раз" : "Позвонить" }}»
          к вам поступит
          звонок. Прослушайте его и введите 4 названных символа в соответствующее поле.
        </p>
        {{ recall_time == null ? '' : getTimeInterval(new Date(), recall_time) }}

        <ButtonStandart :loader="loading_call" :disabled="recall_time!==null"
                        class="confirmation-page__content_call__button"> {{
            called ? "Позвонить еще раз" : "Позвонить"
                                                                         }}
        </ButtonStandart>
        <div
          :class="{'confirmation-page__content_call__errors_margined': call_errors.length}"
          class="confirmation-page__content_call__errors"
        >
          <transition name="message" appear>
            <Message
              v-for="error in call_errors"
              :key="error"
              class="confirmation-page__content_call__errors__item_error confirmation-page__content_call__errors__item"
            >{{ error }}
            </Message>
          </transition>
        </div>
      </form>
      <transition name="opacity" appear>
        <form
          v-if="called"
          @submit.prevent="sendCode"
          class="confirmation-page__content_code"
        >
          <h4 class="title title-extra-normal">Подтверждение</h4>
          <p class="confirmation-page__content_code__text">
            Пожалуйста, введите последние 4 цифры входящего номера.
          </p>
          <InputBlock
            @input="() => {}"
            placeholder="Введите код"
            class="confirmation-page__content_code__input-block confirmation-page__content_code__phone"
            name="сode"
            id="code"
            type="text"
            maxlength="4"
            :digits_only="true"
            text="Код подтверждения"

          />
          <ButtonStandart class="confirmation-page__content_code__button"
          >Отправить
          </ButtonStandart
          >
        </form>
      </transition>
    </div>
  </div>
</template>
<script>
import errorsMessagesMixin from "@/mixins/errors-messages.js";

export default {
  mixins: [errorsMessagesMixin],
  data() {
    return {
      called: true,
      confirmation: false,
      loading_call: false,
      recall_time: null,
      recall_interval: 0,
      call_errors: [],
      call_errors_timer: null,
      code_errors: [],
      code_errors_timer: null
    };
  },
  mounted() {
    this.$store.commit('variables/action', state => {
      state.adaptive_navigation = {
        text: "Регистрация",
        slot: 'label',
        info_click: null
      }
    });

  },

  async created() {
    if (!this.$store.state.temporary.confirmation_phone) this.$router.push('/');
    else {
      const recall_time = this.$cookies.get(`confirmation-${this.$store.state.temporary.confirmation_phone}` || null);
      console.log(1);
      console.log(this.$store.state.temporary.confirmation_phone);
      console.log(2)
      console.log(recall_time);
      if (recall_time) {
        console.log(3);
        console.log(new Date(recall_time));
        this.recall_time = new Date(recall_time);
      }
    }
  },
  methods: {
    getTimeInterval(start, end) {
      let interval = new Date(end - start);
      let [minutes, seconds] = [interval.getUTCMinutes(), interval.getUTCSeconds()];
      if (minutes.toString().length === 1) minutes = '0' + minutes;
      if (seconds.toString().length === 1) seconds = '0' + seconds;
      return `${minutes}:${seconds}`;
    },

    call() {
      this.loading_call = true;
      this.$axios.$post('/api/confirm/phone', {phone: this.confirmation_phone}).then(() => {
        this.called = true;
        const time_now = new Date();
        this.recall_time = new Date(time_now.setSeconds(time_now.getSeconds() + 120));
        console.log("needed");
        console.log(this.recall_time);
        this.$cookies.set(`confirmation-${this.confirmation_phone}`, JSON.stringify(this.recall_time), {expires: this.recall_time});
      }).catch(error => {
          if (error?.response?.status === 422) {
            this.call_errors = Object.values(error.response.data.errors)
              .map((el) => el.flat())
              .flat();
          }
        }
      ).finally(() => this.loading_call = false);
    },
    sendCode() {
      console.log("Send code function");
    },
  },
  computed: {
    confirmation_phone() {
      return this.$store.state.temporary.confirmation_phone;
    },
  },
  watch: {
    recall_time(value) {
      if (!value) return;
      this.recall_interval = setInterval(() => this.$forceUpdate(), 1000);
      setTimeout(() => {
        this.recall_time = null;
        clearInterval(this.recall_interval)
      }, 1000 * value.getSeconds());
    },
    call_errors() {
      clearTimeout(this.call_errors_timer);
      this.call_errors_timer = setTimeout(() => {
        clearTimeout(this.call_errors_timer);
        this.call_errors_timer = null;
        this.call_errors = [];
      }, 6000);
    },
    code_errors() {
      clearTimeout(this.code_errors_timer);
      this.code_errors_timer = setTimeout(() => {
        clearTimeout(this.code_errors_timer);
        this.code_errors_timer = null;
        this.code_errors = [];
      }, 6000);
    },
    '$store.state.temporary.confirmation_phone':
      {
        handler(value) {
          if (!value) this.$router.push('/');
        }
        ,
        deep: true
      }
  }
}
;
</script>
<style lang="scss" scoped>
.confirmation-page {
  @media screen and (max-width: $notebook) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  @media screen and (max-width: $tablet) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  padding-top: 100px;
  padding-bottom: 100px;

  &__over {
    align-items: flex-start;
    justify-content: flex-start;
  }

  &__title {
    margin-bottom: 70px;
    @media screen and (max-width: $notebook) {
      margin-bottom: 50px;
      font-size: 25px;
    }
    @media screen and (max-width: $tablet) {
      margin-bottom: 20px;
      font-weight: 700;
      font-size: 20px;
      line-height: 20px;
    }
  }

  &__content {
    border-radius: 20px;
    background-color: $white;
    padding: 20px;
    width: 100%;
    max-width: 450px;

    &__input-block {
      margin-bottom: 20px;
    }

    &__text {
      margin: 20px 0;
      font-size: 16px;
      @media screen and (max-width: $tablet) {
        font-size: 15px;
      }
    }

    &__button {
      width: 100%;
      max-width: 200px;
      @media screen and (max-width: $tablet) {
        height: 40px;
      }
    }

    &__errors {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      width: 100%;
      transition: calc($transition * 2);

      &_margined {
        margin-top: 15px;
      }


      .empty {
        margin-top: 0;
      }
    }

    &_call, &_code {
      border-radius: 20px;
      background-color: $white;
      padding: 20px;
      width: 100%;
      max-width: 450px;

      &__text {
        margin: 20px 0;
        font-size: 16px;
        @media screen and (max-width: $tablet) {
          font-size: 15px;
        }
      }

      &__errors {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        width: 100%;
        transition: $transition * 2;

        &_margined {
          margin-top: 15px;
        }


        .empty {
          margin-top: 0px;
        }
      }

      &__button {
        margin-top: 20px;
        width: 100%;
        max-width: 200px;

        &.disabled {
          background-color: $dark_grey;
          opacity: 0.8;
          border: none;

          &:hover {
            //border: 1px solid $darkblue !important;
            color: $darkblue !important;
          }
        }

        @media screen and (max-width: $tablet) {
          height: 40px;
        }
      }
    }
  }
}
</style>
