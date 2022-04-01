<template>
  <div class="about-wrapper wrapper">
    <div class="about">
      <slot />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about {
  &-wrapper {
    padding: 70px 0px;
    background-color: $gray_two;
  }
  width: 100%;
  max-width: $maxwidth;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
</style>
