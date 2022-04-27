<template>
  <div class="new-shops catalog-wrapper wrapper adaptive-non-wrapper">
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
      <!-- <form @action.prevent="" class="catalog__filters">
        <div class="catalog__filters__input__wrapper">
          <svg
            class="catalog__filters__input__icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1887_4787)">
              <path
                d="M8.80758 0C3.95121 0 0 3.95121 0 8.80758C0 13.6642 3.95121 17.6152 8.80758 17.6152C13.6642 17.6152 17.6152 13.6642 17.6152 8.80758C17.6152 3.95121 13.6642 0 8.80758 0ZM8.80758 15.9892C4.8477 15.9892 1.62602 12.7675 1.62602 8.80762C1.62602 4.84773 4.8477 1.62602 8.80758 1.62602C12.7675 1.62602 15.9891 4.8477 15.9891 8.80758C15.9891 12.7675 12.7675 15.9892 8.80758 15.9892Z"
                fill="#A6A8A8"
              />
              <path
                d="M19.7617 18.6122L15.1005 13.9509C14.7829 13.6333 14.2685 13.6333 13.9509 13.9509C13.6332 14.2683 13.6332 14.7832 13.9509 15.1005L18.6121 19.7618C18.7709 19.9206 18.9788 20 19.1869 20C19.3948 20 19.6029 19.9206 19.7617 19.7618C20.0793 19.4444 20.0793 18.9295 19.7617 18.6122Z"
                fill="#A6A8A8"
              />
            </g>
            <defs>
              <clipPath id="clip0_1887_4787">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <input
            class="catalog__filters__input"
            type="text"
            name="query"
            placeholder="Фильтр по названию"
          />
        </div>
          <Checkbox id='delivery'  v-model='delivery'/>
      </form> -->
      <div class="catalog__content">
        <ShopItem
          class="catalog__content__item"
          v-for="(item, index) in 12"
          :key="index"
        />
      </div>
      <ButtonStandart
        @action="$router.push('/partners')"
        class="catalog__button"
        >Все магазины</ButtonStandart
      >
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      delivery: false
    }
  }
};
</script>

<style lang="scss" scoped>
.catalog {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  max-width: $maxwidth;
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 35px;
    &__filter-button {
      height: 30px;
      width: 120px;
      background-color: $light_grey;
      border-radius: 5px;
      transition: $transition;
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
  &__filters {
    width: 100%;
    background-color: red;
    margin-bottom: 30px;
    &__input {
              width:100%;
        height:100%;
        font-family: 'SF Pro Display';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
border:none;
outline:none;
&::placeholder{
  color: $extra_dark_grey;
}
      &__wrapper {
        width: 414px;
        height: 50px;
        border-radius: 90px;
        background-color: $white;
        border: 1px solid $darkblue;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        padding: 15px;
      }
      &__icon{
        margin-right:15px;
        flex-shrink: 0;
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
    &__item {
      overflow: hidden;
      width: 100%;
    }
  }
  &__button {
    margin-top: 70px;
    align-self: center;
    justify-content: center;
    text-transform: uppercase;
    width: 306px;
  }
}
</style>
