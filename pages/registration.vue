<template>
  <div class="page registration-page">
    <h1 class="registration-page__title title-normal">Регистрация</h1>
    {{ form.phone }}
    {{ form.password }}
    {{ form.password_repeat }}
    <form @submit.prevent="registrate" class="registration-page__content">
      <InputBlock
        v-model="form.phone"
        pre="+7"
        mask="(###) ###-##-##"
        placeholder="000 000 000 00"
        class="registration-page__content__input-block registration-page__content__phone"
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
        class="registration-page__content__input-block registration-page__content__password"
        name="registration_password"
        id="registration_password"
        type="password"
        text="Пароль"
        error="true"
        :required="true"
      />
      <InputBlock
        v-model="form.password_repeat"
        placeholder="Введите пароль"
        class="registration-page__content__input-block registration-page__content__password_repeat"
        name="registration_password_repeat"
        id="registration_password_repeat"
        type="password"
        text="Повтор пароля"
        error="true"
        :required="true"
      />
      <p class="registration-page__content__text">
        Сейчас мы вам позвоним. Пожалуйста, введите последние 4 цифры входящего
        номера.
      </p>
      <ButtonStandart
        class="registration-page__content__button"
        >Подтвердить телефон</ButtonStandart
      >
      <div class="registration-page__content__errors">

<button @click.prevent='show_message=!show_message'>switch</button>
      <transition-group name='message' appear >
         <Message v-if='show_message' 
         class="registration-page__content__errors__item_error registration-page__content__errors__item"
    :key="1"
         >твою мать</Message>
      </transition-group>
      </div>
    </form>
    <div class="registration-page__content_code">
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
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        phone: "",
        password:"",
        password_repeat:""
      },
      show_message:false,
      errors:{

      },
      confirmation: false,
    };
  },
  methods: {
    registrate() {
      this.$axios.post(`${this.$axios.defaults.baseURL}/api/register`, this.form);
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
