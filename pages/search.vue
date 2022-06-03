<template>
  <div class="page search-page wrapper">
    <div class="search-page__content content">
      <Breadcrumbs class="search-page__content__breadcrumbs adaptive-non"/>
      <PagesSearchInput @search='setFounded' class="search-page__content__search-input"/>
      <PagesSearchByCategories
        v-if="categories.length"
        :categories="categories"
        class="search-page__content__by-categories"
      />
      <PagesSearchFoundedPartners
        :partners='founded.partners'
        v-if="founded.partners && founded.partners.length"
        class="search-page__content__search__founded-partners"
      />
      <PagesSearchFoundedProducts
        :products='founded.products'
        v-if="founded.products && founded.products.length"
        class="search-page__content__search__founded-products"
      />
      <div v-if="founded.partners && founded.products && founded.partners.length + founded.products.length==0" class="search-page__content__empty">
        Ничего не удалось найти по вашему запросу
      </div>
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
      categories: []
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
    &__search-input {
      margin-bottom: 50px;
    }

    &__search {
      &__founded-partners {
        margin-bottom: 70px;
      }
    }
    &__by-categories {
      margin-bottom: 30px;
    }
    &__empty{
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
