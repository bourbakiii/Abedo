<template>
  <!-- <div class="slider_wrapper"> -->
  <swiper
    :auto-destroy="false"
    class="subsections slider"
    :options="swiperOption"
    ref="mySwiper"
  >
    <swiper-slide v-for="(section, index) in sections" :key="section.id">
      <SectionItem
        class="slider-section-item"
        :id="`slider-section-item-${section.id}`"
        :index="index"
        :section="section"
        :class='{"active":+index===0}'
      />
    </swiper-slide>
  </swiper>
  <!-- </div> -->
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  props: {
    sections: {
      required: true,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: 16,
      },
    };
  },
  methods: {
    slideTo(index) {
      this.$refs.mySwiper.$swiper.slideTo(index);
    },
  },
};
</script>

<style lang="scss" scoped>
.slider {
  width: 100%;
  .swiper-slide {
    overflow: hidden !important;
    width: min-content;
    &:last-of-type {
      margin-right: 0;
    }
  }
}
</style>
