<template>
  <div class="layout default-layout">
    <client-only>
    <AdaptiveNavigation class='adaptive'/>
    </client-only>
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
