<template>
  <div class="page test-page wrapper">
    <div class="test-page__content content">
      {{ ya }}
      <Checkbox id="some_id" value="baz" v-model="ya" />
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

