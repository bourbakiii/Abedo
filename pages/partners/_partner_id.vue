<template>
  <div class="page partner-page wrapper">
    <div class="partner-page__over">
      <Breadcrumbs class="partner-page__over__breadcrumbs adaptive-non" />
      <div class="partner-page__over__content content">
        <div class="partner-page__over__content__main">
          <PagesPartnerShopBlock
            :partner="partner"
            class="partner-page__over__content__main__shop-block"
          />
          <PagesPartnerStocks
            :stocks="stocks"
            class="partner-page__over__content__main__stocks adaptive-non"
          />
          <PagesPartnerStocksSlider
            :stocks="stocks"
            class="partner-page__over__content__main__stocks_adaptive adaptive"
          />
          <PagesPartnerCatalog
            :partner="partner"
            class="partner-page__over__content__main__catalog"
          />
        </div>
        <SidebarCart
          class="partner-page__over__content__sidebar adaptive-non"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  name: "swiper-example-mousewheel-control",
  title: "Mousewheel control",
  components: {
    Swiper,
    SwiperSlide,
  },
  async asyncData({ $axios, route, error }) {
    let partner = {},
      loading = true,
      stocks = [];
    await $axios
      .$get(`${$axios.defaults.baseURL}/api/shop/${route.params.partner_id}`)
      .then(async ({ shop }) => {
        partner = shop;
        await $axios
          .$get(
            `${$axios.defaults.baseURL}/api/shares/shop/${route.params.partner_id}`
          )
          .then(({ shares: { data } }) => {
            stocks = data;
          });
      })
      .catch(() => {
        error({ statusCode: 404, message: "Ошибка при получении партнера" });
      })
      .finally(() => {
        loading = false;
      });
    return { loading, partner, stocks };
  },
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        slidesPerView: 3,
        spaceBetween: 8,
        mousewheel: true,
      },
      partner: {},
    };
  },
  created() {
    this.$store.commit("variables/action", (state) => {
      state.adaptive_navigation = {
        text: this.partner.name,
        slot: "label",
        info_click: ()=>
          this.$store.commit("modals/open", {
            modal_name: "partner",
            partner: this.partner
          }),
      };
    });
  },
  computed: {
    cart_products() {
      return this.$store.state.cart.products;
    },
    cart_partner() {
      return this.$store.state.cart.partner;
    },
  },
};
</script>
<style lang="scss" scoped>
.sidebar-cart {
  &-enter,
  &-leave-to {
    opacity: 0;
  }

  &-enter-active,
  &-leave-active {
    transition: $transition;
  }
}
.partner-page {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px !important;
  @media screen and (max-width: $tablet) {
    padding-top: 0px !important;
  }
  &__over {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    max-width: $maxwidth;
    width: 100%;
    &__content {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-direction: row;
      width: 100%;
      &__main {
        padding-bottom: 100px;
        width: 100%;
        @media screen and (max-width: $sidebar_dn) {
          width: 100%;
          padding-bottom: 0px;
        }
        overflow: hidden;
        &__shop-block {
          margin-bottom: 70px;
          @media screen and (max-width: $tablet) {
            margin-bottom: 30px;
          }
        }
        &__stocks {
          margin-bottom: 60px;
          &_adaptive {
            margin-bottom: 70px;
          }
        }
      }
      &__sidebar {
        width: 294px;
        flex-shrink: 0;
        position: sticky;
        top: 125px;
        margin-left: 30px;
        @media screen and (max-width: $notebook) {
          margin-left: 10px;
          width: 260px;
        }
        @media screen and (max-width: $sidebar_dn) {
          display: none !important;
        }
      }
    }
  }
}
</style>
