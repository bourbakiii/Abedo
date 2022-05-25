<template>
  <div class="adaptive-categories wrapper adaptive-non-wrapper">
    <h1 class="adaptive-categories__title title-small">Категории</h1>
      <div class="adaptive-categories__content">
      <CategoryAdaptive
        v-for="category in categories"
        :category="category"
        :key="category.id"
        class="adaptive-categories__item"
      />
     </div>
    </div>
</template>
<script>
export default {
  props: {
    categories: {
      required: true,
      default() {
        return [];
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.adaptive-categories {
  width: 100%;
  align-items: flex-start !important;
  &__title {
    margin-bottom: 20px;
  }
  &__content {
    width: 100%;
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    @media screen and (max-width: 520px) {
      grid-template-columns: repeat(2, 1fr);
    }
    &__item {
      width: 100%;
      max-width: 100%;
      overflow: hidden;
    }
  }
}
</style>
