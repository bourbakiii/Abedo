<template>
  <div class="advertise-wrapper">
    <div class="advertise">
      <div class="advertise__item__wrapper">
        <img :src="`${$axios.defaults.baseURL}${ads[0].image.original}`" class="advertise__item advertise-item adaptive-non"/>
        <img :src="`${$axios.defaults.baseURL}${ads[0].mobile_image.original}`" class="advertise__item advertise-item adaptive"/>
      </div>
      <div v-if="count>1" class="advertise__smalls">
        <div class="advertise__smalls__item__wrapper">
          <img :src="`${$axios.defaults.baseURL}${ads[1].image.original}`"
               class="advertise__smalls__item advertise-item adaptive-non"/>
          <img :src="`${$axios.defaults.baseURL}${ads[1].mobile_image.original}`" class="advertise__smalls__item advertise-item adaptive"/>

        </div>
        <div v-if="count>2" class="advertise__smalls__item__wrapper">

          <img :src="`${$axios.defaults.baseURL}${ads[2].image.original}`"
               class="advertise__smalls__item advertise-item adaptive-non"/>
          <img :src="`${$axios.defaults.baseURL}${ads[2].mobile_image.original}`" class="advertise__smalls__item advertise-item adaptive"/>
        </div>
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

  }
}
</script>
<style lang="scss">


.advertise {
  &-wrapper {
    width: 100%;
    transition-property: all, transform;
    transition-duration: $transition*3, $transition*3;
    opacity: 1;
    z-index: $z_ads;
  }

  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 100%;
  &-item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    max-width: 100%;
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    object-fit: contain;
    position: relative;

  }


  &__smalls {
    margin-top: 30px;
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-direction: row;
    position: relative;
    overflow: hidden;
    @media screen and (max-width: $tablet) {
      margin-top: 20px;
    }

    &__item {

      object-fit: contain;

      &__wrapper {
        width: 100%;
        flex-shrink: 1;

        &:nth-of-type(2) {
          margin-left: 30px;
          @media screen and (max-width: $tablet) {
            margin-left: 15px;
          }
        }
      }
    }
  }

}
</style>
