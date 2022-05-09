<template>
  <div class="address-item new-address address">
    <p class="address-item__name" contenteditable>
      {{ address.name }}
    </p>
    <div class="address-item__content">
      <div class="address-item__content__inputs">
        <div class="address-item__content__inputs__dadata">
          <InputBlock
            class="
              address-item__content__inputs__input-block
              address-item__content__inputs__input-block_dadata
            "
            id="new-address-dadata"
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
              class="address-item__content__inputs__dadata__suggestions"
            >
              <button
                :key="address.value"
                v-for="address in suggestions"
                class="
                  address-item__content__inputs__dadata__suggestions__address
                "
                @click="set_address(address)"
              >
                {{ address.value }}
              </button>
            </div>
          </transition>
        </div>
        <div class="address-item__content__inputs__smalls">
          <InputBlock
            class="
              address-item__content__inputs__input-block
              address-item__content__inputs__input-block_intercom
            "
            id="new-address-dadata"
            name=""
            text="№ домофона"
            :value="address.intercom"
            @input="address.intercom = $event"
          />
          <InputBlock
            class="
              address-item__content__inputs__input-block
              address-item__content__inputs__input-block_entrance
            "
            id="new-address-dadata"
            name=""
            text="Подъезд"
            :value="address.entrance"
            @input="address.entrance = $event"
          />
          <InputBlock
            class="
              address-item__content__inputs__input-block
              address-item__content__inputs__input-block_floor
            "
            id="new-address-dadata"
            name=""
            text="Этаж"
            :value="address.floor"
            @input="address.floor = $event"
          />
          <InputBlock
            class="
              address-item__content__inputs__input-block
              address-item__content__inputs__input-block_flat
            "
            id="new-address-dadata"
            name=""
            text="№ квартиры/офиса"
            :value="address.flat"
            @input="address.flat = $event"
          />
        </div>
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
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    &__inputs {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      &__dadata {
        position: relative;
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
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        flex-wrap: nowrap;
      }

      &__input-block {
        &:not(&_dadata) {
          background-color: red;
          min-width: min-content;
        }
      }
    }

    &__edit {
      width: 102px;
    }
  }
}
</style>