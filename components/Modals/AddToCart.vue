<template>
  <div class="add_to_cart-modal modal">
    <h3 class="add_to_cart-modal__title title-normal">Внимание</h3>
    <button
      type="button"
      @click.prevent="$store.commit('modals/close')"
      class="add_to_cart-modal__close"
    >
      <svg width="20"
           class="add_to_cart-modal__close__icon"
           height="20">
        <use xlink:href="@/assets/sprites/sprites.svg#modal-close"></use>
      </svg>

    </button>
    <p class="add_to_cart-modal__message">
      {{ message }}
    </p>

  </div>
</template>
<script>
export default {
  computed: {
    message() {
      return this.$store.state.modals.add_to_cart.message;
    }
  }
};
</script>
<style lang="scss" scoped>
.add_to_cart-modal {
  background-color: $white;
  position: relative;
  padding: 40px 24px;
  width: 100%;
  border-radius: 10px;
  width: 500px;
  max-width: calc(100% - 24px);
  @media screen and (max-width: $tablet) {
    margin-top: 10vh;
    padding: 24px;
  }

  &__close {
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
    position: absolute;
    right: 14px;
    top: 14px;
  }

  &__title {
    padding-bottom: 20px;
    border-bottom: 1px solid $dark_grey;
    margin-bottom: 20px;

    @media screen and (max-width: $tablet) {
      padding-bottom: 15px;
      border-bottom: 1px solid $dark_grey;
      margin-bottom: 15px;
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 20px;
    }
  }

  &__message {
    font-family: "SF Pro Display";
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    @media screen and (max-width: $tablet) {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      /* or 125% */

      display: flex;
      align-items: center;
    }
  }

}
</style>
