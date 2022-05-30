
<template>
<!-- <div class="slider_wrapper"> -->
  <swiper
    :auto-destroy="false"
    class="subsections slider"
    :options="swiperOption"
  >
    <swiper-slide v-for="section in sections" :key="section.id">
      <SectionItem class='slider-section-item' :id='`slider-section-item-${section.id}`' :section="section" />
    </swiper-slide>
  </swiper>
<!-- </div> -->
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  name:"swiper-example-carousel-mode",
  title: "Auto slides per view / Carousel mode",
  name: "slider",
  props:{
    sections:{
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
  // &__wrapper{
  //   background-color: red;
  // }
  width: 100%;

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