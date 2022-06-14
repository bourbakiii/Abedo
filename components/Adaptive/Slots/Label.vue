<template>
  <div class="navigation-slot navigation-slot-label">
    <button  @click="$router.go(-1)"  class="navigation-slot-label__back__overlay"></button>
    <svg
      class="navigation-slot-label__back"
      width="12"
      height="18"
      viewBox="0 0 12 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3999 15.8775L4.72181 9L11.3999 2.12252L9.33898 -9.00857e-08L0.599902 9L9.33898 18L11.3999 15.8775Z"
        fill="#5C6784"
      />
    </svg>

    <p v-if="text" class="navigation-slot-label__text">{{ text }}</p>
    <transition appear name="rate-button">
      <div v-if="rate" class="navigation-slot-label__rate">
        <svg
          class="navigation-slot-label__rate__icon"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.6427 14.6967C11.807 14.6967 11.9702 14.6454 12.1095 14.5447C12.3689 14.3567 12.4901 14.0335 12.4195 13.7216L11.4545 9.47082L14.7272 6.6008C14.9677 6.3908 15.0596 6.05822 14.9609 5.75392C14.8621 5.45018 14.5934 5.23514 14.2752 5.20573L9.94515 4.81262L8.23319 0.806279C8.10696 0.51193 7.81948 0.321838 7.50006 0.321838C7.18065 0.321838 6.89317 0.51193 6.76694 0.805593L5.05498 4.81262L0.725577 5.20573C0.406737 5.23446 0.138024 5.45018 0.0392599 5.75392C-0.0595055 6.05765 0.0318203 6.3908 0.272381 6.6008L3.54501 9.47025L2.58002 13.7209C2.50929 14.0335 2.6306 14.3567 2.88993 14.5441C3.14869 14.7316 3.49374 14.746 3.76623 14.5822L7.50006 12.3509L11.2339 14.5835C11.3601 14.6584 11.5008 14.6967 11.6427 14.6967ZM7.50006 11.3897C7.35815 11.3897 7.21762 11.4278 7.09127 11.5028L3.56744 13.6104L4.47818 9.59831C4.54319 9.31278 4.44625 9.01465 4.2256 8.82147L1.13551 6.11144L5.22378 5.74018C5.51813 5.71329 5.77128 5.52823 5.88629 5.257L7.50006 1.47623L9.11578 5.25757C9.22953 5.52697 9.48268 5.71203 9.77635 5.73892L13.8652 6.11018L10.7752 8.82021C10.5539 9.01396 10.4571 9.31152 10.5226 9.59774L11.4327 13.6097L7.90886 11.5028C7.78262 11.4278 7.64197 11.3897 7.50006 11.3897ZM9.97822 4.89009C9.97822 4.89009 9.97822 4.89078 9.97891 4.89135L9.97822 4.89009ZM5.02316 4.88826L5.02247 4.88952C5.02247 4.88883 5.02247 4.88883 5.02316 4.88826Z"
            fill="#F95738"
          />
        </svg>
        {{ rate }}
      </div>
    </transition>
    <transition appear name="info-button">
      <svg
        v-if="info_click"
        @click="info_click"
        class="navigation-slot-label__info"
        width="26"
        height="26"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.7365 20.8481C14.0297 20.62 15.2654 20.1395 16.373 19.4339C17.4806 18.7283 18.4383 17.8115 19.1915 16.7358C19.9448 15.66 20.4787 14.4465 20.763 13.1644C21.0472 11.8823 21.0761 10.5568 20.8481 9.26352C20.62 7.97025 20.1395 6.73456 19.4339 5.627C18.7283 4.51945 17.8115 3.56171 16.7358 2.80848C15.66 2.05525 14.4465 1.52127 13.1644 1.23704C11.8823 0.952807 10.5568 0.923884 9.26352 1.15192C7.97025 1.37996 6.73456 1.86049 5.627 2.56609C4.51945 3.27168 3.56171 4.18851 2.80848 5.26424C2.05525 6.33996 1.52127 7.55352 1.23704 8.83561C0.952807 10.1177 0.923885 11.4432 1.15192 12.7365C1.37996 14.0298 1.86049 15.2654 2.56609 16.373C3.27168 17.4806 4.18851 18.4383 5.26424 19.1915C6.33996 19.9448 7.55352 20.4787 8.83561 20.763C10.1177 21.0472 11.4432 21.0761 12.7365 20.8481L12.7365 20.8481Z"
          stroke="#5C6784"
          stroke-width="2"
        />
        <path
          d="M11 11L11 17"
          stroke="#5C6784"
          stroke-width="2"
          stroke-linecap="square"
        />
        <path
          d="M11 6L11 5"
          stroke="#5C6784"
          stroke-width="2"
          stroke-linecap="square"
        />
      </svg>
    </transition>
  </div>
</template>
<script>
export default {
  computed: {
    text() {
      return this.$store.state.variables.adaptive_navigation.text;
    },
    info_click() {
      return this.$store.state.variables.adaptive_navigation.info_click;
    },
    rate() {
      return this.$store.state.variables.adaptive_navigation.rating || null;
    },
  },
};
</script>
<style lang="scss" scoped>
.rate-button {
  &-enter-active,
  &-leave-active {
    transition: $transition;
  }
  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
.info-button {
  &-enter-active {
    animation: $transition * 2 toScaleAndBack;
  }
  &-leave-active {
    animation: $transition * 2 toDiscaleAndBack;
  }
  @keyframes toScaleAndBack {
    0% {
      transform: scale(0.3);
      opacity: 0;
    }
    60% {
      transform: scale(1.32);
      opacity: 1;
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes toDiscaleAndBack {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    40% {
      transform: scale(1.32);
    }
    90% {
      opacity: 0;
    }
    100% {
      transform: scale(0.1);
    }
  }
}
.navigation-slot-label {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  position: relative;
  &__back{
    flex-shrink: 0;
    &__overlay{
      position: absolute;
      top: 50%;
      left:-20px;
      height:100%;
      width:80px;
      transform: translateY(-50%);
      z-index: 2;
      opacity: 0;
    }
  }
  &__text {
    width: 100%;
    margin: 0px 15px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    color: $darkblue;
    text-align: left;
  }
  &__rate {
    display: flex;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    margin-right: 15px;
    &__icon {
      margin-right: 5px;
    }
  }
}
</style>
