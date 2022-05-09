<template>
  <div class="address-item address">
    {{address.value}}
  </div>
</template>
<script>
export default {
  props:{
    address:{
      required:true
    }
  }
}
</script>