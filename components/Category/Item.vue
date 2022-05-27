<template>
  <NuxtLink to="/category/1" class="category category-item">
    <img v-if="category.image" :src="`${$axios.defaults.baseURL}${category.image.small}`" class="category-image" />
    <p class="category-name">{{ category.name }}</p>
  </NuxtLink>
</template>
<style lang="scss" scoped>
.category {
  height: 50px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  text-decoration: none;
  border-radius: 50px;
  transition: $transition;
  * {
    transition: $transition;
  }
  border: 1px solid $extra_dark_grey;
  &:hover {
    background-color: $orange;
    border-color: $orange;
  }
  &:hover & {
    &-image {
      fill: $white;
    }
    &-name {
      color: $white;
    }
  }
  &-image {
    width: 42px;height:42px;border-radius: 90px;margin-right: 15px;
  }
  &-name {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
font-family: 'SF Pro Display';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;


  }
  @media screen and (max-width: $notebook) {
    padding: 0px 30px;
  }
}
</style>
<script>
export default {
  props: {
    category: {
      required: true,
    },
  },
};
</script>
