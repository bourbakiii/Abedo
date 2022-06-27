<template>
  <div :class="className" class="v-spinner">
    <div :class="`${className}-pulse`" class="v-pulse v-pulse1">
    </div>
    <div :class="`${className}-pulse`" class="v-pulse v-pulse2">
    </div>
    <div :class="`${className}-pulse`" class="v-pulse v-pulse3">
    </div>
  </div>
</template>

<script>
export default {

  name: 'PulseLoader',
  props: {
    size: {
      type: String,
      default: '7px'
    },
    className: {
      required: false,
      default: ''
    }
  },

}
</script>

<style lang="scss" scoped>

@keyframes pulseAnimation {
  0%,
  80% {
    transform: scale(1);
  }
  45% {
    transform: scale(0);
  }
}

@-webkit-keyframes pulseAnimation {
  0%,
  80% {
    transform: scale(1);
    //opacity: 1;
  }
  45% {
    transform: scale(0);
    //opacity: 0.7;
  }
}


.v- {
  &spinner {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    transition: $transition;
  }

  &pulse {
    transition: $transition;
    border-radius: 100%;
    margin-right: 5px;
    width: 7px !important;
    height: 7px !important;
    animation-name: pulseAnimation;
    animation-duration: 0.75s;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(.2, .68, .18, 1.08);
    animation-fill-mode: both;
    background-color: $darkblue;
    &:first-of-type {
      animation-delay: 0.12s;
    }

    &:nth-of-type(2) {
      animation-delay: 0.24s;
    }

    &:last-of-type {
      margin-right: 0;
      animation-delay: 0.36s;
    }
  }
}


</style>
