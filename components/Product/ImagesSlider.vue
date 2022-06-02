<template>
  <div class="swiper-wrapper">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="item,index in images" :key="index"
        >
        <img :src="`${$axios.defaults.baseURL}${item.original}`" alt="">
        </swiper-slide
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
  props:{
    images:{
      required: true,
      default: []
    }
  },
  data() {
    return {
      swiperOption: {
        autoHeight: true,
        slidesPerView: 'auto',
        spaceBetween:30,
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
    max-width:100%;
  }
  height: auto;
  min-height:100px;
  width:100%;
  &-slide {
    display: flex;align-items: center;justify-content: center;flex-direction: row;
  }
  &-pagination {
    width:100%;
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
