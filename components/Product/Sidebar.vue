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
      <NuxtLink 
        v-if="product.image"
       class="product-sidebar__info__image" :to="`/product/${product.id}`">
        <img
        :src="`${$axios.defaults.baseURL}${product.image.cart_mini}`"
        class="product-sidebar__info__image"
      />
      </NuxtLink>
      <p class="product-sidebar__info__name">{{ product.name }}</p>
    </div>
    <div
      v-if="product.selected_options.length"
      class="product-sidebar__selected-options"
    >
      <div
        class="product-sidebar__selected-options__item"
        v-for="option in product.selected_options"
        :key="option.id"
      >

          <svg class="product-sidebar__selected-options__item__icon" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 1L5 9" stroke="#878787" stroke-width="1.2" stroke-linecap="round"/>
            <path d="M9 5L1 5" stroke="#878787" stroke-width="1.2" stroke-linecap="round"/>
          </svg>


        <p class="product-sidebar__selected-options__item__name">
          {{ option.name }}
        </p>
        <p class="product-sidebar__selected-options__item__price">
          1x{{ option.price }}₽
        </p>
      </div>
    </div>
    <div class="product-sidebar__actions">
      <div v-if="product.is_active" class="product-sidebar__actions__buttons">
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
        <p
          v-if="discount_percent"
          class="product-sidebar__actions__prices__price_full"
        >
          {{ product.price }}₽
        </p>
        <p class="product-sidebar__actions__prices__price">
          {{ product_price_with_discount }}₽
        </p>
      </div>
    </div>
    
  </div>
</template>
<script>
import productsMixin from "@/mixins/product.js";

export default {
  mixins: [productsMixin],
  props: {
    product: {
      required: true,
    },
    // partner: {
    //   required: false,
    // },
  }
};
</script>
<style lang="scss" scoped>
.product-sidebar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border-bottom: 1px dashed $dark_grey;
  position: relative;
  padding: 20px 0px;
  transition: $transition;

  &:last-of-type {
    border-bottom-width: 0px;
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
      border-radius: 5px;
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
        margin: 0px 5px;
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        min-width: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
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

  &__selected-options {
    width: 100%;
    margin: 8px 0px 0px;

    &__item {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      margin-bottom: 9px;

      &:last-of-type {
        margin-bottom: 0px;
      }
      &__icon{
        flex-shrink: 0;

      }
      &__name {
        font-family: 'SF Pro Display';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: $extra_dark_grey;
        flex-grow: 1;
        margin-right: 10px;
        margin: 0px 12px;

      }

      &__price {
        flex-shrink: 0;
        font-family: 'SF Pro Display';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        color:$extra_dark_grey;
      }
    }
  }
}
</style>
