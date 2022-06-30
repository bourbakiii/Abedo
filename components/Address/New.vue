<template>
  <form @submit.prevent="action(address)" class="address-item new-address address">
    <input
      required
      type="text"
      v-model="address.name"
      placeholder="Введите название"
      class="address-item__name"

    />
    <div class="address-item__content">
      <div
        class="address-item__content__dadata"
        id="address-item__content__dadata-new-address"
      >
        <InputBlock
          class="address-item__content__input-block address-item__content__input-block_dadata"
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

          <div
            v-if="suggestions.length"
            class="address-item__content__dadata__suggestions non-scrollbar"
          >
            <button
              type="button"
              :key="address.value"
              v-for="address in suggestions"
              class="address-item__content__dadata__suggestions__address"
              @click="set_address(address)"
            >
              {{ address.value }}
            </button>
          </div>
      </div>
      <div class="address-item__content__smalls">
        <InputBlock
          class="address-item__content__input-block address-item__content__input-block_intercom"
          id="new-address-intercom"
          name=""
          text="№ домофона"
          :value="address.intercom"
          @input="address.intercom = $event"
        />
        <InputBlock
          class="address-item__content__input-block address-item__content__input-block_entrance"
          id="new-address-entrance"
          name=""
          text="Подъезд"
          :value="address.entrance"
          @input="address.entrance = $event"
        />
        <InputBlock
          class="address-item__content__input-block address-item__content__input-block_floor"
          id="new-address-floor"
          name=""
          text="Этаж"
          :value="address.floor"
          @input="address.floor = $event"
        />
        <InputBlock
          class="address-item__content__input-block address-item__content__input-block_flat"
          id="new-address-flat"
          name=""
          text="№ квартиры/офиса"
          :value="address.flat"
          @input="address.flat = $event"
        />
      </div>
    </div>
    <div class="address-item__buttons">
      <ButtonStandart
        type="button"
        @click="$emit('close')"
        class="address-item__buttons__button address-item__buttons__button_decline red"
        >Отменить</ButtonStandart
      >
      <ButtonStandart
        class="address-item__buttons__button address-item__buttons__button_accept green"
        >Добавить</ButtonStandart
      >
    </div>
  </form>
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
  watch: {
    suggestions(value) {
      const dropdownClick = (event) => {
        const dropdown_content = document.querySelector(
          ".address-item__content__dadata__suggestions"
        );
        if (!dropdown_content) return;
        let element_data = dropdown_content.getBoundingClientRect();
        if (
          !(
            event.x >= element_data.x &&
            event.x <= element_data.x + element_data.width &&
            event.y >= element_data.y &&
            event.y <= element_data.y + element_data.height
          )
        ) {
          this.suggestions = [];
          document.removeEventListener("click", dropdownClick);
        }
      };
      if (value.length) {
        document.addEventListener("click", dropdownClick);
      } else document.removeEventListener("click", dropdownClick);
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
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  @media screen and (max-width: $tablet) {
    padding: 15px;
  }
  &__name {
    font-family: "SF Pro Display",serif;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 100%;
    margin-bottom: 28px;
    border: none;
    outline: none;
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
        left: 0;
        width: 100%;
        border-radius: 20px;
        overflow-y: auto;
        max-height: 40vh;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
        padding-top: 7px;
        padding-bottom: 17px;
        z-index: $z_navigation + 1;
        &__address {
          width: 100%;
          box-sizing: border-box;
          text-decoration: none;
          min-height: 50px;
          padding: 5px 10px;
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
          margin-left: 0;
        }
      }
      @media screen and (max-width: $tablet_middle) {
        margin-left: 0;
      }
      &_dadata {
        margin-left: 0 !important;
        width: 100%;
      }
      &:not(&_dadata) {
        min-width: min-content;
      }
    }
  }
  &__buttons {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    margin-top: 30px;
    @media screen and (max-width: $tablet_start) {
      margin-top: 15px;
    }
    &__button {
      width: 150px;
      &:first-child {
        margin-right: 30px;
      }
    }
  }
}
</style>
