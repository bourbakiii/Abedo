<template>
  <div class="page search-page wrapper">
    <Breadcrumbs/>
    <PagesSearchInput />
    <PagesSearchFoundedShops/>
    <PagesSearchFoundedProducts/>
  </div>
</template>

<script>
export default {
  name: "Поиск",
};
</script>
<style lang="scss" scoped>
.page{
  background-color: $gray_one;
}
</style>

