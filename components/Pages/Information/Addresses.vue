<template>
  <div class="addresses">
    <h1 class="addresses__title">Адреса доставки</h1>
    <div class="addresses__content">
      <div class="addresses__content__item">
        <p class="addresses__content__item__name" contenteditable>Работа</p>
        <div class="addresses__content__item__content">
          <InputBlock
            @input="inputBlockChange"
            value="г. Владикавказ, ул. Тестовая 112"
            class="addresses__content__item__content__input-block addresses__content__item__content__dadata"
            name="dadata"
            id="dadata"
            type="text"
            text="Адрес доставки"
          />
          <InputBlock
            @input="inputBlockChange"
            placeholder="Номер домофона"
            class="addresses__content__item__content__input-block addresses__content__item__content__intercom"
            name="intercom"
            id="intercom"
            type="text"
            text="№ домофона"
          />
          <InputBlock
            @input="inputBlockChange"
            placeholder="Подъед"
            class="addresses__content__item__content__input-block addresses__content__item__content__entrance"
            name="entrance"
            id="entrance"
            type="text"
            text="Подъезд"
          />
          <InputBlock
            @input="inputBlockChange"
            placeholder="Этаж"
            class="addresses__content__item__content__input-block addresses__content__item__content__floor"
            name="floor"
            id="floor"
            type="text"
            text="Этаж"
          />
          <InputBlock
            @input="inputBlockChange"
            placeholder="№ квартиры/офиса"
            class="addresses__content__item__content__input-block addresses__content__item__content__apartment"
            name="apartment"
            id="apartment"
            type="text"
            text="№ квартиры/офиса"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.addresses {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  &__title {
    margin-bottom: 70px;
  }
  &__content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    &__item {
      width: 100%;
      min-height: 185px;
      padding: 30px;
      background: $white;
      border: 1px solid $dark_grey;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      &__name {
        width: 100%;
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        margin-bottom: 28px;
      }
      &__content {
        width: 100%;
        background-color: lightcoral;
        display: grid;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        grid-template-columns: repeat(7,1fr);
        grid-gap: 30px;
        &__input-block{
            >.input-block__input
            {
                background-color: red !important;
                height: 40px !important;
            }
        }
      }
    }
  }
}
</style>
