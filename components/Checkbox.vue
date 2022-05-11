<template>
  <label :class='{"checked": isChecked, "disabled": disabled}' class="checkbox">
    <input
      class="checkbox__input"
      type="checkbox"
      :checked="isChecked"
      :value="value"
      @change="updateInput"
      :disabled='disabled'
    />
    <svg
      class="checkbox__icon"
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
  model: {
    prop: "modelValue",
    event: "change",
  },
  props: {
    id: {
      required: true,
    },
    value: { required: false, },
    modelValue: { default: "" },
    trueValue: { default: true },
    falseValue: { default: false },
    disabled: { default: false },
  },
  computed: {
    isChecked() {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value);
      }
      // Note that `true-value` and `false-value` are camelCase in the JS
      return this.modelValue === this.trueValue;
    },
  },
  methods: {
    updateInput(event) {
      let isChecked = event.target.checked;
      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue];
        if (isChecked) {
          newValue.push(this.value);
        } else {
          newValue.splice(newValue.indexOf(this.value), 1);
        }
        this.$emit("change", newValue);
      } else {
        this.$emit("change", isChecked ? this.trueValue : this.falseValue);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.checkbox {
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
  &:not(.disabled):active {
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
  &.disabled{
    background-color: $dark_grey;
  }
  &__input {
    display: none;
  }
}
</style>
