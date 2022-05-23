<template>
  <div class="products">
    <h2 class="products__title title-extra-normal">Заказанные позиции</h2>
    <div class="products__content adaptive-non">
      <div
        v-for="(item, index) in 3"
        :key="index"
        class="products__content__item"
      >
        <img
          src="@/assets/images/product-placeholder.png"
          class="products__content__item__image"
        />
        <p class="products__content__item__name" >
          Сырное ассорти
        </p>
        <p class="products__content__item__count" >10</p>
        <p class="products__content__item__price" >350 ₽</p>
        <p
          class="products__content__item__price products__content__item__price__all"
          
        >
          3500 ₽
        </p>
      </div>
    </div>
    <div class="products__content_adaptive adaptive">
      <div
        v-for="(product, index) in 3"
        :key="index"
        class="products__content_adaptive__item"
      >
        <p class="products__content_adaptive__item__name" >
          Улитки escargots по-бургундски в масле замороженные
        </p>
        <div class="products__content_adaptive__item__data">
          <img
            src="@/assets/images/product-placeholder.png"
            class="products__content_adaptive__item__data__image"
          />
          <div class="products__content_adaptive__item__data__buttons">
            <ButtonProduct
              icon="minus"
              size="30"
              class="products__content_adaptive__item__data__buttons__button"
            />
            <p
              class="products__content_adaptive__item__data__buttons__count"
              
            >
              100
            </p>
            <ButtonProduct
              icon="plus"
              size="30"
              class="products__content_adaptive__item__data__buttons__button"
            />
          </div>
          <div class="products__content_adaptive__item__data__prices">
            <p
              class="products__content_adaptive__item__data__prices__price"
              
            >
              10 345 ₽
            </p>
            <p
              class="products__content_adaptive__item__data__prices__price_full"
              
            >
              10 345 ₽
            </p>
          </div>

          <button class="products__content_adaptive__item__data__close">
            <svg
              class="sidebar-cart__products__item__close__icon"
              width="15"
              height="15"
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
    </div>
  </div>
</template>
<style lang="scss" scoped>
.products {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  &__title {
    margin-bottom: 40px;
    @media screen and (max-width: $tablet) {
      margin-bottom: 20px;
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
    }
  }
  &__content {
    width: 100%;
    background-color: $white;
    border: 1px solid $blue_grey;
    border-radius: 20px;
    padding: 0px 30px;
    @media screen and (max-width: $notebook) {
      padding: 0px 15px;
    }
    &__item {
      padding: 0px 10px;
      min-height: 116px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      border-bottom: 1px dashed $extra_dark_grey;
      &__image {
        object-fit: contain;
        border-radius: 10px;
        width: 100px;
        margin-right: 30px;
        @media screen and (max-width: $notebook) {
          margin-right: 15px;
        }
      }
      &__name {
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        width: 351px;
        flex-shrink: 0;
        margin-right: 30px;
        @media screen and (max-width: $notebook) {
          width: 300px;
          margin-right: 15px;
        }
        @media screen and (max-width: $sidebar_dn) {
          width: 270px;
        }
      }
      &__count {
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        width: 100%;
        text-align: left;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      &__price {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        flex-grow: 1;
        text-align: center;
        width: 100%;
        margin: 0px 30px;
        text-overflow: ellipsis;
        overflow: hidden;
        @media screen and (max-width: $notebook) {
          margin: 0px 15px;
        }
        &__all {
          text-align: right;
          margin: 0px;
        }
      }
    }
    &_adaptive {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      width: 100%;
      &__item {
        border-radius: 10px;
        background-color: $white;
        margin-bottom: 15px;
        padding: 15px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        width: 100%;
        &__name {
          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 17px;
          margin-bottom: 15px;
          text-align: left;
          width: 100%;
        }
        &__data {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: row;
          &__image {
            width: 30px;
            height: 30px;
            border-radius: 90px;
            object-fit: cover;
            margin-right: 20px;
          }
          &__buttons {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 20px;
            &__count {
              width: 40px;
              max-width: 40px;
              margin: 0px 5px;
              text-align: center;
              font-family: "SF Pro Display";
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 19px;
            }
            &__price {
              font-family: "SF Pro Display";
              font-style: normal;
              font-weight: 500;
              font-size: 15px;
              line-height: 16px;
            }
          }
          &__prices {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row;
            &__price {
              font-family: "SF Pro Display";
              font-style: normal;
              font-weight: 500;
              font-size: 15px;
              line-height: 16px;
              &_full {
                font-size: 13px;
                line-height: 15px;
                color: $extra_dark_grey;
                text-decoration: line-through;
                margin-left: 10px;
              }
            }
          }
          &__close {
            background-color: transparent;
            border: none;
            outline: none;
            margin-left: auto;
          }
        }
        &:last-of-type {
          margin-bottom: 0px;
        }
      }
    }
  }
}
</style>
