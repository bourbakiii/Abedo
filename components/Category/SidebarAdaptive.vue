<template>
  <div v-if="categories.length" class="sidebar">
    <div class="sidebar__content sidebar-scrollbar">
      <button
        @click="$router.push(parseUrl(category))"
        v-for="category in categories"
        :key="category.id"
        class="sidebar__content__item"
        :class="{
          sidebar__content__item__active:
            +$route.query.category == +category.id,
        }"
      >
        <img
          v-if="category.image"
          :src="`${$axios.defaults.baseURL}${category.image.resized}`"
          class="sidebar__content__item__image"
        />
        <p class="sidebar__content__item__name">
          {{ category.name }}
        </p>
        <svg
          class="sidebar__content__item__icon"
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.05187e-07 1.17918L3.71005 5L1.40616e-08 8.82082L1.14496 10L6 5L1.14496 1.36535e-08L1.05187e-07 1.17918Z"
            fill="#A6A8A8"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      categories: [],
    };
  },
  fetch() {
    this.$axios.get("/api/cuisines/get").then(
      ({
        data: {
          cuisines: { data },
        },
      }) => {
        this.categories = data;
      }
    );
  },
  methods: {
    parseUrl(category) {
      let to_ret = "/partners";
      if (+this.$route.query.category != +category.id)
        to_ret += `?category=${+category.id}`;
      return to_ret;
    },
  },
};
</script>
<style lang="scss" scoped>
.sidebar {
  background-color: $white;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 15px 10px 15px 25px;
  border-radius: 20px;
  max-height: min(calc(100vh - 200px),500px);
  overflow: hidden;
  z-index: $z_dropdown;
  &__content {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    overflow-y: overlay;
    margin-right:10px;
    &__item {
      width: 100%;
      min-height: 50px;
      padding: 10px 0px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      background-color: transparent;
      border: none;
      outline: none;
      border-bottom: 1px solid $white;
      &:last-of-type {
        border-bottom: none;
      }
      * {
        transition: $transition;
      }
      transition: $transition;
      &__active &,
      &:hover & {
        &__icon *,
        &__image * {
          fill: $orange;
        }
        &__name {
          color: $orange;
        }
      }

      &__image {
        width: 30px;
        height: 30px;
        object-fit: contain;
        margin-right: 13px;
        flex-shrink: 0;
        border-radius: 90px;
      }
      &__name {
        flex-grow: 1;
        text-align: left;

        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 18px;
      }
      &__icon {
        margin-left: 11px;
        flex-shrink: 0;
      }
    }
  }
}
</style>
