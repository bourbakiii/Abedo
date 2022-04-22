<template>
  <div class="page order-page wrapper">
    <div class="order-page__content content">
      <Breadcrumbs class="order-page__content__breadcrumbs" />
      <PagesOrderInformation class="order-page__content__information" />
      <PagesOrderProducts class="order-page__content__products" />
      <div class="order-page__content__least">
        <p class="order-page__content__least__pre">Итого:</p>
        <p class="order-page__content__least__price" contenteditable>1 330 ₽</p>
        
      </div>
       <button class="order-page__content__back">
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
  padding-bottom: 100px;
  &__content {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    &__breadcrumbs {
      margin-top: 20px;
      margin-bottom: 40px;
    }
    &__information{
        margin-bottom: 70px;
    }
    &__products{
        margin-bottom: 70px;
    }
    &__least {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      width:100%;
      margin-bottom: 40px;
      &__pre {
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        margin-right: 15px;
      }
      &__price {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        text-overflow: ellipsis;
        overflow: hidden;
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