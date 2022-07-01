<template>
  <div class="page product-page wrapper">
    <div class="product-page__over">
      <Breadcrumbs class="product-page__over__breadcrumbs adaptive-non"
                   :way="[{name:'Партнеры', link:`/partners`},{name:product.section.shop.name, link:`/partners/${product.section.shop.id}`}]"/>
      <div class="product-page__over__content content">
        <div class="product-page__over__content__main">
          <div
            v-if="product_concated_images.length"
            class="product-page__over__content__main__images__adaptive__slider adaptive"
          >
            <ProductImagesSlider
              :images="product_concated_images"
              class="images-slider"
            />
          </div>
          <h1
            class="product-page__over__content__main__name title-extra-normal"
          >
            {{ product.name }}
          </h1>
          <div class="product-page__over__content__main__prices adaptive">
            <p class="product-page__over__content__main__prices__price"
               :class="{red:product.discount ||  product.section.discount}">{{ product_price_with_discount }}₽</p>
            <p class="product-page__over__content__main__prices__weight"> / {{
                product.weight
                                                                          }}{{ product.weight_unit.short_name }}</p>
            <p v-if="product.discount || product.section.discount"
               class="product-page__over__content__main__prices__price_full">{{ price }}₽</p>
          </div>
          <div class="product-page__over__content__main__images adaptive-non">
            <div
              v-if="product.more_images"
              class="product-page__over__content__main__images__slider__wrapper"
            >
              <div class="product-page__over__content__main__images__slider">
                <button
                  class="product-page__over__content__main__images__slider__button product-page__over__content__main__images__slider__button__prev"
                >
                  <svg
                    class="product-page__over__content__main__images__slider__button__icon"
                    width="20"
                    height="12"
                    viewBox="0 0 20 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.35836 12L10 4.5799L17.6416 12L20 9.71009L10 -8.74228e-07L2.0019e-07 9.71009L2.35836 12Z"
                      fill="#5C6784"
                    />
                  </svg>
                </button>

                <swiper
                  class="product-page__over__content__main__images__slider__swiper"
                  :options="swiperOption"
                >
                  <swiper-slide
                    class="product-page__over__content__main__images__slider__swiper__slide"
                    v-for="(slide, index) in [
                      ...product.more_images,
                      product.image,
                    ]"
                    :key="index"
                  ><img
                    @click="selectImage(slide)"
                    :src="`${$axios.defaults.baseURL}${slide.cart_mini}`"
                    class="product-page__over__content__main__images__slider__swiper__slide__image"
                  /></swiper-slide>
                </swiper>
                <button
                  class="product-page__over__content__main__images__slider__button product-page__over__content__main__images__slider__button__next"
                >
                  <svg
                    class="product-page__over__content__main__images__slider__button__icon"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2221_7034)">
                      <path
                        d="M17.6416 4L10 11.4201L2.35836 4L-1.27402e-07 6.28991L10 16L20 6.28991L17.6416 4Z"
                        fill="#5C6784"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2221_7034">
                        <rect width="20" height="20" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
            <div class="product-page__over__content__main__images__image">
              <img
                @click="openFullViewModal"
                v-if="currentImage"
                :src="`${$axios.defaults.baseURL}${currentImage.original}`"
                class="product-page__over__content__main__images__image__image"
              />
            </div>
          </div>

          <div class="product-page__over__content__main__additional">
            <div
              v-if="product.description"
              class="product-page__over__content__main__additional__description adaptive-non"
            >
              <p
                class="product-page__over__content__main__additional__description__pre"
              >
                Описание:
              </p>
              <p
                class="product-page__over__content__main__additional__description__text"
              >
                {{ product.description }}
              </p>
            </div>
            <div
              class="product-page__over__content__main__additional__information"
            >
              <div
                v-if="product.min_count > 1"
                class="product-page__over__content__main__additional__information__min-count"
              >
                <svg
                  class="product-page__over__content__main__additional__information__min-count__icon adaptive"
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
                >
                  Минимальное количество для заказа - {{ product.min_count }} шт.
                </p>
              </div>
              <div
                class="product-page__over__content__main__additional__information__prices adaptive-non"
              >
                <p
                  class="product-page__over__content__main__additional__information__prices__price"
                  :class="{'red':product.discount || product.section.discount}"
                >
                  {{ product_price_with_discount }}₽
                </p>
                <p
                  class="product-page__over__content__main__additional__information__prices__weight"
                >
                  / {{ product.weight }}{{ product.weight_unit.short_name }}
                </p>
                <p
                  v-if="product.discount || product.section.discount"
                  class="product-page__over__content__main__additional__information__prices__price_full"
                >
                  {{ price }}₽
                </p>
              </div>
              <div
                v-if="product.options.length"
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
                  <label
                    class="product-page__over__content__main__additional__information__options__content__item unselectable"
                    v-for="option in product.options"
                    :key="option.id"
                    :for="`option-${option.id}`"
                  >
                    <Checkbox
                      :value="+option.id"
                      :checked="
                        product.selected_options
                          .map((el) => +el.id)
                          .includes(+option.id)
                      "
                      @change="selectOption(option)"
                      :id="`option-${option.id}`"
                      class="product-page__over__content__main__additional__information__options__content__item__checkbox"
                    />
                    <p
                      class="product-page__over__content__main__additional__information__options__content__item__name"
                    >
                      {{ option.name }}
                    </p>
                    <p
                      class="product-page__over__content__main__additional__information__options__content__item__price"
                    >
                      {{ option.price }}₽
                    </p>
                  </label>
                </div>
              </div>
              <client-only>
                <div
                  v-if="product.section.is_work_now"

                  class="product-page__over__content__main__additional__information__buttons"
                >
                  <ButtonStandart
                    v-if="!in_cart"
                    class="product-page__over__content__main__additional__information__buttons__button"
                    @click="add_to_cart(product.section.shop)"
                  >
                    <svg
                      class="product-page__over__content__main__additional__information__buttons__button__icon"
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
                  <div
                    v-else
                    class="product-page__over__content__main__additional__information__buttons__carted"
                  >
                    <p
                      class="product-page__over__content__main__additional__information__buttons__carted__text"
                    >
                      В корзине:
                    </p>
                    <ButtonProduct
                      class="product-page__over__content__main__additional__information__buttons__carted__button"
                      size="40"
                      icon="minus"
                      @click="decrease"
                    />
                    <p
                      class="product-page__over__content__main__additional__information__buttons__carted__count"
                    >
                      {{ count }}
                    </p>
                    <ButtonProduct
                      class="product-page__over__content__main__additional__information__buttons__carted__button"
                      size="40"
                      icon="plus"
                      @click="crease"
                    />
                  </div>
                </div>
                <div v-else class="product-page__over__content__main__additional__information__buttons">
                  <p
                    class="product-page__over__content__main__additional__information__buttons__button product-page__over__content__main__additional__information__buttons__disactive">
                    Недоступен</p>
                </div>
              </client-only>
            </div>
          </div>

          <NuxtLink
            :to="parseLink(`/partners/${product.section.shop_id}`)"
            class="product-page__over__content__main__back adaptive-non"
          >
            <svg
              class="product-page__over__content__main__back__icon"
              width="12"
              height="18"
              viewBox="0 0 12 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.3999 15.8775L4.72181 9L11.3999 2.12252L9.33898 -9.00857e-08L0.599901 9L9.33898 18L11.3999 15.8775Z"
                fill="#5C6784"
              />
            </svg>
            Вернуться к списку товаров
          </NuxtLink>
          <div v-if="product.description" class="product-page__over__content__main__description__adaptive adaptive">
            <h6 class="product-page__over__content__main__description__adaptive__title">Описание:</h6>
            <p class="product-page__over__content__main__description__adaptive__text"> {{ product.description }}</p>
          </div>
        </div>
        <SidebarCart
          class="product-page__over__content__sidebar adaptive-non"
        />
      </div>
    </div>
  </div>
