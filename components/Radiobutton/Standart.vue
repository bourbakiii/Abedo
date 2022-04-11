<template>
  <label class="radiobutton_standart" :for="id">
    <input
      class="radiobutton_standart__input"
      type="radio"
      :name="name"
      :id="id"
      :value="value"
      @input="$emit('update:model', $event.target.value)"
    />
    <svg
      class="radiobutton_standart__icon"
      width="10"
      height="8"
      viewBox="0 0 10 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 4L4 7L9 1" stroke="#5C6784" stroke-width="1.2" />
    </svg>
  </label>
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
    value: {
      required: true,
    },
  },
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
  &__input {
    display: none;
    background-color: green;
  }
  &__input:checked & {
    fill: red;
    background-color: blue;
  }
}
</style>