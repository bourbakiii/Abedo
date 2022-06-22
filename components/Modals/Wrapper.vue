<template>
  <transition name="modal">
    <div
      @click.self="$store.commit('modals/close')"
      v-if="wrapper_show"
      class="modals-wrapper non-scrollbar"
    >
      <ModalsRate
        v-if="$store.state.modals.rate.show"
        class="modals-wrapper__content modal-content"
      />
      <ModalsAppRemind
        v-else-if="$store.state.modals.app_remind.show"
        class="modals-wrapper__content modal-content"
      />
      <ModalsSwitchShop
        v-else-if="$store.state.modals.switch_shop.show"
        class="modals-wrapper__content modal-content"
      />

      <ModalsAddToCart
        v-else-if="$store.state.modals.add_to_cart.show"
        class="modals-wrapper__content modal-content"
      />
      <ModalsLogin
        v-else-if="$store.state.modals.login.show"
        class="modals-wrapper__content modal-content"
      />
      <!-- <ModalsProduct
        v-else-if="$store.state.modals.product.show"
        class="modals-wrapper__content modal-content"
      /> -->
      <ModalsPartner
        v-else-if="$store.state.modals.partner.show"
        class="modals-wrapper__content modal-content"
      />
    </div>
  </transition>
</template>
<script>
export default {
  computed: {
    wrapper_show() {
      for (const key of Object.keys(this.$store.state.modals))
        if (this.$store.state.modals[key].show) {
          return true;
        }
      return false;
    },
  },
  watch: {
    "$route.path": {
      handler() {
        if (this.wrapper_show) this.$store.commit("modals/close");
      },
      deep: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.modal {
  &-enter,
  &-leave-to {
    opacity: 0;

  }
  &-enter{
    .modal-content{
      transform: translateY(-50px);
    }
  }
  &-leave-to{
    .modal-content{
      transform: translateY(50px);
    }
  }
  &-leave-active,
  &-enter-active {
    .modal-content{
      transition: $transition;
    }
    transition: $transition;
  }
}

// .opacity-enter {
//   .modal-content {
//     opacity: 0;
//     transform: translateY(6vh);
//   }
// }
// .opacity-leave-to {
//   .modal-content {
//     opacity: 0;
//     transform: translateY(-6vh);
//   }
// }
// .opacity-enter-active {
//   .modal-content {
//     transition: 0.35s !important;
//   }
// }
// .opacity-leave-active {
//   .modal-content {
//     transition: 0.45s !important;
//   }
// }
// .opacity-leave-active {
//   transition: 0.15s !important;
// }
.modals-wrapper {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  min-height: 100%;
  background-color: rgba($darkblue, 0.9);
  z-index: $z_modal_wrapper;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: 15vh;
  padding-bottom: 100px;
  padding-left: 5%;
  padding-right: 5%;
  overflow-y: auto;
  @media screen and (max-width: $tablet) {
    padding: 0px;
  }
}
</style>
