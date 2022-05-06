<template>
  <div class="product-sidebar product">
    <button @click="remove" class="product-sidebar__close">
      <svg
        class="product-sidebar__close__icon"
        width="15"
        height="15"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.89533 10.0005L0.229061 1.33421C-0.0760555 1.02909 -0.0760555 0.534404 0.229061 0.229326C0.534178 -0.0757519 1.02886 -0.075791 1.33394 0.229326L10.0003 8.89565L18.6665 0.229326C18.9716 -0.075791 19.4663 -0.075791 19.7714 0.229326C20.0765 0.534443 20.0765 1.02913 19.7714 1.33421L11.1051 10.0005L19.7714 18.6668C20.0765 18.9719 20.0765 19.4666 19.7714 19.7717C19.6189 19.9242 19.4189 20.0005 19.2189 20.0005C19.019 20.0005 18.8191 19.9242 18.6665 19.7717L10.0003 11.1054L1.33398 19.7717C1.18144 19.9242 0.981482 20.0005 0.781521 20.0005C0.58156 20.0005 0.381639 19.9242 0.229061 19.7717C-0.0760555 19.4666 -0.0760555 18.9719 0.229061 18.6668L8.89533 10.0005Z"
          fill="#A6A8A8"
        />
      </svg>
    </button>
    <div class="product-sidebar__info">
      <img
        v-if="true"
        src="@/assets/images/sidebar-cart-product-placeholder.png"
        class="product-sidebar__info__image"
      />
      <p class="product-sidebar__info__name">{{ product.name }}</p>
    </div>
    <div class="product-sidebar__actions">
      <div class="product-sidebar__actions__buttons">
        <ButtonProduct
          class="product-sidebar__actions__buttons__button"
          size="26"
          icon="minus"
          @click="decrease"
        />
        <p class="product-sidebar__actions__buttons__count">
          {{ count }}
        </p>
        <ButtonProduct
          class="product-sidebar__actions__buttons__button"
          size="26"
          icon="plus"
          @click="crease"
        />
      </div>
      <div class="product-sidebar__actions__prices">
        <p class="product-sidebar__actions__prices__price_full">
          {{ product.price }}₽
        </p>
        <p class="product-sidebar__actions__prices__price">
          {{ product.price }}₽
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import productsMixin from "@/mixins/product.js";

export default {
  mixins: [productsMixin],
  data() {
    return {
      minHeight: 110,
    };
  },
  mounted() {
    console.log(parseInt(this.$el.scrollHeight));
    this.$el.style.height =
      Math.max(parseInt(this.$el.scrollHeight) + 40, this.minHeight) + "px";
    this.$el.style.padding = "20px 0px";
  },
  destroyed() {
    this.$el.style.height = "0px";
    this.$el.style.minHeight = "0px";
    this.$el.style.padding = "0px 0px";
  },
};
</script>
<style lang="scss" scoped>
.product-sidebar {
  width: 100%;
  height: 0px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border-bottom: 1px dashed $dark_grey;
  position: relative;
  transition: $transition;
  &:last-of-type {
    border-bottom: none;
  }
  &__close {
    top: 20px;
    right: 0px;
    position: absolute;
    background: transparent;
    outline: none;
    border: none;
    width: 15px;
    height: 15px;
  }
  &__info {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row;
    &__image {
      width: 50px;
      height: auto;
      margin-right: 10px;
      flex-shrink: 0;
    }
    &__name {
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 20px;
      flex-grow: 1;
      margin-right: 18px;
    }
  }
  &__actions {
    margin-top: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &__buttons {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      &__count {
        margin: 0px 10px;
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        max-width: 40px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    &__prices {
      &__price {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        display: flex;
        align-items: center;
        &_full {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 19px;
          text-decoration: line-through;
          color: $extra_dark_grey;
        }
      }
    }
  }
}
</style>
