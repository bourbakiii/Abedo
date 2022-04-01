<template>
  <div class="sidebar">
    <h2 class="sidebar__title title-small">Категории</h2>
    <div class="sidebar__content">
      <button v-for='item in [1,2,3,4,5,6,7,8]' :key='item' class="sidebar__content__item">
        <img
          src="@/assets/images/category-item-image-placeholder.png"
          class="sidebar__content__item__image"
        />
        <p class="sidebar__content__item__name">
          Красота и здоровье
        </p>
        <svg
          class="sidebar__content__item__icon"
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.05187e-07 1.17918L3.71005 5L1.40616e-08 8.82082L1.14496 10L6 5L1.14496 1.36535e-08L1.05187e-07 1.17918Z"
            fill="#A6A8A8"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  background-color: $white;
  width: 100%;
  max-width: 295px;
  width: 295px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 20px;
  border-radius: 20px;
  &__title {
    margin-bottom: 15px;
    width:100%;
  }
  &__content {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width:100%;
    &__item {
      width: 100%;
      min-height: 50px;
      padding: 10px 0px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      background-color: transparent;
      border: none;
      outline: none;
      border-bottom: 1px solid $dark_grey;
      *{
          transition: 0.3s;
      }
      transition: 0.3s;
      &:hover & {
        &__icon *,
        &__image * {
          fill: $orange;
        }
        &__name {
          color: $orange;
        }
      }
      &__image {
        height: 18px;
        width: auto;
        object-fit: contain;
        margin-right: 13px;
        flex-shrink: 0;
      }
      &__name {
        flex-grow: 1;
        text-align: left;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
      }
      &__icon {
        margin-left: 11px;
        flex-shrink: 0;
      }
    }
  }
}
</style>