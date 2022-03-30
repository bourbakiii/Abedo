
<template>
  <div class="slider stocks-slider wrapper">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide class="slide"><StockItem/></swiper-slide>
      <div class="stocks-slider-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.min.css";

export default {
  name: "swiper-example-loop-group",
  title: "Loop mode with multiple slides per group",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        pagination: {
          el: ".stocks-slider-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
};
</script>
<style lang="scss">
.wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .swiper {
    width: 100%;
    max-width: $maxwidth;
    .stocks-slider-pagination {
      width: 100%;
      text-align: center;
      .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        background-color: $darkblue;
        opacity:1;
        &-active {
          background-color: $orange;
        }
      }
    }
  }
}
</style>