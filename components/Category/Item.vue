<template>
  <NuxtLink to="#" class="category category-item">
    <img v-if="category.image" :src="category.image" class="category-image" />
    <!-- <img src="@/assets/images/category-item-image-placeholder.png" class="category-image" /> -->
    <p class="category-name">{{ category.name }}</p>
  </NuxtLink>
</template>
<style lang="scss" scoped>
.category {
  height: 50px;
  padding: 0px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  text-decoration: none;
  border-radius: 50px;
  transition: 0.3s;
  * {
    transition: 0.3s;
  }
  border: 1px solid $orange;
  &:hover {
    background-color: $orange;
   
  }
  &:hover &{
    &-image{
      fill:$white;
    }
    &-name{
    color: $white;
    }
  }
  &-image {
    height: 18px;
    width: auto;
    object-fit: contain;
    margin-right: 8px;
  }
  &-name {
    max-width: 100%;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-transform: uppercase;
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