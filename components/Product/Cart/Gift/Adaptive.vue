<template>
  <div class="gift-cart-adaptive">
    <div class="gift-cart-adaptive__top">
      <div class="gift-cart-adaptive__top__gift">
        <svg
          class="gift-cart-adaptive__top__gift__icon"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5059 3.98438H13.4791C13.7925 3.56787 13.9785 3.0504 13.9785 2.49023C13.9785 1.11712 12.8614 0 11.4883 0C10.6612 0 10.0513 0.296338 9.56884 0.932576C9.16526 1.46489 8.87015 2.20811 8.5 3.14716C8.12985 2.20807 7.83474 1.46489 7.43116 0.932576C6.94875 0.296338 6.33884 0 5.51172 0C4.1386 0 3.02148 1.11712 3.02148 2.49023C3.02148 3.0504 3.20752 3.56787 3.52089 3.98438H1.49414C0.670272 3.98438 0 4.65465 0 5.47852V6.47461C0 7.1239 0.4164 7.67749 0.996094 7.88309V15.5059C0.996094 16.3297 1.66637 17 2.49023 17H14.5098C15.3336 17 16.0039 16.3297 16.0039 15.5059V7.88309C16.5836 7.67749 17 7.1239 17 6.47461V5.47852C17 4.65465 16.3297 3.98438 15.5059 3.98438ZM9.41422 3.5441C10.1772 1.60843 10.4673 0.996094 11.4883 0.996094C12.3122 0.996094 12.9824 1.66637 12.9824 2.49023C12.9824 3.3141 12.3122 3.98438 11.4883 3.98438H9.24C9.30103 3.83114 9.35923 3.68362 9.41422 3.5441ZM5.51172 0.996094C6.53275 0.996094 6.82281 1.60843 7.58579 3.5441C7.64077 3.68362 7.69897 3.83114 7.76 3.98438H5.51172C4.68785 3.98438 4.01758 3.3141 4.01758 2.49023C4.01758 1.66637 4.68785 0.996094 5.51172 0.996094ZM6.50781 16.0039H2.49023C2.21561 16.0039 1.99219 15.7805 1.99219 15.5059V7.96875H6.50781V16.0039ZM6.50781 6.97266H1.49414C1.21952 6.97266 0.996094 6.74923 0.996094 6.47461V5.47852C0.996094 5.20389 1.21952 4.98047 1.49414 4.98047H6.50781V6.97266ZM9.49609 16.0039H7.50391V4.98047C7.60826 4.98047 8.92367 4.98047 9.49609 4.98047V16.0039ZM15.0078 15.5059C15.0078 15.7805 14.7844 16.0039 14.5098 16.0039H10.4922V7.96875H15.0078V15.5059ZM16.0039 6.47461C16.0039 6.74923 15.7805 6.97266 15.5059 6.97266H10.4922V4.98047H15.5059C15.7805 4.98047 16.0039 5.20389 16.0039 5.47852V6.47461Z"
            fill="#F95738"
          />
        </svg>
        Подарок
      </div>
      <p class="gift-cart-adaptive__top__count">
        Количество:{{ product.quantity }}
      </p>
    </div>
    <div class="gift-cart-adaptive__content">
      <NuxtLink
        v-if="product.image"
        :to="`/product/${product.id}`"
        class="gift-cart-adaptive__content__image-block"
      >
        <img
          :src="`${$axios.defaults.baseURL}${product.image.small}`"
          class="gift-cart-adaptive__content__image-block__image"
        />
      </NuxtLink>
      <p class="gift-cart-adaptive__content__name">{{ product.name }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.gift-cart-adaptive {
  padding: 38px 14px 14px;
  position: relative;
  width: 100%;
  background-color: $white;
  border-radius: 10px;
  margin-bottom: 15px;

  overflow: hidden;
  &:last-of-type {
    margin-bottom: 0px;
  }
  &__top {
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding-right: 14px;
    &__gift {
      width: 114px;
      height: 25px;
      background-color: $green;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: $white;
      svg * {
        fill: $white;
      }
      &__icon {
        margin-right: 15px;
      }
    }
    &__count {
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: $darkblue;
    }
  }
  &__content {
      display: flex;align-items: center;justify-content: flex-start;flex-direction:row;
    &__image-block {
      cursor: pointer;
      margin-right: 10px;
      &__image {
        width: 34px;
        height: 34px;
        border-radius: 90px;
        overflow: hidden;
      }
    }
  }
}
</style>
