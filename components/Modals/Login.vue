<template>
  <form @submit.prevent="login" class="login-modal modal">
    <button
      type='button'
      @click="$store.commit('modals/close')"
      class="login-modal__close"
    >

      <svg
        class="login-modal__close__icon"
        width="20"
        height="20"
      >
        <use xlink:href="@/assets/sprites/sprites.svg#modal-close"></use>
      </svg>
    </button>
    <h2 class="title-normal login-modal__title">Вход</h2>
    <InputBlock
      v-model="form.phone"
      pre="+7"
      mask="(###) ###-##-##"
      placeholder="(000) 000 000 00"
      class="login-modal__phone"
      name="phone"
      id="login_phone"
      type="text"
      text="Телефон"
      :required="true"
      :autocomplete="true"
    />
    <InputBlock
      v-model="form.password"
      placeholder="Введите пароль"
      class="login-modal__password"
      name="password"
      id="login_password"
      type="password"
      text="Пароль"
      minlength="8"
      :required="true"
    />
    <div class="login-modal__labels">
      <NuxtLink to="/remind" class="login-modal__labels__label login-modal__labels__forget"
      >Забыли пароль?
      </NuxtLink
      >
      <NuxtLink to="/registration" class="login-modal__labels__label login-modal__labels__registration"
      >Регистрация
      </NuxtLink
      >
    </div>
    <ButtonStandart :loader="loading" class="login-modal__button">Войти</ButtonStandart>


    <div :class="{
        'login-modal__errors_margined': errors.length,
      }" class="login-modal__errors">
      <transition name="message" appear>
        <Message
          v-for="error in errors"
          :key="error"
          class="login-modal__errors__item_error login-modal__errors__item"
        >{{ error }}
        </Message
        >
      </transition>
    </div>
    <transition name="opacity" mode="out-in" appear>
      <ButtonStandart v-if="last_loaded_phone" type="button" class="login-modal__button" @click="confirmClick">
        Подтвердить номер телефона
      </ButtonStandart>
    </transition>
  </form>
</template>
<script>
import errorsMessagesMixin from "@/mixins/errors-messages.js";

export default {
  mixins: [errorsMessagesMixin],
  data() {
    return {
      loading: false,
      form: {
        phone: "",
        password: "",
      },
      last_loaded_phone: null
    };
  },
  methods: {
    confirmClick() {
      this.$store.commit('temporary/action', state => {
        state.confirmation_phone = this.last_loaded_phone;
      })
      console.log(this.last_loaded_phone);
      console.log(this.$store.state.temporary.confirmation_phone);
      this.$router.push('/confirmation');
    },
    async login() {
      this.loading = true;
      let phone = parseInt(this.form.phone.replace(/\D+/g, ""));
      this.$axios
        .post(`${this.$axios.defaults.baseURL}/api/login`, {
          phone,
          password: this.form.password,
        })
        .then(async ({data: {token}}) => {
          this.$store.commit("account/action", (state) => {
            state.token = token;
            this.$cookies.set("token", token);
            localStorage.setItem("token", token);
          });
          await this.$store.dispatch("account/get").then(() => {
            this.$store.commit("modals/close");
          });
          this.last_loaded_phone = null;

        })
        .catch((error) => {
          this.last_loaded_phone = null;

          if (+error?.response?.status === 422) {
            this.errors = Object.values(error.response.data.errors)
              .map((el) => el.flat())
              .flat();
            if (Object.keys(error.response.data.errors).includes('confirmation')) this.last_loaded_phone = phone;
          }
        }).finally(() => {
        this.loading = false;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.login-modal {
  background-color: $white;
  padding: 35px 20px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  min-width: 320px;
  position: relative;
  @media screen and (max-width: $tablet) {
    max-width: 100%;
    height: 100%;
  }

  &__title {
    margin-bottom: 30px;
  }

  &__close {
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
    position: absolute;
    right: 30px;
    top: 30px;
    @media screen and (max-width: $tablet) {
      right: 24px;
      top: 24px;
    }
  }

  &__phone {
    margin-bottom: 20px;
  }

  &__labels {
    width: 100%;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    &__label {
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__button {
    width: 100%;
    margin-top: 20px;
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
</style>
