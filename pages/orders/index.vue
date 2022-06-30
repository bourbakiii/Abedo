<template>
  <div class="page orders-page wrapper">
    <div class="orders-page__content content">
      <Breadcrumbs class="orders-page__content__breadcrumbs adaptive-non"
                   :way="[{name:'История заказов', link:`/orders`}]"/>
      <div class="orders-page__content__orders">
        <h1 class="orders-page__content__orders__title title-normal adaptive-non">
          Список заказов
        </h1>
        <transition appear name="opacity" mode="out-in">
          <Loader class="orders-page__content__orders__content_loading" v-if="loading && !orders"/>
          <div v-else-if="orders && orders.length" class="orders-page__content__orders__content">
            <div
              class="orders-page__content__orders__content__item"
              v-for="order in orders"
              :key="order.id"
            >
              <div class="orders-page__content__orders__content__item__data">
                <div
                  class="orders-page__content__orders__content__item__data__block orders-page__content__orders__content__item__data__block_partner"
                >
                  <p
                    class="orders-page__content__orders__content__item__data__block__name"
                  >
                    {{ order.shop.name }}
                  </p>
                  <p
                    class="orders-page__content__orders__content__item__data__block__value"
                  >
                    №{{ order.id }}
                  </p>
                </div>
                <div
                  class="orders-page__content__orders__content__item__data__block orders-page__content__orders__content__item__data__block_date"
                >
                  <p
                    class="orders-page__content__orders__content__item__data__block__name"
                  >
                    Дата и время:
                  </p>
                  <p
                    class="orders-page__content__orders__content__item__data__block__value"
                  >
                    {{ order.created_at }}
                  </p>
                </div>
                <div
                  class="orders-page__content__orders__content__item__data__block orders-page__content__orders__content__item__data__block_address"
                >
                  <p
                    class="orders-page__content__orders__content__item__data__block__name"
                  >
                    Адрес:
                  </p>
                  <p
                    class="orders-page__content__orders__content__item__data__block__value"
                  >
                    {{ order.street ? parseAddress(order) : 'Самовывоз' }}
                  </p>
                </div>
                <div
                  class="orders-page__content__orders__content__item__data__block orders-page__content__orders__content__item__data__block_price"
                >
                  <p
                    class="orders-page__content__orders__content__item__data__block__name"
                  >
                    Стоимость:
                  </p>
                  <p
                    class="orders-page__content__orders__content__item__data__block__value"
                  >
                    {{ order.price_with_discount }}₽
                  </p>
                </div>
                <div
                  class="orders-page__content__orders__content__item__data__block orders-page__content__orders__content__item__data__block_status"
                >
                  <p
                    class="orders-page__content__orders__content__item__data__block__name"
                  >
                    Статус заказа:
                  </p>
                  <p
                    class="orders-page__content__orders__content__item__data__block__value"
                  >
                    {{ order.statuses[order.statuses.length - 1].title }}
                  </p>
                </div>
              </div>
              <div class="orders-page__content__orders__content__item__buttons">
                <ButtonStandart
                  @click.native="$router.push(`/orders/${order.id}`)"
                  class="orders-page__content__orders__content__item__buttons__button orders-page__content__orders__content__item__buttons__button_open"
                >Открыть
                </ButtonStandart
                >
                <ButtonStandart
                  @click="$store.commit('modals/open', { modal_name: 'rate', order })"
                  class="orders-page__content__orders__content__item__buttons__button orders-page__content__orders__content__item__buttons__button_rate"
                  v-if="!order.comments.length"
                >Оценить
                </ButtonStandart>
                <div v-else class="orders-page__content__orders__content__item__buttons__stars">
                  <div v-for="item in 5" :key="item"
                       class="orders-page__content__orders__content__item__buttons__stars__star__wrapper">
                    <svg
                      class="orders-page__content__orders__content__item__buttons__stars__star" width="20"
                      height="19"
                      viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19.496 7.37001L19.4959 7.36983C19.4863 7.34017 19.46 7.3173 19.4268 7.3125L19.4267 7.31249L13.2267 6.41522L12.9668 6.37762L12.8503 6.1424L10.0774 0.547279L10.0774 0.547213C10.0635 0.519121 10.0339 0.5 10 0.5C9.96619 0.5 9.93657 0.519099 9.92261 0.547287L7.14965 6.14241L7.03307 6.37762L6.77326 6.41522L0.573287 7.31249L0.57321 7.3125C0.53998 7.31731 0.513695 7.34026 0.504054 7.36982L0.504037 7.36987C0.494461 7.39921 0.502198 7.43181 0.525219 7.45415L0.525262 7.45419L5.0115 11.8094L5.20072 11.9931L5.15597 12.253L4.09707 18.4027L4.09705 18.4028C4.09186 18.4329 4.10403 18.4643 4.13046 18.4835L19.496 7.37001ZM19.496 7.37001C19.5055 7.39919 19.4978 7.43176 19.4748 7.45411L19.4748 7.45414L14.988 11.8094L14.7988 11.9931L14.8436 12.253L15.9028 18.4026C15.908 18.4328 15.8957 18.4643 15.8693 18.4835C15.8427 18.5027 15.8069 18.5055 15.7773 18.49C15.7772 18.49 15.7772 18.49 15.7772 18.49L10.2319 15.5865L10 15.465L9.76807 15.5865L4.22251 18.49L4.22242 18.4901M19.496 7.37001L4.22242 18.4901M4.22242 18.4901C4.20976 18.4967 4.19598 18.5 4.18185 18.5C4.16335 18.5 4.1455 18.4943 4.13056 18.4835L4.22242 18.4901Z"
                        fill="#F4F6FC" stroke="#DDE2F2"/>
                    </svg>
                    <svg
                      class="orders-page__content__orders__content__item__buttons__stars__star"
                      :class="classByValue(order.comments[0].order_rating,item)"
                      width="20"
                      height="19"
                      viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19.496 7.37001L19.4959 7.36983C19.4863 7.34017 19.46 7.3173 19.4268 7.3125L19.4267 7.31249L13.2267 6.41522L12.9668 6.37762L12.8503 6.1424L10.0774 0.547279L10.0774 0.547213C10.0635 0.519121 10.0339 0.5 10 0.5C9.96619 0.5 9.93657 0.519099 9.92261 0.547287L7.14965 6.14241L7.03307 6.37762L6.77326 6.41522L0.573287 7.31249L0.57321 7.3125C0.53998 7.31731 0.513695 7.34026 0.504054 7.36982L0.504037 7.36987C0.494461 7.39921 0.502198 7.43181 0.525219 7.45415L0.525262 7.45419L5.0115 11.8094L5.20072 11.9931L5.15597 12.253L4.09707 18.4027L4.09705 18.4028C4.09186 18.4329 4.10403 18.4643 4.13046 18.4835L19.496 7.37001ZM19.496 7.37001C19.5055 7.39919 19.4978 7.43176 19.4748 7.45411L19.4748 7.45414L14.988 11.8094L14.7988 11.9931L14.8436 12.253L15.9028 18.4026C15.908 18.4328 15.8957 18.4643 15.8693 18.4835C15.8427 18.5027 15.8069 18.5055 15.7773 18.49C15.7772 18.49 15.7772 18.49 15.7772 18.49L10.2319 15.5865L10 15.465L9.76807 15.5865L4.22251 18.49L4.22242 18.4901M19.496 7.37001L4.22242 18.4901M4.22242 18.4901C4.20976 18.4967 4.19598 18.5 4.18185 18.5C4.16335 18.5 4.1455 18.4943 4.13056 18.4835L4.22242 18.4901Z"
                        fill="#F4F6FC" stroke="#DDE2F2"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p v-else class="orders-page__content__orders__content_empty">Кажется, у вас пока нет заказов</p>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import parserMixin from "@/mixins/parser.js";

