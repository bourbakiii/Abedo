<template>
  <div class="page new-page wrapper">
    <div class="new-page__content content">
      <Breadcrumbs class="new-page__content__breadcrumbs adaptive-non"/>
      <div class="new-page__content__content">
        <h1 class="new-page__content__content__title title-normal">{{ item.title }}</h1>
        <img class="new-page__content__content__image" :src="`${$axios.defaults.baseURL}${item.image.original}`"
             v-if="item.image" alt="Item image"/>
        <!--      <div v-html="item.content" class="new-page__content__content">-->
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {}
    }
  },
  async asyncData({$axios, route, error, store}) {
    let to_return_new = {},
      loading = true;
    await $axios
      .$get(`${$axios.defaults.baseURL}/api/news/${route.params.new_id}`)
      .then(({news}) => {
        to_return_new = news;
      })
      .catch(() => {
        error({statusCode: 404, message: "Ошибка при получении новости"});
      })
      .finally(() => {
        loading = false;
      });
    return {loading, item: to_return_new};
  }
}
</script>
<style lang="scss" scoped>
.new-page {
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

    &__content {
      text-align: left;
      align-self: flex-start;
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      @media screen and (max-width: $tablet) {
        font-size: 15px;
      }

      &__content {
        max-width: 835px;
      }
    }
  }
}
</style>



