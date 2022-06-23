<template>
  <div class="layout default-layout">
    <AdaptiveNavigation class='adaptive'/>
    <Navigation class='adaptive-non'/>

    <nuxt/>

    <ModalsWrapper/>
    <Footer class='adaptive-non'/>
    <AdaptiveFooter class='adaptive'/>
  </div>
</template>
<script>
export default {
  mounted() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))
      this.$store.commit('modals/open', {modal_name: 'app_remind'});
  }
}
</script>

<style lang="scss" scoped>
.default-layout {
  background-color: $light_grey
}
</style>
