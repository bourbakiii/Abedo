<template>
  <div class="page registration-page">
    <h1 class="registration-page__title title-normal">Регистрация</h1>
    <form v-if='!remember_phone' @submit.prevent="registrate" class="registration-page__content">
      <InputBlock
        v-model="form.phone"
        pre="+7"
        mask="(###) ###-##-##"
        placeholder="000 000 000 00"
        class="
          registration-page__content__input-block
          registration-page__content__phone
        "
        name="phone"
        id="phone"
        type="text"
        text="Телефон"
        error="true"
        :required="true"
        :autocomplete="false"
      />
      <InputBlock
        v-model="form.password"
        placeholder="Введите пароль"
        class="
          registration-page__content__input-block
          registration-page__content__password
        "
        name="registration_password"
        id="registration_password"
        type="password"
        text="Пароль"
        error="true"
        minlength="8"
        :required="true"
      />
      <InputBlock
        v-model="form.password_confirmation"
        placeholder="Введите пароль"
        class="
          registration-page__content__input-block
          registration-page__content__password_confirmation
        "
        name="registration_password_confirmation"
        id="registration_password_confirmation"
        type="password"
        text="Повтор пароля"
        error="true"
        :required="true"
        minlength="8"
      />
      <p class="registration-page__content__text">
        Сейчас мы вам позвоним. Пожалуйста, введите последние 4 цифры входящего
        номера.
      </p>
      <ButtonStandart class="registration-page__content__button"
        >Подтвердить телефон</ButtonStandart
      >
      <!-- <client-only> -->
      <transition-group
        tag="div"
        class="registration-page__content__errors"
        name="message"
        appear
        mode="out-in"
        :class="{
          'registration-page__content__errors_margined': errors.length,
        }"
      >
        <Message
          v-for="error in errors"
          :key="error"
          class="
            registration-page__content__errors__item_error
            registration-page__content__errors__item
          "
          >{{ error }}</Message
        >
      </transition-group>
      <!-- </client-only> -->
    </form>
    <form v-else @submit.prevent="sendCode" class="registration-page__content_code">
      <h4 class="title title-extra-normal">Подтверждение</h4>
      <p class="registration-page__content_code__text">
        Пожалуйста, введите последние 4 цифры входящего номера.
      </p>
      <InputBlock
        @input="() => {}"
        placeholder="Введите код"
        class="
          registration-page__content_code__input-block
          registration-page__content_code__phone
        "
        name="сode"
        id="code"
        type="number"
        text="Код подтверждения"
        error="true"
      />
      <div class="registration-page__content_code__confirmation">
        <Checkbox
          id="code__confirmation"
          v-model="confirmation"
          class="registration-page__content_code__confirmation__checkbox"
        />
        <p class="registration-page__content_code__confirmation__text">
          Принимаю условия использования и политику конфиденциальности
        </p>
      </div>
      <ButtonStandart class="registration-page__content_code__button"
        >Отправить</ButtonStandart
      >
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        phone: "",
        password: "",
        password_confirmation: "",
      },
      show_message: false,
      errors: [],
      errorsTimer: null,
      confirmation: false,
    };
  },
  methods: {
    registrate() {
      if (this.form.password != this.form.password_confirmation) {
        document
          .querySelector(".registration-page__content__errors")
          .scrollIntoView({ block: "nearest", behavior: "smooth" });
        return (this.errors = ["Пароли не совпадают"]);
      }
      this.$axios
        .post(`${this.$axios.defaults.baseURL}/api/register`, this.form)
        .then((response) => {
          this.$store.commit("temporary/action", (state) => {
            state.registration_phone = response.data.user.phone;
          });
        })
        .catch(({ response }) => {
          if ((response.status = 422)) {
            console.log(response.data.errors);
            this.errors = Object.values(response.data.errors)
              .map((el) => el.flat())
              .flat();
          }
        });
    },
    sendCode() {
      console.log("Send code function");
    },
  },
  computed:{
    remember_phone(){
      return this.$store.state.temporary.registration_phone;
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
};
</script>
<style lang="scss" scoped>
.registration-page {
  padding: 100px 10px 0px;
  @media screen and (max-width: $notebook) {
    padding: 50px 10px 0px;
  }
  @media screen and (max-width: $tablet) {
    padding: 30px 10px 0px;
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
      margin: 20px 0px;
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
      transition: 0.3s;
      &_margined {
        margin-top: 15px;
      }
      transition: calc($transition * 2);
      .empty {
        margin-top: 0px;
      }
    }
    &_code {
      border-radius: 20px;
      background-color: $white;
      padding: 20px;
      width: 100%;
      max-width: 450px;
      &__text {
        margin: 20px 0px;
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
        margin: 20px 0px;
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
        @media screen and (max-width: $tablet) {
          height: 40px;
        }
      }
    }
  }
}
</style>
