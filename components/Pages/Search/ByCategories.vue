<template>
  <div class="by-categories">
    <h2 class="title-extra-small by-categories__title">Поиск по категории:</h2>
    <div class="by-categories__content">
      <CategoryItem class='by-categories__content__item adaptive-non' :category="item" v-for="item in categories"
                    :key="`category-${item.id}`"/>
      <CategoryAdaptive class='by-categories__content__item adaptive' :category="item" v-for="item in categories"
                        :key="`category-adaptive-${item.id}`"/>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    categories: {
      required: true,
      default: []
    }
  }
}
</script>
<style lang="scss" scoped>
.by-categories {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  &__title {
    margin-bottom: 20px;
  }

  &__content {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    @media screen and (max-width: $notebook) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: $phone) {
      grid-template-columns: repeat(2, 1fr);
    }
    grid-gap: 15px;

    &__item {
      width: 100%;
      overflow: hidden;
    }
  }
}
</style>
