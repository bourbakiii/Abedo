<template>
  <div class="page search-page">
    <PagesSearchInput />
    <PagesSearchFoundedShops/>
    <PagesSearchFoundedProducts/>
  </div>
</template>

<script>
export default {
  name: "SearchPage",
};
</script>
<style lang="scss" scoped>
.page{
  background-color: $gray_one;
}
</style>

