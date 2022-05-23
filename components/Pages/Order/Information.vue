<template>
  <div class="information">
    <h1 class="information__title title-normal">Заказ №11234</h1>
    <div class="information__content">
      <div class="information__content__hood">
        <img
          src="@/assets/images/limonchello.png"
          class="information__content__hood__image"
        />
        <p class="information__content__hood__name" >
          Кафе “Лимончелло”
        </p>
      </div>
      <div class="information__content__content">
        <div class="information__content__content__item">
          <p class="information__content__content__item__name" >
            Телефон
          </p>
          <p class="information__content__content__item__value" >
            +7 999 000 000 00
          </p>
        </div>
        <div class="information__content__content__item">
          <p class="information__content__content__item__name" >
            Телефон
          </p>
          <p class="information__content__content__item__value" >
            +7 999 000 000 00
          </p>
        </div>
        <div class="information__content__content__item">
          <p class="information__content__content__item__name" >
            Телефон
          </p>
          <p class="information__content__content__item__value" >
            +7 999 000 000 00
          </p>
        </div>
        <div class="information__content__content__item">
          <p class="information__content__content__item__name" >
            Телефон
          </p>
          <p class="information__content__content__item__value" >
            +7 999 000 000 00
          </p>
        </div>
        <div class="information__content__content__item">
          <p class="information__content__content__item__name" >
            Телефон
          </p>
          <p class="information__content__content__item__value" >
            +7 999 000 000 00
          </p>
        </div>
        <div class="information__content__content__item">
          <p class="information__content__content__item__name" >
            Телефон
          </p>
          <p class="information__content__content__item__value" >
            +7 999 000 000 00
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
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
