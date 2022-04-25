
<template>
  <swiper
    :auto-destroy="false"
    class="subsections slider"
    :options="swiperOption"
  >
    <swiper-slide v-for="(stock, index) in 15" :key="index">
      <StockItem class='subsections__item' />
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name:"swiper-example-carousel-mode",
  title: "Auto slides per view / Carousel mode",
  name: "slider",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: "auto",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.slider {
  width: 100%;
  overflow: hidden !important;
  .swiper-slide {
    width: 400px;
    overflow: hidden !important;
    width: min-content;
    margin-right: 30px;
    &:last-of-type{
      margin-right:0px;
    }
  }
}
.subsections{
  &__item{
    width:400px;
  }
}
</style>