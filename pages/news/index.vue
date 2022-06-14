<template>
  <div class="page news-page__wrapper wrapper">
    <div class="news-page content">
      <Breadcrumbs class="news-page__breadcrumbs adaptive-non"/>
      <h1 class="news-page__title adaptive-non">Новости</h1>
      <div class="news-page__content">
        <NuxtLink class="news-page__content__link" :to="`/news/${item.id}`" v-for="item in news" :key='item.id'>
        <span class="news-page__content__link__date">
          {{ parseDate(item.created_at, {with_time: false}) }}
        </span>
          <h3 class="news-page__content__link__title">{{ item.title }}</h3>
        </NuxtLink>

      </div>
    </div>
  </div>
</template>


<script>
import parser from "@/mixins/parser";

export default {
  mixins: [parser],
  data() {
    return {
      news: [],
      loading: false,
      params: {
        page: 1,
        limit: 10,
        last_page: 1
      }
    }
  },
  async fetch() {
    this.loading = true;
    await this.$axios.get("/api/news").then(({data: {news}}) => this.news = news.data).finally(() => this.loading = false);
  }
}
</script>

<style lang="scss" scoped>
.news-page {
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  align-items: flex-start;

  &__title {
    margin-bottom: 40px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;

    &__link {
      text-decoration: none;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      margin-bottom: 40px;

      &:last-of-type {
        margin-bottom: 0 !important;
      }

      @media screen and (max-width: $tablet) {
        margin-bottom: 15px;
        background-color: $white;
        width: 100%;
        border-radius: 10px;
        padding: 20px 14px;
      }

      &__date {
        margin-bottom: 10px;
        font-family: 'SF Pro Display';
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: $darkblue;
        @media screen and (max-width: $tablet) {
          font-weight: 400;
          font-size: 14px;
          line-height: 17px;
        }
      }

      &__title {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 34px;
        @media screen and (max-width: $tablet) {
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
        }
      }

      &:hover & {
        &__title {
          text-decoration: underline;
        }
      }

    }
  }

}
</style>
