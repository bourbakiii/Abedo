<template>
  <div class="page partners-page wrapper">
    <Breadcrumbs/>
    <div class="partners-page__top">
        <h2 class="partners-page__top__title title-normal">Список партнеров</h2>
        <button class="partners-page__top__filter-button">
          <svg
            class="partners-page__top__filter-button-icon"
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
          <p class="partners-page__top__filter-button-text">Фильтр</p>
        </button>
      </div>

      <div class="partners-page__content">
          <CategorySidebar/>
      </div>
  </div>
</template>

<script>
export default {
  name: "PartnersPage",
};
</script>
<style lang="scss" scoped>

.partners-page{
    background-color: $light_grey;
    align-items: center;justify-content: flex-start;
    &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    max-width: $maxwidth;
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
      &:active{
          transition: 0.05s;
          transform: scale(0.96);
      }
    }
  }
}




.breadcrumbs-wrapper {
  margin-top: 25px;
}

</style>

