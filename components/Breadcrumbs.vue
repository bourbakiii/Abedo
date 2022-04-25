<template>
    <div class="breadcrumbs">
      <span class="breadcrumbs__item">Главная</span>
      <span class="breadcrumbs__item">Кафе “Лимончелло”</span>
    </div>
</template>
<style lang="scss" scoped>
.breadcrumbs {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 40px;
  &__item {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    color: $extra_dark_grey;
    position: relative;
    transition: $transition;
    cursor: pointer;

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
      
      &::after {
        display: none;
      }
    }
    &::after {
      content: "/";
      margin: 0px 5px;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: $extra_dark_grey;
    }
  }
}
</style>
