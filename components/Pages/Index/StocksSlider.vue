<template>
  <div class="subsections__wrapper">
    <div class="subsections__content">
      <swiper
        :auto-destroy="false"
        class="subsections slider"
        :options="swiperOption"
      >
        <swiper-slide
          class="subsections__slide"
          v-for="(stock, index) in 7"
          :key="index"
        >
          <StockItem class="subsections__slide__item" />
        </swiper-slide>
      </swiper>
      <button
        class="subsections__button subsections__button_prev swiper-button swiper-button-prev"
      >
        <svg
          class="subsections__button__icon"
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
      </button>
      <button
        class="subsections__button subsections__button_next swiper-button swiper-button-next"
      >
        <svg
          class="subsections__button__icon"
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
      </button>
    </div>
    <div
      class="subsections__pagination swiper-pagination"
      slot="pagination"
    ></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  name: "swiper-example-carousel-mode",
  title: "Auto slides per view / Carousel mode",
  name: "slider",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
          550: {
            slidesPerView: "auto",
          spaceBetween: 0
          },
        },
        pagination: {
          el: ".swiper-pagination",
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
.subsections {
  width: 100%;
  height: max-content;
  &__wrapper {
    position: relative;
    max-width: 100%;
    width: 100%;
    @media screen and (max-width: calc($maxwidth + 60px)) {
      width: calc(100% - 60px);
      max-width: calc(100% - 60px);
    }
    @media screen and (max-width: $tablet) {
      width: 100%;
      max-width: 100%;
    }
  }
  &__slide {
    overflow: hidden !important;
    margin-right: 35px;
    width: 400px;
    height: auto;
    @media screen and (max-width: calc($maxwidth + 60px)) {
      margin-right: 17px;
      width: 350px;
    }
    @media screen and (max-width: $notebook) {
      margin-right: 17px;
      width: 370px;
    }
    @media screen and (max-width: $tablet) {
      margin-right: 30px;
      width: 335px;
    }
    @media screen and (max-width: $phone) {
      margin-right: 0px;
      width: 100%;
    }
    &:last-of-type {
      margin-right: 0px;
    }
    &__item {
      width: 100%;
      height: auto;
      max-width: 100%;
    }
  }
  &__pagination {
    position: absolute;
    top: calc(100% + 20px);
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
  }
  &__button {
    transform: translateY(-25%);
    width: 50px;
    height: 50px;
    border-radius: 90px;
    background-color: $blue_grey;
    outline: none;
    border: none;
    @media screen and (max-width: $tablet) {
      display: none;
    }
    &_prev {
      left: 0px;
      transform: translate(-90px, -50%);
      @media screen and (max-width: calc($maxwidth + 200px)) {
        transform: translate(-30px, -50%);
      }
    }
    &_next {
      right: 0px;
      transform: translate(90px, -50%);
      @media screen and (max-width: calc($maxwidth + 200px)) {
        transform: translate(30px, -50%);
      }
    }
    &::before,
    &::after {
      display: none;
    }
  }
}
</style>
<style lang="scss">
.swiper-pagination-bullet {
  background-color: $darkblue;
  opacity: 1;
  width: 10px;
  height: 10px;
  margin-right: 9px;
  @media screen and (max-width: $tablet) {
    width: 8px;
    height: 8px;
    border: 1px solid $black;
    background-color: transparent;
    margin-right: 10px;
  }
  &:last-of-type {
    margin-right: 0px;
  }
  &-active {
    background-color: $orange;
    @media screen and (max-width: $tablet) {
      background-color: $black;
    }
  }
}
</style>
