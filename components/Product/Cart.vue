<template>
  <div class="product-cart product">
    <div class="product-cart__image-block">
      <img
        v-if="true"
        src="@/assets/images/product-placeholder.png"
        class="product-cart__image-block__image"
      />
      <p class="product-cart__image-block__text" contenteditable>
        Сырное ассорти
      </p>
    </div>

    <p class="product-cart__price" contenteditable>{{product.price}}₽</p>
    <p class="product-cart__price product-cart__price_full" contenteditable>
      {{product_total_price}}₽
    </p>
    <div class="product-cart__buttons">
      <ButtonProduct
        class="product-cart__buttons__button"
        size="40"
        icon="minus"
        @click="decrease"
      />
      <p class="product-cart__buttons__count" contenteditable>{{count}}</p>
      <ButtonProduct
        class="product-cart__buttons__button"
        size="40"
        icon="plus"
        @click="crease"
      />
    </div>
    <button @click='remove' class="product-cart__close">
      <svg
        class="product-cart__close__icon"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.89533 10.0005L0.229061 1.33421C-0.0760555 1.02909 -0.0760555 0.534404 0.229061 0.229326C0.534178 -0.0757519 1.02886 -0.075791 1.33394 0.229326L10.0003 8.89565L18.6665 0.229326C18.9716 -0.075791 19.4663 -0.075791 19.7714 0.229326C20.0765 0.534443 20.0765 1.02913 19.7714 1.33421L11.1051 10.0005L19.7714 18.6668C20.0765 18.9719 20.0765 19.4666 19.7714 19.7717C19.6189 19.9242 19.4189 20.0005 19.2189 20.0005C19.019 20.0005 18.8191 19.9242 18.6665 19.7717L10.0003 11.1054L1.33398 19.7717C1.18144 19.9242 0.981482 20.0005 0.781521 20.0005C0.58156 20.0005 0.381639 19.9242 0.229061 19.7717C-0.0760555 19.4666 -0.0760555 18.9719 0.229061 18.6668L8.89533 10.0005Z"
          fill="#A6A8A8"
        />
      </svg>
    </button>
  </div>
</template>
<script>
import productsMixin from "@/mixins/product.js";
export default {
  mixins: [productsMixin],
    props:{
        product:{
            required:true
        }
    }
}
</script>
<style lang="scss" scoped>
.product-cart {
      width: 100%;
      min-height: 103px;
      padding: 10px 0px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      border-bottom: 1px dashed $extra_dark_grey;
      @media screen and (max-width: $tablet) {
      }
      &__image-block {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        width: 40%;
        max-width: 40%;
        overflow: hidden;
        &__image {
          border-radius: 10px;
          width: 100px;
          height: auto;
          object-fit: contain;
          margin-right: 30px;
          @media screen and (max-width: $notebook) {
            margin-right: 10px;
          }
        }
        &__text {
          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          justify-content: flex-start;
          align-items: flex-start;
        }
      }
      &__buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        &__button {
          @media screen and (max-width: $notebook) {
            width: 35px !important;
            height: 35px !important;
          }
        }
        &__count {
          width: 60px;
          max-width: 60px;
          overflow: hidden;
          text-overflow: ellipsis;
          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          text-align: center;
          margin: 0px 10px;
          @media screen and (max-width: $notebook) {
            max-width: 40px;
            width: 50px;
            margin: 0px 5px;
          }
        }
      }
      &__price {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        width: 10%;
        @media screen and (max-width: $notebook) {
          font-size: 16px;
          line-height: 19px;
        }
      }
      &__close {
        background-color: transparent;
        border: none;
        outline: none;
        transition: $transition;
      }
    }
</style>