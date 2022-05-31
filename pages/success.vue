<template>
  <div class="page success-page wrapper">
    <div class="success-page__content content">
      <h1 class="success-page__content__title title-normal">Заказ оформлен</h1>
      <div class="success-page__content__image">
       <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90ZM68.8411 33.2009C70.6089 31.0795 70.3223 27.9267 68.2009 26.1589C66.0795 24.3911 62.9267 24.6777 61.1589 26.7991L39.664 52.5929L28.5355 41.4645C26.5829 39.5118 23.4171 39.5118 21.4645 41.4645C19.5118 43.4171 19.5118 46.5829 21.4645 48.5355L34.9159 61.9869L34.9881 62.0594C35.2681 62.3408 35.777 62.8522 36.3054 63.2517C36.9978 63.7753 38.3388 64.5971 40.2047 64.5124C42.0706 64.4278 43.3317 63.488 43.9739 62.9038C44.4639 62.4581 44.9244 61.9028 45.1778 61.5972L45.2432 61.5185L68.8411 33.2009Z" fill="#0EA976"/>
</svg>

      </div>
      <h3 class="success-page__content__micro-title">
        Ваш заказ успешно оформлен.
      </h3>
      <p class="success-page__content__text">
        Информация по статусу заказа доступна в личном кабинете в разделе
        “История заказов”
      </p>
      <ButtonStandart
        @click.native="() => $router.push('/orders')"
        class="success-page__content__button filled"
        >История заказов</ButtonStandart
      >
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store.commit("variables/action", (state) => {
      state.adaptive_navigation = {
        text: "Успех",
        slot: "label",
        info_click: null,
      };
    });
  },
};
</script>
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
      border-radius: 90px;
    }
    &__micro-title {
      margin-bottom: 15px;
    }
    &__text {
      font-family: "SF Pro Display";
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
