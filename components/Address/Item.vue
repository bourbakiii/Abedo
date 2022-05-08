<template>
  <div class="address-item">
    <p class="address-item__name" contenteditable="">Работа</p>
    <div class="address-item__data">
      <InputBlock
        id="dadata"
        name="dadata"
        class="
          address-item__data__input-block
          address-item__data__input-block__dadata
        "
        text="Адрес доставки"
      />
      <div class="address-item__data__additional">
        <InputBlock
          id="intercom"
          name="intercom"
          class="
            address-item__data__additional__input-block
            address-item__data__additional__input-block__intercom
          "
          text="№ домофона"
        />
        <InputBlock
          id="entrance"
          name="entrance"
          class="
            address-item__data__additional__input-block
            address-item__data__additional__input-block__entrance
          "
          text="Подъезд"
        />
        <InputBlock
          id="floor"
          name="floor"
          class="
            address-item__data__additional__input-block
            address-item__data__additional__input-block__floor
          "
          text="Этаж"
        />
        <InputBlock
          id="flat"
          name="flat"
          class="
            address-item__data__additional__input-block
            address-item__data__additional__input-block__flat
          "
          text="№ квартиры/офиса"
        />
      </div>
      <ButtonStandart class="address-item__data__button filled"
        >Изменить</ButtonStandart
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.address-item {
  overflow: hidden;
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
  margin-bottom: 30px;
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
      overflow: hidden;
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
      }
      &:last-of-type {
        margin-right: 0px;
      }
    }
    &__button {
      padding: 0px;
      width: 102px;
      margin-left: 75px;
      flex-shrink: 0;
      @media screen and (max-width: $maxwidth) {
        margin-left: 10px;
      }
      @media screen and (max-width: $notebook) {
        order: -1;
      }
      @media screen and (max-width: $tablet_middle) {
        margin-left: 15px;
      }
      @media screen and (max-width: $phone) {
        order: 10;
        margin-top: 15px;
        width: 200px;
        margin-left: auto;
      }
    }
  }
}
</style>