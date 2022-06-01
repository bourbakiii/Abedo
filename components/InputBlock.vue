<template>
  <label @click="$emit('click')" :for="id" class="input-block">
    <p class="input-block__name">
      {{ text }}
    </p>
    <div class="input-block__input" :class="{ disabled: disabled }">
      <span v-if="pre" class="input-block__input__pre">
        {{ pre }}
      </span>
      <input
        @input="$emit('input', $event.target.value)"
        :value="value"
        v-mask="mask"
        :id="id"
        class="input-block__input__input"
        :type="type.toLowerCase()"
        :name="name"
        :placeholder="placeholder"
        :required="required"
        :autocomplete="autocomplete ? 'on' : 'off'"
        :minlength="minlength"
        :readonly="readonly"
        :disabled="disabled"
      />
      <div v-if="arrow" class="input-block__input__arrow">
        <svg
          width="12"
          height="6"
          viewBox="0 0 12 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.33224 5.58656L11.0699 0.961262C11.225 0.80972 11.2248 0.56437 11.0691 0.413081C10.9134 0.26191 10.6613 0.2623 10.506 0.413862L6.05036 4.76384L1.59471 0.413706C1.43944 0.262163 1.18745 0.261773 1.03178 0.412924C0.953741 0.488764 0.914721 0.588119 0.914721 0.687474C0.914721 0.786575 0.95348 0.88554 1.03098 0.961243L5.7685 5.58656C5.84309 5.65954 5.9446 5.7005 6.05036 5.7005C6.15612 5.7005 6.25751 5.65943 6.33224 5.58656Z"
            fill="#212121"
          />
        </svg>
      </div>
    </div>
  </label>
</template>
<script>
export default {
  props: {
    id: {
      required: true,
    },
    type: {
      default: "text",
    },
    arrow: {
      required: false,
      default: false,
    },
    text: {
      required: true,
    },
    name: {
      required: true,
    },
    placeholder: {
      required: false,
    },
    pre: {
      required: false,
      default: null,
    },
    is_phone: {
      required: false,
      default: false,
    },
    mask: {
      required: false,
      default: "",
    },
    required: {
      required: false,
      default: true,
    },
    autocomplete: {
      required: false,
      default: true,
    },
    minlength: {
      required: false,
      default: "",
    },
    value: {
      required: false,
    },
    readonly: {
      required: false,
      default: false,
    },
    disabled: {
      required: false,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.input-block {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  &.arrow {
    cursor: pointer !important;
  }
  &.error & {
    &__input {
      border-color: $red;
    }
  }
  &__name {
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 17px;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 10px;
    white-space: nowrap;
    text-align: left;
  }
  &__input {
    width: 100%;
    height: 50px;
    padding: 0px calc(max(2.5%, 10px));
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    border: 1px solid $dark_grey;
    border-radius: 90px;
    background-color: $white;

    overflow: hidden;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    transition: $transition;
    position: relative;
    &.disabled{
      background-color: $dark_grey;
    }
    &__pre {
      margin-right: 1ex;
    }
    &__input {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 20px;
      &::placeholder {
        color: $extra_dark_grey;
      }
      &:disabled{
        background-color: transparent;
      }
    }
    &__arrow {
      height: max-content;
      width: max-content;
      position: absolute;
      right: 22px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
