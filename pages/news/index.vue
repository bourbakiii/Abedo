<template>
  <div class="page news-page wrapper">
    <div class="news-page__content content">
      <Breadcrumbs class="news-page__content__breadcrumbs adaptive-non"/>
      <h1 class="news-page__content__title title-normal">Новости</h1>
      <div class="news-page__content__content" v-if="news.length">
        <NuxtLink :to="`/news/${item.id}`" class="news-page__content__content__item" v-for="item in news"
                  :key="item.id">
          <p class="news-page__content__content__item__date">
            {{ parseDate(item.created_at, {with_time: false}) }}
          </p>
          <h3 class="news-page__content__content__item__title">{{ item.title }}</h3>
        </NuxtLink>
      </div>
      <p class="news-page__content__content_empty" v-else>
        Кажется, новостей пока нет
      </p>
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
    await this.$axios.get("/api/news").then(({data: {news}}) => {
      console.log("йа мады");
      console.log(news);
      this.news = news.data;
    }).finally(() => this.loading = false);
  }
}
</script>
<style lang="scss" scoped>
.news-page {
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

      &__item {
        text-decoration: none;
        margin-bottom: 40px;

        &:last-of-type {
          margin-bottom: 0px;
        }

        &__date {
          margin-bottom: 15px;
          font-family: 'SF Pro Display';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          color: $darkblue;
        }

        &__title {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 25px;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      &_empty {
        text-align: left;
        width: max-content;
        font-family: 'SF Pro Display';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        align-self: flex-start;
      }
    }
  }
}
</style>



