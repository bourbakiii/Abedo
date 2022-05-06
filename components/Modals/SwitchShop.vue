<template>
  <div class="switch-shop-modal modal">
    <h3 class="switch-shop-modal__title title-normal">Очистить корзину?</h3>
    <button
      @click.prevent="$store.commit('modals/close')"
      class="switch-shop-modal__close"
    >
      <svg
        class="switch-shop-modal__close__icon"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.89533 10.0005L0.229061 1.33421C-0.0760555 1.02909 -0.0760555 0.534404 0.229061 0.229326C0.534178 -0.0757519 1.02886 -0.075791 1.33394 0.229326L10.0003 8.89565L18.6665 0.229326C18.9716 -0.075791 19.4663 -0.075791 19.7714 0.229326C20.0765 0.534443 20.0765 1.02913 19.7714 1.33421L11.1051 10.0005L19.7714 18.6668C20.0765 18.9719 20.0765 19.4666 19.7714 19.7717C19.6189 19.9242 19.4189 20.0005 19.2189 20.0005C19.019 20.0005 18.8191 19.9242 18.6665 19.7717L10.0003 11.1054L1.33398 19.7717C1.18144 19.9242 0.981482 20.0005 0.781521 20.0005C0.58156 20.0005 0.381639 19.9242 0.229061 19.7717C-0.0760555 19.4666 -0.0760555 18.9719 0.229061 18.6668L8.89533 10.0005Z"
          fill="#A6A8A8"
        />
      </svg>
    </button>
    <p class="switch-shop-modal__text">
      В вашей корзине есть блюда из другого ресторана. Они будут удалены для
      добавления новых.
    </p>
    <div class="switch-shop-modal__buttons">
        <ButtonStandart @click="$store.commit('modals/close')" class="switch-shop-modal__buttons__button switch-shop-modal__buttons__button_decline">Отменить</ButtonStandart>
        <ButtonStandart @click="$store.dispatch('cart/change_shop', {product: $store.state.modals.switch_shop.product, partner: $store.state.modals.switch_shop.partner})"  class="switch-shop-modal__buttons__button switch-shop-modal__buttons__button_accept">Продолжить</ButtonStandart>
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
  padding: 50px 40px;
  width: 100%;
  max-width: 500px;
  @media screen and (max-width: $tablet) {
    margin-top:10vh;
    padding: 24px;
  }

  &__close {
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
    position: absolute;
    right: 30px;
    top: 30px;
    @media screen and (max-width: $tablet) {
      right: 24px;
      top: 24px;
    }
  }
  &__title{
      margin-bottom: 30px;
      @media screen and (max-width: $tablet) {
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 20px;
    }
  }
  &__text{
    @media screen and (max-width: $tablet) {
      font-size:15px;
    }
  }
  &__buttons{
      width:100%; margin-top: 30px;
      display: flex;align-items: center;justify-content: center;flex-direction:row;
      &__button{
          width:100%;

    &_decline{
        color:$red;
        border-color:$red !important;
        &:hover{
            background-color: $red;
            color:$white
        }
    }
    &_accept{
        color:$green;
        border-color:$green !important;
        &:hover{
            background-color: $green;
            color:$white
        }
    }


          &:first-child{
            @media screen and (max-width: $phone) {
              margin-right:20px;
              
            }
              margin-right:40px;
          }
      }
  }
}
</style>
