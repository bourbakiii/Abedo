<template>
  <button
  @click.prevent='$emit("action")'
    :style="{ width: parseInt(size) + 'px', height: parseInt(size) + 'px' }"
    class="button button-product"
  >
    <svg
      v-if="icon == 'minus'"
      class="button-product__icon"
      width="12"
      height="2"
      viewBox="0 0 12 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 1L1 1"
        stroke="#5C6784"
        stroke-width="1.2"
        stroke-linecap="round"
      />
    </svg>
    <svg
      v-if="icon == 'plus'"
      class="button-product__icon"
      width="10"
      height="10"
      viewBox="8 8 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 9L14 19"
        stroke="#5C6784"
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <path
        d="M19 14L9 14"
        stroke="#5C6784"
        stroke-width="1.2"
        stroke-linecap="round"
      />
    </svg>
  </button>
</template>
<script>
export default {
  props: {
    size: {
      required: false,
      default: "26px",
    },
    icon: {
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.button {
  border-radius: 90px;
  outline: none;
  border: 1px solid $darkblue;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  background-color: $white;
}
</style>
