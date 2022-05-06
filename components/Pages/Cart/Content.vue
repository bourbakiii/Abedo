<template>
  <div class="cart">
    <div class="cart__hood adaptive-non">
      <img v-if='cart_partner.logo' :src="`${$axios.defaults.baseURL}${cart_partner.logo.original}`" class="cart__hood__image" />
      <p class="cart__hood__name">{{cart_partner.name}}</p>
      <button @click='$store.commit("cart/clear")' class="cart__hood__button">Очистить</button>
    </div>
    <div class="cart__hood cart__hood__adaptive adaptive">
      <p class="cart__hood__adaptive__name">Корзина</p>
      <button @click='$store.commit("cart/clear")' class="cart__hood__adaptive__button">
        Очистить
      </button>
    </div>
    <div class="cart__products">
      <ProductCartItem  v-for="product in cart_products" :key="product.id" :product="product"/>
    </div>
    <div class="cart__promo">
      <p class="cart__promo__text">Введите промокод</p>
      <input type="text" name="promo" id="promo" class="cart__promo__input" />
    </div>
    <div class="cart__prices">
      <p class="cart__prices__pre">Итого:</p>
      <p class="cart__prices__price">{{total_price}}₽</p>
      <p class="cart__prices__price_full">500₽</p> 
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    cart_products(){
      return this.$store.state.cart.products;
    },
    cart_partner(){
      return this.$store.state.cart.partner;
    },
    total_price(){
      return this.$store.getters['cart/total_price'];
    }
  }
}
</script>
<style lang="scss" scoped>
.cart-product{
  
  &-enter,
  &-leave-to {
    height: 0px !important;
    opacity: 0 !important;
    overflow: hidden !important;
    padding: 0px !important;
    min-height: 0px !important;
  }

  &-enter-active,
  &-leave-active {
    transition: all $transition;
  }
}
.cart {
  padding: 30px;
  border-radius: 20px;
  background-color: $white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  @media screen and (max-width: $tablet) {
    background-color: transparent;
    border-radius: 0px;
    padding: 0px;
  }
  &__hood {
    padding-bottom: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid $extra_dark_grey;
    border: none;
    &__adaptive {
      height: max-content;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      padding-bottom: 0px;
      margin-bottom: 30px;
      &__name {
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 900;
        font-size: 20px;
        line-height: 24px;
      }
      &__button {
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 17px;
        color: $red;
        background-color: transparent;
        outline: none;
        border: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    &__image {
      width: 106px;
      height: 77px;
      border: 1px solid $blue_grey;
      object-fit: contain;
      padding: 5px;
      margin-right: 30px;
      flex-shrink: 0;
      @media screen and (max-width: $notebook) {
        width: 100px;
        height: 72px;
        margin-right: 10px;
      }
    }
    &__name {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 20px;
      flex-grow: 1;
      margin-right: 30px;
      @media screen and (max-width: $notebook) {
        margin-right: 10px;
        font-size: 20px;
        line-height: 20px;
      }
    }
    &__button {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: $red;
      background-color: transparent;
      outline: none;
      border: none;
      @media screen and (max-width: $notebook) {
        font-size: 15px;
        line-height: 18px;
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
  &__products {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    
   
  }
  &__promo {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 40px;
    width: 100%;
    align-self: flex-start;
    @media screen and (max-width: $tablet) {
      padding: 30px 0px;
      border-top: 1px solid $dark_grey;
      border-bottom: 1px solid $dark_grey;
      width: 100%;
      max-width: 336px;
      justify-content: space-between;
      margin-top: 0px;
    }
    &__text {
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      margin-right: 40px;
      flex-shrink: 0;

      @media screen and (max-width: $tablet) {
        margin-right: 0px;
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
      }
    }
    &__input {
      border: 1px solid $extra_dark_grey;
      border-radius: 50px;
      text-align: center;
      padding: 0px 10px;
      outline: none;
      max-width: 180px;
      height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      @media screen and (max-width: $tablet) {
        width: 100%;
        max-width: 161px;
        height: 40px;
      }
    }
  }
  &__prices {
    margin-top: 40px;
    align-self: flex-start;
    width: max-content;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    @media screen and (max-width: $tablet) {
      margin-top: 30px;
    }
    &__pre {
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      text-transform: capitalize;
      @media screen and (max-width: $tablet) {
        font-size: 20px;
        line-height: 24px;
      }
    }
    &__price {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      margin-left: 15px;
      @media screen and (max-width: $tablet) {
        font-size: 20px;
        line-height: 24px;
        margin-left: 10px;
      }
      &_full {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        text-decoration-line: line-through;
        margin-left: 15px;
        @media screen and (max-width: $tablet) {
          margin-left: 20px;
          font-size: 16px;
          line-height: 20px;
        }
      }
    }
  }
}
</style>
