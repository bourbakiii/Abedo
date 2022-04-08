<template>
  <div
    @click.self="openProductModal"
    class="product product-item product_in-cart"
  >
    <div @click.self="openProductModal" class="product__discount">-10%</div>
    <img
      @click.self="openProductModal"
      src="@/assets/images/product-item-placeholder.png"
      class="product__image"
    />
    <div @click.self="openProductModal" class="product__info">
      <p @click.self="openProductModal" class="product__info__name">
        Сырное ассорasdasd
      </p>
      <div @click="openProductModal" class="product__info__prices">
        <p class="product__info__prices__price">3 500 ₽</p>
        <p class="product__info__prices__weight">/ 150 г</p>
        <p class="product__info__prices__price_full">4000 ₽</p>
      </div>
    </div>
    <div @click.self="openProductModal" class="product__buttons">
      <ButtonStandart
        v-if="false"
        class="product__buttons__button_add"
      >
        В корзину

      </ButtonStandart>
      <div @click.self="openProductModal" class="product__buttons__button_creases">
        <ButtonProduct size="40" icon="minus" />
        <p @click.self="openProductModal" class="product__buttons__button_creases__count">10</p>
        <ButtonProduct size="40" icon="plus" />
      </div>
    </div>
  </div>
</template>
<script>
  import productsMixin from '@/mixins/products-mixin.js'

export default {
  mixins: [productsMixin]
}
</script>
<style lang="scss" scoped>
.product {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 20px;
  background-color: $white;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  &_in-cart {
    border: 2px solid $orange;
  }
  &__discount {
    position: absolute;
    top: 20px;
    left: 20px;
    min-width: 45px;
    padding: 0px 5px;
    height: 45px;
    border-radius: 90px;
    background-color: $red;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: $white;
  }
  &__image {
    width: 100%;
    height: 190px;
    object-fit: contain;
    margin-bottom: 15px;
    border-radius: 20px 20px 0px 0px;
  }
  &__info {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 0px 20px;
    width: 100%;
    flex-grow: 1;
    &__name {
      width: 100%;
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -moz-box;
      -moz-box-orient: vertical;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      line-clamp: 3;
      box-orient: vertical;
    }
    &__prices {
      flex-shrink: 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      margin-top: 14px;
      &__price {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        &_full {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;
          text-decoration-line: line-through;
          color: $extra_dark_grey;
          margin-left: 20px;
        }
      }
      &__weight {
        margin-left: 5px;
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: $darkblue;
      }
    }
  }
  &__buttons {
    margin-top: 25px;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 0px 20px;
    &__button_add {
      height: 40px;
      width: 228px;
    }
    &__button_creases {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      &__count {
        width: 60px;
        max-width: 50%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        text-align: center;
        margin: 0px 10px;
      }
    }
  }
}
</style>
