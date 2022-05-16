<template>
  <div class="page order-page wrapper">
    <div class="order-page__content content">
      <Breadcrumbs class="order-page__content__breadcrumbsad adaptive-non" />
      <PagesOrderInformation class="order-page__content__information" />
      <PagesOrderProducts class="order-page__content__products" />
      <div class="order-page__content__least">
        <p class="order-page__content__least__pre">Итого:</p>
        <p class="order-page__content__least__price" contenteditable>1 330 ₽</p>
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
async asyncData({ $axios, route, error }) {
    // let order = {},
    //   loading = true;
    // await $axios
    //   .$get(`${$axios.defaults.baseURL}/api/shop/${route.params.partner_id}`)
    //   .then(async ({ shop }) => {
    //     partner = shop;
    //     await $axios
    //       .$get(
    //         `${$axios.defaults.baseURL}/api/shares/shop/${route.params.partner_id}`
    //       )
    //       .then(({ shares: { data } }) => {
    //         stocks = data;
    //       });
    //   })
    //   .catch(() => {
    //     error({ statusCode: 404, message: "Ошибка при получении партнера" });
    //   })
    //   .finally(() => {
    //     loading = false;
    //   });
    // return { loading, partner, stocks };
  },
}
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
      }
    }
    &__back {
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
