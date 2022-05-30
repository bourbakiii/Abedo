<template>
  <div class="page test-page wrapper">
  </div>
</template>
<script>
export default {
  created(){
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
