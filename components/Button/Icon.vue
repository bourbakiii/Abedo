<template>
  <button class="button button-icon">
    <span v-if="icon" class="button__icon">
      <img
        v-if="icon == 'squares'"
        src="@/assets/images/button-icons/squares.svg"
        class="button__icon-image"
      />
    </span>
    <p class="button__text">{{ text }}</p>
  </button>
</template>
<script>
export default {
  props: {
    icon: {
      required: false,
    },
    text: {
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.button {
  border-radius: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 30px;
  height: 50px;
  background-color: $darkblue;
  border: none;
  transition: 0.2s;
  &:hover {
    background-color: $orange;
  }
  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 14px;
    height: 50px;
    &-image {
      object-fit: contain;
    }
  }
  &__text {
    color: $white;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
  }
}
</style>