export default {
  mixins: [parserMixin],
  middleware: ['auth'],
  head() {
    return {
      title: `История заказов - Abedo`,
    }
  },
  data() {
    return {
      orders: null,
      loading: true,
    };
  },
  fetchOnServer: false,
  async fetch() {
    if (this.token) {
      this.loading = true;
      await this.$axios
        .get("/api/orderHistory", {
          headers: {Authorization: `Bearer ${this.token}`},
        })
        .then(({data: {orders: {data}}}) => {
          this.orders = data.reverse();
        }).finally(() => {
          this.loading = false
        })
    }
  },
  methods: {
    classByValue(rating, value) {
      console.log(rating, value);
      let to_return = null;
      if (rating < value && rating > value - 1) to_return = '_half'
      else if (rating > value) to_return = '_filled';
      console.log(to_return);
      return 'orders-page__content__orders__content__item__buttons__stars__star' + to_return;
    },
  },
  computed: {
    token() {
      return this.$store.state.account.token;
    },
  },
  mounted() {
    this.$store.commit("variables/action", (state) => {
      state.adaptive_navigation = {
        text: `Заказы`,
        slot: "label",
        info_click: null,
      };
    });
  }
  ,
  watch: {
    token: {
      handler(value) {
        if (value) this.$fetch();
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.orders-page {
  &__content {
    flex-grow: 1;

    &__orders {
      width: 100%;

      &__title {
        margin-bottom: 70px;

        @media screen and (max-width: $tablet) {
          font-family: "SF Pro Display", serif;
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 24px;
          margin-bottom: 30px;
        }
      }

      &__content {
        width: 100%;
        border: 1px $dark_grey;
        border-radius: 20px;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        background-color: $white;

        @media screen and (max-width: $tablet_middle) {
          border-radius: 0;
          padding: 0;
          border: none;
          background-color: transparent;
        }


        &__item {
          max-width: 100%;
          width: 100%;
          padding: 30px 0;
          background-color: $white;
          background: $white;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-direction: row;
          border-bottom: 1px solid $dark_grey;

          &:last-of-type {
            border-bottom: 0;
          }

          @media screen and (max-width: $tablet_middle) {
            border: 1px solid $dark_grey;
            border-radius: 10px;
            padding: 20px 14px;
            margin-bottom: 16px;
            &:last-of-type {
              margin-bottom: 0;
            }
          }

          @media screen and (max-width: $sidebar_dn) {
            flex-direction: column;
          }


          &__data {
            flex-grow: 1;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: row;
            width: 100%;
            max-width: 100%;
            @media screen and (max-width: $tablet) {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              grid-gap: 15px;
              &__block {
                width: 100% !important;
                min-width: 100% !important;
                max-width: 100% !important;
                margin: 0 !important;
                overflow: hidden;

                &_address {
                  grid-column-start: 1;
                  grid-column-end: 3;
                }
              }
            }

            &__block {
              display: flex;
              align-items: flex-start;
              justify-content: flex-start;
              flex-direction: column;

              &_partner {
                width: 130px;
                max-width: 130px;
                min-width: 130px;
                margin-right: 30px;
                @media screen and (max-width: $maxwidth) {
                  margin-right: 10px;
                }
              }

              &_date {
                width: 120px;
                max-width: 120px;
                min-width: 120px;
                margin-right: 100px;
                @media screen and (max-width: $maxwidth) {
                  margin-right: 10px;
                }
                @media screen and (max-width: $notebook) {
                  margin-right: 30px;
                }
              }

              &_address {
                margin-right: 30px;
                width: 100%;
                @media screen and (max-width: $maxwidth) {
                  margin-right: 10px;
                }
                height: auto;
              }

              &_price {
                width: 80px;
                margin-right: 30px;
                @media screen and (max-width: $maxwidth) {
                  margin-right: 10px;
                }
              }

              &_status {
                width: max-content;
                max-width: 100px;
                flex-shrink: 0;
              }

              &__name {
                margin-bottom: 15px;
                font-family: "SF Pro Display";
                font-style: normal;
                font-weight: 400;
                font-size: 15px;
                line-height: 17px;
                white-space: nowrap;
              }

              &__value {
                font-family: "SF Pro Display";
                font-style: normal;
                font-weight: 500;
                font-size: 15px;
                line-height: 20px;
                height: auto;
                width: 100%;
                max-width: max-content;
                overflow: hidden;
              }
            }
          }

          &__buttons {
            width: max-content;
            display: flex;
            align-self: flex-start;
            align-items: center;
            justify-content: flex-end;
            flex-direction: row;
            margin-left: 40px;
            @media screen and (max-width: $notebook) {
              flex-direction: column;
            }
            @media screen and (max-width: $sidebar_dn) {
              margin-top: 20px;
              flex-direction: row;
              justify-self: flex-end;
              align-self: flex-end;
              margin-left: 0;
            }

            @media screen and (max-width: $tablet_middle) {
              justify-content: space-between;
              width: 100%;
            }

            &__button {
              width: 104px;
              height: 40px;
              @media screen and (max-width: $tablet_middle) {
                width: 134px;
                height: 35px;
                font-family: 'SF Pro Display';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 17px;
              }

              &_open {
                @media screen and (max-width: $notebook) {
                  margin-right: 0;
                  margin-bottom: 10px;
                }
                @media screen and (max-width: $sidebar_dn) {
                  margin-right: 20px;
                  margin-bottom: 0;
                }
              }

              &_rate {
                margin-left: 20px;
                @media screen and (max-width: $notebook) {
                  margin-left: 0;
                }
                @media screen and (max-width: $sidebar_dn) {
                  margin-left: 0;

                }

                border-color: $green !important;
                color: $green;

                &:hover {
                  background-color: $green;
                  color: $white;
                }

                @media screen and (max-width: $tablet_middle) {
                  border-color: $darkblue !important;
                  color: $darkblue !important;
                }
              }
            }

            &__stars {
              width: 104px;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-end;
              margin-left: 20px;
              position: relative;
              @media screen and (max-width: $notebook) {
                margin-left: 0;
              }
              @media screen and (max-width: $sidebar_dn) {
                margin-left: 0;
              }

              &__star {
                &__wrapper{
                  width:20px;
                  height:20px;
                }
                width: 20px;
                position: absolute;
                &_half,&_filled{
                  *{
                    fill:$orange;
                    stroke: $orange;
                  }
                }
                &_half{
                  clip-path: polygon(0 0, 50% 0, 50% 100%, 0% 100%);
                }
              }
            }
          }
        }

        &_loading {
          width: max-content;
          align-self: center;
          justify-self: center;
          margin: 10vh auto 0;
        }

        &_empty {
          text-align: left;
          width: max-content;
          font-family: 'SF Pro Display';
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 26px;
          align-self: flex-start;
        }
      }
    }
  }

}
</style>
