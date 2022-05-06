<template>
  <div class="cart">
    <div class="cart__hood adaptive-non">
      <img src="@/assets/images/limonchello.png" class="cart__hood__image" />
      <p class="cart__hood__name">Кафе “Лимончелло”</p>
      <button @click='$store.commit("cart/clear")' class="cart__hood__button">Очистить</button>
    </div>
    <div class="cart__hood cart__hood__adaptive adaptive">
      <p class="cart__hood__adaptive__name">Корзина</p>
      <button @click='$store.commit("cart/clear")' class="cart__hood__adaptive__button">
        Очистить
      </button>
    </div>
    <transition-group tag='div' name='cart-product' appear class="cart__products adaptive-non">
      <ProductCart v-for="product in cart_products"
        :key="product.id"
        :product="product" />
    </transition-group>
     <div class="cart__products__adaptive adaptive">
      <div
        v-for="product in cart_products"
        :key="product.id"
        class="cart__products__adaptive__item"
      >
        <p class="cart__products__adaptive__item__name" contenteditable>
         {{product.name}}
        </p>
        <div class="cart__products__adaptive__item__data">
          <img
            src="@/assets/images/product-placeholder.png"
            class="cart__products__adaptive__item__data__image"
          />
          <div class="cart__products__adaptive__item__data__buttons">
            <ButtonProduct
              icon="minus"
              size="30"
              class="cart__products__adaptive__item__data__buttons__button"
            />
            <p
              class="cart__products__adaptive__item__data__buttons__count"
              contenteditable
            >
              100
            </p>
            <ButtonProduct
              icon="plus"
              size="30"
              class="cart__products__adaptive__item__data__buttons__button"
            />
          </div>
          <div class="cart__products__adaptive__item__data__prices">
            <p
              class="cart__products__adaptive__item__data__prices__price"
              contenteditable
            >
              10 345 ₽
            </p>
            <p
              class="cart__products__adaptive__item__data__prices__price_full"
              contenteditable
            >
              10 345 ₽
            </p>
          </div>

          <button class="cart__products__adaptive__item__data__close">
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
    </div>
    <div class="cart__promo">
      <p class="cart__promo__text">Введите промокод</p>
      <input type="text" name="promo" id="promo" class="cart__promo__input" />
    </div>
    <div class="cart__prices">
      <p class="cart__prices__pre">Итого:</p>
      <p class="cart__prices__price">500₽</p>
      <p class="cart__prices__price_full">500₽</p> 
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    cart_products(){
      return this.$store.state.cart.products;
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
    
    &__adaptive {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      width: 100%;
      &__item {
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
    }
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
