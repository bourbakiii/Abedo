<template>
  <div class="page product-page wrapper">
    <div class="product-page__over">
      <Breadcrumbs class="product-page__over__breadcrumbs adaptive-non" />
      <div class="product-page__over__content content">
        <div class="product-page__over__content__main">
          <div
            class="product-page__over__content__main__images__adaptive__slider adaptive"
          >
            <ProductImagesSlider class="images-slider" />
          </div>
          <h1
            class="product-page__over__content__main__name title-extra-normal"
            contenteditable
          >
            Сырное ассорти
          </h1>
          <div class="product-page__over__content__main__images adaptive-non">
            <div
              class="product-page__over__content__main__images__slider__wrapper"
            >
              <div class="product-page__over__content__main__images__slider">
                <swiper
                  class="product-page__over__content__main__images__slider__swiper"
                  :options="swiperOption"
                >
                  <swiper-slide v-for="(slide, index) in 12" :key="index"
                    >Slide {{ index }}</swiper-slide
                  >
                </swiper>
              </div>
            </div>
            <img
              src="@/assets/images/product-placeholder.png"
              class="product-page__over__content__main__images__image"
            />
          </div>

          <div class="product-page__over__content__main__additional">
            <div
              class="product-page__over__content__main__additional__description"
            >
              <p
                class="product-page__over__content__main__additional__description__pre"
              >
                Описание:
              </p>
              <p
                class="product-page__over__content__main__additional__description__text"
                contenteditable
              >
                Моцарелла, рикотта или фета (свежие); шаурс, нешатель (мягкие);
                эдам, гауда (полумягкие); маасдам, эмменталь (твердые);
                пармезан, грюйер (твердые, пикантные); пекорино, шеврет (козий,
                овечий сыры); рокфор, горгонзола или дор блю (с голубой
                плесенью).
              </p>
            </div>
            <div
              class="product-page__over__content__main__additional__information"
            >
              <div
                class="product-page__over__content__main__additional__information__min-count"
              >
                <svg
                  class="product-page__over__content__main__additional__information__min-count__icon"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.14939 4.8313C6.57654 2.92179 8.00641 1 10 1V1C11.9936 1 13.4235 2.92179 12.8506 4.8313L11.2873 10.0422C11.2171 10.2762 11.182 10.3932 11.128 10.4895C10.989 10.7371 10.7513 10.9139 10.4743 10.9759C10.3664 11 10.2443 11 10 11V11C9.7557 11 9.63355 11 9.52574 10.9759C9.24867 10.9139 9.01101 10.7371 8.87203 10.4895C8.81795 10.3932 8.78285 10.2762 8.71265 10.0422L7.14939 4.8313Z"
                    stroke="#F95738"
                    stroke-width="2"
                  />
                  <circle
                    cx="10"
                    cy="16"
                    r="2"
                    stroke="#F95738"
                    stroke-width="2"
                  />
                </svg>
                <p
                  class="product-page__over__content__main__additional__information__min-count__text"
                  contenteditable
                >
                  Минимальное количество для заказа - 3 шт.
                </p>
              </div>
              <div
                class="product-page__over__content__main__additional__information__prices adaptive-non"
              >
                <p
                  class="product-page__over__content__main__additional__information__prices__price"
                  contenteditable
                >
                  3 500 ₽
                </p>
                <p
                  class="product-page__over__content__main__additional__information__prices__weight"
                  contenteditable
                >
                  / 150 г
                </p>
                <p
                  class="product-page__over__content__main__additional__information__prices__price_full"
                  contenteditable
                >
                  450 ₽
                </p>
              </div>
              <div
                class="product-page__over__content__main__additional__information__options"
              >
                <p
                  class="product-page__over__content__main__additional__information__options__pre"
                >
                  Дополнительные опции
                </p>
                <div
                  class="product-page__over__content__main__additional__information__options__content"
                >
                  <div
                    class="product-page__over__content__main__additional__information__options__content__item"
                  >
                    <p
                      class="product-page__over__content__main__additional__information__options__content__item__name"
                      contenteditable
                    >
                      Моцарелла классического итальянского производства
                    </p>
                    <Checkbox
                      id="some_id"
                      value="1"
                      v-model="val"
                      class="product-page__over__content__main__additional__information__options__content__item__checkbox"
                    />
                    <p
                      class="product-page__over__content__main__additional__information__options__content__item__price"
                      contenteditable
                    >
                      3 000 ₽
                    </p>
                  </div>
                </div>
              </div>
              <ButtonStandart
                class="product-page__over__content__main__additional__information__button adaptive-non"
              >
                <svg
                  class="product-page__over__content__main__additional__information__button__icon"
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
          <div
            class="product-page__over__content__main__adaptive-actions adaptive"
          >
            <p
              class="product-page__over__content__main__adaptive-actions__price"
              contenteditable
            >
              2 330 ₽
            </p>
            <p
              class="product-page__over__content__main__adaptive-actions__price_full"
              contenteditable
            >
              2 330 ₽
            </p>
            <div
              class="product-page__over__content__main__adaptive-actions__actions"
            >
              <ButtonProduct
                class="product-page__over__content__main__adaptive-actions__actions__button_minus product-page__over__content__main__adaptive-actions__actions__button"
                size="30"
                icon="minus"
              />
              <p
                class="product-page__over__content__main__adaptive-actions__actions__count"
                contenteditable
              >
                1
              </p>
              <ButtonProduct
                class="product-page__over__content__main__adaptive-actions__actions__button_plus product-page__over__content__main__adaptive-actions__actions__button"
                size="30"
                icon="plus"
              />
            </div>
            <ButtonSmallCart
              class="product-page__over__content__main__adaptive-actions__add"
            />
          </div>
          <button class="product-page__over__content__main__back adaptive-non">
            Вернуться к списку товаров
          </button>
        </div>
        <SidebarCart
          class="product-page__over__content__sidebar adaptive-non"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import Checkbox from "../../components/Checkbox.vue";