</template>
<script>
import {Swiper, SwiperSlide} from "vue-awesome-swiper";
import Checkbox from "../../components/Checkbox.vue";
import productMixin from "@/mixins/product.js";
import previewHider from "@/mixins/preview-hider";

export default {
  mixins: [productMixin, previewHider],
  components: {
    Swiper,
    SwiperSlide,
    Checkbox,
  },
  head() {
    return {
      title: `${this.product.name} - Abedo`,
      meta:
        [
          {
            hid: 'description',
            name: 'description',
            content: `Заказать ${this.product.name} в заведении {НАЗВАНИЕ_ЗАВЕДЕНИЯ}. Удобное оформление заказа через сайт или мобильное приложение.`
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: this.$axios.defaults.baseURL + this.product.image.original
          }
        ],
    }
  },
  async asyncData({app, $axios, route, error}) {
    let to_return_product = {};
    if (route.query.preview && +route.query.preview === 1) {
      const token = app.$cookies.get('admin_token' || null);
      const preview_shop_id = app.$cookies.get('preview_shop_id' || null);
      await $axios
        .$get(
          `${$axios.defaults.baseURL}/api/admin/preview/shop/${preview_shop_id}/product/${route.params.product_id}`, {
            headers: {Authorization: `Bearer ${token}`}
          }
        ).then(({product}) => {
          if (!product) return error({statusCode: 404, message: "Продукт неактивен"});
          to_return_product = product;
        }).catch(({response}) => {
            if (response?.status === 401 || response?.status === 403) return error({
              statusCode: 403,
              message: "У вас недостаточно прав"
            });
            return error({statusCode: 404, message: "Ошибка при получении продукта"});
          }
        );
    } else await $axios
      .$get(
        `${$axios.defaults.baseURL}/api/product/${route.params.product_id}`
      )
      .then(({product}) => {
        if (!product)
          return error({statusCode: 404, message: "Продукт неактивен"});
        to_return_product = product;
      })
      .catch(() => {
        error({statusCode: 404, message: "Ошибка при получении продукта"});
      });

    return {product: to_return_product};
  },
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        slidesPerView: "auto",
        spaceBetween: 8,
        mousewheel: true,
        navigation: {
          nextEl:
            ".product-page__over__content__main__images__slider__button__next",
          prevEl:
            ".product-page__over__content__main__images__slider__button__prev",
        },
      },
      currentImage: null,
    };
  },
  created() {
    this.currentImage = this.product?.image || null;
  },
  mounted() {
    this.$store.commit("variables/action", (state) => {
      state.adaptive_navigation = {
        text: this.product.name,
        slot: "label",
        info_click: null,
      };
    });
  },
  methods: {
    openFullViewModal() {
      this.$store.commit('modals/open', {
        modal_name: 'full_view', images: [
          ...(this.product.more_images ? this.product.more_images : []),
          this.product.image
        ]
      });
    },
    selectOption(option) {
      const select_option_index = this.product.selected_options.findIndex(
        el => +el.id == +option.id
      );
      this.$store.commit("cart/action", (state) => {
        if (select_option_index >= 0)
          this.product.selected_options.splice(select_option_index, 1);
        else this.product.selected_options.push(option);
      });
      // console.log("123");
      this.$forceUpdate();
    },
    selectImage(image) {
      this.currentImage = image || null;
    },
  },
  computed: {
    product_concated_images() {
      let to_return = [];
      if (this.product.image) {
        to_return.push(this.product.image);
      }
      if (this.product.more_images) {
        to_return.push(...this.product.more_images);
      }
      // console.log(to_return);
      return to_return;
    }
  }
};
</script>

