<template>
  <div class="page test-page wrapper">
    <AdvertiseThree :count="1" />
  </div>
</template>
<script>
export default {
  mounted(){
      this.$store.commit('variables/action', state=>{
      state.adaptive_navigation = {
        text: "Тестовая",
        slot: 'label',
        info_click: null
      }
    });
    }
}
</script>
