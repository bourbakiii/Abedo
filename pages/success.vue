<template>
  <div class="page success-page wrapper">
    <div class="success-page__content content">
      <h1 class="success-page__content__title title-normal">Заказ оформлен</h1>
      <div class="success-page__content__image">
        <img
          src="@/assets/images/galka.png"
          class="success-page__content__image__image"
        />
      </div>
      <h3 class="success-page__content__micro-title">
        Ваш заказ успешно оформлен.
      </h3>
      <p class="success-page__content__text">
        Информация по статусу заказа доступна в личном кабинете в разделе
        “История заказов”
      </p>
      <ButtonStandart
        @click.native="() => $router.push('/partners')"
        class="success-page__content__button filled"
        >История заказов</ButtonStandart
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
.success-page {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &__content {
    &__image {
      margin: 55px 0px;
      width: 90px;
      height: 90px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      background-color: $green;
      border-radius: 90px;
    }
    &__micro-title {
      margin-bottom: 15px;
    }
    &__text{
      font-family: 'SF Pro Display';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 18px;

text-align: center;
@media screen and (max-width: $tablet + 20px) {
  max-width: 335px;
}
    }
    &__button {
      margin-top: 40px;
      width: 228px;
      @media screen and (max-width: $tablet) {
        height: 40px;
      }
    }
  }
}
</style>
