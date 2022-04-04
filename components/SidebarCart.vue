<template>
  <div class="sidebar-cart">
    <div class="sidebar-cart__icon">
      <svg
        class="sidebar-cart__icon__icon"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.8249 4.54601C19.6766 4.36351 19.4539 4.25757 19.2187 4.25757H18.9372L14.9082 0.228593C14.6031 -0.0765233 14.1084 -0.0765233 13.8033 0.228593L12.1096 1.9223L10.4158 0.228593C10.1107 -0.0765233 9.61604 -0.0765233 9.31096 0.228593L5.28198 4.25757H5.0678L5.00983 3.72507L5.00776 3.70796C4.73042 1.59394 2.91339 -0.000234371 0.781249 -0.000234371C0.349765 -0.000234371 0 0.349531 0 0.781014C0 1.2125 0.349765 1.56226 0.781249 1.56226C2.12914 1.56226 3.27824 2.56808 3.45749 3.9032L4.3862 12.4352C3.57421 12.8038 3.00781 13.6218 3.00781 14.57C3.00781 14.5767 3.00863 14.583 3.00878 14.5896C3.00863 14.5961 3.00781 14.6025 3.00781 14.6091C3.00781 15.9015 4.05921 16.9529 5.35155 16.9529H5.67018C5.59065 17.1859 5.54686 17.4354 5.54686 17.695C5.54686 18.9659 6.58077 19.9997 7.85155 19.9997C9.12233 19.9997 10.1562 18.9659 10.1562 17.695C10.1562 17.4354 10.1124 17.1859 10.0329 16.9529H13.4045C13.325 17.1859 13.2812 17.4354 13.2812 17.695C13.2812 18.9659 14.3151 19.9997 15.5859 19.9997C16.8567 19.9997 17.8906 18.9659 17.8906 17.695C17.8906 16.4242 16.8567 15.3904 15.5859 15.3904H5.35155C4.92077 15.3904 4.5703 15.0399 4.5703 14.6091C4.5703 14.6025 4.56948 14.5961 4.56933 14.5896C4.56948 14.583 4.5703 14.5767 4.5703 14.57C4.5703 14.1393 4.92077 13.7888 5.35155 13.7888H15.3254C16.7122 13.7888 17.985 12.9308 18.5678 11.6028C18.7412 11.2077 18.5615 10.7468 18.1665 10.5734C17.7714 10.4 17.3105 10.5797 17.1371 10.9748C16.8085 11.7234 16.0805 12.2263 15.3254 12.2263H5.93518L5.23788 5.82007H18.2577L17.8755 7.65276C17.7874 8.07514 18.0584 8.48897 18.4807 8.57705C18.5346 8.5883 18.5882 8.59365 18.6411 8.59365C19.0032 8.59365 19.3282 8.34033 19.4051 7.97178L19.9836 5.19835C20.0315 4.96811 19.9732 4.72851 19.8249 4.54601ZM15.5859 16.9529C15.9952 16.9529 16.3281 17.2858 16.3281 17.695C16.3281 18.1043 15.9952 18.4372 15.5859 18.4372C15.1767 18.4372 14.8437 18.1043 14.8437 17.695C14.8437 17.2858 15.1767 16.9529 15.5859 16.9529ZM7.85155 16.9529C8.2608 16.9529 8.59373 17.2858 8.59373 17.695C8.59373 18.1043 8.2608 18.4372 7.85155 18.4372C7.44229 18.4372 7.10936 18.1043 7.10936 17.695C7.10936 17.2858 7.44229 16.9529 7.85155 16.9529ZM9.77432 4.25757H7.4917L9.86342 1.88586L11.0047 3.02718L9.77432 4.25757ZM11.984 4.25757L14.3558 1.88586L16.7274 4.25757H11.984Z"
          fill="#5C6784"
        />
      </svg>
    </div>
    <div class="sidebar-cart__hood">
      <div class="sidebar-cart__hood__title-row">
        <h3 class="sidebar-cart__hood__title-row__title title-extra-small">
          Корзина:
        </h3>
        <button class="sidebar-cart__hood__title-row__button">Очистить</button>
      </div>
      <div class="sidebar-cart__hood__shop-block">
        <div class="sidebar-cart__hood__shop-block__name-block">
          <p class="sidebar-cart__hood__shop-block__name-block__pre">Магазин</p>
          <p class="sidebar-cart__hood__shop-block__name-block__name">
            Кафе “Лимончелло”
          </p>
        </div>
        <img
          src="@/assets/images/limonchello.png"
          class="sidebar-cart__hood__shop-block__image"
        />
      </div>
    </div>
    <div class="sidebar-cart__products">
      <div
        v-for="item in [1, 2]"
        :key="item"
        class="sidebar-cart__products__item"
      >
        <button class="sidebar-cart__products__item__close">
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
        <div class="sidebar-cart__products__item__info">
          <img
            v-if="true"
            src="@/assets/images/sidebar-cart-product-placeholder.png"
            class="sidebar-cart__products__item__info__image"
          />
          <p class="sidebar-cart__products__item__info__name">Сырное ассорти</p>
        </div>
        <div class="sidebar-cart__products__item__actions">
          <div class="sidebar-cart__products__item__actions__buttons">
            <ButtonProduct
              class="sidebar-cart__products__item__actions__buttons__button"
              size="26"
              icon="minus"
            />
            <p class="sidebar-cart__products__item__actions__buttons__count">
              1000
            </p>
            <ButtonProduct
              class="sidebar-cart__products__item__actions__buttons__button"
              size="26"
              icon="plus"
            />
          </div>
          <div class="sidebar-cart__products__item__actions__prices">
            <p
              class="sidebar-cart__products__item__actions__prices__price_full"
            >
              400 ₽
            </p>
            <p class="sidebar-cart__products__item__actions__prices__price">
              350 ₽
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="sidebar-cart__row sidebar-cart__row_delivery">
      <p class="sidebar-cart__row__name sidebar-cart__row_delivery__name">
        Доставка
      </p>
      <p class="sidebar-cart__row__value sidebar-cart__row_delivery__value">
        Бесплатно
      </p>
    </div>
    <div class="sidebar-cart__row sidebar-cart__row_least">
      <p class="sidebar-cart__row__name sidebar-cart__row_least__name">
        Итого:
      </p>
      <p class="sidebar-cart__row__value sidebar-cart__row_least__value">
        330 ₽
      </p>
    </div>
    <div class="sidebar-cart__button">
      <ButtonStandart
        text="Оформить заказ"
        class="sidebar-cart__button__button"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-cart {
  padding: 52px 0px 30px;
  width: 294px;
  background-color: $white;
  border-radius: 20px;
  border: 1px solid $dark_grey;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  &__icon {
    position: absolute;
    left: 26px;
    top: 0px;
    transform: translateY(-50%);
    border-radius: 90px;
    background-color: $red;
    border: 3px solid $light_grey;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    width: 60px;
    height: 60px;
    * {
      fill: $white;
    }
  }
  &__hood {
    width: 100%;
    padding: 0px 20px;
    border-bottom: 1px solid $dark_grey;
    &__title-row {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &__button {
        background-color: transparent;
        outline: none;
        border: none;
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: $red;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    &__shop-block {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      margin-top: 16px;
      margin-bottom: 28px;
      &__name-block {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        &__pre {
          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 20px;
          color: $darkblue;
        }
        &__name {
          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
        }
      }
      &__image {
        margin-left: 6px;
        border: 1px solid $dark_grey;
        width: 55px;
        height: 40px;
        object-fit: contain;
      }
    }
  }
  &__products {
    width: 100%;
    padding: 0px 20px;
    &__item {
      width: 100%;
      padding: 20px 0px;
      min-height: 110px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      border-bottom: 1px dashed $dark_grey;
      position: relative;
      &:last-of-type {
        border-bottom: none;
      }
      &__close {
        top: 20px;
        right: 0px;
        position: absolute;
        background: transparent;
        outline: none;
        border: none;
        width: 15px;
        height: 15px;
        
      }
      &__info {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: row;
        &__image {
          width: 50px;
          height: auto;
          margin-right: 10px;
          flex-shrink: 0;
        }
        &__name {
          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          flex-grow: 1;
          margin-right: 18px;
        }
      }
      &__actions {
        margin-top: 10px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &__buttons {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: row;
          &__count {
            margin: 0px 10px;
            font-family: "SF Pro Display";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            max-width: 40px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        &__prices {
          &__price {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 20px;
            display: flex;
            align-items: center;
            &_full {
              font-family: "Montserrat";
              font-style: normal;
              font-weight: 400;
              font-size: 14px;
              line-height: 19px;
              text-decoration: line-through;
              color: $extra_dark_grey;
            }
          }
        }
      }
    }
  }
  &__row {
    width: 100%;
    min-height: 47px;
    padding: 8px 20px;
    border-top: 1px solid $dark_grey;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    &__name {
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      flex-grow: 1;
      margin-right: 5px;
    }
    &__value {
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      flex-grow: 1;
      text-align: right;
    }
    &_least {
      min-height: max-content;
      padding-top: 15px;
      &__name {
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
      }
      &__value {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        color: $darkblue;
      }
    }
  }
  &__button {
    height: 50px;
    width: 100%;
    padding: 0px 20px;
    margin-top:30px;
    &__button {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
