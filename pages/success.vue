<template>
  <div class="page success-page wrapper">
    <div class="success-page__content content">
      <h1 class="success-page__content__title title-normal">Заказ оформлен</h1>
      <div class="success-page__content__image">
          <img src="@/assets/images/galka.png" class="success-page__content__image__image" />
      </div>
      <h3 class="success-page__content__micro-title">
        Ваш заказ успешно оформлен.
      </h3>
      <p class="success-page__content__text">
        Информация по статусу заказа достпна в личном кабинете в разделе
        “История заказов”
      </p>
      <ButtonStandart
        @action="() => $router.push('/partners')"
        class="success-page__content__button"
        >История заказов</ButtonStandart
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
.success-page {
  height: 100%;
  width: 100%;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
