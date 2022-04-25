<template>
  <div class="swiper-wrapper">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="item in 12" :key="item"
        >Slide {{ item }}</swiper-slide
      >
    </swiper>
    <div class="swiper-pagination" slot="pagination"></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  name: "swiper-example-pagination",
  title: "Pagination",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  &-wrapper {
    width: 100%;
  }
  height: auto;
  min-height:100px;
  width:100%;
  &-slide {
    width: 100%;
    height: 100%;
    border: 1px solid black;
  }
  &-pagination {
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
