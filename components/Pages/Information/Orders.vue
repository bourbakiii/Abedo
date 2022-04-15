<template>
  <div class="orders">
    <h1 class="orders__title title-normal">Список заказов</h1>
    <div class="orders__content">
      <div class="orders__content__item">
        <div class="orders__content__item__data">
          <div class="orders__content__item__data__block">
            <p class="orders__content__item__data__block__name">
              Кафе “Лимончелло”
            </p>
            <p
              class="orders__content__item__data__block__value"
              contenteditable
            >
              №11234
            </p>
          </div>
          <div class="orders__content__item__data__block">
            <p class="orders__content__item__data__block__name">
              Дата и время:
            </p>
            <p
              class="orders__content__item__data__block__value"
              contenteditable
            >
              23.03.2020 12:03
            </p>
          </div>
          <div class="orders__content__item__data__block">
            <p class="orders__content__item__data__block__name">Адрес:</p>
            <p
              class="orders__content__item__data__block__value"
              contenteditable
            >
              г. Владикавказ, ул. Тестовая 321
            </p>
          </div>
          <div class="orders__content__item__data__block">
            <p class="orders__content__item__data__block__name">Стоимость:</p>
            <p
              class="orders__content__item__data__block__value"
              contenteditable
            >
              90 334 ₽
            </p>
          </div>
          <div class="orders__content__item__data__block">
            <p class="orders__content__item__data__block__name">
              Статус заказа:
            </p>
            <p
              class="orders__content__item__data__block__value"
              contenteditable
            >
              Доставлено
            </p>
          </div>
        </div>
        <div class="orders__content__item__buttons">
          <ButtonStandart class="orders__content__item__buttons__open"
            >Открыть</ButtonStandart
          >
          <ButtonStandart class="orders__content__item__buttons__rate"
            >Оценить</ButtonStandart
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.orders {
  width: 100%;
  &__title {
    margin-bottom: 70px;
  }
  &__content {
    width: 100%;
    border: 1px $dark_grey;
    border-radius: 20px;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    background-color: $white;
    &__item {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0px 10px;
      min-height: 110px;

      &__data {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        &__block {
          &__name {
            font-family: "SF Pro Display";
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
          }
          &__value {
            font-family: "SF Pro Display";
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
          }
        }
      }
      &__buttons {
          margin-left: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        &__rate{
            border-color: $green;
            color: $green;
            margin-left:20px;
            &:hover{
            border-color: $green;
                background-color: $green;
            }
        }
      }
      &:first-of-type {
        border-radius: 20px 0px 0px 20px;
      }
      &:last-of-type {
        border-radius: 0px 20px 20px 0px;
      }
    }
  }
}
</style>