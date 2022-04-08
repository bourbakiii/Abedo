<template>
  <form class="order">
    <div class="order__buttons">
      <ButtonStandart class="order__buttons__button" text="Доставка" />
      <ButtonStandart class="order__buttons__button" text="Самовывоз" />
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
    />
    <div class="order__delivery">
      <div class="order__delivery__select">
        <InputBlock
            @input="inputBlockChange"
            placeholder=""
            class="order__delivery__select__select"
            name="select"
            id="select"
            type="text"
            text="Пункт доставки"
          />
      </div>
      <div class="order__delivery__content">
        <div class="order__delivery__content__address">
          <InputBlock
            @input="inputBlockChange"
            placeholder="Введите адрес доставки"
            class="order__delivery__content__address__dadata"
            name="dadata"
            id="dadata"
            type="text"
            text="Адрес доставки"
          />
          <InputBlock
            @input="inputBlockChange"
            placeholder=""
            class="order__delivery__content__address__entrance"
            name="entrance"
            id="entrance"
            type="text"
            text="Подъезд"
          />
          <InputBlock
            @input="inputBlockChange"
            placeholder=""
            class="order__delivery__content__address__floor"
            name="floor"
            id="floor"
            type="text"
            text="Этаж"
          />
          <InputBlock
            @input="inputBlockChange"
            placeholder=""
            class="order__delivery__content__address__apartment"
            name="apartment"
            id="apartment"
            type="text"
            text="№ квартиры/офиса"
          />
          <InputBlock
            @input="inputBlockChange"
            placeholder=""
            class="order__delivery__content__address__intercom"
            name="intercom"
            id="intercom"
            type="text"
            text="№ домофона"
          />
        </div>
        <InputBlock
          @input="inputBlockChange"
          placeholder="Напишите как вас найти, или пожелания к блюду"
          class="order__delivery__content__additional"
          name="additional"
          id="additional"
          type="text"
          text="Комментарий"
        />
      </div>
    </div>
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
}
</style>