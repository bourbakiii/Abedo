<template>
  <div class="product product-small">
    <img
      src="@/assets/images/product-placeholder.png"
      class="product-small__image"
    />
    <p class="product-small__name">
      Сырное ассорти
    </p>
    <div class="product-small__info">
      <p class="product-small__info__price">350 ₽</p>
      <p class="product-small__info__weight">/ 150 г</p>
      <div class="product-small__info__full-price">450 ₽</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$product_inner_padding: 9px;
.product-small {
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid $gray_three;
  width:172px;
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
    font-size: 14px;
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
    margin-bottom: 14px;
    &__price {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
    
    }
    &__weight {
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
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
      color: $gray_four;
      justify-content: flex-end;
      margin-left: auto;
    }
  }
}
</style>
