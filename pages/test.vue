<template>
  <div class="page test-page wrapper">
    <div class="test-page__content content">
      {{ payment_type }}
      <Radiobutton id="some_id" value="baz" v-model="payment_type" />
      <Radiobutton id="1" value="12" v-model="payment_type" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ya: [],
      payment_type: "",
    };
  },
};
</script>
<style lang="scss" scoped>
.test-page {
}
</style>
