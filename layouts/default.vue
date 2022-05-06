<template>
  <div class="layout default-layout">
    <AdaptiveNavigation class='adaptive'/>
   
    <Navigation class='adaptive-non' />

    <nuxt />

    <ModalsWrapper />
    <Footer class='adaptive-non' />
    <AdaptiveFooter class='adaptive'/>
  </div>
</template>

<style lang="scss" scoped>
.default-layout{
  background-color: $light_grey
}
</style>
