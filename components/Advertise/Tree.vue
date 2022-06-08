<template>
  <div class="advertise-wrapper">
    <div class="advertise">
      <img :src="`${$axios.defaults.baseURL}${ads[0].image.original}`" class="advertise__item advertise-item">
      <div v-if="count>1" class="advertise__smalls">
        <img :src="`${$axios.defaults.baseURL}${ads[1].image.original}`" class="advertise__smalls__item advertise-item"/>
        <img :src="`${$axios.defaults.baseURL}${ads[2].image.original}`" v-if="count>2" class="advertise__smalls__item advertise-item"/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    ads: {required: true, default: []},
    count: {
      required: false,
      default: 3,
    }
  }, mounted() {
    this.$el.style.maxHeight = `${this.$el.scrollHeight}px`;
    this.$el.style.transform = `translateY(0px)`;
    this.$el.style.opacity = 1;
  }
}
</script>
<style lang="scss">


.advertise {
  &-wrapper {
    width: 100%;
    max-height: 0px;
    transition-property: all, transform;
    transition-duration: $transition*2, $transition*3;
    transform: translateY(-100px);
    opacity: 0;
    z-index: $z_dropdown;
    overflow:hidden;
  }

  height: max-content;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width:100%;

  &-item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
  }


  &__smalls {
    margin-top: 30px;

    @media screen and (max-width: $tablet) {
      margin-top: 20px;
    }
    width: 100%;
    max-width:100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-direction: row;

    &__item {
      width:100%;

      &:nth-of-type(2) {
        margin-left: 30px;

      }
    }
  }

}
</style>
