<template>
  <div class="product-cart product">
    <NuxtLink :to='`/product/${product.id}`' class="product-cart__image-block">
      <img
        v-if="product.image"
        :src="`${$axios.defaults.baseURL}${product.image.original}`"
        class="product-cart__image-block__image"
      />
      <div class="product-cart__image-block__name-block">
        <p class="product-cart__image-block__name-block__text">
          {{ product.name }}
        </p>
        <div
          v-if="product.selected_options.length"
          class="product-cart__image-block__name-block__options"
        >
          <div
            v-for="item in product.selected_options"
            :key="item.id"
            class="product-cart__image-block__name-block__options__item"
          >
            <svg
              class="product-cart__image-block__name-block__options__item__icon"
              width="8"
              height="8"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 1L5 9"
                stroke="#878787"
                stroke-width="1.2"
                stroke-linecap="round"
              />
              <path
                d="M9 5L1 5"
                stroke="#878787"
                stroke-width="1.2"
                stroke-linecap="round"
              />
            </svg>

            <p
              class="product-cart__image-block__name-block__options__item__name"
            >
              {{ item.name }}
            </p>
            <p
              class="product-cart__image-block__name-block__options__item__price"
            >
              1x{{ item.price }}₽
            </p>
          </div>
        </div>
      </div>
    </NuxtLink>

    <p class="product-cart__price">{{ product_price_with_discount }}₽</p>
    <div class="product-cart__buttons" v-if="product.section.is_work_now">
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
    </p>

    <button @click="remove" class="product-cart__close">

      <svg
        class="product-cart__close__icon"
        width="20"
        height="20"
      >
        <use xlink:href="@/assets/sprites/sprites.svg#modal-close"></use>
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
    height:max-content;
    text-decoration: none;
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
        margin-top:14px;
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
