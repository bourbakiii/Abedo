<template>
  <div class="breadcrumbs-wrapper wrapper">
    <div class="breadcrumbs">
      <span class="breadcrumbs__item">Главная</span>
      <span class="breadcrumbs__item">Кафе “Лимончелло”</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.breadcrumbs {
  width: 100%;
  max-width: $maxwidth;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  &__item {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    color: $gray_four;
    position: relative;
    transition: 0.3s;
    cursor: pointer;
    &:active {
      transition: 0.05s;
      transform: scale(0.95);
    }
    &:last-of-type {
      text-decoration: none !important;
      cursor: default;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      display: flex;
      align-items: center;
      color: $black;
      &:active {
        transform: scale(1);
      }
      &::after {
        display: none;
      }
    }
    &::after {
        &:active {
        transform: scale(1);
      }
      content: "/";
      margin: 0px 5px;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: $gray_four;
    }
  }
}
</style>