<template>
  <form class="order">
    <div class="order__buttons">
      <ButtonStandart class="order__buttons__button">Доставка </ButtonStandart>
      <ButtonStandart class="order__buttons__button">
        Самовывоз
      </ButtonStandart>
    </div>
    <InputBlock
      @input="inputBlockChange"
      pre="+7"
      mask="(###) ###-##-##"
      placeholder="000 000 000 00"
      class="order__phone"
      name="phone"
      id="phone"
      type="text"
      text="Телефон"
      error="true"
    />
    <div class="order__delivery">
      <div class="order__delivery__content">
        <div class="order__delivery__content__select">
          <InputBlock
            @input="inputBlockChange"
            placeholder=""
            class="order__delivery__content__select__select"
            name="select"
            id="select"
            type="text"
            text="Пункт доставки"
          />
        </div>
        <div class="order__delivery__content__content">
          <div class="order__delivery__content__content__address">
            <InputBlock
              @input="inputBlockChange"
              placeholder="Введите адрес доставки"
              class="order__delivery__content__content__address__dadata"
              name="dadata"
              id="dadata"
              type="text"
              text="Адрес доставки"
              error="true"
            />
            <InputBlock
              @input="inputBlockChange"
              placeholder=""
              class="order__delivery__content__content__address__entrance"
              name="entrance"
              id="entrance"
              type="text"
              text="Подъезд"
              error="true"
            />
            <InputBlock
              @input="inputBlockChange"
              placeholder=""
              class="order__delivery__content__content__address__floor"
              name="floor"
              id="floor"
              type="text"
              text="Этаж"
            />
            <InputBlock
              @input="inputBlockChange"
              placeholder=""
              class="order__delivery__content__content__address__apartment"
              name="apartment"
              id="apartment"
              type="text"
              text="№ квартиры/офиса"
            />
            <InputBlock
              @input="inputBlockChange"
              placeholder=""
              class="order__delivery__content__content__address__intercom"
              name="intercom"
              id="intercom"
              type="text"
              text="№ домофона"
            />
          </div>
          <InputBlock
            @input="inputBlockChange"
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
      <div class="order__delivery__prices">
        <div class="order__delivery__prices__item">
          <div class="order__delivery__prices__item__name-block">
            <p class="order__delivery__prices__item__name">
              Стоимость доставки
            </p>
          </div>
          <p class="order__delivery__prices__item__price">120 ₽</p>
        </div>
      </div>
    </div>
    <div class="order__payment">
      <h3 class="order__payment__title title-extra-normal">Оплата</h3>
      <label class="order__payment__item">
        <RadiobuttonStandart
          class="order__payment__item__radio"
          name="payment_type"
          id="payment_type-0"
          val="0"
          :modelValue="payment_type"
          v-model="payment_type"
        />
        <p class="order__payment__item__name">Наличными при получении</p>
      </label>
      <label class="order__payment__item">
        <RadiobuttonStandart
          class="order__payment__item__radio"
          name="payment_type"
          id="payment_type-1"
          val="1"
          :modelValue="payment_type"
          v-model="payment_type"
        />
        <p class="order__payment__item__name">Перевод на банковсвкую карту</p>
      </label>
    </div>
    <div class="order__price">
      <p class="order__price__pre">Итого:</p>
      <p class="order__price__price">330 ₽</p>
      <p class="order__price__price_full">350 ₽</p>
    </div>
    <ButtonStandart class="order__button">
      <svg
        class="order__button__icon icon"
        width="14"
        height="14"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.8249 4.54601C19.6766 4.36351 19.4539 4.25757 19.2187 4.25757H18.9372L14.9082 0.228593C14.6031 -0.0765233 14.1084 -0.0765233 13.8033 0.228593L12.1096 1.9223L10.4158 0.228593C10.1107 -0.0765233 9.61604 -0.0765233 9.31096 0.228593L5.28198 4.25757H5.0678L5.00983 3.72507L5.00776 3.70796C4.73042 1.59394 2.91339 -0.000234371 0.781249 -0.000234371C0.349765 -0.000234371 0 0.349531 0 0.781014C0 1.2125 0.349765 1.56226 0.781249 1.56226C2.12914 1.56226 3.27824 2.56808 3.45749 3.9032L4.3862 12.4352C3.57421 12.8038 3.00781 13.6218 3.00781 14.57C3.00781 14.5767 3.00863 14.583 3.00878 14.5896C3.00863 14.5961 3.00781 14.6025 3.00781 14.6091C3.00781 15.9015 4.05921 16.9529 5.35155 16.9529H5.67018C5.59065 17.1859 5.54686 17.4354 5.54686 17.695C5.54686 18.9659 6.58077 19.9997 7.85155 19.9997C9.12233 19.9997 10.1562 18.9659 10.1562 17.695C10.1562 17.4354 10.1124 17.1859 10.0329 16.9529H13.4045C13.325 17.1859 13.2812 17.4354 13.2812 17.695C13.2812 18.9659 14.3151 19.9997 15.5859 19.9997C16.8567 19.9997 17.8906 18.9659 17.8906 17.695C17.8906 16.4242 16.8567 15.3904 15.5859 15.3904H5.35155C4.92077 15.3904 4.5703 15.0399 4.5703 14.6091C4.5703 14.6025 4.56948 14.5961 4.56933 14.5896C4.56948 14.583 4.5703 14.5767 4.5703 14.57C4.5703 14.1393 4.92077 13.7888 5.35155 13.7888H15.3254C16.7122 13.7888 17.985 12.9308 18.5678 11.6028C18.7412 11.2077 18.5615 10.7468 18.1665 10.5734C17.7714 10.4 17.3105 10.5797 17.1371 10.9748C16.8085 11.7234 16.0805 12.2263 15.3254 12.2263H5.93518L5.23788 5.82007H18.2577L17.8755 7.65276C17.7874 8.07514 18.0584 8.48897 18.4807 8.57705C18.5346 8.5883 18.5882 8.59365 18.6411 8.59365C19.0032 8.59365 19.3282 8.34033 19.4051 7.97178L19.9836 5.19835C20.0315 4.96811 19.9732 4.72851 19.8249 4.54601ZM15.5859 16.9529C15.9952 16.9529 16.3281 17.2858 16.3281 17.695C16.3281 18.1043 15.9952 18.4372 15.5859 18.4372C15.1767 18.4372 14.8437 18.1043 14.8437 17.695C14.8437 17.2858 15.1767 16.9529 15.5859 16.9529ZM7.85155 16.9529C8.2608 16.9529 8.59373 17.2858 8.59373 17.695C8.59373 18.1043 8.2608 18.4372 7.85155 18.4372C7.44229 18.4372 7.10936 18.1043 7.10936 17.695C7.10936 17.2858 7.44229 16.9529 7.85155 16.9529ZM9.77432 4.25757H7.4917L9.86342 1.88586L11.0047 3.02718L9.77432 4.25757ZM11.984 4.25757L14.3558 1.88586L16.7274 4.25757H11.984Z"
          fill="#5C6784"
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
      phone: null,
      address: null,
      entrance: null,
      floor: null,
      apartment: null,
      intercom: null,
      additional: null,
      payment_type: "0",
    };
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
  &__buttons {
    width: 100%;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    &__button {
      margin-right: 30px;
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
      @media screen and (max-width: $tablet) {
        flex-direction: column;
      }
      align-items: flex-start;
      &__select {
        width: 265px;
        margin-right: 60px;
        flex-shrink: 0;
        @media screen and (max-width: $tablet) {
          width: 100%;
          margin-bottom: 30px;
        }
      }
      &__content {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        flex-grow: 1;
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
          @media screen and (max-width: $phone) {
            &__apartment,
            &__entrance {
              grid-column-start: 1;
              grid-column-end: 3;
            &__intercom,
            &__floor {
              grid-column-start: 3;
              grid-column-end: 5;
            }
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
      margin-top: 70px;
      margin-bottom: 30px;
      @media screen and (max-width: $tablet) {
        margin-top: 30px;
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
    &__pre {
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 20px;
      text-transform: capitalize;
      margin-right: 40px;
      @media screen and (max-width: $tablet) {
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 700;
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
  }
  &__button {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    @media screen and (max-width: $tablet) {
      align-self: flex-start;
      width: 100%;
      max-width: 228px;
      height: 40px;
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
        transition: 0.3s;
      }
    }
  }
}
</style>
