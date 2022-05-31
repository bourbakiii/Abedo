<template>
  <div class="navigation adaptive-navigation__wrapper">
    <div class="adaptive-navigation">
      <client-only>
      <AdaptiveSlotsMain v-if='slot_name=="main"' class='adaptive-navigation__slot adaptive-navigation__slot__index'/>
      <AdaptiveSlotsLabel v-else class="adaptive-navigation__slot adaptive-navigation__slot__label"/>
      </client-only>
    </div>
  </div>
</template>
<script>
export default {
  computed:{
    slot_name(){
      return this.$store.state.variables.adaptive_navigation.slot
    }
  }
}
</script>

<style lang="scss" scoped>
.adaptive-navigation {
  &__wrapper {
    position: sticky;
    top: 0px;
    width: 100%;
    background-color: $white;
    padding: 0px 20px;
    height:60px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    z-index: $z_navigation;
  }
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
</style>