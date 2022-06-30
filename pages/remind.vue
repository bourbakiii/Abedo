<template>
  <div class="remind-page page">
    <form
      @submit.prevent="called?remind():call()"
      class="remind-page__content"
    >
      <h4 class="title title-extra-normal">Звонок</h4>

      <InputBlock v-model="phone"
                  pre="+7"
                  mask="(###) ###-##-##"
                  placeholder="(000) 000 000 00"
                  class="remind-page__content__phone"
                  name="phone"
                  id="login_phone"
                  type="text"
                  text="Телефон"
                  :required="true"
                  :disabled="called"
                  :autocomplete="false"/>
      <div v-if="called" class="remind-page__content__called-form">
        <InputBlock
          v-model="code"
          placeholder="Введите код"
          class="remind-page__content__called-form__input-block remind-page__content__called-form__phone"
          id="code"
          name="remind_code"
          type="text"
          :autocomplete="false"
          maxlength="4"
          minlength="4"
          :digits_only="true"
          text="Код подтверждения"
          :required='true'
        />
        <InputBlock
          v-model="password"
          placeholder="Введите пароль"
          class="remind-page__content__called-form__input-block remind-page__content__called-form__password"
          name="remind_password"

          id="registration_password"
          type="password"
          text="Пароль"
          minlength="8"
          :required="true"
        />
        <InputBlock
          v-model="password_confirmation"
          placeholder="Введите пароль"
          class="remind-page__content__called-form__input-block remind-page__content__called-form__password_confirmation"
          name="remind_password_confirmation"

          id="registration_password_confirmation"
          type="password"
          text="Повтор пароля"
          :required="true"
          minlength="8"
        />
        <ButtonStandart :loading="loading"
                        class="remind-page__content__called-form__button remind-page__content__button">Восстановить
        </ButtonStandart>
      </div>
      <ButtonStandart type="button" @click="call" :loader="loading_call" :disabled="recall_time!==null"
                      class="remind-page__content__button">
        {{
          called ? "Позвонить еще раз" : "Позвонить"
        }} {{ recall_time == null ? '' : `(${getTimeInterval(new Date(), recall_time)})` }}
      </ButtonStandart>
      <div
        :class="{'remind-page__content__errors_margined':  [...call_errors, ...errors].length}"
        class="remind-page__content__errors"
      >
        <transition name="message" appear>
          <Message
            v-for="error in [...call_errors, ...errors]"
            :key="error"
            class="remind-page__content__errors__item_error remind-page__content__errors__item"
          >{{ error }}
          </Message>
        </transition>
      </div>
    </form>
  </div>
</template>
<script>
import errorsMessagesMixin from "@/mixins/errors-messages";
import phoneCallHelper from "@/mixins/phone-call-helper";

export default {
  data() {
    return {
      code: null,
      password: null,
      password_confirmation: null,
      loading: false
    }
  },
  head() {
    return {
      title: `Восстановление пароля - Abedo`,
    }
  },
  mixins: [errorsMessagesMixin, phoneCallHelper],
  beforeCreate() {
    this.$store.commit('temporary/action', state => {
      state.confirmation_phone = 'temporary';
    });
  },
  mounted() {
    this.$store.commit('variables/action', state => {
      state.adaptive_navigation = {
        text: "Восстановление пароля",
        slot: 'label',
        info_click: null
      }
    });
  },
  methods: {
    remind() {
      console.log(this);
      this.loading = true;
      this.$axios.post('/api/restore/password', {
        phone: this.phone,
        code: this.code,
        password: this.password,
        password_confirmation: this.password_confirmation
      }).then(() => this.$router.push('/')).catch(error => {
        if (+error?.response?.status === 422) {
          this.errors = Object.values(error.response.data.errors)
            .map((el) => el.flat())
            .flat();
        }
      }).finally(() => this.loading = false);
    }
  }
}
</script>
<style lang="scss" scoped>
.remind-page {
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
  @media screen and (max-width: $tablet) {
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

    &__phone {
      margin: 30px 0 10px;
    }

    &__called-form {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin-bottom: 30px;

      &__input-block {
        width: 100%;
        margin-bottom: 10px;

        &:last-of-type {
          margin-bottom: 20px;
        }
      }

    }

    &__button {
      padding: 0 20px;
      min-width: 200px;

      &.disabled {
        background-color: $dark_grey;
        opacity: 0.8;
        border: none;

        &:hover {
          //border: 1px solid $darkblue !important;
          color: $darkblue !important;
        }
      }
    }

    &__errors {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      width: 100%;
      transition: $transition;

      &_margined {
        margin-top: 15px;
      }


      .empty {
        margin-top: 0;
      }
    }

  }
}
</style>
