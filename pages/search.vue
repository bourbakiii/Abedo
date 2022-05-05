<template>
  <div class="page search-page wrapper">
    <div class="search-page__content content">
      <Breadcrumbs class="search-page__content__breadcrumbs adaptive-non" />
      <PagesSearchInput @search='setFounded' class="search-page__content__search-input" />
      <PagesSearchByCategories
        v-if="true"
        :categories="categories"
        class="search-page__content__by-categories adaptive"
      />
      <PagesSearchFoundedPartners
      :partners='founded.partners'
        v-if="founded.partners.length"
        class="search-page__content__search__founded-partners"
      />
      <PagesSearchFoundedProducts
       :products='founded.products'
        v-if="founded.products.length"
        class="search-page__content__search__founded-products"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      founded:{
        partners:[],
        products:[]
      },
      categories: [
        // { id: 1, name: "Lorem ipsum dolor mi met megretto consis" },
        // { id: 2, name: "Lorem ipsum dolor mi met megretto consis" },
        // { id: 3, name: "Lorem ipsum dolor mi met megretto consis" },
        // { id: 4, name: "Lorem ipsum dolor mi met megretto consis" },
        // { id: 5, name: "Lorem ipsum dolor mi met megretto consis" },
        // { id: 6, name: "Lorem ipsum dolor mi met megretto consis" },
        // { id: 7, name: "Lorem ipsum dolor mi met megretto consis" },
        // { id: 8, name: "Lorem ipsum dolor mi met megretto consis" },
        // { id: 9, name: "Lorem ipsum dolor mi met megretto consis" },
        // { id: 10, name: "Lorem ipsum dolor mi met megretto consis" },
        // { id: 11, name: "Lorem ipsum dolor mi met megretto consis" },
        // { id: 12, name: "Lorem ipsum dolor mi met megretto consis" },
      ],
      
    };
  },
  methods:{
    setFounded(data){
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

    @media screen and (max-width: $tablet) {
     &__search-input {
      margin-bottom: 30px;
    }
    &__by-categories{
      margin-bottom: 30px;
    }
    &__search {
    &__founded-partners{
      margin-bottom: 30px;
    }}
    }
  }
}
</style>
