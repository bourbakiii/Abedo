<template>
  <div class="product-modal modal">
    <h3 class="product-modal__title title-normal">
      Оцените ресторан и доставку
    </h3>
    <button
      @click.prevent="$store.commit('modals/close', { modal_name: 'rate' })"
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
      <div class="product-modal__content__buttons">
        <div class="product-modal__content__buttons">
          <button class="product-modal__content__buttons__button active">
            Оцените ресторан
          </button>
          <!-- <button class="product-modal__content__buttons__button">
            Оцените доставку
          </button> -->
        </div>
      </div>

      <div class="product-modal__content__tabs">
        <form class="product-modal__content__tabs__tab">
          <div
            @mouseleave="fillStars(0)"
            class="product-modal__content__tabs__tab__stars"
          >
            <svg
              v-for="item in [1, 2, 3, 4, 5]"
              :key="item"
              class="product-modal__content__tabs__tab__stars__star"
              @mouseenter="fillStars(item)"
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9713 7.21479C19.9024 7.00352 19.7191 6.84955 19.4984 6.81765L13.2983 5.92038L10.5254 0.325257C10.4268 0.126081 10.223 0 10 0C9.77699 0 9.57332 0.126081 9.47461 0.325257L6.70165 5.92038L0.501673 6.81765C0.281009 6.84955 0.0976117 7.00352 0.0287057 7.21476C-0.0402394 7.42603 0.0172604 7.65792 0.176986 7.81295L4.66322 12.1682L3.60432 18.3179C3.56658 18.5368 3.65697 18.758 3.8374 18.8886C3.93947 18.9624 4.06037 19 4.18185 19C4.27514 19 4.36873 18.9779 4.45443 18.933L10 16.0294L15.5453 18.9329C15.7428 19.0363 15.982 19.0191 16.1624 18.8885C16.3428 18.758 16.4333 18.5367 16.3956 18.3178L15.3363 12.1682L19.823 7.81291C19.9827 7.65792 20.0403 7.42603 19.9713 7.21479Z"
                fill="#EE964B"
              />
            </svg>
            <p class="product-modal__content__tabs__tab__stars__value">
              1 из 5
            </p>
          </div>
          <h4
            class="product-modal__content__tabs__tab__title title-extra-normal"
          >
            Оставьте отзыв о ресторане
          </h4>
          <div class="product-modal__content__tabs__tab__content">
            <label
              for="name"
              class="product-modal__content__tabs__tab__content__input-block"
            >
              <span
                class="
                  product-modal__content__tabs__tab__content__input-block__name
                "
                >Ваше имя</span
              >
              <input
                required
                type="text"
                name="name"
                id="name"
                placeholder="Введите ваше имя"
                class="
                  product-modal__content__tabs__tab__content__input-block__input
                "
              />
            </label>
            <label
              for="phone"
              class="product-modal__content__tabs__tab__content__input-block"
            >
              <span
                class="
                  product-modal__content__tabs__tab__content__input-block__name
                "
                >Телефон</span
              >
              <input
                required
                type="text"
                name="phone"
                placeholder="Введите ваше телефон"
                id="phone"
                class="
                  product-modal__content__tabs__tab__content__input-block__input
                "
              />
            </label>
            <label
              for="email"
              class="product-modal__content__tabs__tab__content__input-block"
            >
              <span
                class="
                  product-modal__content__tabs__tab__content__input-block__name
                "
                >Почта</span
              >
              <input
                required
                type="email"
                name="email"
                placeholder="example@mail.ru"
                id="email"
                class="
                  product-modal__content__tabs__tab__content__input-block__input
                "
              />
            </label>
            <textarea
              required
              name="name"
              id="name"
              placeholder="Текст отзыва"
              class="
                product-modal__content__tabs__tab__content__input-block__input
                product-modal__content__tabs__tab__content__input-block__textarea
              "
            />
          </div>
          <div class="product-modal__content__tabs__tab__buttons">
            <ButtonStandart
              class="product-modal__content__tabs__tab__buttons__button"
            >
              Отправить
            </ButtonStandart>
            <div class="product-modal__content__tabs__tab__buttons__politics">
              <label
                for="politics"
                class="
                  product-modal__content__tabs__tab__buttons__politics__input
                "
              >
                <input
                  type="checkbox"
                  id="politics"
                  class="
                    product-modal__content__tabs__tab__buttons__politics__input__input
                  "
                />
                <svg
                  class="
                    product-modal__content__tabs__tab__buttons__politics__input__icon
                    icon
                  "
                  width="12"
                  height="8.5"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.84 0.62371L9.51244 0.296149C9.40951 0.193141 9.27228 0.136475 9.12577 0.136475C8.97927 0.136475 8.84195 0.193141 8.73902 0.296149L4.13634 4.89875L1.26065 2.02298C1.15772 1.92013 1.02041 1.86339 0.873902 1.86339C0.72748 1.86339 0.590244 1.92013 0.487236 2.02298L0.159593 2.35046C0.0565854 2.45363 0 2.59103 0 2.73737C0 2.88379 0.0565854 3.02111 0.159593 3.12412L3.40642 6.37079C3.41073 6.37688 3.41528 6.38257 3.42057 6.38778L3.74821 6.70997C3.85114 6.81257 3.98846 6.86387 4.1361 6.86387H4.1378C4.28439 6.86387 4.42171 6.81257 4.52447 6.70997L4.85219 6.38493C4.85748 6.37973 4.86195 6.37542 4.86463 6.37103L9.83992 1.39623C10.0533 1.1833 10.0533 0.836881 9.84 0.62371Z"
                    fill="#0EA976"
                  />
                </svg>
              </label>
              <p
                class="
                  product-modal__content__tabs__tab__buttons__politics__text
                "
              >
                При нажатии на кнопку, даю согласие на обработку <br />
                <span
                  class="
                    product-modal__content__tabs__tab__buttons__politics__text__underline
                  "
                >
                  персональных данных</span
                >
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    fillStars(count) {
      const all_stars = Array.prototype.slice.call(
        document.querySelectorAll(
          ".product-modal__content__tabs__tab__stars__star"
        )
      );
      const stars = all_stars.slice(0, count);
      all_stars.forEach((element) => {
        element.classList.remove("hovered");
      });
      for (let i = 0; i < count; i++) stars[i].classList.add("hovered");
    },
  },
};
</script>
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
  @media screen and (max-width: $tablet) {
    padding: 55px 24px 24px;
    height:100%;
  }
  &__title {
    align-self: flex-start;
    margin-bottom: 50px;
    @media screen and (max-width: $tablet){
      font-family: 'SF Pro Display';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 20px;
margin-bottom: 30px;
    }
  }
  &__close {
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
    position: absolute;
    right: 30px;
    top: 30px;
     @media screen and (max-width: $tablet){
       right:24px;
       top:24px;
     }
  }
  &__content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    &__buttons {
      align-self: flex-start;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
       @media screen and (max-width: $tablet) {
      width:100%;
       }
      &__button {
        width: 287px;
        height: 60px;
        margin-right: 10px;
        background-color: $dark_grey;
        border: 1px solid $dark_grey;
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: $extra_dark_grey;
        border-radius: 20px 20px 0px 0px;
        @media screen and (max-width: $tablet) {
          width:50%;
          height:50px;
          font-size: 14px;
        line-height: 17px;
        }
        &:last-of-type {
          margin-right: 0px;
        }
        &.active {
          border: 1px solid $green;
          color: $black;
          background-color: transparent;
        }
      }
    }
    &__tabs {
      width: 100%;
      margin-top: 55px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      @media screen and (max-width:$tablet) {
        margin-top:30px;
      }
      &__tab {
        width: 100%;
        max-width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        &__stars {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: row;
          &__star {
            cursor: pointer;
            margin-right: 10px;
            * {
              fill: $blue_grey;
            }
            &.hovered * {
              fill: $orange;
            }

            &:last-of-type {
              margin-right: 15px;
            }
          }
          &__value {
            font-family: "SF Pro Display";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
          }
        }
        &__title {
          margin: 30px 0px;
          @media screen and (max-width: $tablet) {
            font-family: 'SF Pro Display';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 20px;
          }
        }
        &__content {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 30px;
          width: 100%;
          max-width: 100%;
          @media screen and (max-width: $notebook) {
             grid-gap: 10px;
          }
          @media screen and (max-width: $tablet_middle) {
             grid-template-columns: repeat(1, 1fr);
          }
          &__input-block {
            max-width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;
            &__name {
              font-family: "SF Pro Display";
              font-style: normal;
              font-weight: 400;
              font-size: 14px;
              line-height: 17px;
              margin-bottom: 10px;
            }
            &__input {
              background: $white;
              border: 1px solid $dark_grey;
              border-radius: 50px;
              height: 50px;
              width: 100%;
              padding: 0px 30px;
              font-family: "SF Pro Display";
              font-style: normal;
              font-weight: 400;
              font-size: 14px;
              line-height: 20px;
              outline: none;
                @media screen and (max-width: $notebook) {
                  padding: 0px 15px;
                }
              &::placeholder {
                color: $extra_dark_grey;
              }
            }
            &__textarea {
              width: 100% !important;
              grid-column-start: 1;
              grid-column-end: 4;
              min-height: 160px;
              border-radius: 20px;
              padding: 20px 30px;
              @media screen and (max-width: $notebook) {
                  padding: 15px;
                }
                 @media screen and (max-width: $tablet_middle) {
                   grid-column-end: 2;
                 }
            }
          }
        }
        &__buttons {
          margin-top: 30px;
          display: flex;
          align-items: center;
          justify-self: flex-start;
          flex-direction: row;
          flex-wrap: wrap;
          @media screen and (max-width: $tablet) {
            flex-direction: column;
            align-items: flex-start;justify-content: flex-start;flex-direction:column;
          }
          &__button {
            padding: 0px 30px;
            height: 40px !important;
            margin-right: 30px;
            @media screen and (max-width: $tablet) {
              margin-right:0px;
              margin-bottom: 10px;
            }
          }
          &__politics {
            display: flex;
            align-items: center;
            justify-self: flex-start;
            flex-direction: row;
            &__input {
              cursor: pointer;
              height: 25px;
              width: 25px;
              border-radius: 90px;
              background-color: $blue_grey;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-right: 10px;
              &__icon {
                transition: $transition;
                transform: scale(0);
                * {
                  transition: $transition;
                  fill: transparent;
                }
              }
              &__input:checked + .icon {
                transform: scale(1);
                * {
                  fill: $green;
                }
              }
              &__input {
                display: none;
              }
            }
            &__text {
              font-family: "Montserrat";
              font-style: normal;
              font-weight: 400;
              font-size: 14px;
              line-height: 17px;
              &__underline {
                cursor: pointer;
                text-decoration: none;
                color: $darkblue;
                &:hover {
                  text-decoration: underline;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
