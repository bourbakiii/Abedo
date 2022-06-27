<template>
  <div class="product-modal modal">
    <h3 class="product-modal__title title-normal">Сырное ассорти</h3>
    <button
    type='button'
      @click.prevent="$store.commit('modals/close')"
      class="product-modal__close"
    >
      <svg
        class="product-modal__close__icon"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.89533 10.0005L0.229061 1.33421C-0.0760555 1.02909 -0.0760555 0.534404 0.229061 0.229326C0.534178 -0.0757519 1.02886 -0.075791 1.33394 0.229326L10.0003 8.89565L18.6665 0.229326C18.9716 -0.075791 19.4663 -0.075791 19.7714 0.229326C20.0765 0.534443 20.0765 1.02913 19.7714 1.33421L11.1051 10.0005L19.7714 18.6668C20.0765 18.9719 20.0765 19.4666 19.7714 19.7717C19.6189 19.9242 19.4189 20.0005 19.2189 20.0005C19.019 20.0005 18.8191 19.9242 18.6665 19.7717L10.0003 11.1054L1.33398 19.7717C1.18144 19.9242 0.981482 20.0005 0.781521 20.0005C0.58156 20.0005 0.381639 19.9242 0.229061 19.7717C-0.0760555 19.4666 -0.0760555 18.9719 0.229061 18.6668L8.89533 10.0005Z"
          fill="#A6A8A8"
        />
      </svg>
    </button>
    <div class="product-modal__content">
      <div class="product-modal__content__info">
        <img
          src="@/assets/images/modal-product-placeholder.png"
          class="product-modal__content__info__image"
        />
        <div class="product-modal__content__info__text">
          <p class="product-modal__content__info__text__pre">Описание:</p>
          <p class="product-modal__content__info__text__description">
            Моцарелла, рикотта или фета (свежие); шаурс, нешатель (мягкие);
            эдам, гауда (полумягкие); маасдам, эмменталь (твердые); пармезан,
            грюйер (твердые, пикантные); пекорино, шеврет (козий, овечий сыры);
            рокфор, горгонзола или дор блю (с голубой плесенью).
          </p>
          <p class="product-modal__content__info__text__min-count">
            Минимальное кол-во порций для заказа - 3 шт.
          </p>
        </div>
      </div>
      <div class="product-modal__content__additional">
        <h4
          class="product-modal__content__additional__title title-extra-normal"
        >
          Дополнительные опции
        </h4>
        <div class="product-modal__content__additional__content">
          <div
            v-for="item in [1, 2, 3]"
            :key="item"
            class="product-modal__content__additional__content__item"
          >
            <p class="product-modal__content__additional__content__item__name">
              МоцареллаМоцарелл аМоцареллаМоцар еллаМоцареллаМоцар
              ллаМоцареллаМоцареллаМоц реллаМоцареллаМ оцареллаМоцарелла
              оцареллаМоцареллаМоцареллаМоцарелла
            </p>
            <div
              class="product-modal__content__additional__content__item__buttons"
            >
              ???
            </div>
            <p class="product-modal__content__additional__content__item__price">
              30 ₽
            </p>
          </div>
        </div>
      </div>
      <div class="product-modal__content__final">
        <div class="product-modal__content__final__price">
          <p class="product-modal__content__final__price__pre">ИТОГО:</p>
          <p class="product-modal__content__final__price__price_full">350 ₽</p>
          <p></p>
          <p class="product-modal__content__final__price__price">330 ₽</p>
          <p></p>
        </div>
        <div class="product-modal__content__final__buttons">
          <ButtonStandart
            class="product-modal__content__final__buttons__button"
          >
            В корзину
          </ButtonStandart>
          <div class="product-modal__content__final__buttons__creases">
            <ButtonProduct
              class="product-modal__content__final__buttons__creases__button"
              icon="minus"
              size="50px"
            />
            <p class="product-modal__content__final__buttons__creases__count">
              100000fasfasfasfasfsaf0
            </p>
            <ButtonProduct
              class="product-modal__content__final__buttons__creases__button"
              icon="plus"
              size="50px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.product-modal {
  background-color: $white;
  width: 100%;
  max-width: 1028px;
  padding: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  &__title {
    align-self: flex-start;
    margin-bottom: 30px;
  }
  &__close {
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
    position: absolute;
    right: 30px;
    top: 30px;
  }

  &__content {
    border: 1px solid $light_grey;
    padding: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    &__info {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: row;
      margin-bottom: 70px;
      max-width: 100%;
      &__image {
        width: 300px;
        height: auto;
        object-fit: contain;
        margin-right: 30px;
        flex-shrink: 0;
      }
      &__text {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        &__pre {
          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 17px;
          color: $extra_dark_grey;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: 7px;
        }
        &__description {
          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 20px;
        }
        &__min-count {
          margin-top: 30px;
          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 17px;
          display: flex;
          align-items: center;
          color: $red;
        }
      }
    }
    &__additional {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      margin-bottom: 30px;
      &__title {
        align-self: flex-start;
        padding-bottom: 30px;
        border-bottom: 1px solid $dark_grey;
        width: 100%;
      }
      &__content {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        &__item {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          width: 100%;
          min-height: 75px;
          padding: 10px 0;
          border-bottom: 1px solid $dark_grey;
          &__name {
            width: 520px;
            font-family: "SF Pro Display";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            height: auto;
            margin-right: 5px;
          }
          &__buttons {
            width: max-content;
            margin-right: auto;
            height: 20px;
            width: 100px;
            background-color: lightcoral;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: column;
          }
          &__price {
            font-family: "SF Pro Display";
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
            display: flex;
            align-items: center;
            text-align: center;
            white-space: nowrap;
            margin-left: 5px;
          }
        }
      }
    }
    &__final {
      align-self: end;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-direction: row;
      margin-top: 35px;
      &__price {
        display: flex;
        align-items: center;
        justify-content: center;
        width: max-content;
        &__pre {
          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 700;
          font-size: 15px;
          line-height: 20px;
          margin-right: 15px;
        }
        &__price {
          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 29px;
          &_full {
            text-decoration: line-through;
            color: $extra_dark_grey;
            margin-right: 10px;
          }
        }
      }
      &__buttons {
        width: 228px;
        height: 50px;
        margin-left: 70px;
        &__button {
          padding: 0 25px;
          height: 100%;
          width: 100%;
        }
        &__creases {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          &__count {
            flex-grow: 1;
            margin: 0 8px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            font-family: "SF Pro Display";
            font-style: normal;
            font-weight: 700;
            font-size: 15px;
            line-height: 20px;
            margin-right: 15px;
          }
          &__button {
            flex-shrink: 0;
          }
        }
      }
    }
  }
}
</style>
