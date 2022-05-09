<template>
  <div class="address-item adress address">
    <p class="address-item__name" contenteditable>
      {{ address.name }}
    </p>
    <div class="address-item__content">
      <div class="address-item__content__dadata">
        <InputBlock
          class="
            address-item__content__input-block
            address-item__content__input-block_dadata
          "
          :id="`adress-${address.id}-dadata`"
          name=""
          text="Адрес доставки"
          :value="address.value"
          @input="
            ($event) => {
              address.value = $event;
              get_dadata();
            }
          "
        />
        <transition name="opacity">
          <div
            v-if="suggestions.length"
            class="address-item__content__dadata__suggestions"
          >
            <button
              :key="address.value"
              v-for="address in suggestions"
              class="address-item__content__dadata__suggestions__address"
              @click="set_address(address)"
            >
              {{ address.value }}
            </button>
          </div>
        </transition>
      </div>
      <div class="address-item__content__smalls">
        <InputBlock
          class="
            address-item__content__input-block
            address-item__content__input-block_intercom
          "
          :id="`adress-${address.id}-intercom`"
          name=""
          text="№ домофона"
          :value="address.intercom"
          @input="address.intercom = $event"
        />
        <InputBlock
          class="
            address-item__content__input-block
            address-item__content__input-block_entrance
          "
          :id="`adress-${address.id}-entrance`"
          name=""
          text="Подъезд"
          :value="address.entrance"
          @input="address.entrance = $event"
        />
        <InputBlock
          class="
            address-item__content__input-block
            address-item__content__input-block_floor
          "
          :id="`adress-${address.id}-floor`"
          name=""
          text="Этаж"
          :value="address.floor"
          @input="address.floor = $event"
        />
        <InputBlock
          class="
            address-item__content__input-block
            address-item__content__input-block_flat
          "
          :id="`adress-${address.id}-flat`"
          name=""
          text="№ квартиры/офиса"
          :value="address.flat"
          @input="address.flat = $event"
        />
      </div>
      <ButtonStandart class="address-item__content__edit filled"
        >Изменить</ButtonStandart
      >
    </div>
  </div>
</template>
<script>
import dadataMixin from "@/mixins/dadata.js";
export default {
  mixins: [dadataMixin],
  data() {
    return {
      address: {},
    };
  },
  methods: {
    set_address(address) {
      this.address = address;
    },
  },
};
</script>
<style lang="scss" scoped>
.address-item {
  background-color: $white;
  width: 100%;
  border: 1px solid $dark_grey;
  padding: 30px 30px 40px;
  border-radius: 20px;
  @media screen and (max-width: $tablet) {
    padding: 15px;
  }
  &__name {
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 100%;
    margin-bottom: 28px;
  }
  &__content {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    @media screen and (max-width: $tablet_start) {
      flex-wrap: wrap;
    }
    &__dadata {
      flex-grow: 1;
      position: relative;
      @media screen and (max-width: $tablet_start) {
        order: -2;
      }
      &__suggestions {
        background-color: $white;
        position: absolute;
        top: 100%;
        left: 0%;
        width: 100%;
        border-radius: 20px;
        overflow: hidden;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
        padding-top: 7px;
        padding-bottom: 17px;
        &__address {
          width: 100%;
          box-sizing: border-box;
          text-decoration: none;
          border-bottom: 1px solid $dark_grey;
          min-height: 50px;
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: row;
          transition: $transition;
          background-color: $white;
          outline: none;
          border: none;
          text-align: left;
          &:active {
            transform: scale(0.98);
          }
          &:last-child {
            border: none;
          }
        }
      }
    }
    &__smalls {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      flex-wrap: nowrap;
      @media screen and (max-width: $tablet_start) {
        width: 100%;
        margin-top: 15px;
      }
      @media screen and (max-width: $tablet_middle) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 15px;
      }
      @media screen and (max-width: $phone_normal) {
        grid-template-columns: 1fr;
      }
    }

    &__input-block {
      margin-left: 30px;
      width: 100px;
      min-width: max-content;
      @media screen and (max-width: $notebook) {
        margin-left: 15px;
      }
      @media screen and (max-width: $tablet_start) {
        width: 100%;
        &:first-child {
          margin-left: 0px;
        }
      }
      @media screen and (max-width: $tablet_middle) {
        margin-left: 0px;
      }
      &_dadata {
        margin-left: 0px !important;
        width: 100%;
      }
      &:not(&_dadata) {
        min-width: min-content;
      }
    }

    &__edit {
      flex-shrink: 0;
      margin-left: 76px;
      width: 102px;
      @media screen and (max-width: $maxwidth) {
        margin-left: 30px;
      }
      @media screen and (max-width: $tablet_start) {
        order: -1;
        margin-left: 15px;
      }
      @media screen and (max-width: $phone) {
        order: 1;
        margin-left: auto;
        margin-top: 15px;
        width: 150px;
      }
    }
  }
}
</style>
  </div>
</template>
<script>
export default {
  props: {
    address: {
      required: true,
    },
  },
};
</script>