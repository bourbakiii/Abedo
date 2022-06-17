<template>
  <div class="page stocks-page wrapper">
    <div class="stocks-page__content content">
      <Breadcrumbs class="stocks-page__content__breadcrumbs adaptive-non"  :way="[{name:'Акции', link:`/stocks`}]" />
      <h1 class="stocks-page__content__title title-normal">Акции заведений</h1>
      <div class="stocks-page__content__content">
        <Stock
          class="stocks-page__content__content__item"
          v-for="stock in stocks"
          :key="stock.id"
          :stock="stock"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StocksPage",
    async fetch() {
    await this.$axios
      .$get(`${this.$axios.defaults.baseURL}/api/shares`)
      .then(({shares:{data}}) => {
        this.stocks=data;
      });
    },
    data(){
      return{
        stocks:[]
      }
    },
    mounted(){
      this.$store.commit('variables/action', state=>{
      state.adaptive_navigation = {
        text: "Акции",
        slot: 'label',
        info_click: null
      }
    });
    }
};
</script>
<style lang="scss" scoped>
.stocks-page {
  justify-content: flex-start;
  &__content {

    &__title {
      margin-bottom: 70px;
      align-self: flex-start;
      @media screen and (max-width: $tablet) {
        margin-bottom: 40px;
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
        margin-top:20px;
      }
    }
    &__content {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 30px;
      @media screen and (max-width: $notebook) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 30px;
      }
      @media screen and (max-width: $tablet) {
        grid-gap: 15px;

      }
      @media screen and (max-width: $tablet_middle) {
        grid-template-columns: repeat(1, 1fr);
      }
      &__item {
        width: 100%;
        overflow: hidden;
        @media screen and (max-width: $notebook) {
          width:100%;
          max-width: 100%;
        }
      }
    }
  }
}
</style>
