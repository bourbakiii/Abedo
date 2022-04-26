<template>
  <div class="error-layout layout">
    <h1 class="error-layout__title">Страница не найдена</h1>
    <p class="error-layout__text">Запрашиваемая страница не найдена</p>
    <ButtonStandart
      @action="() => $router.push('/')"
      class="error-layout__button filled"
      >На главную</ButtonStandart
    >
  </div>
</template>
<style lang="scss" scoped>
.error-layout {
  justify-content: center !important;
  &__title {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    @media screen and (max-width: $tablet) {
      font-size: 20px;
      line-height: 24px;
    }
  }
  &__text {
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    margin-top: 50px;
    margin-bottom: 58px;
    @media screen and (max-width: $tablet) {
      font-size: 16px;
      line-height: 19px;
    }
  }
  &__button {
    width: 218px;
    @media screen and (max-width: $tablet) {
      width: 200px;
      height: 40px !important;
    }
  }
}
</style>
