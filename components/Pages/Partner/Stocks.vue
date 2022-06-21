<template>
  <div class="partner-stocks">
    <Stock
      :stock="stock"
      v-for="(stock,index) in stocks"
      :index="index"
      :key="stock.id"
      class="partner-stocks__item"
    />
  </div>
</template>
<script>
export default {
  props: {
    stocks: {
      required: true,
      default: []
    },
  },
};
</script>
<style lang="scss" scoped>
.partner-stocks {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  &__item {
    width: 100%;
    max-width: 100%;
    overflow: hidden;
  }
  @media screen and (max-width: $notebook) {
    grid-gap: 20px;
  }
  @media screen and (max-width: $sidebar_dn) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }
}
</style>
