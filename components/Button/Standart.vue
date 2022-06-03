<template>
  <button @click='$emit("click")' class="button button-standart unselectable">
    <transition name="opacity" appear mode="out-in">
      <loader v-if="loader" className="button-standart__loader" class="button-standart__loader"/>
      <div class="button-standart__slot" v-else>
        <slot/>
      </div>
    </transition>
  </button>
</template>
<script>
export default {
  props: {
    loader: {
      required: false,
      default: false
    }
  }

}
</script>

<style lang="scss" scoped>

.button-standart {
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

  &__slot {
    * {
      transition: $transition !important;
    }

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    color: inherit;
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
      color: $white;
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

<style lang="scss">
.button-standart:hover {
  .button-standart__loader-pulse {
    background-color: $white;
  }
}
</style>
