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
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.89533 10.0005L0.229061 1.33421C-0.0760555 1.02909 -0.0760555 0.534404 0.229061 0.229326C0.534178 -0.0757519 1.02886 -0.075791 1.33394 0.229326L10.0003 8.89565L18.6665 0.229326C18.9716 -0.075791 19.4663 -0.075791 19.7714 0.229326C20.0765 0.534443 20.0765 1.02913 19.7714 1.33421L11.1051 10.0005L19.7714 18.6668C20.0765 18.9719 20.0765 19.4666 19.7714 19.7717C19.6189 19.9242 19.4189 20.0005 19.2189 20.0005C19.019 20.0005 18.8191 19.9242 18.6665 19.7717L10.0003 11.1054L1.33398 19.7717C1.18144 19.9242 0.981482 20.0005 0.781521 20.0005C0.58156 20.0005 0.381639 19.9242 0.229061 19.7717C-0.0760555 19.4666 -0.0760555 18.9719 0.229061 18.6668L8.89533 10.0005Z"
          fill="#A6A8A8"
        />
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
