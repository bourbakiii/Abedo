<template>
  <div class="page search-page">
    <Breadcrumbs />
    <PagesSearchInput />
    <PagesSearchFoundedShops />
    <PagesSearchFoundedProducts />
  </div>
</template>

<script>
export default {
  name: "Поиск",
};
</script>
<style lang="scss" scoped>
.page {
  background-color: $light_grey;
}
.breadcrumbs-wrapper {
  margin-top: 25px;
}
.search-input-wrapper {
  margin: 50px 0px;
}
.founded-shops-wrapper,
.founded-products-wrapper {
  margin-top: 50px;
  margin-bottom: 70px;
}
</style>

