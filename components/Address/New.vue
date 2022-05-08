<template>
  <form @submit.prevent="addAddress" class="address-new">
    <input
      type="text"
      v-model="address.name"
      placeholder="Название"
      class="address-new__name"
    />
    <div class="address-new__data">
      <div
        class="
          address-new__data__input-block address-new__data__input-block__dadata
        "
      >
        <InputBlock
          id="dadata"
          name="dadata"
          class="
            address-new__data__input-block
            address-new__data__input-block__dadata
          "
          :value="address.value"
          @input="
            ($event) => {
              address.value = $event;
              dadata_request_addresses();
            }
          "
          text="Адрес доставки"
        />
        <div
          class="address-new__data__input-block__dadata__suggestions"
          v-if="suggestions.length"
        >
          <button
            type="button"
            class="
              address-new__data__input-block__dadata__suggestions__suggestion
            "
            v-for="(address, index) in suggestions"
            :key="index"
            @mousedown="set_address(address)"
          >
            {{ address.value }}
          </button>
        </div>
      </div>
      <div class="address-new__data__additional">
        <InputBlock
          id="intercom"
          name="intercom"
          class="
            address-new__data__additional__input-block
            address-new__data__additional__input-block__intercom
          "
          v-model="address.intercom"
          text="№ домофона"
        />
        <InputBlock
          id="entrance"
          name="entrance"
          class="
            address-new__data__additional__input-block
            address-new__data__additional__input-block__entrance
          "
          text="Подъезд"
          v-model="address.entrance"
        />
        <InputBlock
          id="floor"
          name="floor"
          class="
            address-new__data__additional__input-block
            address-new__data__additional__input-block__floor
          "
          text="Этаж"
          v-model="address.floor"
        />
        <InputBlock
          id="flat"
          name="flat"
          class="
            address-new__data__additional__input-block
            address-new__data__additional__input-block__flat
          "
          text="№ квартиры/офиса"
          v-model="address.flat"
        />
      </div>
    </div>
    <div class="address-new__buttons">
      <ButtonStandart
        type="button"
        @mousedown.native="
          () => {
            address = {
              name: null,
              value: '',
              intercom: null,
              flat: null,
              entrance: null,
              floor: null,
            };
          }
        "
        class="
          address-new__buttons__button address-new__buttons__button_decline
        "
      >
        Отмена
      </ButtonStandart>
      <ButtonStandart
        class="address-new__buttons__button address-new__buttons__button_accept"
      >
        Добавить
      </ButtonStandart>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      address: {
        name: null,
        value: "",
        intercom: null,
        flat: null,
        entrance: null,
        floor: null,
      },
      suggestions: [],
      timer: null,
    };
  },
};
</script>
<style lang="scss" scoped>
.address-new {
  max-width: 100%;
  width: 100%;
  min-height: 185px;
  padding: 30px 30px 40px;
  background-color: $white;
  border-radius: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 30px;
  max-height: 600px;
  @media screen and (max-width: $tablet_middle) {
    padding: 20px;
  }
  &:last-of-type {
    margin-bottom: 0px;
  }
  &__name {
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    width: 100%;
    margin-bottom: 28px;
    outline: none;
    border: none;
    @media screen and (max-width: $tablet) {
      font-size: 20px;
      line-height: 22px;
      margin-bottom: 20px;
    }
  }
  &__data {
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: nowrap;
    @media screen and (max-width: $notebook) {
      flex-wrap: wrap;
    }
    &__additional {
      width: 100%;
      max-width: 100%;
      margin-left: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      @media screen and (max-width: $maxwidth) {
        margin-left: 10px;
      }
      @media screen and (max-width: $notebook) {
        margin-top: 15px;
        margin-left: 0px;
      }
      @media screen and (max-width: $tablet_middle) {
        flex-wrap: wrap;
      }

      &__input-block {
        margin-right: 30px;
        @media screen and (max-width: $maxwidth) {
          margin-right: 10px;
          width: 100%;
        }
        @media screen and (max-width: $notebook) {
          flex-grow: 1;
        }
        @media screen and (max-width: $tablet_middle) {
          width: calc(50% - 7.5px) !important;
          &:nth-of-type(1),
          &:nth-of-type(2) {
            margin-bottom: 15px;
          }
          &:nth-of-type(1),
          &:nth-of-type(3) {
            margin-right: 15px;
          }
          &:nth-of-type(2),
          &:nth-of-type(4) {
            margin-right: 0px;
          }
        }
        @media screen and (max-width: $phone_big) {
          width: 100% !important;
          margin-right: 0px !important;
          margin-left: 0px !important;
          margin-bottom: 15px;
          &:last-of-type {
            margin-bottom: 0px;
          }
        }
        &:last-of-type {
          margin-right: 0px;
        }
        &__flat {
          @media screen and (max-width: $maxwidth) {
            width: 100%;
          }
          width: 142px;
          flex-shrink: 0;
        }
      }
    }
    &__input-block {
      flex-grow: 1;
      &__dadata {
        @media screen and (max-width: $maxwidth) {
          width: 380px;
        }
        @media screen and (max-width: $notebook) {
          width: auto;
          order: -2;
        }
        width: 471px;
        flex-shrink: 0;
        flex-grow: 1;
        position: relative;
        &__suggestions {
          background-color: $white;
          position: absolute;
          top: 100%;
          left: 25px;
          min-width: 100px;
          max-width: calc(100% - 50px);
          border-radius: 0px 0px 20px 20px;
          height: auto;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
          box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
          padding-bottom: 10px;
          z-index: $z_navigation + 1;
          &__suggestion {
            background-color: transparent;
            width: max-content;
            width: 100%;
            height: auto;
            min-height: 30px;
            padding: 4px 10px;
            text-align: left;
            border: none;
            outline: none;
          }
        }
      }
      &:last-of-type {
        margin-right: 0px;
      }
    }
  }
  &__buttons {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    margin-top: 28px;
    @media screen and (max-width: $notebook) {
      margin-top: 15px;
    }
    &__button {
      width: 200px;
      @media screen and (max-width: $tablet) {
        width: 100%;
      }
      &_decline {
        color: $red;
        border-color: $red !important;
        &:hover {
          background-color: $red;
        }
      }
      &_accept {
        color: $green;
        border-color: $green !important;
        &:hover {
          background-color: $green;
        }
      }
      &:last-child {
        margin-left: 15px;
      }
    }
  }
}
</style>