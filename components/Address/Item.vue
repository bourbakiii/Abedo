<template>
  <form
    @submit.prevent="action(address, 'edit')"
    class="address-item adress address"
  >
    <input
      v-model="address.name"
      class="address-item__name"
      contenteditable
      :readonly="!editing"
      :class="{ editing }"
    />
    <button @click="remove" type="button" class="address-item__remove">
      Удалить
    </button>
    <div class="address-item__content">
      <div class="address-item__content__dadata">
        <InputBlock
          class="address-item__content__input-block address-item__content__input-block_dadata"
          :id="`adress-${address.id}-dadata`"
          name=""
          text="Адрес доставки"
          :value="address.value"
          :readonly="!editing"
          :autocomplete="false"
          @input="
            ($event) => {
              address.house = null;
              address.value = $event;
              get_dadata();
            }
          "
        />
        <transition name="opacity">
          <div
            v-if="suggestions.length"
            class="address-item__content__dadata__suggestions"
            :class="`address-item__content__dadata__suggestions-${address.id}`"
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
        </transition>
      </div>
      <div class="address-item__content__smalls">
        <InputBlock
          class="address-item__content__input-block address-item__content__input-block_intercom"
          :id="`adress-${address.id}-intercom`"
          name=""
          text="№ домофона"
          :value="address.intercom"
          @input="address.intercom = $event"
          :readonly="!editing"
        />
        <InputBlock
          class="address-item__content__input-block address-item__content__input-block_entrance"
          :id="`adress-${address.id}-entrance`"
          name=""
          text="Подъезд"
          :value="address.entrance"
          @input="address.entrance = $event"
          :readonly="!editing"
        />
        <InputBlock
          class="address-item__content__input-block address-item__content__input-block_floor"
          :id="`adress-${address.id}-floor`"
          name=""
          text="Этаж"
          :value="address.floor"
          @input="address.floor = $event"
          :readonly="!editing"
        />
        <InputBlock
          class="address-item__content__input-block address-item__content__input-block_flat"
          :id="`adress-${address.id}-flat`"
          name=""
          text="№ квартиры/офиса"
          :value="address.flat"
          @input="address.flat = $event"
          :readonly="!editing"
        />
      </div>
      <transition name="edit-button">
        <ButtonStandart
          type="button"
          class="address-item__content__edit filled"
          v-if="!editing"
          @click="editing = true"
          >Изменить</ButtonStandart
        >
      </transition>
    </div>
    {{ address.id_default }}

    <label
      :for="`address-item__default-${address.id}`"
      class="address-item__default"
    >
      <Checkbox
        :id="`address-item__default-${address.id}`"
        class="address-item__default__checkbox"
        v-model="address.is_default"
        @change="change_default"
      />
      <p class="address-item__default__text">По умолчанию</p>
    </label>
    <transition name="address-item__buttons-transition">
      <div class="address-item__buttons" v-if="editing">
        <ButtonStandart
          type="button"
          @click="stopEditing"
          class="address-item__buttons__button address-item__buttons__button_decline red"
          >Отменить</ButtonStandart
        >
        <ButtonStandart
          class="address-item__buttons__button address-item__buttons__button_accept green"
          >Изменить</ButtonStandart
        >
      </div>
    </transition>
    <transition-group
      tag="div"
      class="address-item__errors"
      name="message"
      appear
      mode="out-in"
      :class="{
        'address-item__errors_margined': errors.length,
      }"
    >
      <Message
        v-for="error in errors"
        :key="error"
        class="address-item__errors__item_error address-item__errors__item"
        >{{ error }}</Message
      >
    </transition-group>
  </form>
</template>
<script>
import dadataMixin from "@/mixins/dadata.js";
export default {
  mixins: [dadataMixin],
  props: {
    given_address: {
      required: true,
    },
  },
  data() {
    return {
      suggestions: [],
      address: this.given_address,
      start_address: { ...this.given_address },
      editing: false,
    };
  },

  methods: {
    async change_default(value) {
      if (value) {
        await this.$axios
          .post("/api/user/address/default", null, {
            params: {
              id: this.address.id,
            },
            headers: {
              Authorization: `Bearer ${this.$store.state.account.token}`,
            },
          })
          .then(() => {});
      } else {
        await this.$axios
          .post("/api/user/address/default/remove", null, {
            params: {
              id: this.address.id,
            },
            headers: {
              Authorization: `Bearer ${this.$store.state.account.token}`,
            },
          })
          .then(() => {});
      }
    },
    remove() {
      this.$axios
        .delete(`/api/user/address/${this.address.id}/delete`, {
          headers: {
            Authorization: `Bearer ${this.$store.state.account.token}`,
          },
        })
        .then(() => {
          this.$store.commit("account/action", (state) => {
            state.user.addresses.splice(
              state.user.addresses
                .map((el) => +el.id)
                .indexOf(+this.address.id),
              1
            );
          });
        });
    },
    stopEditing() {
      for (let key in this.start_address)
        this.address[key] = this.start_address[key];
      this.editing = false;
      
    },
  },
  watch: {
    suggestions(value) {
      const dropdownAddressClick = (event) => {
        const dropdown_content = document.querySelector(
          `.address-item__content__dadata__suggestions-${this.address.id}`
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
          document.removeEventListener("click", dropdownAddressClick);
        }
      };
      if (value.length)
        document.addEventListener("click", dropdownAddressClick);
      else document.removeEventListener("click", dropdownAddressClick);
    },
    // address: {
    //   handler(value) {
    //     console.log(value);
    //     console.log("the adress is changed");
    //     this.$emit("change_address", value);
    //   },
    //   deep: true,
    // },
  },
};
</script>
<style lang="scss" scoped>
.edit-button {
  &-enter,
  &-leave-to {
    opacity: 0;
    height: 0px !important;
    margin-left: auto !important;
    margin-top: 0px !important;
    @media screen and (min-width: $phone) {
      height: 50px !important;
      width: 0px !important;
      padding-left: 0px !important;
      padding-right: 0px !important;
      margin: 0px !important;
    }
  }
  &-enter-active,
  &-leave-active {
    transition: all $transition;
  }
}
.address-item__buttons-transition {
  &-enter,
  &-leave-to {
    margin-top: 0px !important;
    opacity: 0 !important;
    label {
      height: 0px;
    }
    button {
      height: 0px !important;
    }
  }
  &-enter-active,
  &-leave-active {
    transition: all $transition;
  }
}
.address-item {
  background-color: $white;
  width: 100%;
  border: 1px solid $dark_grey;
  padding: 30px 30px 40px;
  border-radius: 20px;
  position: relative;
  @media screen and (max-width: $tablet) {
    padding: 15px;
  }
  &__remove {
    position: absolute;
    top: 19px;
    right: 13px;

    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    background-color: transparent;
    border: none;
    outline: none;
    color: $red;
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
    outline: none;
    transition: all $transition;
    border: none;
    border-bottom: 1px solid $dark_grey;
    padding-bottom: 4px;
    &:not(.editing) {
      border-bottom: 1px solid transparent;
      margin-bottom: 32px;
      padding-bottom: 0px;
    }
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
        z-index: $z_navigation + 1;
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
  &__default {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    align-self: flex-start;
    width: max-content;
    margin: 10px 0px;
    &__text {
      margin-left: 10px;
    }
  }
  &__buttons {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
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
  &__errors {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    transition: 0.3s;
    &_margined {
      margin-top: 15px;
    }
    transition: calc($transition * 2);
    .empty {
      margin-top: 0px;
    }
  }
}
</style>
