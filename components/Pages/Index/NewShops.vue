<template>
  <div class="new-shops catalog-wrapper wrapper">
    <div class="catalog">
      <div class="catalog__top">
        <h2 class="catalog__top__title title-normal">Новые магазины</h2>
        <button class="catalog__top__filter-button">
          <svg
            class="catalog__top__filter-button-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12L5 4"
              stroke="#454545"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M19 20L19 18"
              stroke="#454545"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M5 20L5 16"
              stroke="#454545"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M19 12L19 4"
              stroke="#454545"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M12 7L12 4"
              stroke="#454545"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M12 20L12 12"
              stroke="#454545"
              stroke-width="2"
              stroke-linecap="round"
            />
            <circle
              cx="5"
              cy="14"
              r="2"
              stroke="#454545"
              stroke-width="2"
              stroke-linecap="round"
            />
            <circle
              cx="12"
              cy="9"
              r="2"
              stroke="#454545"
              stroke-width="2"
              stroke-linecap="round"
            />
            <circle
              cx="19"
              cy="15"
              r="2"
              stroke="#454545"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <p class="catalog__top__filter-button-text">Фильтр</p>
        </button>
      </div>
      <div class="catalog__content">
        <ShopItem class="catalog__content__item" v-for='(item,index) in 12' :key='index' />
      </div>
      <ButtonStandart @action='$router.push("/partners")' class='catalog__button' height='50' :uppercase='true'>Все магазины</ButtonStandart>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>

.catalog {
  display: flex;align-items: center;justify-content: flex-start;flex-direction: column;
  width: 100%;
  max-width: $maxwidth;
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    margin-bottom: 35px;
    &__filter-button {
      height: 30px;
      width: 120px;
      background-color: $light_grey;
      border-radius: 5px;
      transition: 0.3s;
      border: none;
      outline: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0px 15px;
      &-text {
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        display: flex;
        align-items: center;
      }
    }
  }
  &__content {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    overflow: hidden;
    @media screen and (max-width: $notebook) {
    grid-template-columns: repeat(3, 1fr);
      
    }
    &__item{
      overflow: hidden;
      width:100%;
    }
  }
  &__button{
    margin-top: 70px;
    align-self: center;
    justify-content: center;
  }
}
</style>