<template>
  <div class="stock__wrapper">
    <div class="stock">
      <div class="stock__content">
        <div class="stock__content__hood" :class="{ befored: true }">
          <img v-if="false" class="stock__content__hood__logo" />
          <p class="stock__content__hood__name" contenteditable>
            Кафе “Лимончелло” Кафе “Лимончелло” Кафе “Лимончелло”
          </p>
        </div>
        <p class="stock__content__text" contenteditable>
          Получайте 1% бонусами и скидку до 99% Получайте 1% бонусами и скидку
          до 99% Получайте 1% бонусами и скидку до 99% Получайте 1% бонусами и
          скидку до 99%
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.stock {
  &__wrapper {
    background-image: url("@/assets/images/stock-placeholder.png");
    border-radius: 20px;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    overflow: hidden;
    transition: $transition;
    position: relative;
    width: 100%;
    max-width: 400px;
  }
  position: relative;
  padding-bottom: calc(100% * (1 / 2));
  @media screen and (max-width: $tablet){
     height: 134px;
    width: 335px;
    padding-bottom: 0px;
  }
 @media screen and (max-width: $tablet){
   width:100%;
   height: 134px;
 }
  &__content {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    padding: 20px;
    width:100%;
    height:100%;
    background-color: rgba($orange, 0.9);
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    cursor: pointer;
    &__hood {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      height: 60px;
      max-width: 100%;
      flex-shrink: 0;
      position: relative;
      @media screen and (max-width: $tablet) {
        height: 40px;
      }
      &.befored {
        align-items: flex-start;
        justify-content: flex-start;
        height: 35px;
        &::before {
          position: absolute;
          bottom: 0px;
          left: 0px;
          width: 69px;
          height: 1px;
          border-radius: 10px;
          background-color: $white;
          content: "";
          z-index: 2;
        }
      }
      &__logo {
        height: 100%;
        width: 120px;
        @media screen and (max-width: $tablet) {
          width: 80px;
        }
        margin-right: 15px;
        background-color: $white;
        border-radius: 10px;
        padding: 5px;
        flex-shrink: 0;
      }
      &__name {
        flex-grow: 1;
        color: $white;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        text-align: left;
        @media screen and (max-width: $tablet) {
          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 19px;
        }
      }
    }

    &__text {
      max-height: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      line-height: 27px;
      color: $white;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      @media screen and (max-width: $tablet) {
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 21px;
        -webkit-line-clamp: 2;
      }
    }
  }
}
</style>
