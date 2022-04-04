<template>
  <button
    :style="
      'height: ' +
      parseInt(height) +
      'px; padding: 0px ' +
      parseInt(padding) +
      'px; text-transform: '+ (uppercase?'uppercase;':'none;')
    "
    @click.prevent="$emit('action')"
    class="button button-standart"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      required: true,
    },
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
  background-color: $white;
  transition: 0.3s;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;

  &:hover {
    color: $white;
    background-color: $darkblue;
    border-color: $darkblue;
  }
  &.green:hover {
    background-color: $green;
    border-color: $green;
  }
}
</style>
