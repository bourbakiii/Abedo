<template>
  <form @submit.prevent="make" class="order">
    <div class="order__buttons">
      <ButtonStandart
        type="button"
        @click="self_get = false"
        :class="{ active: !self_get }"
        class="order__buttons__button"
      >Доставка
      </ButtonStandart>
      <ButtonStandart
        type="button"
        @click="enableSelfGet"
        :class="{ active: self_get }"
        class="order__buttons__button order__buttons__button_self"
      >
        Самовывоз
      </ButtonStandart>
    </div>
    <InputBlock
      @input="phone = $event"
      pre="+7"
      mask="(###) ###-##-##"
      placeholder="(000) 000 000 00"
      class="order__phone"
      name="phone"
      id="phone"
      type="text"
      text="Телефон"
      error="true"
      :value="phone"
    />
    <div v-if="!self_get" class="order__delivery">
      <div class="order__delivery__content">
        <div class="order__delivery__content__select">
          <InputBlock
            :value="address.name"
            class="order__delivery__content__select__input-block"
            name="select"
            id="select"
            type="text"
            text="Пункт доставки"
            arrow="true"
            :readonly="true"
            @click="openDropdown"
          />
          <transition name="opacity">
          <div
            v-if="show_dropdown"
            class="order__delivery__content__select__dropdown non-scrollbar"
          >
            <button
              @click="selectAddress(address)"
              type="button"
              v-for="address in addresses"
              :key="address.id"
              class="order__delivery__content__select__dropdown__button"
            >
              {{ address.name }}
            </button>
          </div>
          </transition>
        </div>
        <div class="order__delivery__content__content">
          <div class="order__delivery__content__content__address">
            <div class="order__delivery__content__content__address__dadata">
              <InputBlock
                placeholder="Введите адрес доставки"
                class="order__delivery__content__content__address__dadata__input"
                name="dadata"
                id="dadata"
                type="text"
                text="Адрес доставки"
                error="true"
                :value="address.value"
                :autocomplete="false"
                @input="
                  ($event) => {
                    address.house = null;
                    address.value = $event;
                    get_dadata();
                  }
                "
              />
              <div
                v-if="suggestions.length"
                class="order__delivery__content__content__address__dadata__suggestions"
                :class="`order__delivery__content__content__address__dadata__suggestions-${address.id}`"
              >
                <button
                  type="button"
                  :key="address.value"
                  v-for="address in suggestions"
                  class="order__delivery__content__content__address__dadata__suggestions__address"
                  @click="set_address(address)"
                >
                  {{ address.value }}
                </button>
              </div>
            </div>
            <InputBlock
              :value="address.entrance"
              @input="address.entrance = $event"
              class="order__delivery__content__content__address__entrance"
              name="entrance"
              id="entrance"
              type="text"
              text="Подъезд"
              error="true"
            />
            <InputBlock
              :value="address.floor"
              @input="address.floor = $event"
              class="order__delivery__content__content__address__floor"
              name="floor"
              id="floor"
              type="text"
              text="Этаж"
            />
            <InputBlock
              :value="address.flat"
              @input="address.flat = $event"
              class="order__delivery__content__content__address__flat"
              name="flat"
              id="flat"
              type="text"
              text="№ квартиры/офиса"
            />
            <InputBlock
              :value="address.intercom"
              @input="address.intercom = $event"
              class="order__delivery__content__content__address__intercom"
              name="intercom"
              id="intercom"
              type="text"
              text="№ домофона"
            />
          </div>
          <InputBlock
            :value="description"
            @input="description = $event"
            placeholder="Напишите как вас найти, или пожелания к блюду"
            class="order__delivery__content__content__additional"
            name="additional"
            id="additional"
            type="text"
            text="Комментарий"
            :required="false"
          />
        </div>
      </div>
      <div
        class="order__delivery__prices"
        v-if="delivery_price || door_delivery_price"
      >
        <div class="order__delivery__prices__item" v-if="delivery_price">
          <div class="order__delivery__prices__item__name-block">
            <p class="order__delivery__prices__item__name">
              Стоимость доставки
            </p>
          </div>
          <p class="order__delivery__prices__item__price">
            {{ final_delivery_price_text(delivery_price) }}
          </p>
        </div>
        <label
          for="door_delivery"
          class="order__delivery__prices__item order__delivery__prices__item_door-delivery unselectable"
          v-if="door_delivery_price"
        >
          <div class="order__delivery__prices__item__name-block">
            <Checkbox
              id="door_delivery"
              class="order__delivery__prices__item__checkbox"
              :value="!door_delivery"
              :checked="door_delivery"
              @change="door_delivery = !$event"
            />
            <p class="order__delivery__prices__item__name">
              Доставить до двери
            </p>
          </div>
          <p class="order__delivery__prices__item__price">
            + {{ door_delivery_price }}₽
          </p>
        </label>
      </div>
    </div>
    <div v-else class="order__delivery">
      <h3 class="order__delivery__title title-small">Адрес самовывоза:</h3>
      <p class="order__delivery__value">
        {{ parseAddress(cart_partner) }}
      </p>
    </div>
    <div class="order__payment">
      <h3 class="order__payment__title title-extra-normal">Оплата</h3>
      <label
        for="payment_type-0"
        :class="{ order__payment__item_checked: is_cashless_payment == false }"
        class="order__payment__item unselectable"
      >
        <Radiobutton
          class="order__payment__item__radio"
          id="payment_type-0"
          :value="false"
          :checked="is_cashless_payment == false"
          @change="changeRadio"
        />
        <p class="order__payment__item__name">Наличными при получении</p>
      </label>
      <label
        for="payment_type-1"
        :class="{ order__payment__item_checked: is_cashless_payment == true }"
        class="order__payment__item unselectable"
      >
        <Radiobutton
          class="order__payment__item__radio"
          id="payment_type-1"
          :value="true"
          :checked="is_cashless_payment == true"
          @change="changeRadio"
        />
        <p class="order__payment__item__name">Перевод на банковскую карту</p>
      </label>
    </div>
    <div v-if="cart_partner.order_message" class="order__some-text">
      {{ cart_partner.order_message }}
    </div>
    <div class="order__price">
      <p class="order__price__pre">Итого:</p>
      <p class="order__price__price">{{ total_order_discount_price }}₽</p>
      <p
        v-if="total_order_discount_price < total_order_price"
        class="order__price__price_full"
      >
        {{ total_order_price }}₽
      </p>
    </div>
    <ButtonStandart :loader="loading" class="order__button">
      <svg
        class="order__button__icon"
        width="17"
        height="14"
        viewBox="0 0 17 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.999999 6.625L6.625 12.25L16 1"
          stroke="white"
          stroke-width="2"
        />
      </svg>

      Оформить заказ
    </ButtonStandart
    >
    <div
      :class="{
        order__messages_margined: errors.length,
      }"
      class="order__messages"
    >
      <transition name="message" appear>
      <Message
        v-for="error in errors"
        :key="error"
        class="order__messages__item_error order__messages__item"
      >{{ error }}
      </Message
      >
      </transition>
    </div>
  </form>
