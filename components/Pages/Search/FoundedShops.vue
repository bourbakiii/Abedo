<template>
  <div class="founded-shops">
    <h1 class="founded-shops__title title-normal">Найденные заведения</h1>
    <div class="founded-shops__content content">
      <ShopItem
        class="founded-shops__content__item"
        v-for="(item, index) in 4"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "FoundedShops",
};
</script>

<style lang="scss" scoped>
.founded-shops {
  width: 100%;
  max-width: $maxwidth;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  &__title {
    margin-bottom: 40px;
  }
  &__content {
    width: 100%;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    @media screen and (max-width: $notebook) {
      grid-gap: 15px;
    }
    @media screen and (max-width: $tablet) {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
    }
    @media screen and (max-width: $phone) {
      grid-template-columns: repeat(2, 1fr);
    }
    &__item {
      width: auto;
      overflow: hidden;
    }
  }
}
</style>
