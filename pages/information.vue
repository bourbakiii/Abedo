<template>
  <div class="page information-page__wrapper">
    <div class="information-page content">
      <Breadcrumbs class="information-page__breadcrumbs" />
        <PagesInformationAddresses class="information-page__addresses"/>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.information-page {
  &__wrapper {
    background-color: $light_grey;
    align-items: center;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }
  align-items: flex-start;
  &__breadcrumbs {
    margin-top: 20px;
    margin-bottom: 40px;
  }
}
</style>
