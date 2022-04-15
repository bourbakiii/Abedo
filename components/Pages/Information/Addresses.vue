<template>
  <div class="addresses">
    <h1 class="addresses__title title-normal">Адреса доставки</h1>
    <div class="addresses__content">
      <div
        v-for="(item, index) in 3"
        :key="index"
        class="addresses__content__item"
      >
        <p class="addresses__content__item__name" contenteditable="">Работа</p>
        <div class="addresses__content__item__data">
          <InputBlock
            name="dadata"
            class="
              addresses__content__item__data__input-block
              addresses__content__item__data__input-block__dadata
            "
            text="Адрес доставки"
          />
          <InputBlock
            name="intercom"
            class="
              addresses__content__item__data__input-block
              addresses__content__item__data__input-block__intercom
            "
            text="№ домофона"
          />
          <InputBlock
            name="entrance"
            class="
              addresses__content__item__data__input-block
              addresses__content__item__data__input-block__entrance
            "
            text="Подъезд"
          />
          <InputBlock
            name="floor"
            class="
              addresses__content__item__data__input-block
              addresses__content__item__data__input-block__floor
            "
            text="Этаж"
          />
          <InputBlock
            name="apartment"
            class="
              addresses__content__item__data__input-block
              addresses__content__item__data__input-block__apartment
            "
            text="№ квартиры/офиса"
          />
          <ButtonStandart class="addresses__content__item__data__button"
            >Изменить</ButtonStandart
          >
        </div>
      </div>
    </div>
    <ButtonStandart class="addresses__add">
      <svg
        class="addresses__add__icon"
        width="7"
        height="8"
        viewBox="0 0 7 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.40481 3.86664H4.08104V1.54287C4.08104 1.22219 3.82136 0.961914 3.50009 0.961914C3.17882 0.961914 2.91913 1.22219 2.91913 1.54287V3.86664H0.595361C0.274092 3.86664 0.0144043 4.12691 0.0144043 4.4476C0.0144043 4.76828 0.274092 5.02855 0.595361 5.02855H2.91913V7.35232C2.91913 7.67301 3.17882 7.93328 3.50009 7.93328C3.82136 7.93328 4.08104 7.67301 4.08104 7.35232V5.02855H6.40481C6.72608 5.02855 6.98577 4.76828 6.98577 4.4476C6.98577 4.12691 6.72608 3.86664 6.40481 3.86664Z"
          fill="#5C6784"
        />
        
      </svg>
    </ButtonStandart>
  </div>
</template>
<style lang="scss" scoped>
.addresses {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  &__title {
    margin-bottom: 70px;
  }
  &__content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    &__item {
      width: 100%;
      min-height: 185px;
      padding: 30px 30px 40px;
      background-color: $white;
      border-radius: 20px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      margin-bottom: 30px;
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
      }
      &__data {
        width: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        flex-direction: row;
        &__input-block {
          flex-grow: 1;
          margin-right: 30px;
          &__dadata {
            width: 471px;
            flex-shrink: 0;
            flex-grow: 1;
          }
          &__apartment {
            width: 142px;
            flex-shrink: 0;
          }
          &:last-of-type {
            margin-right: 0px;
          }
        }
        &__button {
          margin-left: 75px;
          width: 102px;
          flex-shrink: 0;
        }
      }
    }
  }
  &__add{
    margin-top:  40px;
    width: 245px;
    &__icon{
      margin-right: 10px;
      width: 19px;
      height:19px;
      border-radius: 90px;
      padding: 2px;
      border: 2px solid $darkblue;
    }
  }
}
</style>