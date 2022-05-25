<template>
    <ProductCartDesktop
      :product="product"
      v-if="width > 768"
      class="product-item"
    />
    <ProductCartAdaptive :product="product" v-else class="product-item" />
</template>
<script>
export default {
  props: {
    product: {
      required: true,
    },
  },
  data() {
    return { width: window.innerWidth };
  },
  mounted() {
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
};
</script>
