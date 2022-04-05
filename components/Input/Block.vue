<template>
  <label :for="id" class="input-block">
    <p class="input-block__name">
      {{ text }}
    </p>
    <div class="input-block__input">
      <span v-if="pre" class="input-block__input__pre">
        {{ pre }}
      </span>
      <input
        v-mask="'(###) ###-##-##'" 
        id="id"
        :name="name"
        class="input-block__input__input"
        :type="type.toLowerCase()"
        :placeholder="placeholder"
      />
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
    mask:{
        require: false,
        default: false
    }
  },
};
</script>
<style lang="scss" scoped>
.input-block {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  &__name {
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 10px;
  }
  &__input {
    width: 100%;
    height: 50px;
    padding: 0px calc(max(2.5%, 10px));
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    border: 1px solid $extra_dark_grey;
    border-radius: 90px;
    overflow: hidden;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    &__pre{
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
      font-size: 14px;
      line-height: 20px;
      &::placeholder {
        color: $extra_dark_grey;
      }
    }
  }
}
</style>