<template>
  <div class="page search-page wrapper">
    <div class="search-page__content content">
      <Breadcrumbs class="search-page__content__breadcrumbs" />
      <PagesSearchInput class="search-page__content__search__input" />
      <PagesSearchFoundedShops
        class="search-page__content__search__founded__shops"
      />
      <PagesSearchFoundedProducts
        class="search-page__content__search__founded__products"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Поиск",
};
</script>
<style lang="scss" scoped>
.search-page {
  background-color: $light_grey;

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

