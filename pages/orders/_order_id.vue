<template>
  <div class="page order-page wrapper">
    <div class="order-page__content content">
      <Breadcrumbs class="order-page__content__breadcrumbsad adaptive-non" />
      <PagesOrderInformation :order='order' class="order-page__content__information" />
      <PagesOrderProducts :consist='order.consist' class="order-page__content__products" />
      <div class="order-page__content__least">
        <p class="order-page__content__least__pre">Итого:</p>
        <p class="order-page__content__least__price">{{order.price_with_discount}}₽</p>
        <p v-if='order.price_with_discount<order.price' class="order-page__content__least__price_full">{{order.price}}₽</p>
      </div>
      <button
        @click="$router.push('/orders')"
        class="order-page__content__back adaptive-non"
      >
        <svg
          class="order-page__content__back__icon"
          width="12"
          height="18"
          viewBox="0 0 12 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.3999 15.8775L4.72181 9L11.3999 2.12252L9.33898 -9.00857e-08L0.599901 9L9.33898 18L11.3999 15.8775Z"
            fill="#5C6784"
          />
        </svg>
        Вернуться к списку заказов
      </button>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios, route, error,store }) {
    let to_return_order = {},
      loading = true;
    await $axios
      .$get(`${$axios.defaults.baseURL}/api/order/${route.params.order_id}}`,{headers:{
        Authorization: `Bearer ${store.state.account.token}`
      }})
      .then(({order}) => {
        to_return_order = order;
      })
      .catch(() => {
        error({ statusCode: 404, message: "Ошибка при получении заказа" });
      })
      .finally(() => {
        loading = false;
      });
    return { loading, order: to_return_order };
  },
  mounted(){
    this.$store.commit("variables/action", (state) => {
      state.adaptive_navigation = {
        text: `Заказ №${this.order.id}`,
        slot: "label",
        info_click: null,
      };
    });
  },
  computed:{
    token(){
      return this.$store.state.account.token;
    }
  }
};
</script>

<style lang="scss" scoped>
.order-page {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  &__content {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    &__information {
      margin-bottom: 70px;
      @media screen and (max-width: $tablet) {
        margin-bottom: 30px;
      }
    }
    &__products {
      margin-bottom: 70px;
      @media screen and (max-width: $tablet) {
        margin-bottom: 30px;
      }
    }
    &__least {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      width: 100%;
      margin-bottom: 40px;
      @media screen and (max-width: $tablet) {
        margin-bottom: 0px;
      }
      &__pre {
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        margin-right: 15px;
        @media screen and (max-width: $tablet) {
          font-size: 20px;
          line-height: 23px;
        }
      }
      &__price {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        text-overflow: ellipsis;
        overflow: hidden;
        @media screen and (max-width: $tablet) {
          font-size: 20px;
          line-height: 23px;
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
    &__back {
      margin-top:50px !important;
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: $darkblue;
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      outline: none;
      text-decoration: underline;
      &__icon {
        margin-right: 10px;
      }
    }
  }
}
</style>
