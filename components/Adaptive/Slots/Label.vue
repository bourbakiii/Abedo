<template>
  <div class="navigation-slot navigation-slot-label">
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
    <p class="navigation-slot-label__text" contenteditable>Европейская кухня</p>
    <svg
      class="navigation-slot-label__info"
      width="22"
      height="22"
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
  </div>
</template>
<style lang="scss" scoped>
.navigation-slot-label {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  &__text{
      width:100%;
      margin: 0px 15px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-family: 'SF Pro Display';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 20px;
color:$darkblue;
text-align: left;
  }
}
</style>