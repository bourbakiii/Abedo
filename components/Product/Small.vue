<template>
  <NuxtLink :to="`/product/${product.id}`" class="product product-small">
    <img
      v-if="product.image"
      :src="`${$axios.defaults.baseURL}${product.image.original}`"
      class="product-small__image"
    />
    <p class="product-small__name" :class="{'without-image':  !product.image}">
      {{ product.name }}
    </p>
    <div class="product-small__info">
      <p class="product-small__info__price">{{ product_price_with_discount }}₽</p>
      <p class="product-small__info__weight">/ {{ product.weight }}{{ product.weight_unit.short_name }}</p>
      <div v-if='discount_percent' class="product-small__info__full-price">{{ product.price }}₽</div>
    </div>
  </NuxtLink>
</template>
<script>
import productsMixin from '@/mixins/product.js'

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
}
</script>
<style lang="scss" scoped>
$product_inner_padding: 9px;
.product-small {
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid $dark_grey;
  width: 172px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  &__image {
    height: 119px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 12px;
  }

  &__name {
    padding: 0px $product_inner_padding;
    width: 100%;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 17px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: 9px;

    &.without-image {
      text-overflow: ellipsis;
      white-space: normal;
      margin: auto 0px;
      -moz-box-orient: vertical;
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
      line-clamp: 6;
    }
  }

  &__info {
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    padding: 0px $product_inner_padding;
    margin-bottom: 15px;
    flex-shrink: 0;

    &__price {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      line-height: 17px;

    }

    &__weight {
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 17px;
      display: flex;
      align-items: center;
      text-align: center;
      color: $darkblue;
    }

    &__full-price {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 16px;
      text-decoration-line: line-through;
      color: $extra_dark_grey;
      justify-content: flex-end;
      margin-left: 5px;
    }
  }
}
</style>
