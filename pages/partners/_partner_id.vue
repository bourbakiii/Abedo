<template>
  <div class="page partner-page wrapper">
    <div class="partner-page__content content">
      <div class="partner-page__content__main">
        <Breadcrumbs class="partner-page__content__main__breadcrumbs" />
        <PagesPartnerShopBlock
          class="partner-page__content__main__shop__block"
        />
        <PagesPartnerStocks class="partner-page__content__main__stocks" />
      </div>
      <SidebarCart class="partner-page__content__sidebar" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.partner-page {
  background-color: $light_grey;
  align-items: center;
  justify-content: flex-start;
  &__content {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row;
    &__main {
      width: 100%;
      &__breadcrumbs {
        margin-top: 20px;
        margin-bottom: 40px;
      }
      &__shop__block {
        margin-bottom: 70px;
      }
      &__stocks {
        margin-bottom: 60px;
      }
    }
    &__sidebar {
      margin-top: 77px;
      flex-shrink: 0;
      margin-left: 30px;
    }
  }
}
</style>
