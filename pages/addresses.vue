<template>
  <div class="page addresses-page wrapper">
    <div class="addresses-page__content content">
      <Breadcrumbs class="addresses-page__content__breadcrumbs adaptive-non" />
      <div class="addresses-page__content__addresses">
        <h1 class="addresses-page__content__addresses__title title-normal">
          Адреса доставки
        </h1>
        <div class="addresses-page__content__addresses__content">
          <AddressItem v-for='address in addresses'  :key='address.id' :address='address'/>
        </div>
        <transition name="add-address-form" mode="out-in">
          <AddressNew class="addresses-page__content__addresses__new" v-if='show_add_form' />
          <ButtonStandart
            v-else
            @click="show_add_form = true"
            class="addresses-page__content__addresses__add"
          >
            <svg
              class="addresses-page__content__addresses__add__icon"
              width="7"
              height="8"
              viewBox="0 0 7 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.40481 3.86664H4.08104V1.54287C4.08104 1.22219 3.82136 0.961914 3.50009 0.961914C3.17882 0.961914 2.91913 1.22219 2.91913 1.54287V3.86664H0.595361C0.274092 3.86664 0.0144043 4.12691 0.0144043 4.4476C0.0144043 4.76828 0.274092 5.02855 0.595361 5.02855H2.91913V7.35232C2.91913 7.67301 3.17882 7.93328 3.50009 7.93328C3.82136 7.93328 4.08104 7.67301 4.08104 7.35232V5.02855H6.40481C6.72608 5.02855 6.98577 4.76828 6.98577 4.4476C6.98577 4.12691 6.72608 3.86664 6.40481 3.86664Z"
                fill="#5C6784"
              />
            </svg>
            Добавить адрес
          </ButtonStandart>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import dadataMixin from "@/mixins/dadata.js";
export default {
  mixins: [dadataMixin],
  data() {
    return {
      show_add_form: true,
      addresses: []
     
    };
  },
  methods: {
    set_new_address(address) {
      this.new_address = Object.assign(this.new_address, {
        value: address.value,
        ...address.data,
      });
      this.suggestions.new_address = [];
    },
    
  },
};
</script>
<style lang="scss" scoped>
.add-address-form {
  &-enter,
  &-leave-to {
    opacity: 0;
    &.addresses-page__content__addresses__new {
      min-height: 0px !important;
      max-height: 0px !important;
    }
  }
  &-enter-active,
  &-leave-active {
    transition: all $transition;
  }
}
.addresses-page {
  &__content {
    flex-grow: 1;
    &__addresses {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      max-width: 100%;
      width: 100%;
      &__title {
        align-self: flex-start;
        margin-bottom: 70px;
        @media screen and (max-width: $tablet) {
          margin-bottom: 20px;
          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 24px;
        }
      }
      &__content {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        overflow: hidden;
        max-width: 100%;
        width: 100%;
        border: 1px $dark_grey;
        
      }
      
      &__add {
        margin-top: 40px;
        width: 245px;
        &:hover & {
          &__icon {
            border-color: $white;
          }
        }
        &__icon {
          margin-right: 10px;
          width: 19px;
          height: 19px;
          border-radius: 90px;
          padding: 2px;
          border: 1.5px solid $darkblue;
        }
      }
    }
  }
}
</style>
