<template>
  <div class="page static-page wrapper">
    <div class="static-page__content content">
      <Breadcrumbs class="static-page__content__breadcrumbs adaptive-non"/>
      <h1 class="static-page__content__title title-normal">{{page.title}}</h1>
      <div v-html="page.content" class="static-page__content__content">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: {}
    }
  },
  async asyncData({$axios, route, error, store}) {
    let to_return_page = {},
      loading = true;
    await $axios
      .$get(`${$axios.defaults.baseURL}/api/statics/page/${route.params.page_id}`)
      .then(({page}) => {
        to_return_page = page;
      })
      .catch(() => {
        error({statusCode: 404, message: "Ошибка при получении страницы"});
      })
      .finally(() => {
        loading = false;
      });
    return {loading, page: to_return_page};
  }
}
</script>
<style lang="scss" scoped>
.static-page {
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
        margin-top: 20px;
      }
    }
    &__content{
      text-align: left;
      align-self:flex-start;
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      @media screen and (max-width: $tablet) {
        font-size: 15px;
      }
    }
  }
}
</style>



