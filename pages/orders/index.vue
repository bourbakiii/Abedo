<template>
  <div class="page orders-page wrapper">
    <div class="orders-page__content content">
      <Breadcrumbs class="orders-page__content__breadcrumbs adaptive-non" />
      <div class="orders-page__content__orders">
        <h1 class="orders-page__content__orders__title title-normal">
          Список заказов
        </h1>
        <div class="orders-page__content__orders__content">
          <div
            class="orders-page__content__orders__content__item"
            v-for="order in orders.reverse()"
            :key="order.id"
          >
            <div class="orders-page__content__orders__content__item__data">
              <div
                class="orders-page__content__orders__content__item__data__block orders-page__content__orders__content__item__data__block_partner"
              >
                <p
                  class="orders-page__content__orders__content__item__data__block__name"

                >
                  !!! не приходит !!!
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
                  {{ parseAddress(order) }}
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
                  {{order.price_with_discount}}₽
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
                  {{order.statuses[order.statuses.length -1].title}}
                </p>
              </div>
            </div>
            <div class="orders-page__content__orders__content__item__buttons">
              <ButtonStandart
                @click.native="() => $router.push(`/orders/${order.id}`)"
                class="orders-page__content__orders__content__item__buttons__button orders-page__content__orders__content__item__buttons__button_open"
                >Открыть</ButtonStandart
              >
              <ButtonStandart
              @click='()=>$store.commit("modals/open",{modal_name:"rate"})'
                class="orders-page__content__orders__content__item__buttons__button orders-page__content__orders__content__item__buttons__button_rate"
                >Оценить</ButtonStandart
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import parserMixin from "@/mixins/parser.js";
export default {
  mixins: [parserMixin],
  data() {
    return {
      orders: [],
    };
  },
  fetchOnServer: false,
  async fetch() {
    await this.$axios
      .get("/api/orderHistory", {
        headers: { Authorization: `Bearer ${this.token}` },
      })
      .then(({ data: { orders } }) => {
        this.orders = orders;
      });
  },
  computed: {
    token() {
      return this.$store.state.account.token;
    },
  },
  mounted(){
    this.$store.commit("variables/action", (state) => {
      state.adaptive_navigation = {
        text: `Заказы`,
        slot: "label",
        info_click: null,
      };
    });
  },
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
          font-family: "SF Pro Display";
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
        padding: 0px 20px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        background-color: $white;
        &__item {
          max-width: 100%;
          width: 100%;
          padding: 30px 0px;
          background-color: $white;
          background: $white;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-direction: row;
          border-bottom: 1px solid $dark_grey;
          &:last-of-type {
            border-bottom: 0px;
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
                margin: 0px !important;
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
                background-color: lightcoral;
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
              margin-left: 0px;
            }
            @media screen and (max-width: $tablet) {
              align-self: center;
            }
            &__button {
              width: 104px;
              height: 40px;
              &_open {
                margin-right: 20px;
                @media screen and (max-width: $notebook) {
                  margin-right: 0px;
                  margin-bottom: 10px;
                }
                @media screen and (max-width: $sidebar_dn) {
                  margin-right: 20px;
                  margin-bottom: 0px;
                }
              }
              &_rate {
                border-color: $green !important;
                color: $green;
                &:hover {
                  background-color: $green;
                  color: $white;
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
