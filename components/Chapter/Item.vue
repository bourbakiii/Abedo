<template>
  <button :class="{'active': active, 'push-hover-active': !active}" class="chapter-item">
      {{text}}
      </button>
</template>
<script>
export default {
    props:{
        text:{
            required: true
        },
        active:{
            required: false,
            default: false
        }
    }
}
</script>
<style lang="scss" scoped>
.chapter-item {
  border-radius: 50px;
  background-color: $white;
  border: 1px solid $darkblue;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  white-space: nowrap;
  height: 45px;
  padding: 0px 25px;
  &.active{
      background-color: $darkblue;
      color:$white;
  }
}
</style>
