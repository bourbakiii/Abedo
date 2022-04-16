<template>
  <div class="page partner-page wrapper">
    <div class="partner-page__content content">
      <div class="partner-page__content__main">
        <Breadcrumbs class="partner-page__content__main__breadcrumbs" />
        <PagesPartnerShopBlock
          class="partner-page__content__main__shop__block"
        />
        <PagesPartnerStocks class="partner-page__content__main__stocks" />
        <PagesPartnerCatalog class="partner-page__content__main__catalog" />
      </div>
      <SidebarCart class="partner-page__content__sidebar" />
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  async asyncData({error, params}){
    await axios.get('https://abedo.ru/api/shops').then(({data: {shops :{data}}})=>{
      console.log(data.map(el=>+el.id).includes(+params.partner_id));
      if(!data.map(el=>+el.id).includes(+params.partner_id)){
        error({statusCode: 404, message:"Страница партнера не найдена"})
      }
    });
  },
}
</script>
<style lang="scss" scoped>
.partner-page {
  background-color: $light_grey;
  align-items: center;
  justify-content: flex-start;
  &__content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
    width:100%;
    &__main {
      padding-bottom: 290px;
      width:100%;
      &__breadcrumbs {
        margin-top: 20px;
        margin-bottom: 40px;
      }
      &__shop__block {
        width:100%;
        margin-bottom: 70px;
      }
      &__stocks {
        margin-bottom: 60px;
      }
    }
    &__sidebar {
      position: sticky;
      top: 125px;
      margin-top: 77px;
      margin-left: 30px;
      @media screen and (max-width: $maxwidth+ 20px) {
        margin-left:10px;
      }
      flex-shrink: 0;
      margin-bottom: 10px;
    }
  }
}
</style>
