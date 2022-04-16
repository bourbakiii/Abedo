<template>
  <div class="catalog partner-catalog">
    <h2 class="catalog__title title-extra-normal">
      Разделы каталога “Лимончелло”
    </h2>
    <div class="catalog__chapters">
      <ChapterItem
        class="catalog__chapters__item"
        text="Салаты"
        v-for="(item,index) in 12" :key='index'
        :active="true"
      />
      
    </div>
    <div class="catalog__products">
      <ProductItem
        class="catalog__products__item"
        v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]"
        :key="item"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.catalog {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width:100%;
  background-color: red;
  &__title {
    align-self: flex-start;
    margin-bottom: 30px;
  }
  &__chapters {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 50px;
    &__item {
      flex-grow: 0;
      flex-shrink: 0;
      margin-right: 5px;
      margin-bottom: 10px;
    }
  }
  &__products {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    &__item {
      width: auto;
      overflow: hidden;
    }
  }
}
</style>
