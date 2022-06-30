<template>
  <div class="page cart-page wrapper">
    <div class="cart-page__content-wrapper content">
      <Breadcrumbs class="cart-page__breadcrumbs adaptive-non" :way="[{name:'Корзина', link:`/cart`}]"/>
      <div class="cart-page__contents">
        <client-only>
          <div v-if="cart_products.length" class="cart-page__content">
            <h1
              class="cart-page__content_empty__title title-normal adaptive-non"
            >
              Оформления заказа
            </h1>
            <p v-if="cart_partner.is_work_now === 0" class="cart-page__content__closed">
              <span class="cart-page__content__closed__alert">Внимание!</span>
              Заведение уже закрыто, но вы можете оформить заказ и его обработают в рабочее время
            </p>
            <PagesCartContent class="cart-page__content__cart"/>
            <PagesCartOrder v-if="token" class="cart-page__content__order"/>
          </div>
          <div v-else class="cart-page__content_empty">
            <h1 class="cart-page__content_empty__title title-normal">
              Корзина
            </h1>
            <svg
              class="cart-page__content_empty__icon"
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M118.95 27.2751C118.059 26.1801 116.723 25.5444 115.312 25.5444H113.623L89.4491 1.37058C87.6183 -0.460116 84.6502 -0.460116 82.8198 1.37058L72.6575 11.5328L62.495 1.37058C60.6643 -0.460116 57.6962 -0.460116 55.8658 1.37058L31.6919 25.5444H30.4068L30.059 22.3494L30.0466 22.2468C28.3825 9.56268 17.4804 -0.00238273 4.68749 -0.00238273C2.09859 -0.00238273 0 2.09621 0 4.68511C0 7.27401 2.09859 9.3726 4.68749 9.3726C12.7748 9.3726 19.6694 15.4075 20.745 23.4182L26.3172 74.6103C21.4453 76.8221 18.0468 81.7296 18.0468 87.4193C18.0468 87.4589 18.0518 87.4971 18.0527 87.5365C18.0518 87.5759 18.0468 87.6141 18.0468 87.6537C18.0468 95.4077 24.3553 101.716 32.1093 101.716H34.0211C33.5439 103.115 33.2812 104.611 33.2812 106.169C33.2812 113.794 39.4846 119.997 47.1093 119.997C54.734 119.997 60.9374 113.794 60.9374 106.169C60.9374 104.611 60.6747 103.115 60.1975 101.716H80.4273C79.9501 103.115 79.6873 104.611 79.6873 106.169C79.6873 113.794 85.8908 119.997 93.5155 119.997C101.14 119.997 107.344 113.794 107.344 106.169C107.344 98.5444 101.14 92.3412 93.5155 92.3412H32.1093C29.5246 92.3412 27.4218 90.2384 27.4218 87.6537C27.4218 87.6141 27.4169 87.5759 27.416 87.5365C27.4169 87.4971 27.4218 87.4589 27.4218 87.4193C27.4218 84.8346 29.5246 82.7318 32.1093 82.7318H91.9524C100.273 82.7318 107.91 77.5836 111.407 69.6158C112.447 67.2453 111.369 64.4799 108.999 63.4395C106.628 62.3989 103.863 63.4773 102.822 65.8477C100.851 70.3393 96.4829 73.3568 91.9524 73.3568H35.6111L31.4273 34.9194H109.546L107.253 45.9156C106.724 48.4499 108.35 50.9328 110.884 51.4613C111.207 51.5288 111.529 51.561 111.846 51.561C114.019 51.561 115.969 50.041 116.43 47.8297L119.901 31.1891C120.189 29.8077 119.839 28.3701 118.95 27.2751ZM93.5155 101.716C95.971 101.716 97.9686 103.714 97.9686 106.169C97.9686 108.625 95.971 110.622 93.5155 110.622C91.0599 110.622 89.0623 108.625 89.0623 106.169C89.0623 103.714 91.0599 101.716 93.5155 101.716ZM47.1093 101.716C49.5648 101.716 51.5624 103.714 51.5624 106.169C51.5624 108.625 49.5648 110.622 47.1093 110.622C44.6537 110.622 42.6562 108.625 42.6562 106.169C42.6562 103.714 44.6537 101.716 47.1093 101.716ZM58.6459 25.5444H44.9502L59.1805 11.3142L66.0282 18.1621L58.6459 25.5444ZM71.9042 25.5444L86.1345 11.3142L100.365 25.5444H71.9042Z"
                fill="#5C6784"
              />
            </svg>
            <p class="cart-page__content_empty__text">
              Вы пока ничего не добавили в корзину
            </p>
            <ButtonStandart
              @click.native="() => $router.push('/partners')"
              class="cart-page__content_empty__button filled"
            >За покупками
            </ButtonStandart
            >
          </div>
        </client-only>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `Корзина - Abedo`,
    }
  },
  computed: {
    cart_partner() {
      return this.$store.state.cart.partner;
    },
    cart_products() {
      return this.$store.state.cart.products;
    },
    token() {
      return this.$store.state.account.token;
    },
  },
  beforeDestroy() {
    this.$store.commit("cart/clearPromo");
  },
  mounted() {
    this.$store.commit('variables/action', state => {
      state.adaptive_navigation = {
        text: "Корзина",
        slot: 'label',
        info_click: null
      }
    });
  },
  watch: {
    "$route.path": {
      handler() {
        this.$store.commit("cart/clearPromo");
      },
      deep: true,
    },
  }
};
</script>
<style lang="scss" scoped>
.cart-screens {
  &-enter,
  &-leave-to {
    opacity: 0;
  }

  &-enter-active,
  &-leave-active {
    transition: all $transition;
  }
}

.cart-page {
  align-items: center;
  justify-content: flex-start;

  &__contents {
    transition: 1s;
    width: 100%;
  }

  &__content {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    &-wrapper {
      position: relative;
      @media screen and (max-width: $tablet) {
        height: 100%;
        flex-grow: 1;
      }
    }

    &__title {
      margin-bottom: 70px;
    }

    &__closed {
      font-family: 'SF Pro Display';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 20px;
      margin-top: -30px;
      margin-bottom: 40px;
      @media screen and (max-width: $tablet) {
        font-size: 16px;
        line-height: 22px;
        margin-top: 0;
      }

      &__alert {
        color: $red;
      }
    }

    &__cart {
      margin-bottom: 70px;
      @media screen and (max-width: $tablet) {
        margin-bottom: 30px;
      }
    }

    /////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////
    &_empty {
      width: 100%;
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      &__title {
        margin-bottom: 68px;
        @media screen and (max-width: $tablet) {
          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 24px;
        }
      }

      &__icon {
        @media screen and (max-width: $tablet) {
          width: 120px;
          height: 120px;
          * {
            fill: $extra_dark_grey;
          }
        }
      }

      &__text {
        margin: 58px 0;
        @media screen and (max-width: $tablet) {
          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
        }
      }

      &__button {
        width: 219px;
        @media screen and (max-width: $tablet) {
          width: 228px;
          height: 40px !important;
        }
      }
    }
  }
}
</style>
