<template>
  <div class="cart">
    <div class="cart__hood adaptive-non">
      <NuxtLink class="cart__hood__image" :to="`/partners/${cart_partner.id}`">
        <img
          v-if="cart_partner.logo"
          :src="`${$axios.defaults.baseURL}${cart_partner.logo.original}`"
          class="cart__hood__image__image"
        />
      </NuxtLink>
      <p class="cart__hood__name">{{ cart_partner.name }}</p>
      <button @click="$store.commit('cart/clear')" class="cart__hood__button">
        Очистить
      </button>
    </div>
    <div class="cart__hood cart__hood__adaptive adaptive">
      <p class="cart__hood__adaptive__name">Корзина</p>
      <button
        @click="$store.commit('cart/clear')"
        class="cart__hood__adaptive__button"
      >
        Очистить
      </button>
    </div>
    <div class="cart__products">
      <client-only>
        <ProductCartItem
          v-for="product in cart_products"
          :key="product.id"
          :product="product"
        />
        <ProductCartGiftItem
          v-for="product in cart_gifts"
          :key="`product-${product.id}`"
          :product="product"
        />
      </client-only>
    </div>
    <form @submit.prevent="checkPromocode" v-if="token" class="cart__promo">
      <div class="cart__promo__content">
        <p class="cart__promo__content__text">Введите промокод</p>
        <input
          :value="promo.value"
          @input="
            $store.commit(
              'cart/action',
              (state) => (state.promo.value = $event.target.value)
            )
          "
          placeholder="Введите промокод"
          autocomplete="off"
          type="text"
          name="promo"
          id="promo"
          class="cart__promo__content__input"
          :class="`cart__promo__content__input_${
            promo.success ? 'decline' : 'accept'
          } ${promo.success == null ? '' : 'result_' + promo.success}`"
        />
        <ButtonStandart class="cart__promo__content__button"
          >Применить</ButtonStandart
        >
        <transition name='opacity'>
        <div
          v-if="promo.message"
          :class="`cart__promo__content__message__${
            promo.success ? 'success' : 'decline'
          }`"
          class="cart__promo__content__message"
        >
         <transition name='promo-galka'>
          <svg
            v-if="promo.success"
            class="cart__promo__content__message__icon"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 0C6.71562 0 0 6.71562 0 15C0 23.2844 6.71562 30 15 30C23.2844 30 30 23.2844 30 15C30 6.71562 23.2844 0 15 0ZM19.1419 14.3481L13.1794 20.3106L13.1763 20.3075L12.8444 20.6381L12.84 20.6344L12.8356 20.6381L12.0919 19.8956L12.0963 19.8906L7.24688 15.0413L8.61875 13.6694L12.8488 17.9006L17.7706 12.9781L17.765 12.9725L21.375 9.36188L22.7506 10.7381L19.1419 14.3481Z"
              fill="#0EA976"
            />
          </svg>
         </transition>
          <p
            :class="`cart__promo__content__message__text__${
              promo.success ? 'success' : 'decline'
            }`"
            class="cart__promo__content__message__text"
          >
            {{ promo.message }}
          </p>
        </div>
        </transition>
      </div>
    </form>
    <p v-else class="cart__promo cart__promo_empty">
      Для оформления заказа необходимо
      <span
        class="cart__promo_empty__button"
        @click="$store.commit('modals/open', { modal_name: 'login' })"
        >Войти в личный кабинет</span
      >
    </p>
    <div v-if="token" class="cart__prices">
      <p class="cart__prices__pre">Итого:</p>
      <p class="cart__prices__price">{{ total_price_with_discount }}₽</p>
      <p
        v-if="total_price_with_discount < total_price"
        class="cart__prices__price_full"
      >
        {{ total_price }}₽
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      promocode: null,
    };
  },
  methods: {
    checkPromocode() {
      this.$store.dispatch("cart/synchronization");
    },
  },
  computed: {
    cart_gifts() {
      return this.$store.state.cart.gifts;
    },
    cart_products() {
      return this.$store.state.cart.products;
    },
    cart_partner() {
      return this.$store.state.cart.partner;
    },
    total_price() {
      return this.$store.getters["cart/total_price"];
    },
    total_price_with_discount() {
      return this.$store.getters["cart/total_discount_price"];
    },
    token() {
      return this.$store.state.account.token;
    },
    promo() {
      return this.$store.state.cart.promo;
    },
  },
};
</script>
<style lang="scss" scoped>
.promo-galka{
  &-enter,
  &-leave-to {
    width:0px;
    margin: 0px !important;
    opacity:0;
  }

  &-enter-active,
  &-leave-active {
    transition: all $transition;
  }
}
.cart-product {
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
      padding: 5px;
      margin-right: 30px;
      flex-shrink: 0;
      @media screen and (max-width: $notebook) {
        width: 100px;
        height: 72px;
        margin-right: 10px;
      }
      &__image {
        width: 100%;
        object-fit: contain;
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
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    align-self: flex-start;
    @media screen and (max-width: $phone_normal) {
      width: 100%;
    }
    &__content {
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
      @media screen and (max-width: $phone_normal) {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        flex-direction: column;
        width: 100%;
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
          display: none;
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

        &::placeholder {
          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;
          opacity: 0;
          @media screen and (max-width: $tablet) {
            opacity: 1;
          }
        }
        @media screen and (max-width: $tablet) {
          width: 100%;
          max-width: 169px;
          height: 40px;
          border-color: $extra_dark_grey;
        }
        @media screen and (max-width: $phone_normal) {
          width: 100%;
          max-width: 100%;
          margin-bottom: 10px;
        }
        &.result_true {
          border-color: $green;
        }
        &.result_false {
          border-color: $red;
        }
      }
      &__button {
        margin-left: 30px;
        padding: 0px 20px;
        @media screen and (max-width: $tablet) {
          height: 40px;
          width: 121px;
          margin-left: 10px;
        }
        @media screen and (max-width: $phone_normal) {
          margin-left: 0px;
        }
      }
      &__message {
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        color: $red;
        background-color: $dark_grey;
        padding: 0px 30px;
        height: 50px;
        margin-left: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        border-radius: 20px;
        border-color: 1px solid $dark_grey;
        transition: $transition;
        &__success {
          border: 1px solid $green;
        }
        &__decline {
          border: 1px solid $red;
        }
        &__icon {
          margin-right: 15px;
        }
        &__text {
          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          &__success {
            color: $green;
          }
          &__decline {
            color: $red;
          }
        }
      }
    }
    &_empty {
      display: inline;

      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 20px;
      margin-top: 40px;
      @media screen and (max-width: $notebook) {
        font-size: 17px;
        line-height: 17px;
      }
      @media screen and (max-width: $tablet) {
        font-size: 16px;
        line-height: 16px;
      }
      &__button {
        white-space: nowrap;
        font-weight: 600;
        text-decoration: underline;
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
