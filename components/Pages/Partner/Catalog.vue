<template>
  <div class="catalog partner-catalog">
    <h2 class="catalog__title title-extra-normal">
      Разделы каталога “Лимончелло”
    </h2>
    <div class="catalog__chapters">
      <ChapterItem
        class="catalog__chapters__item"
        text="Салаты"
        :active="true"
      />
      <ChapterItem
        class="catalog__chapters__item"
        text="Блюда из рыбы"
        :active="false"
      />
      <ChapterItem
        class="catalog__chapters__item"
        text="Паста"
        :active="false"
      />
      <ChapterItem
        class="catalog__chapters__item"
        text="Холодные блюда"
        :active="false"
      /><ChapterItem
        class="catalog__chapters__item"
        text="Салаты"
        :active="false"
      />
      <ChapterItem
        class="catalog__chapters__item"
        text="Блюда из рыбы"
        :active="false"
      />
      <ChapterItem
        class="catalog__chapters__item"
        text="Паста"
        :active="false"
      />
      <ChapterItem
        class="catalog__chapters__item"
        text="Холодные блюда"
        :active="false"
      /><ChapterItem
        class="catalog__chapters__item"
        text="Салаты"
        :active="false"
      />
      <ChapterItem
        class="catalog__chapters__item"
        text="Блюда из рыбы"
        :active="false"
      />
      <ChapterItem
        class="catalog__chapters__item"
        text="Паста"
        :active="false"
      />
      <ChapterItem
        class="catalog__chapters__item"
        text="Холодные блюда"
        :active="false"
      />
    </div>
    <div class="catalog__catalog">
        <ProductItem v-for='item in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]' :key='item'/>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.catalog {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  &__title {
    align-self: flex-start;
    margin-bottom: 30px;
  }
  &__chapters{
      width:100%;
      display: flex;align-items: center; justify-content: flex-start; flex-direction: row; flex-wrap: wrap;
      margin-bottom: 50px;
      &__item{
          flex-grow: 0;
          flex-shrink: 0;
          margin-right:5px;
          margin-bottom: 10px;
      }
  }
}
</style>
