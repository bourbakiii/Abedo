<template>
  <div class="adaptive-categories wrapper">
    <h1 class="adaptive-categories__title title-small">Категории</h1>
    <div class="adaptive-categories__content">
      <CategoryAdaptive
        v-for="item in 12"
        :key="item"
        class="adaptive-categories__item"
      />
    </div>
  </div>
</template>
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
    &__item {
      width: 100%;
      max-width: 100%;
      overflow: hidden;
    }
  }
}
</style>