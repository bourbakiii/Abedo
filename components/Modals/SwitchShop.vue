<template>
  <div class="switch-shop-modal modal">
    <h3 class="switch-shop-modal__title title-normal">Внимание</h3>
    <button
      type="button"
      @click.prevent="$store.commit('modals/close')"
      class="switch-shop-modal__close"
    >


      <svg
        class="switch-shop-modal__close__icon"
        width="20"
        height="20"
      >
        <use xlink:href="@/assets/sprites/sprites.svg#modal-close"></use>
      </svg>
    </button>
    <p class="switch-shop-modal__text">
      В вашей корзине есть блюда из другого ресторана. Они будут удалены для
      добавления новых.
    </p>
    <div class="switch-shop-modal__buttons">
      <ButtonStandart
        @click="
          $store.dispatch('cart/change_shop', {
            product: $store.state.modals.switch_shop.product,
            partner: $store.state.modals.switch_shop.partner,
          })
        "
        class="switch-shop-modal__buttons__button switch-shop-modal__buttons__button_accept"
        >Добавить</ButtonStandart
      >
      <ButtonStandart
        @click="$store.commit('modals/close')"
        class="switch-shop-modal__buttons__button switch-shop-modal__buttons__button_decline"
        >Отменить</ButtonStandart
      >
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.switch-shop-modal {
  background-color: $white;
  position: relative;
  padding: 40px 24px;
  width: 100%;
  border-radius: 10px;
  width:500px;
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
  &__text {
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
  &__buttons {
    width: 100%;
    margin-top: 30px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
    @media screen and (max-width: $phone_normal) {
      justify-content: space-between;
    }
    &__button {
      width: 250px;
      @media screen and (max-width: $tablet) {
        width: 148px;
        height: 40px;
      }
      @media screen and (max-width: $phone) {
        width: 108px;
        height: 35px;
      }
      &_decline {
        color: $red;
        border-color: $red !important;
        &:hover {
          background-color: $red;
          color: $white;
        }
      }
      &_accept {
        color: $green;
        border-color: $green !important;
        &:hover {
          background-color: $green;
          color: $white;
        }
      }

      &:first-child {
        @media screen and (max-width: $phone) {
          margin-right: 20px;
        }
        margin-right: 40px;
      }
    }
  }
}
</style>
