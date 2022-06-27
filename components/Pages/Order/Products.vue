<template>
  <div class="products">
    <h2 class="products__title title-extra-normal">Заказанные позиции</h2>
    <div class="products__content adaptive-non">
      <div
        v-for="(item, index) in consist"
        :key="index"
        class="products__content__item"
      >
        <img

          :src="`${$axios.defaults.baseURL}${item.product.image.original}`"
          :class="{'products__content__item__image_invisible': !item.product.image}"
          class="products__content__item__image"
        />
        <p class="products__content__item__name">
          {{ item.product.name }}
        </p>
        <p class="products__content__item__count">{{ item.count }}</p>
        <p class="products__content__item__price">
          {{ item.price % 1 == 0 ? item.price : item.price.toFixed(2) }}₽
        </p>
        <p
          class="products__content__item__price products__content__item__price__all"
        >
          {{
            (item.price * item.count) % 1 == 0
              ? item.price * item.count
              : (item.price * item.count).toFixed(2)
          }}₽
        </p>
      </div>
    </div>
    <div class="products__content_adaptive adaptive">
      <div
        v-for="(item, index) in consist"
        :key="index"
        class="products__content_adaptive__item"
      >
        <p class="products__content_adaptive__item__name">
          {{ item.product.name }}
        </p>
        <div class="products__content_adaptive__item__data">
          <NuxtLink v-if="item.product.image" :to="`/product/${item.product.id}`"
                    class="products__content_adaptive__item__data__image">
            <img
              :src="`${$axios.defaults.baseURL}${item.product.image.cart_mini}`"
              class="products__content_adaptive__item__data__image__image"
            />
          </NuxtLink>
          <p class="products__content_adaptive__item__data__counts">
            {{ item.count }} x {{ item.price }}₽
          </p>
          <div class="products__content_adaptive__item__data__prices">
            <p class="products__content_adaptive__item__data__prices__price">
              {{ totalPrice(item) }}₽
            </p>
            <!-- <p
              class="products__content_adaptive__item__data__prices__price_full"

            >
              10 345 ₽
            </p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    consist: {
      required: true,
    },
  },
  methods: {
    totalPrice(item) {
      return (item.price * item.count) % 1 == 0
        ? item.price * item.count
        : (item.price * item.count).toFixed(2);
    },
  },
};
</script>
<style lang="scss" scoped>
.products {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  &__title {
    margin-bottom: 40px;
    @media screen and (max-width: $tablet) {
      margin-bottom: 20px;
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
    }
  }

  &__content {
    width: 100%;
    background-color: $white;
    border: 1px solid $blue_grey;
    border-radius: 20px;
    padding: 0 30px;
    @media screen and (max-width: $notebook) {
      padding: 0 15px;
    }

    &__item {
      padding: 0 10px;
      min-height: 116px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      border-bottom: 1px dashed $extra_dark_grey;

      &:last-of-type {
        border-bottom: none;
      }

      &__image {
        object-fit: contain;
        border-radius: 10px;
        width: 100px;
        min-width: 100px;
        margin-right: 30px;

        &_invisible {
          visibility: hidden;
        }

        @media screen and (max-width: $notebook) {
          margin-right: 15px;
        }
      }

      &__name {
        font-family: "SF Pro Display", serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        width: 351px;
        flex-shrink: 0;
        margin-right: 30px;

        @media screen and (max-width: $notebook) {
          width: 300px;
          margin-right: 15px;
        }
        @media screen and (max-width: $sidebar_dn) {
          width: 270px;
        }


      }

      &__count {
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        width: 100%;
        text-align: center;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      &__price {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        flex-grow: 1;
        text-align: center;
        width: 100%;
        margin: 0 30px;
        text-overflow: ellipsis;
        overflow: hidden;
        @media screen and (max-width: $notebook) {
          margin: 0 15px;
        }

        &__all {
          text-align: right;
          margin: 0;
        }
      }
    }

    &_adaptive {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      width: 100%;

      &__item {
        border-radius: 10px;
        background-color: $white;
        margin-bottom: 15px;
        padding: 15px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        width: 100%;

        &__name {
          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 17px;
          margin-bottom: 15px;
          text-align: left;
          width: 100%;
        }

        &__data {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: row;

          &__image {
            width: 30px;
            height: 30px;
            border-radius: 90px;
            margin-right: 20px;
            overflow: hidden;

            &__image {
              object-fit: cover;
              width: 100%;
              height: 100%;
            }
          }

          &__buttons {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 20px;

            &__count {
              width: 40px;
              max-width: 40px;
              margin: 0 5px;
              text-align: center;
              font-family: "SF Pro Display";
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 19px;
            }

            &__price {
              font-family: "SF Pro Display";
              font-style: normal;
              font-weight: 500;
              font-size: 15px;
              line-height: 16px;
            }
          }

          &__counts {
            font-family: "SF Pro Display";
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            color: $extra_dark_grey;
            margin-right: 11px;
          }

          &__prices {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row;

            &__price {
              font-family: "SF Pro Display";
              font-style: normal;
              font-weight: 500;
              font-size: 15px;
              line-height: 16px;

              &_full {
                font-size: 13px;
                line-height: 15px;
                color: $extra_dark_grey;
                text-decoration: line-through;
                margin-left: 10px;
              }
            }
          }

          &__close {
            background-color: transparent;
            border: none;
            outline: none;
            margin-left: auto;
          }
        }

        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
