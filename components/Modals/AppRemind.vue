<template>
  <div class="app-remind-modal modal">
    <h1 class="app-remind-modal__title .title-small">Доступно приложение</h1>
    <img class="app-remind-modal__mockup" src="@/assets/images/mock-iphone.png"/>
    <div class="app-remind-modal__logo-block">
      <img class="app-remind-modal__logo-block__logo"/>
    </div>
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

.app-remind-modal {
  position: relative;
  width: 100%;
  max-width: 500px;
  background-color: $white;
  min-width: 335px;
  padding: 42px 200px 30px 20px;
  border-radius: 10px;
  overflow: hidden;

  &__mockup {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  &__title {
    font-family: "SF Pro Display";
    margin-bottom: 12px;
  }
}
</style>
