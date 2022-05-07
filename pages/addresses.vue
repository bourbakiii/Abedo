<template>
  <div class="page addresses-page wrapper">
    <div class="addresses-page__content content">
      <Breadcrumbs class="addresses-page__content__breadcrumbs adaptive-non" />
      <div class="addresses-page__content__addresses">
        <h1 class="addresses-page__content__addresses__title title-normal">
          Адреса доставки
        </h1>
        <div class="addresses-page__content__addresses__content">
          <div
            v-for="(item, index) in 3"
            :key="index"
            class="addresses-page__content__addresses__content__item"
          >
            <p
              class="addresses-page__content__addresses__content__item__name"
              contenteditable=""
            >
              Работа
            </p>
            <div
              class="addresses-page__content__addresses__content__item__data"
            >
              <InputBlock
                id="dadata"
                name="dadata"
                class="
                  addresses-page__content__addresses__content__item__data__input-block
                  addresses-page__content__addresses__content__item__data__input-block__dadata
                "
                text="Адрес доставки"
              />
              <div
                class="
                  addresses-page__content__addresses__content__item__data__additional
                "
              >
                <InputBlock
                  id="intercom"
                  name="intercom"
                  class="
                    addresses-page__content__addresses__content__item__data__additional__input-block
                    addresses-page__content__addresses__content__item__data__additional__input-block__intercom
                  "
                  text="№ домофона"
                />
                <InputBlock
                  id="entrance"
                  name="entrance"
                  class="
                    addresses-page__content__addresses__content__item__data__additional__input-block
                    addresses-page__content__addresses__content__item__data__additional__input-block__entrance
                  "
                  text="Подъезд"
                />
                <InputBlock
                  id="floor"
                  name="floor"
                  class="
                    addresses-page__content__addresses__content__item__data__additional__input-block
                    addresses-page__content__addresses__content__item__data__additional__input-block__floor
                  "
                  text="Этаж"
                />
                <InputBlock
                  id="apartment"
                  name="apartment"
                  class="
                    addresses-page__content__addresses__content__item__data__additional__input-block
                    addresses-page__content__addresses__content__item__data__additional__input-block__apartment
                  "
                  text="№ квартиры/офиса"
                />
              </div>
              <ButtonStandart
                class="
                  addresses-page__content__addresses__content__item__data__button
                  filled
                "
                >Изменить</ButtonStandart
              >
            </div>
          </div>
        </div>
        <transition name="add-address-form" mode="out-in">
          <form
            v-if="show_add_form"
            @submit.prevent="addAddress"
            class="addresses-page__content__addresses__new"
          >
            <input
              type="text"
              v-model="new_address.name"
              placeholder="Название"
              class="addresses-page__content__addresses__new__name"
            />
            <div class="addresses-page__content__addresses__new__data">
              <div
                class="
                  addresses-page__content__addresses__new__data__input-block
                  addresses-page__content__addresses__new__data__input-block__dadata
                "
              >
                <InputBlock
                  id="dadata"
                  name="dadata"
                  class="
                    addresses-page__content__addresses__new__data__input-block
                    addresses-page__content__addresses__new__data__input-block__dadata
                  "
                  v-model="new_address.dadata"
                  @input="dadateNewAddresses"
                  text="Адрес доставки"
                />
                <div
                  class="
                    addresses-page__content__addresses__new__data__input-block__dadata__suggestions
                  "
                >
                  <button
                    class="
                      addresses-page__content__addresses__new__data__input-block__dadata__suggestions__suggestion
                    "
                  ></button>
                </div>
              </div>
              <div
                class="
                  addresses-page__content__addresses__content__item__data__additional
                "
              >
                <InputBlock
                  id="intercom"
                  name="intercom"
                  class="
                    addresses-page__content__addresses__content__item__data__additional__input-block
                    addresses-page__content__addresses__content__item__data__additional__input-block__intercom
                  "
                  text="№ домофона"
                />
                <InputBlock
                  id="entrance"
                  name="entrance"
                  class="
                    addresses-page__content__addresses__content__item__data__additional__input-block
                    addresses-page__content__addresses__content__item__data__additional__input-block__entrance
                  "
                  text="Подъезд"
                />
                <InputBlock
                  id="floor"
                  name="floor"
                  class="
                    addresses-page__content__addresses__content__item__data__additional__input-block
                    addresses-page__content__addresses__content__item__data__additional__input-block__floor
                  "
                  text="Этаж"
                />
                <InputBlock
                  id="apartment"
                  name="apartment"
                  class="
                    addresses-page__content__addresses__content__item__data__additional__input-block
                    addresses-page__content__addresses__content__item__data__additional__input-block__apartment
                  "
                  text="№ квартиры/офиса"
                />
              </div>
            </div>
            <div class="addresses-page__content__addresses__new__buttons">
              <ButtonStandart
                @mousedown.native="show_add_form = false"
                class="
                  addresses-page__content__addresses__new__buttons__button
                  addresses-page__content__addresses__new__buttons__button_decline
                "
              >
                Отмена
              </ButtonStandart>
              <ButtonStandart
                class="
                  addresses-page__content__addresses__new__buttons__button
                  addresses-page__content__addresses__new__buttons__button_accept
                "
              >
                Добавить
              </ButtonStandart>
            </div>
          </form>
          <ButtonStandart
            v-else
            @click="show_add_form = true"
            class="addresses-page__content__addresses__add"
          >
            <svg
              class="addresses-page__content__addresses__add__icon"
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
            Добавить адрес
          </ButtonStandart>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import dadataMixin from "@/mixins/dadata.js";
