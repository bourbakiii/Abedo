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
      <div @click="openProductModal" class="product__info__prices adaptive-non">
        <p class="product__info__prices__price">3 500 ₽</p>
        <p class="product__info__prices__weight">/ 150 г</p>
        <p class="product__info__prices__price_full">4000 ₽</p>
      </div>
      <div class="product__info__weight adaptive" contenteditable>450 г</div>
      <div
        @click="openProductModal"
        class="product__info__prices__mobile adaptive"
      >
        <p class="product__info__prices__mobile__price" contenteditable>
          10 345 ₽
        </p>
        <p class="product__info__prices__mobile__price_full" contenteditable>
          10 345 ₽
        </p>
      </div>
    </div>
    <div @click.self="openProductModal" class="product__buttons">
      <ButtonStandart
        v-if="false"
        class="product__buttons__button_add adaptive-non"
      >
        В корзину
      </ButtonStandart>
      <button v-if="true" class="product__buttons__button_add adaptive">
        <svg
          class="product__buttons__button_add__icon"
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.8489 14.8006C11.8783 14.8056 11.9075 14.808 11.9363 14.808C12.1894 14.808 12.4128 14.6231 12.4558 14.3622L12.9831 11.1624C13.031 10.8718 12.837 10.597 12.5497 10.5486C12.2624 10.5 11.9907 10.6964 11.9428 10.987L11.4155 14.1869C11.3676 14.4774 11.5616 14.7522 11.8489 14.8006Z"
            fill="white"
          />
          <path
            d="M5.57952 14.3622C5.62252 14.6231 5.8459 14.808 6.09906 14.808C6.12786 14.808 6.15704 14.8056 6.18639 14.8006C6.47369 14.7522 6.66775 14.4774 6.61987 14.1869L6.09252 10.987C6.04464 10.6964 5.77299 10.5002 5.48566 10.5486C5.19836 10.597 5.0043 10.8718 5.05218 11.1623L5.57952 14.3622Z"
            fill="white"
          />
          <path
            d="M17.4727 5.33333H15.6167L11.5563 0.200172C11.3744 -0.0297661 11.0426 -0.0671351 10.8151 0.116901C10.5877 0.300901 10.5508 0.63651 10.7328 0.866519L14.2661 5.33333H3.73391L7.26725 0.866519C7.44919 0.63651 7.41231 0.300865 7.18492 0.116901C6.95746 -0.0671351 6.62562 -0.0298017 6.44372 0.200172L2.38328 5.33333H0.527344C0.236109 5.33333 0 5.57212 0 5.86666V8C0 8.29454 0.236109 8.53333 0.527344 8.53333H1.18427L3.18438 15.6132C3.24904 15.8422 3.45596 16 3.69141 16H14.3086C14.544 16 14.751 15.8422 14.8157 15.6132L16.8157 8.53333H17.4727C17.7639 8.53333 18 8.29454 18 8V5.86666C18 5.57212 17.7639 5.33333 17.4727 5.33333ZM13.9108 14.9333H4.08916L2.28115 8.53333H15.7189L13.9108 14.9333ZM16.9453 7.46666C15.1388 7.46666 2.76609 7.46666 1.05469 7.46666V6.4H16.9453V7.46666Z"
            fill="white"
          />
          <path
            d="M9 14.8078C9.29123 14.8078 9.52734 14.569 9.52734 14.2744V11.0746C9.52734 10.78 9.29123 10.5412 9 10.5412C8.70876 10.5412 8.47266 10.78 8.47266 11.0746V14.2744C8.47266 14.569 8.70876 14.8078 9 14.8078Z"
            fill="white"
          />
        </svg>
      </button>
      <div
        v-else
        @click.self="openProductModal"
        class="product__buttons__button_creases"
      >
        <ButtonProduct size="40" icon="minus" />
        <p
          @click.self="openProductModal"
          class="product__buttons__button_creases__count"
        >
          10
        </p>
        <ButtonProduct size="40" icon="plus" />
      </div>
    </div>
  </div>
</template>
<script>
import productsMixin from "@/mixins/products-mixin.js";

export default {
  mixins: [productsMixin],
};
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
      margin-top: 14px;
      &__mobile {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        margin-top: 7px;
        &__price {
          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
          margin-right: 20px;
          &_full {
            font-family: "SF Pro Display";
            font-style: normal;
            font-weight: 500;
            font-size: 13px;
            line-height: 16px;
            text-decoration-line: line-through;

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
      &.adaptive {
        width: 34px;
        height: 30px;
        background-color: $darkblue;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        border: none;
        outline: none;
        border-radius: 7px;
      }
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
