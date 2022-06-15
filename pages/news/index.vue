<template>
  <div class="page news-page__wrapper wrapper">
    <div class="news-page content">
      <Breadcrumbs class="news-page__breadcrumbs adaptive-non" :way="[{name:'Новости', link:`/news`}]"/>
      <h1 class="news-page__title adaptive-non">Новости</h1>
      <div class="news-page__content" v-if="news.length">
        <NuxtLink class="news-page__content__link" :to="`/news/${item.id}`" v-for="item in news" :key='item.id'>
        <span class="news-page__content__link__date">
          {{ parseDate(item.created_at, {with_time: false}) }}
        </span>
          <h3 class="news-page__content__link__title">{{ item.title }}</h3>
        </NuxtLink>
      </div>
      <p class="news-page__content_empty" v-else>
        Кажется, новостей пока нет
      </p>
      <!--      <Loader v-else-if="loading" class="news-page__content_loading"/>-->

      <div class="news-page__pagination">
        <button
          @click='fetchPage({page:item})'
          v-for="item in params.last_page" :key="item" class="news-page__pagination__item unselectable"
          :class="{'news-page__pagination__item_active': params.page===item }">
          {{ item }}
        </button>
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
        limit: 8,
        last_page: 1
      }
    }
  },
  async fetch() {
    this.loading = true;
    await this.$axios.get("/api/news", {params: this.params})
      .then(({
               data: {
                 news: {
                   data,
                   last_page
                 }
               }
             }) => {
          this.news = data;
          this.params.last_page = last_page;
        }
      ).finally(() => this.loading = false);
  },
  methods: {
    fetchPage({page = 1}) {
      this.params.page = page;
      this.$fetch();
    }
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
        border: 1px solid $dark_grey;
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
        line-height: 24px;
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

    //&_loading {
    //  margin-top: 50px;
    //  align-self: center;
    //}
  }

  &__pagination {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    margin-top: 50px;

    &__item {
      width: 30px;
      height: 30px;
      border: 1px solid $darkblue;
      border-radius: 15px;
      background-color: transparent;
      margin-right: 15px;
      transition: $transition;

      &:hover {
        transform: scale(1.1);
      }

      &:last-child {
        margin-right: 0;
      }

      &_active {
        border-color: $orange;
      }
    }
  }
}
</style>
