<template>
<div class="radiobutton_standart__wrapper">
  <input
      class="radiobutton_standart__input"
      type="radio"
      :name="name"
      :id="id"
      value='val'
      :checked="modelValue==val"
      @change="()=>{$emit('input', val); loggy();}"
    />
  <label class="radiobutton_standart"  :for="id">
    <svg
      class="radiobutton_standart__icon"
      width="10"
      height="8"
      viewBox="0 0 10 8"
      fill='none'
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 4L4 7L9 1" stroke="#5C6784" stroke-width="1.2" />
    </svg>
  </label>
  
    </div>
</template>
<script>
export default {
  props: {
    id: {
      required: true,
    },
    name: {
      required: true,
    },
    val: {
      required: true,
    },
    modelValue: {
      required: true,
    },
    checked: {
      required: false,
      default: false
    },
  },
  methods:{
    loggy(){
      console.log("loggy");
    }
  }
};
</script>
<style lang="scss" scoped>
.radiobutton_standart {
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
  &:hover, &:active{
    background-color: $darkblue;
    svg * {
      stroke: $white;
    }
  }
  &__wrapper{
    cursor: pointer;
  }
  &__input:checked ~ label{
    background-color: $darkblue;
    *{
      stroke: $white;
    }
  }
  &__input {
    display: none;
  }
}
</style>