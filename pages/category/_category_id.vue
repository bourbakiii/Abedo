<template>
  <div class="page categories-page wrapper">
    <div class="categories-page__content content">
      <Breadcrumbs class="categories-page__content__breadcrumbs adaptive-non" />
      <div class="categories-page__content__top">
        <h1 class="categories-page__content__top__title title-normal">
          Заведения
        </h1>
        <button
          @click="show_filters = !show_filters"
          class="categories-page__content__top__filter-button adaptive-non"
        >
          <svg
            class="categories-page__content__top__filter-button-icon"
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
          <p class="categories-page__content__top__filter-button-text">
            Фильтр
          </p>
        </button>
        <button
          @click="show_filters = !show_filters"
          class="categories-page__content__top__filter-button_adaptive adaptive"
        >
          <svg
            class="categories-page__content__top__filter-button__icon categories-page__content__top__filter-button_adaptive__icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9037 4.39324H7.97944C7.73409 3.66453 7.04483 3.13805 6.23444 3.13805C5.42405 3.13805 4.73479 3.66453 4.48944 4.39324H3.09644C2.77284 4.39324 2.5105 4.65559 2.5105 4.97918C2.5105 5.30277 2.77284 5.56512 3.09644 5.56512H4.48948C4.73483 6.29383 5.42409 6.82031 6.23448 6.82031C7.04487 6.82031 7.73413 6.29383 7.97948 5.56512H16.9037C17.2273 5.56512 17.4897 5.30277 17.4897 4.97918C17.4897 4.65559 17.2273 4.39324 16.9037 4.39324ZM6.23444 5.64844C5.86542 5.64844 5.56519 5.3482 5.56519 4.97918C5.56519 4.61016 5.86542 4.30992 6.23444 4.30992C6.60347 4.30992 6.9037 4.61016 6.9037 4.97918C6.9037 5.3482 6.60347 5.64844 6.23444 5.64844Z"
              fill="#454545"
            />
            <path
              d="M16.9037 9.41412H15.5107C15.2653 8.6854 14.576 8.15892 13.7657 8.15892C12.9553 8.15892 12.266 8.6854 12.0207 9.41412H3.09644C2.77284 9.41412 2.5105 9.67646 2.5105 10.0001C2.5105 10.3236 2.77284 10.586 3.09644 10.586H12.0207C12.266 11.3147 12.9553 11.8412 13.7657 11.8412C14.576 11.8412 15.2653 11.3147 15.5107 10.586H16.9037C17.2273 10.586 17.4897 10.3236 17.4897 10.0001C17.4897 9.67646 17.2273 9.41412 16.9037 9.41412ZM13.7657 10.6693C13.3967 10.6693 13.0964 10.3691 13.0964 10.0001C13.0964 9.63103 13.3967 9.3308 13.7657 9.3308C14.1347 9.3308 14.4349 9.63103 14.4349 10.0001C14.4349 10.3691 14.1347 10.6693 13.7657 10.6693Z"
              fill="#454545"
            />
            <path
              d="M16.9037 14.4349H10.4899C10.2445 13.7061 9.55526 13.1797 8.74487 13.1797C7.93448 13.1797 7.24522 13.7061 6.99987 14.4349H3.09644C2.77284 14.4349 2.5105 14.6972 2.5105 15.0208C2.5105 15.3444 2.77284 15.6067 3.09644 15.6067H6.99987C7.24522 16.3354 7.93448 16.8619 8.74487 16.8619C9.55526 16.8619 10.2445 16.3354 10.4899 15.6067H16.9037C17.2273 15.6067 17.4897 15.3444 17.4897 15.0208C17.4897 14.6972 17.2273 14.4349 16.9037 14.4349ZM8.74487 15.6901C8.37585 15.6901 8.07561 15.3899 8.07561 15.0208C8.07561 14.6518 8.37585 14.3516 8.74487 14.3516C9.1139 14.3516 9.41413 14.6518 9.41413 15.0208C9.41413 15.3898 9.1139 15.6901 8.74487 15.6901Z"
              fill="#454545"
            />
          </svg>
        </button>
      </div>
      <transition name="filter">
        <Filters
          v-if="show_filters"
          class="categories-page__content__filters"
        />
      </transition>
      <div
        :class="{ 'small-margin': show_filters }"
        class="categories-page__content__shops"
      >
        <client-only>
          <PartnerItem
            v-for="partner in partners"
            :key="partner.id"
            :partner="partner"
            class="categories-page__content__shops__item"
          />
        </client-only>
      </div>
    </div>
  </div>
</template>
<script>
import qs from "qs";
export default {
  data() {
    return {
      show_filters: false,
      params: {
        cuisine: this.$route.params.category_id,
      },
      partners: [],
    };
  },
  async fetch() {
    await this.$axios
      .get("/api/shops", {
        params: this.params,
        paramsSerializer: (params) => {
          return qs.stringify({params});
        },
      })
      .then(
        ({
          data: {
            shops: { data },
          },
        }) => {
          this.partners = data;
        }
      );
  },
};
</script>
<style lang="scss" scoped>
.categories-page {
  &__content {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    flex-grow: 1;
    &__top {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      margin-bottom: 10px;
      transition: $transition;
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
    }

    &__shops {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 30px;
      margin-top: 50px;
      width: 100%;
      max-width: 100%;
      @media screen and (max-width: $tablet) {
        margin-top: 20px;
      }
      @media screen and (max-width: $notebook) {
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 15px;
      }
      @media screen and (max-width: $tablet) {
        grid-template-columns: repeat(1, 1fr);
      }
      &__item {
        width: 100%;
        overflow: hidden;
      }
    }
  }
}
</style>
