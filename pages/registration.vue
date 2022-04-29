<template>
  <div class="page registration-page">
    <h1 class="registration-page__title title-normal">Регистрация</h1>
    <form @submit.prevent='registration' class="registration-page__content">
      <InputBlock
        @input="() => {}"
        pre="+7"
        mask="(###) ###-##-##"
        placeholder="000 000 000 00"
        class="registration-page__content__input-block registration-page__content__phone"
        name="phone"
        id="phone"
        type="text"
        text="Телефон"
        error="true"
      />
      <InputBlock
        @input="() => {}"
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
        @input="() => {}"
        placeholder="Введите пароль"
        class="registration-page__content__input-block registration-page__content__password_repeat"
        name="registration_password_repeat"
        id="registration_password_repeat"
        type="password"
        text="Повтор пароля"
        error="true"
      />
      <p class="registration-page__content__text">
        Сейчас мы вам позвоним. Пожалуйста, введите последние 4 цифры входящего
        номера.
      </p>
      <ButtonStandart  @click.prevent='registration' class="registration-page__content__button">Подтвердить телефон</ButtonStandart>
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
      confirmation: false,
    };
  },
  methods:{
    registration(){
      console.log("registration");
    }
  }
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
      @media screen and (max-width:$tablet){
        height: 40px;
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
        &__text{
          font-size: 16px;
      @media screen and (max-width: $tablet) {
        font-size: 15px;
      }
        }
      }
      &__button {
        width: 100%;
        max-width: 200px;
        @media screen and (max-width:$tablet){
          height: 40px;
        }
      }
    }
  }
}
</style>
