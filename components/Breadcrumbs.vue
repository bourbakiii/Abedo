<template>
  <div class="breadcrumbs">
    <NuxtLink to="/" class="breadcrumbs__item">Главная</NuxtLink>

    <NuxtLink :to="index+1 === way?'':item.link" class="breadcrumbs__item" v-for="(item,index) in way" :key="index">
      <svg class="breadcrumbs__item__icon" width="6" height="10" viewBox="0 0 6 10" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.05187e-07 1.17918L3.71005 5L1.40616e-08 8.82082L1.14496 10L6 5L1.14496 1.36535e-08L1.05187e-07 1.17918Z"
          fill="#5C6784"/>
      </svg>


      {{ item.name }}
    </NuxtLink>

  </div>
</template>
<script>
export default {
  props: {
    way: {
      required: true,
      default() {
        return [];
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.breadcrumbs {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 40px;

  &__item {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 17px;
    display: flex;
    align-items: center;
    color: $extra_dark_grey;
    position: relative;
    transition: $transition;
    cursor: pointer;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }

    &, &__icon {
      margin-right: 7px;
    }

    &:last-of-type {
      margin-right: 0;
      cursor: default;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      line-height: 17px;
      display: flex;
      align-items: center;
      text-decoration: none !important;
      color: $black;

    }

  }
}
</style>
