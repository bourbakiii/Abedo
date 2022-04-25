<template>
  <button
    :style="
      'height: ' +
      parseInt(height) +
      'px; padding: 0px ' +
      parseInt(padding) +
      'px; text-transform: '"
    @click.prevent="$emit('action')"
    class="button button-standart"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    height: {
      required: false,
      default: "50px",
    },
    padding: {
      required: false,
      default: "30px",
    },
    uppercase: {
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  text-align: center;
  outline: none;
  border: none;
  border-radius: 50px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 1px solid $darkblue;
  color: $darkblue;
  padding: 0px 85px;
  transition: $transition;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;flex-direction: row;
  &:hover {
    color: $white;
    background-color: $darkblue;
    border-color: $darkblue;
    svg *{
      fill: $white;
    }
  }
  &.green:hover {
    background-color: $green;
    border-color: $green;
  }
}
</style>
