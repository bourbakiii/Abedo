<template>
  <div class="product-cart-adaptive product">
    <button @click="remove" class="product-cart-adaptive__close">


      <svg
        class="sidebar-cart__products__item__close__icon"
        width="15"
        height="15"
      >
        <use xlink:href="@/assets/sprites/sprites.svg#modal-close"></use>
      </svg>
    </button>
    <p class="product-cart-adaptive__name">
      {{ product.name }}
    </p>
    <div class="product-cart-adaptive__data">
      <NuxtLink
        v-if="product.image"
        :to="`/product/${product.id}`"
        class="product-cart-adaptive__data__image"
      >
        <img
          :src="`${$axios.defaults.baseURL}${product.image.cart_mini}`"
          class="product-cart-adaptive__data__image__image"
        />
      </NuxtLink>
      <div
        v-if="product.section.is_work_now"
        class="product-cart-adaptive__data__buttons"
      >
        <ButtonProduct
          icon="minus"
          size="30"
          class="product-cart-adaptive__data__buttons__button"
          @click="decrease"
        />
        <p class="product-cart-adaptive__data__buttons__count">
          {{ count }}
        </p>
        <ButtonProduct
          icon="plus"
          size="30"
          class="product-cart-adaptive__data__buttons__button"
          @click="crease"
        />
      </div>
      <div class="product-cart-adaptive__data__prices">
        <p class="product-cart-adaptive__data__prices__price"
           :class="{'product-cart-adaptive__data__prices__price_red': discount_percent}">
          {{ product_price_with_discount }}₽
        </p>
        <p
          v-if="discount_percent"
          class="product-cart-adaptive__data__prices__price_full"
        >
          {{ price }}₽
        </p>
      </div>
    </div>
    <div
      class="product-cart-adaptive__options"
      v-if="product.selected_options.length"
    >
      <div class="product-cart-adaptive__options__content">
        <div
          v-for="item in product.selected_options"
          :key="item.id"
          class="product-cart-adaptive__options__content__item"
        >
          <svg
            class="product-cart-adaptive__options__content__item__icon"
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
          <p class="product-cart-adaptive__options__content__item__name">
            {{ item.name }}
          </p>
          <div
            class="product-cart-adaptive__options__content__item__dots"
          ></div>
          <p class="product-cart-adaptive__options__content__item__price">
            1 x
            <span
              class="product-cart-adaptive__options__content__item__price__price"
            >
              {{ item.price }}₽</span
            >
          </p>
        </div>
      </div>

      <div class="product-cart-adaptive__options__total">
        ИТОГО:
        <span class="product-cart-adaptive__options__total__price">
          {{ product_total_price_with_discount_and_options }}₽</span
        >
        <p class="product-cart-adaptive__options__total__price_full">
          {{ product_total_price_with_options }}₽
        </p>
      </div>
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
    partner: {
      required: false,
    },
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
  position: relative;

  &__close {
    background-color: transparent;
    border: none;
    outline: none;
    margin-left: auto;
    position: absolute;
    top: 14px;
    right: 14px;
  }

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
      margin-right: 20px;
      overflow: hidden;
      position: relative;

      &__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__buttons {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 20px;

      &__count {
        width: 40px;
        max-width: 40px;
        margin: 0 5px;
        text-align: center;
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
      }
    }

    &__prices {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      flex-direction: column-reverse;
      justify-self: flex-end;
      margin-left: auto;

      &__price {
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 16px;

        &_red {
          color: $red;
        }

        &_full {
          font-size: 13px;
          line-height: 15px;
          color: $extra_dark_grey;
          text-decoration: line-through;
          margin-left: 10px;
          font-family: 'SF Pro Display';
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
        }
      }
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  &__options {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    margin-top: 15px;

    &__content {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      width: 100%;
      padding: 10px 0;
      border-top: 1px solid $dark_grey;
      border-bottom: 1px solid $dark_grey;
      margin-bottom: 14px;

      &__item {
        width: 100%;
        margin-bottom: 5px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;

        &:last-of-type {
          margin-bottom: 0;
        }

        &__icon {
          flex-shrink: 0;
        }

        &__name {
          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 17px;
          margin: 0 0 0 12px;
        }

        &__dots {
          flex-grow: 1;
          border-bottom: 1px dotted $dark_grey;
          margin: 0 6px;
        }

        &__price {
          flex-shrink: 0;
          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
          color: $extra_dark_grey;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex-direction: row;

          &__price {
            color: $black;
          }
        }
      }
    }

    &__total {
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-direction: row;

      &__price {
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 16px;
        margin-left: 10px;

        &_full {
          margin-left: 10px;
          color: $extra_dark_grey;
          text-decoration: line-through;
        }
      }
    }
  }
}
</style>
