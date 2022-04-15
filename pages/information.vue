<template>
  <div class="page information-page wrapper">
      <div class="information-page__content content">
        <Breadcrumbs class="information-page__content__breadcrumbs"/>
          <PagesInformationAddresses class='information-page__content__addresses'/>
          <PagesInformationOrders class='information-page__content__orders'/>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.information-page{
  background-color: $light_grey;
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