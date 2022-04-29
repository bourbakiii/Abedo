
<template>
  <swiper
    :auto-destroy="false"
    class="subsections slider"
    :options="swiperOption"
  >
    <swiper-slide v-for="chapter in chapters" :key="chapter.id">
      <ChapterItem :chapter="chapter" />
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  name:"swiper-example-carousel-mode",
  title: "Auto slides per view / Carousel mode",
  name: "slider",
  props:{
    chapters:{
      required:true,
    }
  },
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