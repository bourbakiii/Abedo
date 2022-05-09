<template>
  <button :type='type' @click='$emit("click")' class="button button-standart">
    <slot />
  </button>
</template>
<script>
export default {
  props:[
    'type'
  ]
}
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
  height: 50px;
  transition: $transition;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 17px;
  padding: 0px 4px;
  display: flex;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  *{
    transition: $transition;
  }
  &:hover {
    color: $white;
    background-color: $darkblue;
    border-color: $darkblue;
    svg * {
      fill: $white;
    }
  }
  &.green {
    &:hover {
      background-color: $green;
      border-color: $green;
    }
  }
  &.red {
    border-color: $red !important;
    color: $red;
    &:hover {
      background-color: $red;
      color:$white;
    }
  }
  &.filled {
    background-color: $darkblue;
    border-color: $darkblue;
    color: $white;
    &.green {
      background-color: $green;
      border-color: $green;
      color: $white;
    }
  }
}
</style>
