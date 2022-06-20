<template>
  <div class="error-layout layout">
    <h1 class="error-layout__title" v-if="error.statusCode === 403|| error.statusCode === 401">У вас недостаточно прав</h1>
    <h1 class="error-layout__title" v-else>Страница не найдена</h1>
    <p class="error-layout__text" v-if="!(error.statusCode === 403|| error.statusCode === 401)">Запрашиваемая страница не найдена</p>
    <ButtonStandart
      @click.native="() => $router.push('/')"
      class="error-layout__button filled"
      >На главную</ButtonStandart
    >
  </div>
</template>
<script>
export default {
  props: ['error'],
  mounted(){
    this.$store.commit('variables/action', state=>{
      state.adaptive_navigation = {
        text: null,
        slot: 'main',
        info_click: null
      }
    });
  }
}
</script>
<style lang="scss" scoped>
.error-layout {
  justify-content: center !important;
  &__title {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    margin-bottom: 50px;

    @media screen and (max-width: $tablet) {
      font-size: 20px;
      line-height: 24px;
    }
  }
  &__text {
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    margin-bottom: 58px;
    @media screen and (max-width: $tablet) {
      font-size: 16px;
      line-height: 19px;
    }
  }
  &__button {
    width: 218px;
    @media screen and (max-width: $tablet) {
      width: 200px;
      height: 40px !important;
    }
  }
}
</style>
