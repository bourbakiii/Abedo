<template>
  <div class="page registration-page wrapper">
    <div class="registration-page__over content">
      <h1 class="registration-page__title title-normal">Подтверждение</h1>
      <form
        @submit.prevent="sendCode"
        class="registration-page__content_code"
      >
        <h4 class="title title-extra-normal">Подтверждение</h4>
        <p class="registration-page__content_code__text">
          Пожалуйста, введите последние 4 цифры входящего номера.
        </p>
        <InputBlock
          @input="() => {}"
          placeholder="Введите код"
          class="registration-page__content_code__input-block registration-page__content_code__phone"
          name="сode"
          id="code"
          type="number"
          text="Код подтверждения"
        />
        <label for="code__confirmation" class="registration-page__content_code__confirmation">
          <Checkbox
            id="code__confirmation"
            :checked="confirmation"
            :value="!confirmation"
            @change="confirmation = !$event"
            class="registration-page__content_code__confirmation__checkbox"
          />
          <span class="registration-page__content_code__confirmation__text">
            Принимаю условия использования и политику конфиденциальности
          </span>
        </label>
        <ButtonStandart class="registration-page__content_code__button"
        >Отправить
        </ButtonStandart
        >
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
    registrate() {
      if (this.form.password != this.form.password_confirmation) {
        document
          .querySelector(".registration-page__content__errors")
          .scrollIntoView({block: "nearest", behavior: "smooth"});
        return (this.errors = ["Пароли не совпадают"]);
      }
      this.$axios
        .post(`${this.$axios.defaults.baseURL}/api/register`, {
          phone: parseInt(this.form.phone.replace(/\D+/g, "")),
          password: this.form.password,
          password_confirmation: this.form.password_confirmation,
        })
        .then((response) => {
          this.$store.commit("temporary/action", (state) => {
            state.registration_phone = response.data.user.phone;
          });
        })
        .catch(({response}) => {
          if (+response?.status === 422) {
            this.errors = Object.values(response.data.errors)
              .map(el => el.flat())
              .flat();
          }
        });
    },
    sendCode() {
      console.log("Send code function");
    },
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

    &_code {
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
        @media screen and (max-width: $tablet) {
          height: 40px;
        }
      }
    }
  }
}
</style>
