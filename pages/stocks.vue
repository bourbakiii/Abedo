<template>
  <div class="page stocks-page wrapper">
    <div class="stocks-page__content content">
      <Breadcrumbs class="stocks-page__content__breadcrumbs adaptive-non" />
      <h1 class="stocks-page__content__title title-normal">Список партнеров</h1>
      <div class="stocks-page__content__content">
        <Stock
          class="stocks-page__content__content__item"
          v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
          :key="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StocksPage",
};
</script>
<style lang="scss" scoped>
.stocks-page {
  &__content {

    &__title {
      margin-bottom: 70px;
      align-self: flex-start;
      @media screen and (max-width: $tablet_middle) {
        margin-bottom: 40px;
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
      }
    }
    &__content {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 30px;
      @media screen and (max-width: $notebook) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
      }
      @media screen and (max-width: $tablet_middle) {
        grid-template-columns: repeat(1, 1fr);
      }
      &__item {
        width: 100%;
        overflow: hidden;
      }
    }
  }
}
</style>
