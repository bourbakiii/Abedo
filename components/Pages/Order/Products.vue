<template>
  <div class="products">
    <h2 class="products__title title-extra-normal">Заказанные позиции</h2>
    <div class="products__content">
      <div
        v-for="(item, index) in 3"
        :key="index"
        class="products__content__item"
      >
        <img
          src="@/assets/images/product-placeholder.png"
          class="products__content__item__image"
        />
        <p class="products__content__item__name" contenteditable>
          Сырное ассорти
        </p>
        <p class="products__content__item__count" contenteditable>10</p>
        <p class="products__content__item__price" contenteditable>350 ₽</p>
        <p
          class="
            products__content__item__price products__content__item__price__all
          "
          contenteditable
        >
          3500 ₽
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.products {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  &__title {
    margin-bottom: 40px;
  }
  &__content {
    width: 100%;
    background-color: $white;
    border: 1px solid $blue_grey;
    border-radius: 20px;
    padding: 0px 30px;
    &__item {
      padding: 0px 10px;
      min-height: 116px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      border-bottom: 1px dashed $extra_dark_grey;
      &__image {
        object-fit: contain;
        border-radius: 10px;
        width: 100px;
        margin-right: 30px;
      }
      &__name {
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        width: 351px;
        flex-shrink: 0;
        margin-right: 30px;
      }
      &__count {
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        width: 100%;
        text-align: left;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      &__price {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        flex-grow: 1;
        text-align: center;
        width: 100%;
        margin: 0px 30px;
        text-overflow: ellipsis;
        overflow: hidden;
        &__all {
          text-align: right;
          margin: 0px;
        }
      }
    }
  }
}
</style>