export default {
  mixins: [dadataMixin],
  data() {
    return {
      show_add_form: true,
      new_address: {
        name: null,
        dadata: null,
      },
      suggestions: {
        new_address: [],
        new_address_timer: null
      },
      
    };
  },
  methods: {
    addAddress() {
      console.log("Add address function");
    },
    async dadateNewAddresses() {
    await this.dadataHandler({
        query: this.new_address.dadata,
      }).then((returned)=>{
        console.log("the returned");
        console.log(returned);
        this.suggestions.new_address = returned
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.add-address-form {
  &-enter,
  &-leave-to {
    opacity: 0;
    &.addresses-page__content__addresses__new {
      min-height: 0px !important;
      max-height: 0px !important;
    }
  }
  &-enter-active,
  &-leave-active {
    transition: all $transition;
  }
}
.addresses-page {
  &__content {
    flex-grow: 1;
    &__addresses {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      overflow: hidden;
      max-width: 100%;
      width: 100%;
      &__title {
        align-self: flex-start;
        margin-bottom: 70px;
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
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        overflow: hidden;
        max-width: 100%;
        width: 100%;
        border: 1px $dark_grey;
        &__item {
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
                &__apartment {
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
      }
      &__new {
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
        margin-top: 30px;
        max-height: 600px;
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
          outline: none;
          border: none;
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
              &__apartment {
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
              position: relative;
              &__suggestions {
                background-color: $red;
                position: absolute;
                top: 100%;
                left: 25px;
                width: auto;
                min-width: 100px;
                max-width: calc(100% - 50px);
                border-radius: 0px 0px 20px 20px;
                overflow: hidden;
                height: auto;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                flex-direction: column;
                box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
                padding-top: 7px;
                padding-bottom: 17px;
                z-index: $z_dropdown;
              }
            }
            &:last-of-type {
              margin-right: 0px;
            }
          }
        }
        &__buttons {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex-direction: row;
          margin-top: 28px;
          @media screen and (max-width: $notebook) {
            margin-top: 15px;
          }
          &__button {
            width: 200px;
            @media screen and (max-width: $tablet) {
              width: 100%;
            }
            &_decline {
              color: $red;
              border-color: $red !important;
              &:hover {
                background-color: $red;
              }
            }
            &_accept {
              color: $green;
              border-color: $green !important;
              &:hover {
                background-color: $green;
              }
            }
            &:last-child {
              margin-left: 15px;
            }
          }
        }
      }
      &__add {
        margin-top: 40px;
        width: 245px;
        &:hover & {
          &__icon {
            border-color: $white;
          }
        }
        &__icon {
          margin-right: 10px;
          width: 19px;
          height: 19px;
          border-radius: 90px;
          padding: 2px;
          border: 1.5px solid $darkblue;
        }
      }
    }
  }
}
</style>
