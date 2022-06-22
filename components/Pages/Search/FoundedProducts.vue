<template>
  <div class="founded-products">
    <h1 class="founded-products__title title-normal">Результаты поиска</h1>
    <div class="founded-products__content content">
      <div v-for="block in blocks" class="founded-products__content__item">
        <NuxtLink :to='`/partners/${block.partner.id}`' class="founded-products__content__item__partner">
          <img
            v-if="block.partner.logo"
            :src="`${$axios.defaults.baseURL}${block.partner.logo.original}`"
            class="founded-products__content__item__partner__image"
          />
          <p
            class="founded-products__content__item__partner__name"

          >
            {{ block.partner.name }}
          </p>
          <div v-if='block.partner.rate && +block.partner.rate.shop_last_order_avg_rating>=0'
               class="founded-products__content__item__partner__rating">
            <svg
              class="founded-products__content__item__partner__rating__icon"
              width="17"
              height="15"
              viewBox="0 0 17 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.2349 14.6967C13.4192 14.6967 13.6023 14.6454 13.7585 14.5447C14.0494 14.3567 14.1853 14.0335 14.1061 13.7216L13.0239 9.47082L16.694 6.6008C16.9638 6.3908 17.0669 6.05822 16.9561 5.75392C16.8454 5.45018 16.544 5.23514 16.1872 5.20573L11.3312 4.81262L9.41136 0.806279C9.2698 0.51193 8.9474 0.321838 8.5892 0.321838C8.23099 0.321838 7.90859 0.51193 7.76703 0.805593L5.84715 4.81262L0.991947 5.20573C0.634384 5.23446 0.333036 5.45018 0.222277 5.75392C0.111517 6.05765 0.213934 6.3908 0.483709 6.6008L4.1538 9.47025L3.07161 13.7209C2.9923 14.0335 3.12834 14.3567 3.41916 14.5441C3.70935 14.7316 4.0963 14.746 4.40189 14.5822L8.5892 12.3509L12.7765 14.5835C12.9181 14.6584 13.0758 14.6967 13.2349 14.6967ZM8.5892 11.3897C8.43005 11.3897 8.27244 11.4278 8.13075 11.5028L4.17895 13.6104L5.2003 9.59831C5.2732 9.31278 5.1645 9.01465 4.91705 8.82147L1.45167 6.11144L6.03646 5.74018C6.36656 5.71329 6.65045 5.52823 6.77943 5.257L8.5892 1.47623L10.4011 5.25757C10.5287 5.52697 10.8126 5.71203 11.1419 5.73892L15.7274 6.11018L12.2621 8.82021C12.0139 9.01396 11.9053 9.31152 11.9789 9.59774L12.9994 13.6097L9.04764 11.5028C8.90607 11.4278 8.74834 11.3897 8.5892 11.3897ZM11.3683 4.89009C11.3683 4.89009 11.3683 4.89078 11.3691 4.89135L11.3683 4.89009ZM5.81147 4.88826L5.8107 4.88952C5.8107 4.88883 5.8107 4.88883 5.81147 4.88826Z"
                fill="#F95738"
              />
            </svg>
            <p class="founded-products__content__item__partner__rating__text">
              Рейтинг:
            </p>
            <p class="founded-products__content__item__partner__rating__value">
              {{ block.partner.rate.shop_last_order_avg_rating }}
            </p>
          </div>
        </NuxtLink>
        <div class="founded-products__content__item__products">
          <ProductSmall
            v-for="product in block.products"
            :key="product.id"
            :product="product"
            class="founded-products__content__item__products__item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: [],
  },
  data() {
    return {
      blocks: []
    }
  },
  created() {
    const all_partners_ids = new Set(this.products.map(el => el.section.shop.id));


    for (let id of all_partners_ids) {
      let partner_products = this.products.filter(el => el.section.shop.id === id);
      this.blocks.push({
        partner: partner_products[0].section.shop,
        products: partner_products
      });
    }
  },
  computed: {
    partner() {
      return this.products[0].section.shop;
    }
  }
};
</script>

<style lang="scss" scoped>
.founded-products {
  width: 100% !important;
  max-width: $maxwidth;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  &__title {
    margin-bottom: 40px;
    @media screen and (max-width: $tablet) {
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 30px;
    }
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;

    &__item {
      border: 1px solid $dark_grey;

      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      width: 100%;
      padding: 30px 0;
      border-radius: 20px;
      background-color: $white;
      margin-bottom: 30px;
      &:last-of-type{
        margin-bottom: 0;
      }
      &__partner {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        width: 100%;
        padding: 0px 30px;
        margin-bottom: 17px;
        overflow: hidden;
        max-width: 100%;
        text-decoration: none;
        @media screen and (max-width: $notebook) {
          padding: 0px 20px 15px;
        }
        @media screen and (max-width: $tablet) {
          flex-wrap: wrap;
          padding: 0px 15px 10px;
        }

        &__image {
          height: 60px;
          width: auto;
          flex-shrink: 0;
          object-fit: contain;
          margin-right: 40px;
          @media screen and (max-width: $tablet) {
            width: 20%;
            height: auto;
            margin-right: 15px;
          }
        }

        &__name {
          width: max-content;
          max-width: 100%;
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 29px;
          height: auto;
          @media screen and (max-width: $tablet) {
            width: calc(80% - 15px);
            font-size: 20px;
            line-height: 24px;
          }
        }

        &__rating {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 40px;
          flex-shrink: 0;
          @media screen and (max-width: $tablet) {
            margin-top: 15px;
            margin-left: auto;
          }

          &__icon {
            margin-right: 5px;
          }

          &__text {
            font-family: "SF Pro Display";
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 17px;
            color: $extra_dark_grey;
          }

          &__value {
            margin-left: 10px;
            font-family: "SF Pro Display";
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 20px;
          }
        }
      }

      &__products {
        padding: 30px 30px 0px;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-gap: 20px;
        border-top: 1px solid $blue_grey;

        @media screen and (max-width: $notebook) {
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 15px;
          padding: 20px 20px 0px;
        }
        @media screen and (max-width: $tablet) {
          grid-template-columns: repeat(3, 1fr);
        }
        @media screen and (max-width: $phone) {
          grid-template-columns: repeat(2, 1fr);
        }

        &__item {
          width: 100%;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
