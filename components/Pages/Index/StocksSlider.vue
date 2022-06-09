<template>
  <div class="stocks__wrapper" v-if="stocks.length">
    <div class="stocks__title-block adaptive">
      <h2 class="stocks__title-block__title title title-small">Акции</h2>
      <NuxtLink to='/stocks' class="stocks__title-block__button">
        Все акции
        <svg
          class="stocks__title-block__button__icon"
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-3.8557e-07 1.17918L3.71005 5L-5.15436e-08 8.82082L1.14496 10L6 5L1.14496 -5.00476e-08L-3.8557e-07 1.17918Z"
            fill="#5C6784"
          />
        </svg>
      </NuxtLink>
    </div>
    <div class="stocks__content">
      <swiper
        :auto-destroy="false"
        class="stocks slider"
        :options="swiperOption"
      >
        <swiper-slide
          class="stocks__slide"
          v-for="stock in stocks"
          :key="stock.id"
        >
          <Stock :stock="stock" class="stocks__slide__item" />
        </swiper-slide>
      </swiper>
      <button
        class="stocks__button stocks__button_prev swiper-button swiper-button-prev"
      >
        <svg
          class="stocks__button__icon"
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
        class="stocks__button stocks__button_next swiper-button swiper-button-next"
      >
        <svg
          class="stocks__button__icon"
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
    <div class="stocks__pagination swiper-pagination" slot="pagination"></div>
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
  async fetch() {
    await this.$axios
      .$get(`${this.$axios.defaults.baseURL}/api/shares`)
      .then(({ shares: { data } }) => {
        this.stocks = data;
      });
  },
  data() {
    return {
      stocks: [],
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
          550: {
            slidesPerView: "auto",
            spaceBetween: 0,
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
.stocks {
  display: flex !important;
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

  &__title-block {
    margin-bottom: 20px;
    width:100%;
    display: flex;align-items: center;justify-content: space-between;flex-direction:row;
    &__button {
      text-decoration: none;
      &__icon {
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        margin-left: 7px;
      }
    }
  }
  &__slide {
    overflow: hidden !important;
    margin-right: 30px;
    width: 403px;
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
      @media screen and (max-width: $tablet) {
        max-width: 100%;
      }
    }
  }
  &__pagination {
    position: absolute;
    top: calc(100% + 20px);
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    z-index: 1;
  }
  &__button {
    transform: translateY(-25%);
    width: 50px;
    height: 50px;
    border-radius: 90px;
    background-color: $blue_grey;
    outline: none;
    border: none;
    z-index: 4;
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
.swiper-pagination {
  &-bullet {
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
}
</style>
