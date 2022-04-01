<template>
  <div class="breadcrubms-wrapper wrapper">
  <div class="breadcrubms">
    <span v-for="(item, index) in path" :key="index" class="breadcrubms__item"
      >
      <p class="breadcrubms__item__text">
      {{ item }}
      </p>
      <p v-if="index < path.length - 1" class="breadcrubms__item__separator">/</p>
    </span>
  </div>
  </div>
</template>
<script>
export default {
  props: {
    path: {
      required: true,
      default() {
        let path = this.$route.fullPath.split("/");
        path[0] = "Главная";
        return path;
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.breadcrubms {
  width:100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
    max-width: $maxwidth;
  
  &__item {
      display: flex;align-items: center;justify-content: flex-start;flex-direction:row;
      &__text{
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    color: $gray_four;
    text-decoration: none;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
    &:active {
      transition: 0.05s;
      transform: scale(0.9);
    }
    &:last-of-type {
      text-decoration: none !important;
      cursor: default;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      display: flex;
      align-items: center;
      color: $black;
      transform: scale(1) !important;
    }
      }
    &__separator {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: $gray_four;
      margin: 0px 5px;
    }
    
  }
}
</style>
