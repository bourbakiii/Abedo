<template>
  
    <div v-if="false" class="modals-wrapper">
      <transition name="opacity" class="modals-wrapper__content" appear>
        <div class="some_text" v-if="wrapper_show"> 12312{{ wrapper_show }}</div>
      </transition>
    </div>
</template>
<script>
export default {
  computed: {
    wrapper_show() {
      for (const key of Object.keys(this.$store.state.modals))
        if (this.$store.state.modals[key].show) {
          return true;
        }
      return true;
    },
  },
};
</script>
<style lang="scss" scoped>
.opacity-enter, .opacity-leave-to{
    opacity: 0;
}
.opacity-enter-active,.opacity-leave-active{
    transition: 1s !important
}
.modals-wrapper {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba($darkblue, 0.9);
  z-index: $z_modal_wrapper;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: 15vh;
  padding-left: 5%;
  padding-right: 5%;
  &__content {
    background-color: white;
    width: 100%;
    height: 200px;
  }
}
</style>
