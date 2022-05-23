<template>
  <NuxtLink
  :style="`background-image: ${
        category.image
          ? `linear-gradient(360deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%), url(${$axios.defaults.baseURL}${category.image.mobile})`
          : ''
      };`"
  :to="`/category/${category.id}`"
    class="category category-adaptive"
  >
    <div class="category-adaptive__overlay"></div>
    <p class="category-adaptive__name" >{{category.name}}</p>
  </NuxtLink>
</template>
<script>
export default {
  props:{
    category:{
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
  background-size: cover;
  background-repeat: no-repeat;
  &:focus &, &:active &, &:hover &{
      &__overlay{
        width:100%;
        border-radius: 10px;
      }
    }
  &__overlay {
    opacity:0.95;
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 0px;
    transform: translateY(-50%);
    width: 25%;
    height: 100%;
    background-color: $darkblue;
    transition: $transition;
    
  }
  &__name {
    z-index: 2;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 17px;
    color: $white;
    width: 100%;
    max-height:100%;
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>
