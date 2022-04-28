<template>
  <div class="page favourites-page wrapper">
    <div class="favourites-page__content content">
      <Breadcrumbs class="favourites-page__content__breadcrumbs adaptive-non" />
      <h1 class="favourites-page__content__title title-normal adaptive-non">
        Избранные заведения
      </h1>
      <div class="favourites-page__content__inner">
        <div class="favourites-page__content__inner__content">
          <ShopItem
            v-for="(item, index) in 8"
            :key="index"
            class="favourites-page__content__inner__content__item adaptive-non"
          />
          <ShopAdaptive
            v-for="(item, index) in 8"
            :key="index"
            class="favourites-page__content__inner__content__item favourites-page__content__inner__content__item_adaptive adaptive"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.favourites-page {
  &__content {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    flex-grow: 1;
    &__title {
      margin-bottom: 70px;
      align-self: flex-start;
    }
    &__inner {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      width: 100%;
      max-width: 100%;

      &__content {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 30px;
        width: 100%;
        max-width: 100%;
        @media screen and (max-width: $notebook) {
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 15px;
        }
        @media screen and (max-width: $tablet) {
          grid-template-columns: repeat(1, 1fr);
        }
        &__item {
          width: 100%;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
