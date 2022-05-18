<template>
  <label :for='id' :class="{ checked: checked, disabled: disabled }" class="checkbox">
    <input
      class="checkbox__input"
      type="checkbox"
      :checked="checked"
      :value="value"
      @change="updateInput"
      :disabled="disabled"
      :id='id'
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
    value: { required: false },
    modelValue: { default: "" },
    trueValue: { default: true },
    falseValue: { default: false },
    disabled: { default: false },
    checked: { required: true },
  },
  methods: {
    updateInput(event) {
      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue];
        if (this.checked) {
          newValue.push(this.value);
        } else {
          newValue.splice(newValue.indexOf(this.value), 1);
        }
        this.$emit("change", newValue);
      } else {
        this.$emit("change", this.checked ? this.trueValue : this.falseValue);
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
  &.disabled {
    background-color: $dark_grey;
  }
  &__input {
    display: none;
  }
}
</style>
