<template>
  <NuxtLink

    :to="`/partners?category=${category.id}`"
    class="category category-adaptive"
  >
    <img v-if="category.image" :src="`${$axios.defaults.baseURL}${category.image.resized}`"
         class="category-adaptive__image" alt=""/>
    <div class="category-adaptive__shadow"></div>

    <div class="category-adaptive__overlay"></div>
    <p class="category-adaptive__name">{{ category.name }}</p>
  </NuxtLink>
</template>
<script>
export default {
  props: {
    category: {
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.category-adaptive {
  width: 100%;
  max-width: 100%;
  height: 62px;
  border-radius: 10px;
  background-color: lightsteelblue;
  padding: 13px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  text-decoration: none;


  &:focus &, &:active &, &:hover & {
    &__overlay {
      width: 100%;
      border-radius: 10px;
    }
  }

  &__image {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 80%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  &__shadow {
    background: linear-gradient(360deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%);
    z-index: 1;
    position: absolute;
    right: 0;
    top: 0;
    width: 75%;
    height: 100%;
  }

  &__overlay {
    opacity: 0.95;
    position: absolute;
    top: 50%;
    left: 0px;
    transform: translateY(-50%);
    width: 25%;
    height: 100%;
    background-color: $darkblue;
    transition: $transition;
    z-index: 2;

  }

  &__name {
    font-family: "SF Pro Display", serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 17px;
    color: $white;
    width: 100%;
    max-height: 100%;
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    z-index: 3;

  }
}
</style>
