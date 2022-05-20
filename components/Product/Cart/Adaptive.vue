<template>
  <div class="product-cart-adaptive product">
    <p class="product-cart-adaptive__name" contenteditable>
      {{ product.name }}
    </p>
    <div class="product-cart-adaptive__data">
      <img
      v-if='product.image'
        :src="`${$axios.defaults.baseURL}${product.image.small}`"
        class="product-cart-adaptive__data__image"
      />
      <div v-if='product.is_active' class="product-cart-adaptive__data__buttons">
        <ButtonProduct
          icon="minus"
          size="30"
          class="product-cart-adaptive__data__buttons__button"
          @click="decrease"
        />
        <p class="product-cart-adaptive__data__buttons__count" contenteditable>
         {{count}}
        </p>
        <ButtonProduct
          icon="plus"
          size="30"
          class="product-cart-adaptive__data__buttons__button"
          @click="crease"
        />
      </div>
      <div class="product-cart-adaptive__data__prices">
        <p class="product-cart-adaptive__data__prices__price" contenteditable>
          {{price}}₽
        </p>
        <p
        v-if="discount_percent"
          class="product-cart-adaptive__data__prices__price_full"
          contenteditable
        >
          {{product_price_with_discount}}₽
        </p>
      </div>

      <button @click='remove' class="product-cart-adaptive__data__close">
        <svg
          class="sidebar-cart__products__item__close__icon"
          width="15"
          height="15"
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
        partner:{
            required: false
        }
    },
};
</script>
<style lang="scss" scoped>
.product-cart-adaptive {
        border-radius: 10px;
        background-color: $white;
        margin-bottom: 15px;
        padding: 15px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        width: 100%;
        &__name {
          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 17px;
          margin-bottom: 15px;
          text-align: left;
          width: 100%;
        }
        &__data {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: row;
          &__image {
            width: 30px;
            height: 30px;
            border-radius: 90px;
            object-fit: cover;
            margin-right: 20px;
          }
          &__buttons {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 20px;
            &__count {
              width: 40px;
              max-width: 40px;
              margin: 0px 5px;
              text-align: center;
              font-family: "SF Pro Display";
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 19px;
            }
            &__price {
              font-family: "SF Pro Display";
              font-style: normal;
              font-weight: 500;
              font-size: 15px;
              line-height: 16px;
            }
          }
          &__prices {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row;
            &__price {
              font-family: "SF Pro Display";
              font-style: normal;
              font-weight: 500;
              font-size: 15px;
              line-height: 16px;
              &_full {
                font-size: 13px;
                line-height: 15px;
                color: $extra_dark_grey;
                text-decoration: line-through;
                margin-left: 10px;
              }
            }
          }
          &__close {
            background-color: transparent;
            border: none;
            outline: none;
            margin-left: auto;
          }
        }
        &:last-of-type {
          margin-bottom: 0px;
        }
    }
</style>