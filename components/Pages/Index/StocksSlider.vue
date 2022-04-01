
<template>
  <div class="slider stocks-slider stocks-slider-wrapper wrapper">
    <div class="stocks-slider-buttons">
      <div class="swiper-button-prev">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1836_1028)">
            <path
              d="M16 17.6416L8.5799 10L16 2.35836L13.7101 -1.00095e-07L4 10L13.7101 20L16 17.6416Z"
              fill="#5C6784"
            />
          </g>
          <defs>
            <clipPath id="clip0_1836_1028">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(20) rotate(90)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div class="swiper-button-next">
        <svg
          width="12"
          height="20"
          viewBox="0 0 12 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.10374e-07 2.35836L7.4201 10L2.81232e-08 17.6416L2.28991 20L12 10L2.28991 2.73069e-08L2.10374e-07 2.35836Z"
            fill="#5C6784"
          />
        </svg>
      </div>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide class="slide"><StockItem /></swiper-slide>
        <swiper-slide class="slide"><StockItem /></swiper-slide>
        <swiper-slide class="slide"><StockItem /></swiper-slide>
        <swiper-slide class="slide"><StockItem /></swiper-slide>
        <div class="stocks-slider-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.min.css";

export default {
  name: "stocks-swiper",
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
<style lang="scss" scoped>
.stocks-slider-wrapper {
  position: relative;
  padding: 0px 10px;
  .stocks-slider-buttons {
    position: relative;
  }
  .swiper-button-prev {
    width: 50px;
    height: 50px;
    border-radius: 90px;
    background-color: $gray_two;
    &::before,
    &::after {
      display: none;
    }
    transform: translateX(-50%);
    left: -40px;
  }
  .swiper-button-next {
    width: 50px;
    height: 50px;
    border-radius: 90px;
    background-color: $gray_two;
    &::before,
    &::after {
      display: none;
    }
    transform: translateX(50%);
    right: -40px;
  }
  .swiper {
    width: 100%;
    max-width: $maxwidth;
    .stocks-slider-pagination {
      margin-top: 20px;
      width: 100%;
      text-align: center;
      .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        background-color: $darkblue;
        opacity: 1;
        &-active {
          background-color: $orange;
        }
      }
    }
  }
}
</style>