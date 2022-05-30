<template>
  <div class="layout default-layout">
    <Navigation v-if="width > 768" />
      <client-only v-if="width <= 768 && variables_loaded">
        <AdaptiveNavigation  class="layout__adaptive-navigation" />
      </client-only>
    <nuxt />

    <ModalsWrapper />
    <Footer v-if="width > 768" />
    <AdaptiveFooter v-else />
  </div>
</template>
<script>
export default {
  data() {
    return { width: 0 };
  },
  mounted() {
    this.width = window.innerWidth;
    window.addEventListener("resize", this.onResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize(e) {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    },
  },
  computed: {
    variables_loaded() {
      return this.$store.state.variables.loaded;
    },
  },
};
</script>
<style lang="scss" scoped>
.layout__adaptive-navigation {
  animation: 1.5s animateAdaptiveNavigation forwards;
  overflow: hidden;
  @keyframes animateAdaptiveNavigation {
    0%{
      height: 0px;
      opacity: 0;
    }
    100%{
      opacity: 1;
      height:60px;
    }
  }
}
.default-layout {
  background-color: $light_grey;
}
</style>
