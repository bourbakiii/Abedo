<template>
  <div class="page order-page wrapper">
    <div class="order-page__content content">
      <Breadcrumbs class="order-page__content__breadcrumbsad adaptive-non" />
      <PagesOrderInformation class="order-page__content__information" />
      <PagesOrderProducts class="order-page__content__products" />
      <div class="order-page__content__least">
        <p class="order-page__content__least__pre">Итого:</p>
        <p class="order-page__content__least__price" contenteditable>1 330 ₽</p>
      </div>
       <button class="order-page__content__back adaptive-non">
          Вернуться к списку товаров
        </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.order-page {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  &__content {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    &__information{
        margin-bottom: 70px;
        @media screen and (max-width: $tablet) {
          margin-bottom: 30px;
        }
    }
    &__products{
        margin-bottom: 70px;
         @media screen and (max-width: $tablet) {
          margin-bottom: 30px;
        }
    }
    &__least {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      width:100%;
      margin-bottom: 40px;
        @media screen and (max-width:$tablet) {
          margin-bottom: 0px;
        }
      &__pre {
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        margin-right: 15px;
        @media screen and (max-width:$tablet) {
          font-size: 20px;
        line-height: 23px;
        }
      }
      &__price {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        text-overflow: ellipsis;
        overflow: hidden;
        @media screen and (max-width:$tablet) {
          font-size: 20px;
        line-height: 23px;

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
}
</style>