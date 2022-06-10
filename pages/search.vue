<template>
  <div class="page search-page wrapper">
    <div class="search-page__content content">
      <Breadcrumbs class="search-page__content__breadcrumbs adaptive-non"/>
      <PagesSearchInput @changeLoading="changeLoading" @search='setFounded' class="search-page__content__search-input"/>
      <PagesSearchByCategories
        v-if="categories.length"
        :categories="categories"
        class="search-page__content__by-categories"/>
      <div class="search-page__content__search_loading" v-if="loading">
        <loader class="search-page__content__search_loading__loader"/>
      </div>
      <div
        v-else-if="!loading && ((founded.partners && founded.partners.length) || (founded.products && founded.products.length)) "
        class="search-page__content__search__founded">
        <PagesSearchFoundedPartners
          :partners='founded.partners'
          v-if="founded.partners && founded.partners.length"
          class="search-page__content__search__founded__partners"
        />
        <PagesSearchFoundedProducts
          :products='founded.products'
          v-if="founded.products && founded.products.length"
          class="search-page__content__search__founded__products"
        />
      </div>
      <p v-else-if="founded.products && founded.partners" class="search-page__content__search_empty">
        Ничего не удалось найти по вашему запросу
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      founded: {
        partners: null,
        products: null
      },
      loading: false,
      categories: [],
    };
  },
  created() {
    this.$axios.get("/api/cuisines/get").then(
      ({
         data: {
           cuisines: {data},
         },
       }) => {
        this.categories = data;
      }
    );

  },
  mounted() {
    this.$store.commit('variables/action', state => {
      state.adaptive_navigation = {
        text: "Поиск",
        slot: 'label',
        info_click: null
      }
    });
  },
  methods: {
    setFounded(data) {
      this.founded = data;
    },
    changeLoading(value) {
      this.loading = value
    }
  }
};
</script>
<style lang="scss" scoped>
.search-page {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  &__content {
    width: 100%;

    &__search-input {
      margin-bottom: 50px;
      width: 100%;
    }

    &__search {
      width: 100%;

      &_loading {
        margin-top: 50px;
      }

      &__founded {
        width: 100%;

        &__partners {
          margin-bottom: 70px;
        }

        &__products {
          margin-bottom: 70px;
        }
      }

      &_empty {
        text-align: left;
        align-self: flex-start;
        width: max-content;
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
      }
    }

    &__by-categories {
      margin-bottom: 30px;
    }

    &__empty {
      align-self: flex-start;
      text-align: left;
      font-family: 'SF Pro Display';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
    }

    @media screen and (max-width: $tablet) {
      &__search-input {
        margin-bottom: 30px;
      }

      &__search {
        &__founded-partners {
          margin-bottom: 30px;
        }
      }
    }
  }
}
</style>
