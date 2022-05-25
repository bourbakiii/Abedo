<template>
  <div @click.self="go_by_link" class="product product-item product_in-cart">
    <div
      @click="go_by_link"
      v-if="discount_percent"
      class="product-item__discount"
    >
      -{{ discount_percent }}%
    </div>
    <img
      @click="go_by_link"
      v-if="product.image.original"
      :src="`${$axios.defaults.baseURL}${product.image.original}`"
      class="product-item__image"
    />
    <div @click="go_by_link" class="product-item__info">
      <p class="product-item__info__name">{{ product.name }}</p>
      <div class="product-item__info__prices adaptive-non">
        <p class="product-item__info__prices__price">{{ product.price }}₽</p>
        <p class="product-item__info__prices__weight">
          / {{ product.weight }}{{ product.weight_unit.short_name }}
        </p>
        <p
          v-if="discount_percent"
          class="product-item__info__prices__price_full"
        >
          {{ product_price_with_discount }}₽
        </p>
      </div>
      <div class="product-item__info__weight adaptive">
        {{ product.weight }}г
      </div>
      <div class="product-item__info__prices__mobile adaptive">
        <p class="product-item__info__prices__mobile__price">
          {{ product.price }}₽
        </p>
        <p
          v-if="discount_percent"
          class="product-item__info__prices__mobile__price_full"

        >
          {{ product_price_with_discount }}₽
        </p>
      </div>
    </div>
    <div v-if='product.is_active' @click.self="go_by_link" class="product-item__buttons">
      <client-only>
        <div
          @click.self="go_by_link"
          v-if="!in_cart"
          class="product-item__buttons__add"
        >
          <ButtonSmallCart
            @click="add_to_cart(partner)"
            class="product-item__buttons__button_add_small adaptive"
          />

          <ButtonStandart
            @click="add_to_cart(partner)"
            class="product-item__buttons__button_add adaptive-non"
          >
            В корзину
          </ButtonStandart>
        </div>
        <div
          @click.self="go_by_link"
          v-else
          class="product-item__buttons__button_creases"
        >

          <ButtonProduct @click="decrease" size="40" icon="minus"/>
          <p
            @click.self="go_by_link"
            class="product-item__buttons__button_creases__count"
          >
            {{ count }}
          </p>
          <ButtonProduct @click="crease" size="40" icon="plus"/>
        </div>
      </client-only>
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
      required: false
    }
  },
  methods: {
    go_by_link() {
      this.$router.push(`/product/${this.product.id}`);
    },
  },
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
      top: 15px;
      left: 15px;
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
      padding: 0px 15px;
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
        -webkit-line-clamp: 2;
        line-clamp: 2;
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
      margin-top: 15px;

      &__mobile {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 7px;
        max-width: 100%;
        width: 100%;

        &__price {
          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 500;
          font-size: 15px;
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
          font-size: 15px;
          line-height: 17px;
          text-decoration-line: line-through;
          color: $extra_dark_grey;
          margin-left: min(10px, 100%);
        }
      }

      &__weight {
        margin-left: 5px;
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
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
      padding: 0px 15px;
      justify-content: flex-start;
      margin-top: 10px;
      margin-bottom: 17px;
    }

    &__add {
      width: 100%;
    }

    &__button_add {
      height: 40px;
      width: 100% !important;
      max-width: 228px !important;
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
        @media screen and (max-width: $tablet) {
          font-size: 16px;
          line-height: 19px;
          width: 34px;
          margin: 0px 4px;
        }
      }
    }
  }
}
</style>
