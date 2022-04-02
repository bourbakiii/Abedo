<template>
  <div class="partner-stocks">
      <StockItem class='partner-stocks__item'/>
      <StockItem class='partner-stocks__item'/>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.partner-stocks{
    display: flex;align-items: center;justify-content: flex-start;flex-direction: row;
    height: auto; width: 100%;
    background-color: lightpink;
    &__item{
    margin-right: 30px;
    &:last-of-type{
        margin-right: 0px;
    }
    }
}
</style>