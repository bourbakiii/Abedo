<template>
  <div
    class="message"
  >
    <p class="message__text">
      Введенные пароли не совпадают
    </p>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log("123");
  },
  destroyed() {
    console.log("11");
  },
};
</script>
<style lang="scss" scoped>
.message{
        width: 100%;
        background-color: $dark_grey;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        padding: 15px 30px;
        border-radius: 20px;
        min-height: 60px;
        &__icon-block {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 90px;
          background-color: $light_green;
          margin-right: 15px;
          * {
            fill: $white;
          }
        }
        &__text {
          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
        }
        &_success p {
          color: $light_green !important;
        }
        &_error p {
          color: $red !important;
        }
      }
</style>