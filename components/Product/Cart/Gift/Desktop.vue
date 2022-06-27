<template>
  <div class="product-cart product">
    <NuxtLink :to="`/product/${product.id}`" class="product-cart__image-block">
      <div class="product-cart__image-block__gift">
        <svg
          class="product-cart__image-block__gift__icon"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5059 3.98438H13.4791C13.7925 3.56787 13.9785 3.0504 13.9785 2.49023C13.9785 1.11712 12.8614 0 11.4883 0C10.6612 0 10.0513 0.296338 9.56884 0.932576C9.16526 1.46489 8.87015 2.20811 8.5 3.14716C8.12985 2.20807 7.83474 1.46489 7.43116 0.932576C6.94875 0.296338 6.33884 0 5.51172 0C4.1386 0 3.02148 1.11712 3.02148 2.49023C3.02148 3.0504 3.20752 3.56787 3.52089 3.98438H1.49414C0.670272 3.98438 0 4.65465 0 5.47852V6.47461C0 7.1239 0.4164 7.67749 0.996094 7.88309V15.5059C0.996094 16.3297 1.66637 17 2.49023 17H14.5098C15.3336 17 16.0039 16.3297 16.0039 15.5059V7.88309C16.5836 7.67749 17 7.1239 17 6.47461V5.47852C17 4.65465 16.3297 3.98438 15.5059 3.98438ZM9.41422 3.5441C10.1772 1.60843 10.4673 0.996094 11.4883 0.996094C12.3122 0.996094 12.9824 1.66637 12.9824 2.49023C12.9824 3.3141 12.3122 3.98438 11.4883 3.98438H9.24C9.30103 3.83114 9.35923 3.68362 9.41422 3.5441ZM5.51172 0.996094C6.53275 0.996094 6.82281 1.60843 7.58579 3.5441C7.64077 3.68362 7.69897 3.83114 7.76 3.98438H5.51172C4.68785 3.98438 4.01758 3.3141 4.01758 2.49023C4.01758 1.66637 4.68785 0.996094 5.51172 0.996094ZM6.50781 16.0039H2.49023C2.21561 16.0039 1.99219 15.7805 1.99219 15.5059V7.96875H6.50781V16.0039ZM6.50781 6.97266H1.49414C1.21952 6.97266 0.996094 6.74923 0.996094 6.47461V5.47852C0.996094 5.20389 1.21952 4.98047 1.49414 4.98047H6.50781V6.97266ZM9.49609 16.0039H7.50391V4.98047C7.60826 4.98047 8.92367 4.98047 9.49609 4.98047V16.0039ZM15.0078 15.5059C15.0078 15.7805 14.7844 16.0039 14.5098 16.0039H10.4922V7.96875H15.0078V15.5059ZM16.0039 6.47461C16.0039 6.74923 15.7805 6.97266 15.5059 6.97266H10.4922V4.98047H15.5059C15.7805 4.98047 16.0039 5.20389 16.0039 5.47852V6.47461Z"
            fill="#F95738"
          />
        </svg>
      </div>
      <img
        v-if="product.image"
        :src="`${$axios.defaults.baseURL}${product.image.original}`"
        class="product-cart__image-block__image"
      />
      <div class="product-cart__image-block__name-block">
        <p class="product-cart__image-block__name-block__text">
          {{ product.name }}
        </p>
      </div>
    </NuxtLink>
    Подарок
    <!-- <p class="product-cart__price">{{ product_price_with_discount }}₽</p>
    <div class="product-cart__buttons" v-if="product.is_active">
      <ButtonProduct
        class="product-cart__buttons__button"
        size="40"
        icon="minus"
        @click="decrease"
      />
      <p class="product-cart__buttons__count">{{ count }}</p>
      <ButtonProduct
        class="product-cart__buttons__button"
        size="40"
        icon="plus"
        @click="crease"
      />
    </div>
    <p class="product-cart__price product-cart__price_full">
      {{ product_total_price_with_discount }}₽
    </p> -->

    <button @click="remove" class="product-cart__close">
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
  props: {
    product: {
      required: true,
    },
    partner: {
      required: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.product-cart {
  width: 100%;
  min-height: 103px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  &:not(&:last-child) {
    border-bottom: 1px dashed $extra_dark_grey;
  }
  &__image-block {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    width: 40%;
    max-width: 40%;
    overflow: hidden;
    height: max-content;
    text-decoration: none;
    position: relative;
    &__gift{
        position: absolute;
        top:5px;left:5px;
        width: 40px;
        height: 40px;
        background-color: $green;
        z-index: 2;
        display: flex;align-items: center;justify-self: center;flex-direction: row;
        border-radius: 90px;
        svg{
            margin: 0 auto;
        }
        svg * {
            fill: $white;
        }
    }
    &__image {
      border-radius: 10px;
      width: 100px;
      height: auto;
      object-fit: contain;
      margin-right: 30px;
      @media screen and (max-width: $notebook) {
        margin-right: 10px;
      }
      flex-shrink: 0;
    }
    &__name-block {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      &__text {
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        justify-content: flex-start;
        align-items: flex-start;
      }
      &__options {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        width: 100%;
        margin-top: 14px;
        &__item {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: row;
          margin-bottom: 6px;
          &:last-of-type {
            margin-bottom: 0;
          }
          &__name {
            font-family: "SF Pro Display";
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 18px;
            margin: 0 6px 0 16px;
            color: $extra_dark_grey;
          }
          &__price {
            font-family: "SF Pro Display";
            font-style: normal;
            font-weight: 500;
            font-size: 15px;
            line-height: 16px;
            color: $extra_dark_grey;
            text-align: center;
          }
        }
      }
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
      margin: 0 10px;
      @media screen and (max-width: $notebook) {
        max-width: 40px;
        width: 50px;
        margin: 0 5px;
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
    text-align: center;
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