export default {
  name: "swiper-example-mousewheel-control",
  title: "Mousewheel control",
  components: {
    Swiper,
    SwiperSlide,
    Checkbox,
  },
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        slidesPerView: 3,
        spaceBetween: 8,
        mousewheel: true,
      },
      val: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.product-page {
  justify-content: flex-start;
  padding-bottom: 30px !important;

  &__over {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    max-width: 100%;
    &__content {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-direction: row;
      &__main {
        width: 80%;
        padding-bottom: 100px;
        @media screen and (max-width: $tablet) {
          width: 100%;
          margin-right: 0px;
          padding-bottom: 0px;
        }
        @media screen and (max-width: $sidebar_dn) {
          width: 100%;
          padding-bottom: 0px;
        }
        &__name {
          width: 100%;
          max-width: 100%;
          margin-bottom: 40px;
          order: 4;
          @media screen and (max-width: $tablet) {
            font-family: "SF Pro Display";
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 20px;
            margin-bottom: 18px;
          }
        }
        &__images {
          height: 662px;
          width: 100%;
          display: flex;
          align-items: center;
          flex-direction: row;
          justify-content: space-between;
          &__adaptive__slider {
            margin-bottom: 40px;
            
          }
          &__slider {
            overflow: hidden;
            width: 100%;
            height: 100%;
            &__wrapper {
              width: 126px;
              height: 100%;
              border-radius: 20px;
              margin-right: 30px;
              background-color: $white;
              flex-shrink: 0;
              flex-grow: 0;
              padding: 50px 5px;
            }
            &__swiper {
              height: 100%;
              width: 100%;
              .swiper-wrapper {
                height: 100%;
                max-height: 100%;
                .swiper-slide {
                  width: 100%;
                  height: auto;
                }
              }
            }
          }
          &__image {
            width: 100%;
            max-width: 100%;
          }
        }
        &__additional {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          flex-direction: row;
          margin-top: 77px;
          @media screen and (max-width: $tablet) {
            margin-top: 0px;
            flex-direction: column;
          }
          &__description {
            width: 55%;
            margin-right: 60px;
            @media screen and (max-width: $notebook) {
              margin-right: 40px;
            }
            @media screen and (max-width: $tablet) {
              width: 100%;
              margin-right: 0px;
              margin-bottom: 13px;
            }
            &__pre {
              font-family: "Montserrat";
              font-style: normal;
              font-weight: 600;
              font-size: 16px;
              line-height: 20px;
              margin-bottom: 20px;
              @media screen and (max-width: $tablet) {
                font-family: "SF Pro Display";
                font-style: normal;
                font-weight: 400;
                font-size: 15px;
                line-height: 17px;
                margin-bottom: 10px;
              }
            }
            &__text {
              font-family: "SF Pro Display";
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 24px;
              @media screen and (max-width: $tablet) {
                font-family: "SF Pro Display";
                font-style: normal;
                font-weight: 400;
                font-size: 15px;
                line-height: 20px;
              }
            }
          }
          &__information {
            width: 45%;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;
            @media screen and (max-width: $tablet) {
              width: 100%;
            }
            &__min-count {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: flex-start;
              flex-direction: row;
              padding: 20px 0px;
              min-height: 60px;
              max-width: 100%;
              border-top: 1px solid $dark_grey;
              border-bottom: 1px solid $dark_grey;
              @media screen and (max-width: $tablet) {
                margin-bottom:20px;
              }
              &__icon {
                margin-right: 20px;
              }
              &__text {
                font-family: "SF Pro Display";
                font-style: normal;
                font-weight: 600;
                font-size: 17px;
                line-height: 19px;
                color: $red;
                @media screen and (max-width: $tablet) {
                  font-weight: 400;
                  font-size: 15px;
                  line-height: 17px;
                }
              }
            }

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
                @media screen and (max-width: $tablet) {
                  font-family: "SF Pro Display";
                  font-style: normal;
                  font-weight: 700;
                  font-size: 20px;
                  line-height: 20px;
                  margin-bottom: 13px;
                }
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
                  @media screen and (max-width: $tablet) {
                    min-height: 53px;
                    padding: 8px 0px;
                  }
                  &__name {
                    font-family: "SF Pro Display";
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 20px;
                    width: 220px;
                    margin-right: 40px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    @media screen and (max-width: $notebook) {
                      width: 180px;
                      margin-right: 20px;
                    }
                    @media screen and (max-width: $tablet) {
                      width: 100%;
                      margin-right: 10px;
                    }
                  }
                  &__checkbox {
                    width: 26px;
                    height: 26px;
                    border-radius: 90px;
                    margin-right: auto;
                    flex-shrink: 0;
                    @media screen and (max-width: $tablet) {
                      margin-right: 0px;
                      order: 2;
                    }
                  }
                  &__price {
                    font-family: "Montserrat";
                    font-style: normal;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 20px;
                    white-space: nowrap;
                    @media screen and (max-width: $tablet) {
                      width: max-content;
                      flex-shrink: 0;
                      white-space: nowrap;
                      margin-right: 40px;
                    }
                  }
                }
              }
            }
            &__button {
              width: 228px;
              &__icon {
                *{
                  fill: $darkblue;
                }
                margin-right: 10px;
              }
            }
          }
        }
        &__adaptive-actions {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: row;
          flex-wrap: wrap;
          &__price {
            font-family: "SF Pro Display";
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 21px;
            white-space: nowrap;
            &_full {
              margin-left: 10px;
              white-space: nowrap;
              font-family: "SF Pro Display";
              font-style: normal;
              font-weight: 400;
              font-size: 15px;
              line-height: 18px;
              color: $extra_dark_grey;
              text-decoration: line-through;
            }
          }
          &__actions {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row;
            max-width: 50%;
            flex-shrink: 0;
            margin-left: auto;
            overflow: hidden;
            &__button {
              width: 100%;
              flex-shrink: 0;
            }
            &__count {
              margin: 0px 12px;
              font-family: "SF Pro Display";
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 19px;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            }
          }
        }
        &__back {
          margin-top: 80px;
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
        top: 125px;
        margin-left: 30px;
        @media screen and (max-width: $notebook) {
          margin-left: 10px;
          width: 260px;
        }
        @media screen and (max-width: $sidebar_dn) {
          display: none !important;
        }
      }
    }
  }
}
</style>
