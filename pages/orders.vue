<template>
  <div class="page orders-page wrapper">
      <div class="orders-page__content content">
        <Breadcrumbs class="orders-page__content__breadcrumbs"/>
          <PagesInformationOrders class='orders-page__content__orders'/>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.orders-page{
  padding-bottom: 100px;
  &__content{
    flex-grow: 1;
    &__breadcrumbs{
      margin-top:20px;
      margin-bottom:40px;
    }
  }
}
</style>
