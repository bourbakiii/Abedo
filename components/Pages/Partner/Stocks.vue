<template>
  <div class="partner-stocks">
    <Stock class="partner-stocks__item" />
    <Stock class="partner-stocks__item" />
  </div>
</template>

<style lang="scss" scoped>
.partner-stocks {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 30px;
  &__item {
    width: auto;
  }
  @media screen and (max-width: $notebook) {
      grid-gap: 20px;
  }
}
</style>