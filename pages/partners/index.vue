<template>
  <div class="page partners-page wrapper">
    <div class="partners-page__content content">
      <Breadcrumbs class="partners-page__breadcrumbs adaptive-non" />
      <div class="partners-page__top adaptive-non">
        <h2 class="partners-page__top__title title-normal">Список партнеров</h2>

        <button
          @click="show_filters = !show_filters"
          class="partners-page__top__filter-button adaptive-non"
        >
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
      <div class="partners-page__top_adaptive adaptive">
        <ButtonStandart class="partners-page__top_adaptive__button">
          <svg
            class="partners-page__top_adaptive__button__icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="3.33331"
              y="3.33331"
              width="5"
              height="5.83333"
              rx="1"
              stroke="#5C6784"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <rect
              x="3.33331"
              y="12.5"
              width="5"
              height="4.16667"
              rx="1"
              stroke="#5C6784"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <rect
              x="11.6667"
              y="3.33331"
              width="5"
              height="4.16667"
              rx="1"
              stroke="#5C6784"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <rect
              x="11.6667"
              y="10.8333"
              width="5"
              height="5.83333"
              rx="1"
              stroke="#5C6784"
              stroke-width="2"
              stroke-linejoin="round"
            />
          </svg>
          Категории</ButtonStandart
        >
        <button
          @click="show_filters = !show_filters"
          class="partners-page__top_adaptive__filters-button"
        >
          <svg
            class="partners-page__top_adaptive__filters-button__icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9036 4.39326H7.97932C7.73397 3.66455 7.04471 3.13806 6.23432 3.13806C5.42393 3.13806 4.73467 3.66455 4.48932 4.39326H3.09631C2.77272 4.39326 2.51038 4.6556 2.51038 4.97919C2.51038 5.30279 2.77272 5.56513 3.09631 5.56513H4.48936C4.73471 6.29384 5.42397 6.82033 6.23436 6.82033C7.04475 6.82033 7.73401 6.29384 7.97936 5.56513H16.9036C17.2272 5.56513 17.4896 5.30279 17.4896 4.97919C17.4896 4.6556 17.2272 4.39326 16.9036 4.39326ZM6.23432 5.64845C5.8653 5.64845 5.56506 5.34822 5.56506 4.97919C5.56506 4.61017 5.8653 4.30994 6.23432 4.30994C6.60334 4.30994 6.90358 4.61017 6.90358 4.97919C6.90358 5.34822 6.60334 5.64845 6.23432 5.64845Z"
              fill="#454545"
            />
            <path
              d="M16.9036 9.41413H15.5105C15.2652 8.68542 14.5759 8.15894 13.7655 8.15894C12.9552 8.15894 12.2659 8.68542 12.0206 9.41413H3.09631C2.77272 9.41413 2.51038 9.67647 2.51038 10.0001C2.51038 10.3237 2.77272 10.586 3.09631 10.586H12.0206C12.2659 11.3147 12.9552 11.8412 13.7656 11.8412C14.5759 11.8412 15.2652 11.3147 15.5106 10.586H16.9036C17.2272 10.586 17.4896 10.3237 17.4896 10.0001C17.4896 9.67647 17.2272 9.41413 16.9036 9.41413ZM13.7656 10.6693C13.3965 10.6693 13.0963 10.3691 13.0963 10.0001C13.0963 9.63104 13.3965 9.33081 13.7656 9.33081C14.1346 9.33081 14.4348 9.63104 14.4348 10.0001C14.4348 10.3691 14.1346 10.6693 13.7656 10.6693Z"
              fill="#454545"
            />
            <path
              d="M16.9036 14.4349H10.4898C10.2444 13.7062 9.55514 13.1797 8.74475 13.1797C7.93436 13.1797 7.2451 13.7062 6.99975 14.4349H3.09631C2.77272 14.4349 2.51038 14.6972 2.51038 15.0208C2.51038 15.3444 2.77272 15.6068 3.09631 15.6068H6.99975C7.2451 16.3355 7.93436 16.862 8.74475 16.862C9.55514 16.862 10.2444 16.3355 10.4898 15.6068H16.9036C17.2272 15.6068 17.4896 15.3444 17.4896 15.0208C17.4896 14.6972 17.2272 14.4349 16.9036 14.4349ZM8.74475 15.6901C8.37573 15.6901 8.07549 15.3899 8.07549 15.0209C8.07549 14.6518 8.37573 14.3516 8.74475 14.3516C9.11377 14.3516 9.41401 14.6518 9.41401 15.0208C9.41401 15.3898 9.11377 15.6901 8.74475 15.6901Z"
              fill="#454545"
            />
          </svg>

          <p class="partners-page__top_adaptive__filters-button__text">
            Фильтры
          </p>
        </button>
      </div>
      <transition name="filter">
        <Filters v-if="show_filters" class="partners-page__filters" />
      </transition>
      <div class="partners-page__partners">
        <CategorySidebar
          class="partners-page__partners__sidebar adaptive-non"
        />
        <div class="partners-page__partners__content">
          <div class="partners-page__partners__content__cards">
            <client-only>
              <PartnerItem
                class="partners-page__partners__content__cards__item"
                v-for="item of partners"
                :key="item.id"
                :partner="item"
              />
            </client-only>
          </div>
          <ButtonStandart v-if="params.page <= params.last_page" @click.native="$fetch" class="partners-page__partners__content__button"
            >Загрузить еще</ButtonStandart
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show_filters: false,
      partners: [],
      params: {
        page: 1,
        last_page: null,
        limit: 10,
      },
      loading: true,
    };
  },
  async fetch() {
    this.loading = true;
    await this.$axios
      .$get(`${this.$axios.defaults.baseURL}/api/shops`, { params:this.params })
      .then(({ shops }) => {
        this.partners = this.partners.concat(shops.data);
        this.params.page++;
        this.params.last_page = shops.last_page;
      })
      .finally(() => this.loading = false);
  },
};
</script>
<style lang="scss" scoped>
.partners-page {
  align-items: center;
  justify-content: flex-start;
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
    &__title {
      @media screen and (max-width: $tablet) {
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
      }
    }
    &__filter-button {
      height: 30px;
      width: 120px;
      background-color: $white;
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
      &:active {
        transition: 0.05s;
        transform: scale(0.96);
      }
      &_adaptive {
        background-color: transparent;
        border: none;
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    &_adaptive {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      &__button {
        height: 35px !important;
        background-color: transparent;
        padding: 0px 15px !important;
        svg *{
        fill: transparent !important;
        }
        &:hover{
          svg * {
            stroke: $white;
          }
        }
        &__icon {
          margin-right: 10px;
        }
      }
      &__filters-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        background-color: transparent;
        outline: none;
        border: none;
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 17px;
        &__icon {
          margin-right: 10px;
        }
      }
      @media screen and (max-width: $tablet) {
        margin-top: 0px;
        margin-bottom: 20px;
      }
    }
  }

  &__partners {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    height: auto;
    margin-top: 70px;
    @media screen and (max-width: $tablet) {
      margin-top: 20px;
      flex-direction: column;
    }
    &__sidebar {
      flex-shrink: 0;
      margin-right: 30px;
      width: 295px;
      max-width: 295px;
      @media screen and (max-width: $notebook) {
        margin-right: 10px;
        width: 280px;
      }
      @media screen and (max-width: $tablet) {
        width: 100%;
        max-width: 100%;
        margin-right: 0px;
        margin-bottom: 30px;
      }
    }
    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-direction: column;
      width: 100%;
      &__cards {
        flex-grow: 1;
        flex-shrink: 0;
        max-width: 100%;
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 30px;
        @media screen and (max-width: $maxwidth) {
          grid-gap: 15px;
        }
        @media screen and (max-width: $notebook) {
          grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width: $tablet) {
          grid-template-columns: repeat(1, 1fr);
          grid-gap: 15px;
          width: 100%;
        }
        &__item {
          width: 100%;
          overflow: hidden;
          &_adaptive {
            width: 100%;
          }
        }
      }
      &__button {
        width: 306px;
        height: 50px;
        margin-top: 60px;
        background-color: $light_grey;
        text-transform: uppercase !important;
        @media screen and (max-width: $tablet) {
          margin-top: 30px;
          width: 228px;
          height: 40px;
          text-transform: none !important;
        }
      }
    }
  }
}

.breadcrumbs {
  margin-top: 25px;
}
</style>
