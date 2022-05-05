<template>
  <NuxtLink :to="`/product/${product.id}`" class="product product-small">
    <img
    v-if="product.image"
      :src="`${$axios.defaults.baseURL}${product.image.original}`"
      class="product-small__image"
    />
    <p class="product-small__name" contenteditable="">
      {{product.name}}
    </p>
    <div class="product-small__info">
      <p class="product-small__info__price" contenteditable>350 ₽</p>
      <p class="product-small__info__weight" contenteditable>/ 150 г</p>
      <div class="product-small__info__full-price" contenteditable>450 ₽</div>
    </div>
  </NuxtLink>
</template>
<script>
import productsMixin from '@/mixins/product.js'
export default {
  mixins: [productsMixin],
}
</script>
<style lang="scss" scoped>
$product_inner_padding: 9px;
.product-small {
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid $dark_grey;
  width:172px;
  text-decoration: none;
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
  }
  &__info {
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    padding: 0px $product_inner_padding;
    margin-bottom: 15px;
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
      margin-left: auto;
    }
  }
}
</style>
