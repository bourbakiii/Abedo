<template>

<label  :class='{"checked": checked}' class="radiobutton" :for="id">
      <svg
        class="radiobutton__icon"
        width="10"
        height="8"
        viewBox="0 0 10 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 4L4 7L9 1" stroke="#5C6784" stroke-width="1.2" />
      </svg>
      
  
    <input class="radiobutton__input" :id="id" type="radio" :checked='checked' :value="value" @change="$emit('change', value)" />
    </label>


</template>


<script>
export default {
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    "id": {required:true},
    "modelValue": { default: "" },
    "value": {  default: true },
    "checked": {
      required: true,
      default:false,
    }
  },
}
</script>

<style lang="scss" scoped>
.radiobutton {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 18px;
  width: 18px;
  border-radius: 90px;
  border: 1px solid $darkblue;
  transition: $transition;
  cursor: pointer;
  svg * {
    transition: $transition;
  }
  &:hover,
  &:active {
    background-color: $darkblue;
    svg * {
      stroke: $white;
    }
  }
  &__wrapper {
    cursor: pointer;
  }
  &.checked {
    background-color: $darkblue;
    * {
      stroke: $white;
    }
  }
  &__input {
    display: none;
  }
}
</style>
