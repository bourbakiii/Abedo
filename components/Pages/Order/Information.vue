<template>
  <div class="information">
      <h1 class="information__title title-normal" contenteditable>Заказ №11234</h1>
        <div class="information__hood">
          <img
            src="@/assets/images/limonchello.png"
            class="information__hood__image"
          />
          <p class="information__hood__name" contenteditable>
            Кафе “Лимончелло”
          </p>
        </div>
        <div class="information__item">
          <p class="information__item__name" contenteditable>
            Телефон
          </p>
          <p class="information__item__value" contenteditable>
            +7 999 000 000 00
          </p>
        </div>
        <div class="information__item">
          <p class="information__item__name" contenteditable>
            Адрес доставки
          </p>
          <p class="information__item__value" contenteditable>
            г. Владикавказ, ул. Тестовая 112
          </p>
        </div>
        <div class="information__item">
          <p class="information__item__name" contenteditable>
            Подъезд
          </p>
          <p class="information__item__value" contenteditable>
            3
          </p>
        </div>
        <div class="information__item">
          <p class="information__item__name" contenteditable>
            Этаж
          </p>
          <p class="information__item__value" contenteditable>
            3
          </p>
        </div>
        <div class="information__item">
          <p class="information__item__name" contenteditable>
            Этаж
          </p>
          <p class="information__item__value" contenteditable>
            3
          </p>
        </div>
        <div class="information__item">
          <p class="information__item__name" contenteditable>
            № квартиры/офиса
          </p>
          <p class="information__item__value" contenteditable>
            33
          </p>
        </div>
        <div class="information__item">
          <p class="information__item__name" contenteditable>
            № домофона
          </p>
          <p class="information__item__value" contenteditable>
            33
          </p>
        </div>
      </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.information {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      min-width: 620px;
      width: auto;
      max-width: 100%;
      &__title {
      margin-bottom: 40px;
    }
      &__hood {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        width: 100%;
        padding: 5px 0px;
        margin-bottom: 25px;
        &__image {
          margin-right: 30px;
          background-color: $white;
          padding: 10px;
          width: 106px;
          height: auto;
          border-radius: 10px;
        }
        &__name {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 400;
          font-size: 24px;
          line-height: 20px;
        }
      }
      &__item {
        display: flex;
        align-items: center;
        flex-direction: row;
        border-bottom: 1px solid $dark_grey;
        min-height: 60px;
        min-width: 620px;
        width: auto;
        max-width: 100%;
        padding: 0px 10px;
        &:last-of-type{
            border: none;
        }
        &__name {
          min-width: 178px;
          width: auto;
          max-width: 50%;
          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          margin-right: 30px;
        }
        &__value {
          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          max-width: 50%;
           width: auto;
          max-width: 50%;
        }
      }
    }
</style>