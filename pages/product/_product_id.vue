<template>
  <div class="page product-page wrapper">
    <div class="product-page__content content">
      <div class="product-page__content__main">
        <Breadcrumbs class="product-page__content__main__breadcrumbs" />
        <h1
          class="product-page__content__main__name title-extra-normal"
          contenteditable
        >
          Сырное ассорaСырное ассорaСырное ассорaСырное ассорaСырное
          ассорaСырное ассорaСырное ассорa
        </h1>
        <div class="product-page__content__main__images">
          <div class="product-page__content__main__images__slider">
            <swiper
              class="product-page__content__main__images__slider__swiper"
              :options="swiperOption"
            >
              <swiper-slide>Slide 1</swiper-slide>
              <swiper-slide>Slide 2</swiper-slide>
              <swiper-slide>Slide 3</swiper-slide>
              <swiper-slide>Slide 4</swiper-slide>
              <swiper-slide>Slide 5</swiper-slide>
              <swiper-slide>Slide 6</swiper-slide>
              <swiper-slide>Slide 7</swiper-slide>
              <swiper-slide>Slide 8</swiper-slide>
              <swiper-slide>Slide 9</swiper-slide>
              <swiper-slide>Slide 10</swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
          <div class="product-page__content__main__images__image"></div>
        </div>
        <div class="product-page__content__main__additional">
          <div class="product-page__content__main__additional__description">
            <p
              class="product-page__content__main__additional__description__pre"
            >
              Описание:
            </p>
            <p
              class="product-page__content__main__additional__description__text"
              contenteditable
            >
              Моцарелла, рикотта или фета (свежие); шаурс, нешатель (мягкие);
              эдам, гауда (полумягкие); маасдам, эмменталь (твердые); пармезан,
              грюйер (твердые, пикантные); пекорино, шеврет (козий, овечий
              сыры); рокфор, горгонзола или дор блю (с голубой плесенью).
            </p>
          </div>
          <div class="product-page__content__main__additional__information">
            <div
              class="
                product-page__content__main__additional__information__prices
              "
            >
              <p
                class="
                  product-page__content__main__additional__information__prices__price
                "
                contenteditable
              >
                3 500 ₽
              </p>
              <p
                class="
                  product-page__content__main__additional__information__prices__weight
                "
                contenteditable
              >
                / 150 г
              </p>
              <p
                class="
                  product-page__content__main__additional__information__prices__price_full
                "
                contenteditable
              >
                450 ₽
              </p>
            </div>
            <div
              class="
                product-page__content__main__additional__information__options
              "
            >
              <p
                class="
                  product-page__content__main__additional__information__options__pre
                "
              >
                Дополнительные опции
              </p>
              <div
                class="
                  product-page__content__main__additional__information__options__content
                "
              >
                <div
                  class="
                    product-page__content__main__additional__information__options__content__item
                  "
                >
                  <p
                    class="
                      product-page__content__main__additional__information__options__content__item__name
                    "
                    contenteditable
                  >
                    Моцарелла классического итальянского производства
                  </p>
                  <span
                    class="
                      product-page__content__main__additional__information__options__content__item__checkbox
                    "
                  ></span>
                  <p
                    class="
                      product-page__content__main__additional__information__options__content__item__price
                    "
                  >
                    3 000 ₽
                  </p>
                </div>
              </div>
            </div>
            <ButtonStandart
              class="
                product-page__content__main__additional__information__button
              "
            >
              <svg
                class="
                  product-page__content__main__additional__information__button__icon
                "
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8687 3.40944C14.7574 3.27257 14.5904 3.19312 14.414 3.19312H14.2029L11.1811 0.171384C10.9523 -0.0574535 10.5813 -0.0574535 10.3525 0.171384L9.08219 1.44166L7.81188 0.171384C7.58304 -0.0574535 7.21203 -0.0574535 6.98322 0.171384L3.96149 3.19312H3.80085L3.75738 2.79374L3.75582 2.78091C3.54782 1.1954 2.18504 -0.000236813 0.585936 -0.000236813C0.262324 -0.000236813 0 0.262087 0 0.5857C0 0.909312 0.262324 1.17164 0.585936 1.17164C1.59685 1.17164 2.45868 1.926 2.59312 2.92734L3.28965 9.32635C2.68066 9.60282 2.25586 10.2163 2.25586 10.9275C2.25586 10.9324 2.25647 10.9372 2.25659 10.9421C2.25647 10.947 2.25586 10.9518 2.25586 10.9568C2.25586 11.926 3.04441 12.7146 4.01366 12.7146H4.25264C4.19299 12.8894 4.16015 13.0765 4.16015 13.2712C4.16015 14.2243 4.93558 14.9997 5.88866 14.9997C6.84174 14.9997 7.61717 14.2243 7.61717 13.2712C7.61717 13.0765 7.58433 12.8894 7.52468 12.7146H10.0534C9.99376 12.8894 9.96092 13.0765 9.96092 13.2712C9.96092 14.2243 10.7363 14.9997 11.6894 14.9997C12.6425 14.9997 13.4179 14.2243 13.4179 13.2712C13.4179 12.3181 12.6425 11.5427 11.6894 11.5427H4.01366C3.69058 11.5427 3.42773 11.2799 3.42773 10.9568C3.42773 10.9518 3.42711 10.947 3.427 10.9421C3.42711 10.9372 3.42773 10.9324 3.42773 10.9275C3.42773 10.6044 3.69058 10.3415 4.01366 10.3415H11.4941C12.5342 10.3415 13.4887 9.69801 13.9259 8.70203C14.0559 8.40572 13.9211 8.06005 13.6248 7.93C13.3286 7.79992 12.9829 7.93472 12.8528 8.23103C12.6064 8.79247 12.0604 9.16967 11.4941 9.16967H4.45139L3.92841 4.36499H13.6933L13.4066 5.73951C13.3405 6.05629 13.5438 6.36666 13.8606 6.43273C13.9009 6.44117 13.9412 6.44518 13.9808 6.44518C14.2524 6.44518 14.4961 6.25519 14.5538 5.97878L14.9877 3.8987C15.0236 3.72603 14.9799 3.54632 14.8687 3.40944ZM11.6894 12.7146C11.9964 12.7146 12.2461 12.9643 12.2461 13.2712C12.2461 13.5782 11.9964 13.8279 11.6894 13.8279C11.3825 13.8279 11.1328 13.5782 11.1328 13.2712C11.1328 12.9643 11.3825 12.7146 11.6894 12.7146ZM5.88866 12.7146C6.1956 12.7146 6.4453 12.9643 6.4453 13.2712C6.4453 13.5782 6.1956 13.8279 5.88866 13.8279C5.58172 13.8279 5.33202 13.5782 5.33202 13.2712C5.33202 12.9643 5.58172 12.7146 5.88866 12.7146ZM7.33074 3.19312H5.61878L7.39756 1.41433L8.25353 2.27033L7.33074 3.19312ZM8.98803 3.19312L10.7668 1.41433L12.5456 3.19312H8.98803Z"
                  fill="white"
                />
              </svg>
              В корзину
            </ButtonStandart>
          </div>
        </div>
        <button class="product-page__content__main__back">
          Вернуться к списку товаров
        </button>
      </div>
      <SidebarCart class="product-page__content__sidebar" />
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "swiper-example-mousewheel-control",
  title: "Mousewheel control",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        slidesPerView: 3,
        spaceBetween: 8,
        mousewheel: true,
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
.product-page {
  background-color: $light_grey;
  padding-bottom: 20px;
  &__content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
    &__main {
      width: 80%;
      margin-right: 30px;
      padding-bottom: 100px;
      &__breadcrumbs {
        margin-top: 20px;
        margin-bottom: 40px;
      }
      &__name {
        width: 100%;
        max-width: 100%;
        margin-bottom: 40px;
      }
      &__images {
        height: 662px;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        &__slider {
          width: 126px;
          height: 100%;
          background-color: red;
          // background-color: $white;
          border-radius: 20px;
          margin-right: 30px;
          flex-shrink: 0;
          flex-grow: 0;
          &__swiper {
            height: 100%;
            width: 100%;
            padding: 50px 5px;
            .swiper-wrapper {
              height: 100%;
              max-height:100%;
              background-color: orange !important;
              overflow: hidden !important;
              .swiper-slide {
              background-color: green;
              width: 100%;
              height: auto;
            }
            }
            
          }
        }
        &__image {
          flex-shrink: 0;
          height: 100%;
          flex-grow: 1;
        }
      }
      &__additional {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: row;
        margin-top: 77px;
        &__description {
          width: 55%;
          margin-right: 60px;
          &__pre {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 20px;
            margin-bottom: 20px;
          }
          &__text {
            font-family: "SF Pro Display";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
          }
        }
        &__information {
          width: 45%;
        }
        &__information {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          flex-direction: column;
          &__prices {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: row;
            margin-bottom: 20px;
            &__price {
              font-family: "Montserrat";
              font-style: normal;
              font-weight: 600;
              font-size: 18px;
              line-height: 22px;
              color: $red;
              &_full {
                margin-left: 20px;
                font-family: "Montserrat";
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 20px;
                text-decoration-line: line-through;
              }
            }
            &__weight {
              font-family: "SF Pro Display";
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 19px;
              color: $darkblue;
            }
          }
          &__options {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;
            width: 100%;
            margin-bottom: 40px;
            &__pre {
              font-family: "Montserrat";
              font-style: normal;
              font-weight: 600;
              font-size: 16px;
              line-height: 20px;
            }
            &__content {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: flex-start;
              flex-direction: column;
              &__item {
                width: 100%;
                min-height: 74px;
                padding: 10px 0px;
                border-bottom: 1px solid $dark_grey;
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-direction: row;
                &__name {
                  font-family: "SF Pro Display";
                  font-style: normal;
                  font-weight: 400;
                  font-size: 16px;
                  line-height: 20px;
                  width: 220px;
                  margin-right: 40px;
                }
                &__checkbox {
                  width: 26px;
                  height: 26px;
                  background-color: yellowgreen;
                  border-radius: 90px;
                  margin-right: auto;
                }
                &__price {
                  font-family: "Montserrat";
                  font-style: normal;
                  font-weight: 600;
                  font-size: 16px;
                  line-height: 20px;
                  white-space: nowrap;
                }
              }
            }
          }
          &__button {
            width: 228px;
            &__icon {
              margin-right: 10px;
            }
          }
        }
      }
      &__back {
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: $darkblue;
        background-color: transparent;
        outline: none;
        border: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    &__sidebar {
      width: 294px;
      flex-shrink: 0;
      position: sticky;
      top: 0px;
      top: 125px;
    }
  }
}
</style>