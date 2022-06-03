<template>
  <div :class="className" class="sk-chase">
    <div :class="className + '-dot'" class="sk-chase-dot"></div>
    <div :class="className + '-dot'" class="sk-chase-dot"></div>
    <div :class="className + '-dot'" class="sk-chase-dot"></div>
    <div :class="className + '-dot'" class="sk-chase-dot"></div>
    <div :class="className + '-dot'" class="sk-chase-dot"></div>
    <div :class="className + '-dot'" class="sk-chase-dot"></div>
  </div>
</template>
<script>
export default {
  props: {
    className: {
      required: false,
      default: ''
    }
  }
}
</script>
