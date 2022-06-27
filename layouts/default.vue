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
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
      const last_dateTime = this.$cookies.get("app_remind_last_show_time") ? new Date(this.$cookies.get("app_remind_last_show_time")) : null;
      if (!last_dateTime || new Date() > last_dateTime) {
        this.$cookies.set('app_remind_last_show_time', new Date(Date.now() + 1000 * 60 * 60 * 24));
        this.$store.commit('modals/open', {modal_name: 'app_remind'});
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.default-layout {
  background-color: $light_grey
}
</style>
