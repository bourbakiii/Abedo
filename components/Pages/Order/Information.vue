<template>
  <div class="information">
    <h1 class="information__title title-normal">Заказ №{{order.id}}</h1>
    <div class="information__content">
      <div class="information__content__hood">
        <img
          v-if="order.shop.image.length"
          :src="`${$axios.defaults.baseURL}${order.shop.image[0].small}`"
          class="information__content__hood__image"
        />
        <p class="information__content__hood__name" >
          {{order.shop.name}}
        </p>
      </div>
      <div class="information__content__content">
        <div class="information__content__content__item">
          <p class="information__content__content__item__name" >
            Телефон
          </p>
          <p class="information__content__content__item__value" >
             {{order.phone}}
          </p>
        </div>
        <div  class="information__content__content__item">
          <p class="information__content__content__item__name" >
            Адрес доставки
          </p>
          <p class="information__content__content__item__value" >
            {{order.address?parseAddress(order):parseAddress(order.shop)}}
          </p>
        </div>
        <div v-if="order.entrance" class="information__content__content__item">
          <p class="information__content__content__item__name" >
            Подъезд
          </p>
          <p class="information__content__content__item__value" >
            {{order.entrance}}
          </p>
        </div>
        <div v-if="order.floor" class="information__content__content__item">
          <p class="information__content__content__item__name" >
            Этаж
          </p>
          <p class="information__content__content__item__value" >
            {{order.floor}}
          </p>
        </div>
        <div v-if="order.apartment" class="information__content__content__item">
          <p class="information__content__content__item__name" >
            № квартиры/офиса
          </p>
          <p class="information__content__content__item__value" >
            {{order.apartment}}
          </p>
        </div>
        <div v-if="order.intercom" class="information__content__content__item">
          <p class="information__content__content__item__name" >
            № домофона
          </p>
          <p class="information__content__content__item__value" >
            {{order.intercom}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import parserMixin from '@/mixins/parser.js';
export default {
  props:{
    order: {
      required: true
    }
  },
  mixins: [parserMixin]
}
</script>
<style lang="scss" scoped>
.information {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  min-width: 621px;
  max-width: 100%;
  @media screen and (max-width: $tablet) {
    width: 100%;
    max-width: 100%;
    min-width: auto;
  }
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
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    &__hood {
      width: 100%;
      max-width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      margin-bottom: 40px;
      @media screen and (max-width: $tablet) {
        margin-bottom: 20px;
      }
      &__image {
        margin-right: 30px;
        background-color: $white;
        border: 1px solid $blue_grey;
        border-radius: 10px;
        flex-shrink: 0;
        width: 106px;
        height: auto;
        object-fit: contain;
        padding: 10px;
        @media screen and (max-width: $tablet) {
          width: 100px;
          margin-right: 10px;
        }
      }
      &__name {
        width: 100%;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 20px;
        @media screen and (max-width: $tablet) {
          font-size: 18px;
          line-height: 20px;
        }
      }
    }
    &__content {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      width: 100%;
      &__item {
        padding: 10px 0px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid $dark_grey;
        min-height: 60px;
        &:last-of-type {
          border: none;
        }
        &__name {
          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          margin-right: 30px;
          min-width: 188px;
          white-space: nowrap;
          @media screen and (max-width: $tablet) {
            font-size: 15px;
            line-height: 17px;
            margin-right: 15px;
            width: 30%;
            min-width: auto;
          }
          @media screen and (max-width: $tablet_middle) {
            width: 50%;
          }
        }
        &__value {
          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          min-width: 404px;
          @media screen and (max-width: $tablet) {
            font-size: 15px;
            line-height: 17px;
            margin-right: 15px;
            width: 70%;
            min-width: auto;
          }
          @media screen and (max-width: $tablet_middle) {
            width: 50%;
          }
        }
      }
    }
  }
}
</style>
