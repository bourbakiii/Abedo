<template>
  <div class="page addresses-page wrapper">
      <div class="addresses-page__content content">
        <Breadcrumbs class="addresses-page__content__breadcrumbs"/>
          <PagesInformationAddresses class='addresses-page__content__addresses'/>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.addresses-page{
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
