<template>
  <div class="page registration-page wrapper">
    <div class="registration-page__over content">
      <h1 class="registration-page__title title-normal">Регистрация</h1>
      <form
        @submit.prevent="registrate"
        class="registration-page__content"
      >
        <InputBlock
          v-model="form.phone"
          pre="+7"
          mask="(###) ###-##-##"
          placeholder="(000) 000 000 00"
          class="registration-page__content__input-block registration-page__content__phone"
          name="phone"
          id="login_phone"
          type="text"
          text="Телефон"
          :required="true"
          :autocomplete="false"
        />
        <InputBlock
          v-model="form.password"
          placeholder="Введите пароль"
          class="registration-page__content__input-block registration-page__content__password"
          name="registration_password"
          id="registration_password"
          type="password"
          text="Пароль"
          minlength="8"
          :required="true"
        />
        <InputBlock
          v-model="form.password_confirmation"
          placeholder="Введите пароль"
          class="registration-page__content__input-block registration-page__content__password_confirmation"
          name="registration_password_confirmation"
          id="registration_password_confirmation"
          type="password"
          text="Повтор пароля"
          :required="true"
          minlength="8"
        />

        <label for="registration-page__content__confirmation__checkbox"
               class="registration-page__content__confirmation">
          <Checkbox
            id="registration-page__content__confirmation__checkbox"
            :checked="confirmation"
            :value="!confirmation"
            @change="confirmation = !$event"
            class="registration-page__content__confirmation__checkbox"
          />
          <span class="registration-page__content__confirmation__text">
            Принимаю условия использования и политику конфиденциальности
          </span>
        </label>

        <ButtonStandart :disabled="!confirmation" :loader="loading" class="registration-page__content__button">
          Зарегистрироваться
        </ButtonStandart>
        <!-- <client-only> -->
        <transition-group
          name="opacity"
          tag="div"
          :class="{
            'registration-page__content__errors_margined': errors.length,
          }"
          class="registration-page__content__errors"
        >
          <Message
            v-for="(error,index) in errors"
            :key="`registration-error-${index}`"
            class="registration-page__content__errors__item_error registration-page__content__errors__item"
          >{{ error }}
          </Message
          >

        </transition-group>
        <!-- </client-only> -->
      </form>

    </div>
  </div>
</template>
<script>
import errorsMessagesMixin from "@/mixins/errors-messages.js";

export default {
  mixins: [errorsMessagesMixin],
  data() {
    return {
      form: {
        phone: "",
        password: "",
        password_confirmation: "",
      },
      confirmation: false,
      loading: false
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
  methods: {
    clickOnDisabledButton() {
      if (!this.confirmation) {
        console.log("епта")
        this.errors = ['Вы должны принять условия пользовательского соглашения'];
      }
    },
    registrate() {
      if (this.form.password !== this.form.password_confirmation) {
        document
          .querySelector(".registration-page__content__errors")
          .scrollIntoView({block: "nearest", behavior: "smooth"});
        return (this.errors = ["Пароли не совпадают"]);
      }
      this.loading = true;
      this.$axios
        .post(`${this.$axios.defaults.baseURL}/api/register`, {
          phone: parseInt(this.form.phone.replace(/\D+/g, "")),
          password: this.form.password,
          password_confirmation: this.form.password_confirmation,
        })
        .then((response) => {
          this.$router.push('/confirmation');
          this.$store.commit("temporary/action", state => {
            state.confirmation_phone = response.data.user.phone;
          });
        })
        .catch(({response}) => {
          if (+response?.status === 422) {
            this.errors = Object.values(response.data.errors)
              .map(el => el.flat())
              .flat();
          }
        }).finally(() => this.loading = false);
    }
    ,
    sendCode() {
      console.log("Send code function");
    }
    ,
  },
  computed: {
    remember_phone() {
      return this.$store.state.temporary.registration_phone;
    },
  },
};
</script>
<style lang="scss" scoped>
.registration-page {
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

    &__confirmation {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      margin: 20px 0;
      cursor: pointer;

      &__checkbox {
        flex-shrink: 0;
        margin-right: 15px;
        width: 25px;
        height: 25px;
      }

      &__text {
        font-size: 16px;
        @media screen and (max-width: $tablet) {
          font-size: 15px;
        }
      }
    }

    &__button {
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
        margin-top: 0;
      }
    }

  }
}
</style>