<style lang="scss" scoped>
.product-page {
  justify-content: flex-start;
  padding-bottom: 30px !important;
  align-items: center;

  &__over {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    max-width: $maxwidth;
    width: 100%;

    &__content {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-direction: row;

      &__main {
        width: 80%;
        padding-bottom: 100px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        @media screen and (max-width: $tablet) {
          width: 100%;
          margin-right: 0;

          padding-bottom: 0;
        }
        @media screen and (max-width: $sidebar_dn) {
          width: 100%;
          padding-bottom: 0;
        }

        &__name {
          width: 100%;
          max-width: 100%;
          margin-bottom: 40px;
          // order: 4;
          @media screen and (max-width: $tablet) {
            font-family: "SF Pro Display";
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 20px;
            margin-bottom: 18px;
            order: -10;
          }
        }

        &__images {
          height: max-content;
          width: 100%;
          display: flex;
          align-items: flex-start;
          flex-direction: row;
          justify-content: space-between;

          &__adaptive__slider {
            max-width: 100%;
            margin-bottom: 40px;
            order: -2;
          }

          &__slider {
            overflow: hidden;
            width: 100%;
            height: 100%;
            max-height: 617px;
            min-height: 200px;

            &__button {
              width: 50px;
              height: 50px;
              border-radius: 90px;
              background-color: $dark_grey;
              display: flex;
              align-items: center;
              justify-content: center;
              border: none;
              position: absolute;
              left: 50%;
              display: none;

              &.swiper-button-disabled {
                opacity: 0.5;
              }

              &__prev {
                top: 0;
                transform: translate(-50%, -50%);
              }

              &__next {
                bottom: 0;
                transform: translate(-50%, 50%);
              }
            }

            &__wrapper {
              position: relative;
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
              width: 100%;
              height: 100%;
              overflow: hidden;

              &__slide {
                max-width: 100%;
                width: 100%;
                height: max-content;
                cursor: pointer;

                &__image {
                  object-fit: contain;
                  width: 100%;
                  max-width: 100%;
                  height: auto;
                }
              }
            }
          }

          &__image {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row;
            max-width: 100%;
            max-height: 617px;
            width: 100%;
            height: 100%;
            overflow: hidden;
            align-self: center;
            overflow: hidden;

            &__image {
              height: 100%;
              width: auto;
              max-width: 100%;
              max-height: 100%;
            }
          }
        }

        &__prices {
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: row;
          margin-bottom: 22px;

          &__price {

            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 22px;

            &_full {
              font-family: 'Montserrat';
              font-style: normal;
              font-weight: 500;
              font-size: 16px;
              line-height: 20px;
              margin-left: 20px;
              text-decoration-line: line-through;

            }

          }

          &__weight {
            font-family: 'SF Pro Display';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;

            color: $darkblue;
          }
        }

        &__additional {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          flex-direction: row;
          margin-top: 77px;
          width: 100%;
          @media screen and (max-width: $tablet) {
            margin-top: 0;
            flex-direction: column;
          }

          &__description {
            width: 51%;
            flex-shrink: 0;
            margin-right: 60px;
            @media screen and (max-width: $notebook) {
              margin-right: 30px;
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
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;
            overflow: hidden;
            @media screen and (max-width: $tablet) {
              width: 100%;
            }


            &__min-count {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: flex-start;
              flex-direction: row;
              max-width: 100%;
              margin-bottom: 30px;
              @media screen and (max-width: $tablet) {
                min-height: 60px;
                padding: 20px 0;
                margin-bottom: 20px;
                border-top: 1px solid $dark_grey;
                border-bottom: 1px solid $dark_grey;
              }

              &__icon {
                margin-right: 20px;
              }

              &__text {
                font-family: "SF Pro Display";
                font-style: normal;
                font-weight: 400;
                font-size: 15px;
                line-height: 18px;
                color: $red;
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
              margin-bottom: 30px;
              background: $white;
              border-radius: 20px;
              padding: 20px 0;

              &__pre {
                font-family: "Montserrat";
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 20px;
                padding-left: 20px;
                @media screen and (max-width: $tablet) {
                  font-family: "SF Pro Display";
                  font-style: normal;
                  font-weight: 700;
                  font-size: 16px;
                  line-height: 20px;
                  margin-bottom: 16px;
                }
              }

              &__content {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                flex-direction: column;

                &__item {
                  cursor: pointer;
                  width: 100%;
                  min-height: 74px;
                  padding: 10px 20px;
                  border-bottom: 1px solid $dark_grey;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  flex-direction: row;

                  &:last-of-type {
                    border-bottom: none;
                  }

                  @media screen and (max-width: $tablet) {
                    min-height: 53px;
                    padding: 8px 20px;
                  }

                  &__name {
                    font-family: "SF Pro Display";
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 20px;
                    width: 100%;
                    margin-right: 40px;
                    overflow: hidden;
                    text-overflow: ellipsis;

                    @media screen and (max-width: $notebook) {
                      margin-right: 20px;
                    }
                    @media screen and (max-width: $tablet) {
                      margin-right: 10px;
                    }
                  }

                  &__checkbox {
                    width: 26px;
                    height: 26px;
                    border-radius: 90px;
                    flex-shrink: 0;
                    margin-right: 25px;
                    @media screen and (max-width: $tablet) {
                      margin-right: 10px;
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
                    }
                  }
                }
              }
            }

            &__buttons {
              width: 100%;

              &__disactive {
                width: 100%;
                max-width: 228px;
                height: 50px;
                border: 1px solid $extra_dark_grey;
                border-radius: 50px;
                font-family: "SF Pro Display", serif;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
              }

              &__button {
                width: 228px;

                &:hover & {
                  &__icon {
                    * {
                      fill: $white;
                    }
                  }

                }

                &__icon {
                  * {
                    fill: $darkblue;
                    transition: $transition;
                  }

                  margin-right: 10px;
                }

                @media screen and (max-width: $tablet) {
                  height: 40px;
                }
              }

              &__carted {
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-direction: row;
                max-width: 339px;
                width: 100%;
                height: 60px;
                background-color: $white;
                padding: 0 30px;
                border: 1px solid $dark_grey;
                border-radius: 20px;

                @media screen and (max-width: $maxwidth) {
                  padding: 0 15px;
                }
                @media screen and (max-width: $sidebar_dn) {
                  padding: 0 30px;
                }
                @media screen and (max-width: $tablet) {
                  padding: 0;
                  width: 200px;
                  background-color: transparent;
                  height: 40px;
                  border: none;
                }

                &__text {
                  margin-right: 30px;
                  font-family: "Montserrat";
                  font-style: normal;
                  font-weight: 600;
                  font-size: 16px;
                  line-height: 20px;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                  @media screen and (max-width: $maxwidth) {
                    margin-right: 10px;

                  }
                  @media screen and (max-width: $sidebar_dn) {
                    margin-right: 30px;
                  }
                  @media screen and (max-width: $tablet) {
                    font-family: 'SF Pro Display';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 19px;
                    margin-right: 20px;
                  }
                }

                &__count {
                  margin: 0 12px;
                  font-family: "SF Pro Display";
                  font-style: normal;
                  font-weight: 400;
                  font-size: 16px;
                  line-height: 19px;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                  flex-grow: 1;
                  margin: 0 10px;
                  text-align: center;
                  @media screen and (max-width: $tablet) {
                    margin: 0 4px;
                  }
                }

                &__button {
                  width: 50px;
                  height: 50px;
                }
              }
            }
          }
        }


        &__back {
          margin-top: 50px !important;
          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 500;
          margin-top: 10px;
          font-size: 16px;
          line-height: 19px;
          color: $darkblue;
          background-color: transparent;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          align-self: flex-start;
          border: none;
          outline: none;
          text-decoration: underline;

          &__icon {
            margin-right: 10px;
          }
        }

        &__description__adaptive {

          padding: 20px 14px;
          margin-top: 30px;
          background-color: $white;
          border: 1px solid $dark_grey;
          border-radius: 20px;
          width: 100%;

          &__title {
            margin-bottom: 18px;
            font-family: 'SF Pro Display';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 19px;
          }

          &__text {
            font-family: 'SF Pro Display';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
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
