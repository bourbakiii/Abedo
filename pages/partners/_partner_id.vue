<template>
  <div class="page partner-page wrapper">
    <div class="partner-page__over">
      <Breadcrumbs class="partner-page__over__breadcrumbs adaptive-non" />
      <div class="partner-page__over__content content">
        <div class="partner-page__over__content__main">
          <PagesPartnerShopBlock
            class="partner-page__over__content__main__shop-block"
          />
          <!-- <PagesPartnerStocks class="partner-page__over__content__main__stocks" /> -->
          <PagesPartnerCatalog
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
import "swiper/css/swiper.css";
export default {
  name: "swiper-example-mousewheel-control",
  title: "Mousewheel control",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        slidesPerView: 3,
        spaceBetween: 8,
        mousewheel: true,
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.partner-page {
  display: flex;
  align-items: center;
  justify-content: center;
  &__over {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
        max-width:100%;
    &__breadcrumbs {
      margin-top: 20px;
      margin-bottom: 40px;
    }
    &__content {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-direction: row;
      &__main {
        padding-bottom: 100px;
        overflow: hidden;

        &__shop-block {
          margin-bottom: 70px;
        }
        &__stocks {
          margin-bottom: 60px;
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
