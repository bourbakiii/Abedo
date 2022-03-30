<template>
  <button class="button button-standart">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      required: true,
    },
  },
};
</script>

<style lang='scss' scoped>
.button {
  text-align: center;
  outline: none;
  border: none;
  height: 50px;
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
    background-color: $green;
    border-color: $green;
  }
  &:active {
    transition: 0.05s;
    transform: scale(0.98);
  }
}
</style>