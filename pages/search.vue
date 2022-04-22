<template>
  <div class="page search-page wrapper">
    <div class="search-page__content content">
      <Breadcrumbs class="search-page__content__breadcrumbs adaptive-non" />
      <PagesSearchInput class="search-page__content__search__input" />
      <PagesSearchByCategories v-if='true' :categories="categories" class="search-page__content__by-categories"/>
      <PagesSearchFoundedShops
      v-if='true'
        class="search-page__content__search__founded__shops"
      />
      <PagesSearchFoundedProducts
      v-if='true'
        class="search-page__content__search__founded__products"
      />
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      categories: [
        { id: 1, name: "Lorem ipsum dolor mi met megretto consis" },
        { id: 2, name: "Lorem ipsum dolor mi met megretto consis" },
        { id: 3, name: "Lorem ipsum dolor mi met megretto consis" },
        { id: 4, name: "Lorem ipsum dolor mi met megretto consis" },
        { id: 5, name: "Lorem ipsum dolor mi met megretto consis" },
        { id: 6, name: "Lorem ipsum dolor mi met megretto consis" },
        { id: 7, name: "Lorem ipsum dolor mi met megretto consis" },
        { id: 8, name: "Lorem ipsum dolor mi met megretto consis" },
        { id: 9, name: "Lorem ipsum dolor mi met megretto consis" },
        { id: 10, name: "Lorem ipsum dolor mi met megretto consis" },
        { id: 11, name: "Lorem ipsum dolor mi met megretto consis" },
        { id: 12, name: "Lorem ipsum dolor mi met megretto consis" },
      ],
    }
  }
};
</script>
<style lang="scss" scoped>
.search-page {
  display: flex;align-items: center;justify-content: flex-start;flex-direction:column;
  &__content {
    &__breadcrumbs {
      margin-top: 25px;
    }
    &__search__input {
      margin: 50px 0px;
    }
    &__search__founded__shops,
    &__search__founded__products {
      margin-bottom: 70px;
    }
  }
}
</style>

