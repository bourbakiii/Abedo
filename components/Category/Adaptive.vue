<template>
    <!-- :style="{ backgroundImage: 'url(image + ')' }" -->
  <NuxtLink
  to='#'
    class="category category-adaptive"
  >
    <div class="category-adaptive__overlay"></div>
    <p class="category-adaptive__name" contenteditable>Европейская кухня</p>
  </NuxtLink>
</template>
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
  &:focus &, &:active &, &:hover &{
      &__overlay{
        width:100%;
        border-radius: 10px;
      }
    }
  &__overlay {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 0px;
    transform: translateY(-50%);
    width: 25%;
    height: 100%;
    background-color: $darkblue;
    transition: 0.3s;
    
  }
  &__name {
    z-index: 2;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
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
