
<template>
  <swiper
    :auto-destroy="false"
    class="subsections slider"
    :options="swiperOption"
  >
    <swiper-slide v-for="(chapter, index) in 15" :key="index">
      <ChapterItem text="123" />
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

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
    width: 100%;
    overflow: hidden !important;
    width: min-content;
    margin-right: 16px;
    &:last-of-type{
      margin-right:0px;
    }
  }
}
</style>