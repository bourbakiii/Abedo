<template>
  <div class="page stocks-page content">
    <Breadcrumbs class="stocks-page__breadcrumbs" />
    <h1 class="stocks-page__title title-normal">Список партнеров</h1>
    <div class="stocks-page__content">
        <StockItem v-for='item in [1,2,3,4,5,6,7,8,9]' :key='item'/>
    </div>

  </div>
</template>

<script>
export default {
  name: "StocksPage",
};
</script>
<style lang="scss" scoped>
.stocks-page {
    padding-bottom: 100px;
  &__breadcrumbs {
    margin-top: 20px;
    margin-bottom: 38px;
  }
  &__title {
    margin-bottom: 70px;
    align-self: flex-start;
  }
  &__content{
      width:100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 30px;
  }
}
</style>
