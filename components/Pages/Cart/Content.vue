<template>
  <div class="cart">
    <div class="cart__hood">
      <img src="@/assets/images/limonchello.png" class="cart__hood__image" />
      <p class="cart__hood__name">Кафе “Лимончелло”</p>
      <button @click.prevent class="cart__hood__button">Очистить</button>
    </div>
    <div class="cart__products">
      <div
        v-for="(product, index) in [1, 2, 3]"
        :key="index"
        class="cart__products__item"
      >
        <img
          v-if="true"
          src="@/assets/images/product-placeholder.png"
          class="cart__products__item__image"
        />
        <p class="cart__products__item__image__text">Сырное ассорти</p>
        <p class="cart__products__item__price cart__products__item__price_one">
          350 ₽
        </p>
        <p class="cart__products__item__price cart__products__item__price_full">
          3500 ₽
        </p>
        <button class="cart__products__item__close">
          <svg
            class="cart__products__item__close__icon"
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
      </div>
    </div>
    <div class="cart__promo">
      <p class="cart__promo__text">Введите промокод</p>
      <input type="text" name="promo" id="proomo" class="cart__promo__input" />
    </div>
    <div class="cart__prices">
      <p class="cart__prices__pre">Итого:</p>
      <p class="cart__prices__price">1 330 ₽</p>
      <p class="cart__prices__price_full">1 600 ₽</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart {
  padding: 30px;
  border-radius: 20px;
  background-color: $white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  &__hood {
    padding-bottom: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid $extra_dark_grey;
    &__image {
      width: 106px;
      height: 77px;
      border: 1px solid $blue_grey;
      object-fit: contain;
      padding: 5px;
      margin-right: 30px;
      flex-shrink: 0;
    }
    &__name {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 20px;
      flex-grow: 1;
      margin-right: 30px;
    }
    &__button{
      font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
color:$red;
background-color: transparent;
outline:none;
border:none;
&:hover{
  text-decoration: underline;
}
    }
  }
  &__products {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    &__item {
      width: 100%;
      min-height: 103px;
      padding: 10px 0px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      border-bottom: 1px dashed $extra_dark_grey;
      &__image {
        border-radius: 10px;
        width: 100px;
        height: auto;
        object-fit: contain;
        margin-right: 30px;
      }
      &__text {
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
      }
      &__close {
        background-color: transparent;
        border: none;
        outline: none;
        transition: 0.3s;
        &:active {
          transition: 0.05s;
          transform: scale(0.8);
        }
      }
    }
  }
  &__promo {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 40px;
    width: 100%;
    &__text {
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      margin-right: 40px;
      flex-shrink: 0;
    }
    &__input {
      border: 1px solid $extra_dark_grey;
      border-radius: 50px;
      text-align: center;
      padding: 0px 10px;
      outline: none;
      max-width: 180px;
      height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
    }
  }
  &__prices {
    margin-top: 40px;
    align-self: flex-start;
    width: max-content;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    &__pre {
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      text-transform: capitalize;
    }
    &__price {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      margin-left: 15px;
      &_full {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        text-decoration-line: line-through;
        margin-left: 15px;
      }
    }
  }
}
</style>