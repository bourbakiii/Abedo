<template>
  <form class="order">
    <div class="order__buttons">
      <ButtonStandart class="order__buttons__button active"
        >Доставка
      </ButtonStandart>
      <ButtonStandart
        class="order__buttons__button order__buttons__button_self"
      >
        Самовывоз
      </ButtonStandart>
    </div>
    <InputBlock
      @input="inputBlockChange"
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
    <div class="order__delivery">
      <div class="order__delivery__content">
        <div class="order__delivery__content__select">
          <InputBlock
            :value="addresses_names[0]"
            
            class="order__delivery__content__select__input-block"
            name="select"
            id="select"
            type="text"
            text="Пункт доставки"
            arrow="true"
            :readonly='true'
            @click='openDropdown'
          />
          <transition name='opacity'>
          <div v-if='show_dropdown' class="order__delivery__content__select__dropdown">
            <button @click='selectAddress(address)' type='button' v-for='address in addresses' :key='address.id' class="order__delivery__content__select__dropdown__button">
              {{address.name}}
            </button>
          </div>
          </transition>
        </div>
        <div class="order__delivery__content__content">
          <div class="order__delivery__content__content__address">
            <div class="order__delivery__content__content__address__dadata">
              <InputBlock
              :value='address.value'
                placeholder="Введите адрес доставки"
                class="order__delivery__content__content__address__dadata__input"
                name="dadata"
                id="dadata"
                type="text"
                text="Адрес доставки"
                error="true"
              />
            </div>
            <InputBlock
:value='address.entrance'
@input='adress.entrance = $event'
              
              class="order__delivery__content__content__address__entrance"
              name="entrance"
              id="entrance"
              type="text"
              text="Подъезд"
              error="true"
            />
            <InputBlock
              :value='address.floor'
@input='adress.floor = $event'
              
              class="order__delivery__content__content__address__floor"
              name="floor"
              id="floor"
              type="text"
              text="Этаж"
            />
            <InputBlock
              :value='address.flat'
@input='adress.flat = $event'
              
              class="order__delivery__content__content__address__flat"
              name="flat"
              id="flat"
              type="text"
              text="№ квартиры/офиса"
            />
            <InputBlock
                            :value='address.intercom'
@input='adress.intercom = $event'
              
              class="order__delivery__content__content__address__intercom"
              name="intercom"
              id="intercom"
              type="text"
              text="№ домофона"
            />
          </div>
          <InputBlock
            :value='description'
@input='description = $event'
            placeholder="Напишите как вас найти, или пожелания к блюду"
            class="order__delivery__content__content__additional"
            name="additional"
            id="additional"
            type="text"
            text="Комментарий"
            error="true"
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
            {{ delivery_price }}₽
          </p>
        </div>
        <div class="order__delivery__prices__item" v-if="door_delivery_price">
          <div class="order__delivery__prices__item__name-block">
            <Checkbox
              id="door_delivery"
              class="order__delivery__prices__item__checkbox"
              v-model="door_delivery"
            />
            <p class="order__delivery__prices__item__name">
              Стоимость доставки
            </p>
          </div>
          <p class="order__delivery__prices__item__price">
            + {{ door_delivery_price }}₽
          </p>
        </div>
      </div>
    </div>
    <div class="order__payment">
      <h3 class="order__payment__title title-extra-normal">Оплата</h3>
      <label for="payment_type-0" class="order__payment__item">
        <Radiobutton
          class="order__payment__item__radio"
          id="payment_type"
          :value="true"
          trueValue="true"
          v-model="payment_type"
        />
        <p class="order__payment__item__name">Наличными при получении</p>
      </label>
      <label for="payment_type-1" class="order__payment__item">
        <Radiobutton
          class="order__payment__item__radio"
          id="payment_type"
          :value="false"
          trueValue="false"
          v-model="payment_type"
        />
        <p class="order__payment__item__name">Перевод на банковсвкую карту</p>
      </label>
    </div>
    <div class="order__price">
      <p class="order__price__pre">Итого:</p>
      <p class="order__price__price">330₽</p>
      <p class="order__price__price_full">350₽</p>
    </div>
    <ButtonStandart class="order__button">
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

      Оформить заказ</ButtonStandart
    >
  </form>
</template>
<script>
import inputBlockMixin from "@/mixins/input-block.js";
export default {
  mixins: [inputBlockMixin],
  data() {
    return {
      phone: this.$store.state.account.user.phone ?? null,
      address: {
        name: null,
        value: null,
        street: null,
        entrance: null,
        floor: null,
        flat: null,
        intercom: null,
        city: null,
        hose: null,
      },
      description: null,
      additional: null,
      payment_type: 2,
      door_delivery: false,
      delivery_price: null,
      door_delivery_price: null,
      show_dropdown: false
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
      .then(({ data: { delivery } }) => {
        this.delivery_price = delivery.delivery_price;
        this.door_delivery_price = delivery.door_delivery_price;
      });
  },
  methods:{
    selectAddress(address){
      this.address = address;
    },
     openDropdown(){
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
  },
  computed: {
    addresses_names() {
      return (this.$store.state.account?.user.addresses ?? []).map(
        (el) => el.name
      );
    },
    addresses(){
      return this.$store.state.account?.user.addresses??[]
    }
  },
  created(){
    let index = this.addresses.map(el=>el.is_default).indexOf(true);
    if(index>=0) return this.address = this.addresses[index];
  },
  watch: {
    "$store.state.account": {
      handler() {
        this.phone = this.$store.state.account.user.phone ?? null;
      },
      deep: true,
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
      &.active {
        background-color: $darkblue;
        color: $white;
      }
      &_self {
        background-color: $dark_grey;
        border-color: transparent;
        color: $black;
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
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
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
            grid-column-start: 1;
            grid-column-end: 5;
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
      margin: 70px 0px;
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
        &:last-of-type {
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
      @media screen and (max-width: $tablet) {
        min-height: 50px;
        margin-bottom: 15px;
        border: 1px solid $darkblue;
      }
      &:last-of-type {
        margin-bottom: 0px;
      }
      &__radio {
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
  &__button {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    height: 50px;
    width: 228px;
    padding: 0px 5px;
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
}
</style>
