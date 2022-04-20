<template>
  <div class="page partner-page wrapper">
    <div class="partner-page__content content">
      <div class="partner-page__content__main">
        <Breadcrumbs class="partner-page__content__main__breadcrumbs adaptive-non" />
        <PagesPartnerShopBlock
          class="partner-page__content__main__shop-block"
        />
        <!-- <PagesPartnerStocks class="partner-page__content__main__stocks" /> -->
        <PagesPartnerCatalog class="partner-page__content__main__catalog" />
      </div>
        <SidebarCart
          class="partner-page__content__sidebar adaptive-non"
        />
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
  padding-bottom: 20px;
  &__content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
    &__main {
      padding-bottom: 100px;
      overflow: hidden;
      &__breadcrumbs {
        margin-top: 20px;
        margin-bottom: 40px;
      }
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
      top: 0px;
      top: 125px;
      margin-left: 30px;
    }
  }
}
</style>