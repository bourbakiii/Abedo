<template>
  <form class="order">
    <div class="order__buttons">
      <ButtonStandart class="order__buttons__button">Доставка</ButtonStandart>
      <ButtonStandart class="order__buttons__button">Самовывоз</ButtonStandart>
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
        <input
          class="order__payment__item__radio"
          type="radio"
          value="0"
          v-model="payment_type"
          name="payment_type"
          id="payment_type-0"
        />
        <p class="order__payment__item__name">Наличными при получении</p>
      </label>
      <label class="order__payment__item">
        <input
          class="order__payment__item__radio"
          type="radio"
          value="1"
          v-model="payment_type"
          name="payment_type"
          id="payment_type-1"
        />
        <p class="order__payment__item__name">Перевод на банковсвкую карту</p>
      </label>
    </div>
    <div class="order__price">
      <p class="order__price__pre">Итого:</p>
      <p class="order__price__price">330 ₽</p>
      <p class="order__price__price_full">350 ₽</p>
    </div>
    <ButtonStandart class="order__button">Оформить заказ</ButtonStandart>
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
      payment_type: 0,
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
      align-items: flex-start;
      &__select {
        width: 265px;
        margin-right: 60px;
        flex-shrink: 0;
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
          &__dadata {
            grid-column-start: 1;
            grid-column-end: 5;
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
    }
    &__price {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      &_full {
        margin-left: 10px;
        text-decoration: line-through;
        color: $extra_dark_grey;
      }
    }
  }
}
</style>