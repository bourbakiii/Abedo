<template>
  <div class="page order-page order-page__wrapper">
    <div class="order-page__content content">
      <Breadcrumbs class="order-page__content__breadcrumbs" />
      <PagesOrderInformation class="order-page__content__information" />
      <PagesOrderContent class="order-page__content__content" />
      <div class="order-page__content__final">
        <p class="order-page__content__final__pre">Итого:</p>
        <p class="order-page__content__final__value" contenteditable>1 330 ₽</p>
      </div>
      <button class="order-page__content__back">
          Вернуться к списку заказов
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.order-page {
  &__wrapper {
    background-color: $light_grey;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }
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
    &__content {
      margin-top: 70px;
    }
    &__final {
        margin-top: 70px;
        margin-bottom: 40px;
      text-align: left;
      display: flex;
      &__pre {
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        text-transform: capitalize;
        margin-right: 15px;
      }
      &__value {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
      }
    }
    &__back{
        font-family: 'SF Pro Display';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
background-color: transparent;
border: none;
outline: none;
color: $darkblue;
&:hover{
text-decoration-line: underline;
}
    }
  }
}
</style>