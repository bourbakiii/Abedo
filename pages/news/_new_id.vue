<template>
  <div class="page new-page wrapper">
    <div class="new-page__content content">
      <Breadcrumbs class="new-page__content__breadcrumbs adaptive-non"
                   :way="[{name:'Новости', link:`/news?page=1`}, {name:`Новость`, link:`/news/${item.id}`}]"
      />
      <div class="new-page__content__content">
        <h1 class="new-page__content__content__title title-extra-normal">{{ item.title }}</h1>
        <img class="new-page__content__content__image" :src="`${$axios.defaults.baseURL}${item.image.original}`"
             v-if="item.image" alt="Item image"/>
        <div v-html="item.content" class="new-page__content__content__text">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      // div.innerHTML = str;

      title: this.item.title ? `${this.item.title} - Abedo` : `Новость - Abedo`,
      meta:
        [
          {
            hid: 'description',
            name: 'description',
            content: (this.item.content.replace(/(<([^>]+)>)/g, "") || '').substring(0, 170) || null
          },
          {
            hid: 'og:image',
            property: 'og:image',
            image: `${this.item.image ? (this.$axios.defaults.baseURL + this.item.image.original) : null}`
          }
        ],
    }
  },
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
    &__content {
      max-width: 835px;

      &__title {
        margin-bottom: 36px;
        align-self: flex-start;
        @media screen and (max-width: $tablet) {
          font-family: 'SF Pro Display';
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 26px;
          margin-bottom: 20px;
        }
      }

      &__image {
        max-width: 100%;
        margin-bottom: 40px;
        object-fit: contain;
        @media screen and (max-width: $tablet) {
          margin-bottom: 20px;
        }
      }

      &__text {
        font-family: 'SF Pro Display';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        @media screen and (max-width: $tablet) {
          font-family: 'SF Pro Display';
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 21px;
        }
      }
    }


  }

}
</style>



