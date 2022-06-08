<template>
  <div class="advertise-wrapper">
    <div class="advertise">
      <div class="advertise__item advertise-item">ADV1</div>
      <div v-if="count>1" class="advertise__smalls">
        <div class="advertise__smalls__item advertise-item">ADV2</div>
        <div v-if="count>2" class="advertise__smalls__item advertise-item">ADV3</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    count: {
      required: false,
      default: 3,
    }
  }, beforeMount() {
    this.$el.style.maxHeight = `${this.$el.scrollHeight}px`;
    this.$el.style.transform = `scale(1)`;

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
    transform: scale(0);
  }


  height: max-content;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &-item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    min-height: 120px;
    width: 100%;
    background-color: $ad_back_color;
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
  }


  &__item {
    @media screen and (max-width: $tablet) {
      min-height: 125px;
    }
  }

  &__smalls {
    margin-top: 30px;
    @media screen and (max-width: $tablet) {
      margin-top: 20px;
    }
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-direction: row;

    &__item {
      width: 100%;
      @media screen and (max-width: $tablet) {
        min-height: 100px;
      }

      &:nth-of-type(2) {
        margin-left: 30px;
        @media screen and (max-width: $tablet) {
          margin-left: 15px;
        }
      }
    }
  }

}
</style>
