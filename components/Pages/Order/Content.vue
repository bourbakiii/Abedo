<template>
  <div class="order-content">
    <h3 class="order-content__title title-extra-normal">Заказанные позиции</h3>
    <div class="order-content__content">
      <div class="order-content__content__item">
        <img
          src="@/assets/images/product-placeholder.png"
          class="order-content__content__item__image"
        />
        <p class="order-content__content__item__name" contenteditable>
          Сырное ассорти
        </p>
        <div class="order-content__content__item__data">
          <p class="order-content__content__item__data__count" contenteditable>
            10
          </p>
          <p class="order-content__content__item__data__price" contenteditable>
            350 ₽
          </p>
          <p
            class="
              order-content__content__item__data__price
              order-content__content__item__data__price_full
            "
            contenteditable
          >
            3 500 ₽
          </p>
        </div>
      </div>
      <div class="order-content__content__item">
        <img
          src="@/assets/images/product-placeholder.png"
          class="order-content__content__item__image"
        />
        <p class="order-content__content__item__name" contenteditable>
          Сырное ассорти
        </p>
        <div class="order-content__content__item__data">
          <p class="order-content__content__item__data__count" contenteditable>
            10
          </p>
          <p class="order-content__content__item__data__price" contenteditable>
            350 ₽
          </p>
          <p
            class="
              order-content__content__item__data__price
              order-content__content__item__data__price_full
            "
            contenteditable
          >
            3 500 ₽
          </p>
        </div>
      </div>
      <div class="order-content__content__item">
        <img
          src="@/assets/images/product-placeholder.png"
          class="order-content__content__item__image"
        />
        <p class="order-content__content__item__name" contenteditable>
          Сырное ассорти
        </p>
        <div class="order-content__content__item__data">
          <p class="order-content__content__item__data__count" contenteditable>
            10
          </p>
          <p class="order-content__content__item__data__price" contenteditable>
            350 ₽
          </p>
          <p
            class="
              order-content__content__item__data__price
              order-content__content__item__data__price_full
            "
            contenteditable
          >
            3 500 ₽
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.order-content {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  &__title {
    margin-bottom: 40px;
  }
  &__content {
    width: 100%;
    background-color: $white;
    padding: 10px 30px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    &__item {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      min-height: 106px;
      background: $white;
      border-bottom: 1px dashed $extra_dark_grey;
      &:last-of-type{
          border: none;
      }
      &__image {
        width: 100px;
        height: auto;
        margin-right: 30px;
        background-color: $white;
        border-radius: 10px;
        object-fit: contain;
      }
      &__name {
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        margin-right: 30px;
        width: 100%;
        max-width: 380px;
      }

      &__data {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        
        &__count {
          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 24px;
          text-align: center;
          width:100%;
          text-align: left;
        }
        &__price {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 24px;
          white-space: nowrap;
          text-align: center;
          width:100%;
          margin: 0px 30px;
          &_full{
              margin: 0px;
              text-align: right;
          }
        }
      }
    }
  }
}
</style>