</template>
<script>
import inputBlockMixin from "@/mixins/input-block.js";
import dadataMixin from "@/mixins/dadata.js";
import parserMixin from "@/mixins/parser.js";
import errorsMessagesMixin from "@/mixins/errors-messages.js";
import qs from "qs";

export default {
  mixins: [dadataMixin, inputBlockMixin, parserMixin, errorsMessagesMixin],
  data() {
    return {
      phone: this.parsePhone(this.$store.state.account.user.phone) ?? null,
      address: {
        name: null,
        value: null,
        street: null,
        entrance: null,
        floor: null,
        flat: null,
        intercom: null,
        city: null,
        house: null,
      },
      loading: false,
      description: null,
      additional: null,
      is_cashless_payment: false,
      door_delivery: false,
      delivery_price: +this.$store.state.cart?.partner?.delivery?.price,
      door_delivery_price: null,
      show_dropdown: false,
      self_get: false,
    };
  },
  fetchOnServer: false,
  fetch() {
    if (!this.$store.state.cart.partner.id) return;
    this.$axios
      .get("/api/shops/delivery", {
        params: {
          shop_id: this.$store.state.cart.partner.id,
        },
      })
      .then(({data: {delivery}}) => {
        this.delivery_price = delivery.delivery_price;
        this.door_delivery_price = delivery.door_delivery_price;
      });
  },
  methods: {
    enableSelfGet() {
      this.door_delivery = false;
      this.self_get = true;
    },

    changeRadio(value) {
      this.is_cashless_payment = Boolean(value);
    },
    selectAddress(address) {
      this.address = {...address};
    },
    openDropdown() {
      this.show_dropdown = true;
      document.addEventListener("click", this.nonDropdownClick);
    },
    closeDropdown() {
      this.show_dropdown = false;
      document.removeEventListener("click", this.nonDropdownClick);
    },
    nonDropdownClick(event) {
      const dropdown_content = document.querySelector(
        ".order__delivery__content__select"
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
      )
        this.closeDropdown();
    },
    make() {
      let order_products_format = [];
      for (const product of this.cart_products) {
        let {id, count, props = []} = product;
        order_products_format.push({id, count, props});
      }
      //////////////////////////////////////////////////////
      let copy_address = {};
      if (!this.self_get) {
        copy_address = {...this.address};
        copy_address.lon = copy_address.get_lon;
        copy_address.lat = copy_address.get_lat;
        copy_address.apartment = copy_address.flat;
        delete copy_address.get_lon,
          delete copy_address.get_lat,
          delete copy_address.flat;
      }
      let params = qs.stringify({
        products: [...order_products_format],
        with_delivery: +!this.self_get,
        shop_id: this.cart_partner.id,
        with_door_delivery: +this.door_delivery,
        address: this.self_get ? null : this.address.value,
        comment: this.description,
        ...copy_address,
        phone: parseInt(this.phone.replace(/\D+/g, "")),
        is_cashless_payment: +this.is_cashless_payment,
        with_gifts: +this.with_gifts,
        promo_code: this.$store.state.cart.promo.value || null
      });
      this.errors = [];
      //////////////////////////////////////////////////////
      this.loading = true;
      this.$axios
        .post(`/api/order/make`, params, {
          // body: params,
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then(({data}) => {
          this.$store.commit("cart/clear");
          this.$router.push("/success");
        })
        .catch((error) => {
          if (error?.response?.status == 422) {
            this.errors = Object.values(error.response.data.errors)
              .map((el) => el.flat())
              .flat();
          } else if (error?.response?.status == 400) {
            this.errors = [error.response.data.message];
          }
          const element = document.querySelector(`.order__messages`);
          element.scrollIntoView({block: "center", behavior: "smooth"});
        }).finally(() => {
        this.loading = false;
      });
    },
    setStartAddress() {
      let index = this.addresses.map((el) => el.is_default).indexOf(true);
      if (index >= 0) this.address = {...this.addresses[index]};
      else if (this.addresses.length) this.address = {...this.addresses[0]};
    },
  },
  created() {
    this.setStartAddress();
  },
  mounted() {
    this.self_get = JSON.parse(localStorage.getItem("self_get")) || false;
  },
  computed: {
    total_order_price() {
      let summ =
        +this.$store.getters["cart/total_price"] +
        +this.final_delivery_price(this.self_get ? 0 : +this.delivery_price) +
        +(this.door_delivery ? this.door_delivery_price : 0);
      return summ % 1 == 0 ? summ : summ.toFixed(2);
    },
    total_order_discount_price() {
      let summ =
        +this.$store.getters["cart/total_discount_price"] +
        +this.final_delivery_price(this.self_get ? 0 : +this.delivery_price) +
        +(this.door_delivery ? this.door_delivery_price : 0);
      return summ % 1 == 0 ? summ : summ.toFixed(2);
    },
    cart_products() {
      return this.$store.state.cart.products;
    },
    cart_partner() {
      return this.$store.state.cart.partner;
    },
    token() {
      return this.$store.state.account.token;
    },
    with_gifts() {
      return Boolean(this.$store.state.cart.gifts.length);
    },
    addresses_names() {
      return (this.$store.state.account?.user.addresses ?? []).map(
        (el) => el.name
      );
    },
    addresses() {
      return this.$store.state.account?.user.addresses ?? [];
    },
  },
  watch: {

    "$store.state.account": {
      handler() {
        this.phone =
          this.parsePhone(this.$store.state.account.user.phone) ?? null;
        this.setStartAddress();
      },
      deep: true,
    },
    suggestions(value) {
      const dropdownAddressClick = (event) => {
        const dropdown_content = document.querySelector(
          `.order__delivery__content__content__address__dadata`
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
    self_get(value) {
      console.log("Эта функция вызывается");
      console.log(value);
      console.log(this._isMounted);
      localStorage.setItem("self_get", JSON.stringify(this.self_get));
    },
  },
};
</script>
<style lang="scss" scoped>
.order {
  padding: 30px;
  border-radius: 20px;
  background-color: $white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  @media screen and (max-width: $tablet) {
    background-color: transparent;
    border-radius: 0px;
    padding: 0px;
  }

  &__buttons {
    width: 100%;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;

    &__button {
      margin-right: 30px;
      height: 45px;
      width: 157px;
      background-color: $dark_grey;
      border-color: transparent;
      color: $black;
      font-size: 16px;
      font-weight: 600;

      &.active {
        background-color: $darkblue;
        color: $white;
      }

      @media screen and (max-width: $tablet) {
        margin-right: 20px;
        width: 134px;
        height: 35px !important;
      }

      &:last-of-type {
        margin-right: 0px;
      }
    }
  }

  &__phone {
    width: 100%;
    margin-bottom: 30px;
  }

  &__delivery {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    margin-bottom: 30px;

    &__title {
      @media screen and (max-width: $phone_normal) {
        font-size: 18px;
      }
    }

    &__value {
      @media screen and (max-width: $phone_normal) {
        font-size: 15px;
      }
    }

    &__content {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      @media screen and (max-width: $notebook) {
        flex-direction: column;
      }
      align-items: flex-start;

      &__select {
        width: 265px;
        margin-right: 60px;
        flex-shrink: 0;
        position: relative;
        @media screen and (max-width: $notebook) {
          width: 100%;
          margin-bottom: 30px;
        }

        &__dropdown {
          position: relative;
          z-index: 10;
          background-color: transparent;
          border: none;
          outline: none;
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
          padding: 7px 10px;
          max-height: 200px;
          overflow-y: auto;
          &__button {
            outline: none;
            border: none;
            width: 100%;
            box-sizing: border-box;
            text-decoration: none;
            border-bottom: 1px solid $dark_grey;
            min-height: 50px;
            padding: 10px 30px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: row;
            transition: $transition;
            background-color: $white;
            outline: none;

            &:active {
              transform: scale(0.98);
            }

            &:last-child {
              border: none;
            }
          }
        }
      }

      &__content {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        flex-grow: 1;
        @media screen and (max-width: $notebook) {
          width: 100%;
        }

        &__address {
          width: 100%;
          display: grid;
          grid-gap: 30px;
          grid-template-columns: repeat(4, 1fr);
          margin-bottom: 30px;
          @media screen and (max-width: $phone) {
            grid-gap: 30px 15px;
          }

          &__dadata {
            position: relative;
            grid-column-start: 1;
            grid-column-end: 5;

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

          @media screen and (max-width: $tablet) {
            &__flat,
            &__entrance {
              grid-column-start: 1;
              grid-column-end: 3;
            }

            &__intercom,
            &__floor {
              grid-column-start: 3;
              grid-column-end: 5;
            }
          }
        }

        &__additional {
          width: 100%;
        }
      }
    }

    &__prices {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      margin: 70px 0px 40px;
      @media screen and (max-width: $tablet) {
        margin: 30px 0px;
      }

      &__item {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        min-height: 50px;
        border-top: 1px solid $extra_dark_grey;

        &:last-child {
          border-bottom: 1px solid $extra_dark_grey;
        }

        &__checkbox {
          margin-right: 13px;
        }

        &__name-block {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: row;
          width: 200px;
          margin-right: 15px;

          &__name {
            font-family: "SF Pro Display";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
          }
        }

        &__price {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 20px;
        }

        &_door-delivery {
          cursor: pointer;
        }
      }
    }
  }

  &__payment {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    padding-bottom: 30px;
    border-bottom: 1px solid $dark_grey;
    @media screen and (max-width: $tablet) {
      border-bottom: none;
    }

    &__title {
      margin-bottom: 30px;
      @media screen and (max-width: $tablet) {
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
      }
    }

    &__item {
      cursor: pointer;
      background: $blue_grey;
      border: 1px solid $dark_grey;
      width: auto;
      min-height: 45px;
      max-width: 100%;
      padding: 8px 35px;
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      margin-bottom: 20px;

      &,
      * {
        transition: all $transition;
      }

      .order__payment__item__radio {
        width: 22.5px;
        height: 22.5px;

        &.checked {
          border-color: $white;

          * {
            stroke: $white;
          }
        }
      }

      @media screen and (max-width: $tablet) {
        min-height: 50px;
        margin-bottom: 15px;
        border: 1px solid $darkblue;
        padding: 8px 27px;
      }

      &:last-of-type {
        margin-bottom: 0px;
      }

      &_checked {
        background-color: $darkblue;
      }

      &_checked & {
        &__name {
          color: $white;
        }
      }

      &__radio {
        flex-shrink: 0;
        margin-right: 10px;
      }

      &__name {
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
      }
    }
  }

  &__price {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    padding-top: 30px;
    @media screen and (max-width: $tablet) {
      padding-top: 0px;
    }

    &__pre {
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 20px;
      text-transform: capitalize;
      margin-right: 40px;
      @media screen and (max-width: $tablet) {
        font-size: 20px;
        line-height: 24px;
      }
    }

    &__price {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      @media screen and (max-width: $tablet) {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
      }

      &_full {
        margin-left: 10px;
        text-decoration: line-through;
        color: $extra_dark_grey;
        @media screen and (max-width: $tablet) {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 20px;
        }
      }
    }
  }

  &__some-text {
    background-color: red;
    width: 100%;
    background: $white;
    border: 1px solid $darkblue;
    border-radius: 10px;
    padding: 15px 24px;
    margin: 30px 0px 40px;
  }

  &__button {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    height: 50px;
    width: 228px;
    padding: 0px 5px;
    font-size: 16px;
    font-weight: 600;

    svg * {
      stroke: $darkblue;
      fill: transparent !important;
    }

    &:hover {
      svg * {
        stroke: $white;
      }
    }

    @media screen and (max-width: $tablet) {
      align-self: flex-start;
      width: 100%;
      max-width: 228px;
      height: 40px;
      background-color: $darkblue;
      color: $white;
      &__icon {
        display: none;
      }
    }

    &:hover &,
    &:active & {
      &__icon * {
        fill: $white;
      }
    }

    &__icon {
      margin-right: 10px;

      &,
      * {
        transition: $transition;
      }
    }
  }

  &__messages {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    transition: $transition * 2;

    &_margined {
      margin-top: 15px;
    }


    .empty {
      margin-top: 0px;
    }
  }
}
</style>
