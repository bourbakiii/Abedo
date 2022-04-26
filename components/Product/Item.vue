<template>
  <NuxtLink
  to='/product/1'
    class="product product-item product_in-cart"
  >
    <div class="product-item__discount">-10%</div>
    <img
     
      src="@/assets/images/product-item-placeholder.png"
      class="product-item__image"
    />
    <div class="product-item__info">
      <p class="product-item__info__name">
        Сырное ассорasdasd
      </p>
      <div  class="product-item__info__prices adaptive-non">
        <p class="product-item__info__prices__price">3 500 ₽</p>
        <p class="product-item__info__prices__weight">/ 150 г</p>
        <p class="product-item__info__prices__price_full">4000 ₽</p>
      </div>
      <div class="product-item__info__weight adaptive" contenteditable>450 г</div>
      <div
        
        class="product-item__info__prices__mobile adaptive"
      >
        <p class="product-item__info__prices__mobile__price" contenteditable>
          10 345 ₽
        </p>
        <p class="product-item__info__prices__mobile__price_full" contenteditable>
          10 345 ₽
        </p>
      </div>
    </div>
    <div class="product-item__buttons">
      <ButtonSmallCart class="product-item__buttons__button_add_small adaptive" />
      <ButtonStandart
        v-if="true"
        class="product-item__buttons__button_add adaptive-non"
      >
        В корзину
      </ButtonStandart>
      <div
       v-else
        class="product-item__buttons__button_creases adaptive-non"
      >
        <ButtonProduct size="40" icon="minus" />
        <p
         
          class="product-item__buttons__button_creases__count"
        >
          10
        </p>
        <ButtonProduct size="40" icon="plus" />
      </div>
    </div>
  </NuxtLink>
</template>
<script>
import productsMixin from "@/mixins/products-mixin.js";

export default {
  mixins: [productsMixin],
};
</script>
<style lang="scss" scoped>
.product-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 20px;
  background-color: $white;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  text-decoration: none;
  @media screen and (max-width: $tablet) {
    border-radius: 8px;
    height: 249px;
  }
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
    @media screen and (max-width: $tablet) {
      top: 14px;
      left: 14px;
      min-width: 36px;
      height: 36px;
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 10px;
    }
  }
  &__image {
    width: 100%;
    height: 190px;
    object-fit: cover;
    margin-bottom: 15px;
    @media screen and (max-width: $tablet) {
      margin-bottom: 7px;
      height: 111px;
    }
  }
  &__info {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 0px 20px;
    @media screen and (max-width: $tablet) {
      padding: 0px 14px;
    }
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
      @media screen and (max-width: $tablet) {
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 17px;
      }
    }
    &__weight {
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: $darkblue;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &__prices {
      flex-shrink: 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 14px;
      &__mobile {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 7px;
        max-width:100%;
        width:100%;
        &__price {
          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
          white-space: nowrap;
          &_full {
            font-family: "SF Pro Display";
            font-style: normal;
            font-weight: 500;
            font-size: 13px;
            line-height: 16px;
            text-decoration-line: line-through;
            margin-left: clamp(0px, 50%, 18px);
            white-space: nowrap;
            color: $extra_dark_grey;
          }
        }
      }
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
          margin-left: min(10px,100%);
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
    width: 100%;
    padding: 0px 20px;
    @media screen and (max-width: $tablet) {
      padding: 0px 14px;
      justify-content: flex-start;
      margin-top: 10px;
      margin-bottom: 17px;
    }
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
