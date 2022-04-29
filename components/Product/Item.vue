<template>
  <NuxtLink to="/product/1" class="product product-item product_in-cart">
    <div v-if="product.discount" class="product-item__discount">-10%</div>
    <img
      v-if="product.image.original"
      :src="`${$axios.defaults.baseURL}${product.image.original}`"
      class="product-item__image"
    />
    <div class="product-item__info">
      <p class="product-item__info__name">{{product.name}}</p>
      <div class="product-item__info__prices adaptive-non">
        <p class="product-item__info__prices__price">{{product.price}}</p>
        <p class="product-item__info__prices__weight">/ {{product.weight}} {{product.weight_unit.short_name}}</p>
        <p v-if='product.discount' class="product-item__info__prices__price_full">4000 ₽</p>
      </div>
      <div class="product-item__info__weight adaptive" contenteditable>
        450 г
      </div>
      <div class="product-item__info__prices__mobile adaptive">
        <p class="product-item__info__prices__mobile__price" contenteditable>
         {{product.price}}
        </p>
        <p
        v-if='product.discount' 
          class="product-item__info__prices__mobile__price_full"
          contenteditable
        >
          10 345 ₽
        </p>
      </div>
    </div>
    <div class="product-item__buttons">
      <div v-if="false" class="product-item__buttons__add">
        <ButtonSmallCart
          class="product-item__buttons__button_add_small adaptive"
        />
        <ButtonStandart class="product-item__buttons__button_add adaptive-non">
          В корзину
        </ButtonStandart>
      </div>
      <div v-else class="product-item__buttons__button_creases">
        <ButtonProduct size="40" icon="minus" />
        <p class="product-item__buttons__button_creases__count">10</p>
        <ButtonProduct size="40" icon="plus" />
      </div>
    </div>
  </NuxtLink>
</template>
<script>
import productsMixin from "@/mixins/products-mixin.js";

export default {
  mixins: [productsMixin],
  props: {
    product: {
      required: true,
      default() {
        return {
          id: 23,
          section_id: 10,
          name: "Скумбрия Русское Море атлантическая холодного копчения",
          image: {
            mobile: "/storage/images/ded9e58015ba10aaf93d7497152d719a.jpeg",
            shop_detail:
              "/storage/images/7ee2ba9899a56fee19fdacaeccf8a732.jpeg",
            search_icon:
              "/storage/images/a5a22942b25282b1326aec5e098af0f6.jpeg",
            search_page:
              "/storage/images/a55144ced83d16bea309d4d384d340a6.jpeg",
            modal_mini: "/storage/images/ca8898fdbaa617f22132731e5e978fbe.jpeg",
            cart_mini: "/storage/images/c05bff3ed5196c43ba6557b6ae85fa05.jpeg",
            cart_detail_mini:
              "/storage/images/d297ae5a90d16785ce48bbe738de4255.jpeg",
            small: "/storage/images/11bd2264a5a056dd7c672e1bc38747da.jpeg",
            original: "/storage/images/2adedda91211c2b0db4197a904051a7e.jpeg",
          },
          more_images: [
            {
              mobile: "/storage/images/996d9bb663c0a032efb32ae0cb3d8169.png",
              shop_detail:
                "/storage/images/c8ad6bb9a4cb657dcdca475d1011a808.png",
              search_icon:
                "/storage/images/539a9453212e7726c474b6d65bd9b073.png",
              search_page:
                "/storage/images/8fa65d4f1f60acf37538d64f54348375.png",
              modal_mini:
                "/storage/images/4d3737dc54b6bf31684a5fdf9cedea51.png",
              cart_mini: "/storage/images/537edbae21da1b86245d7f00be866916.png",
              cart_detail_mini:
                "/storage/images/1b9109f9a779e64f80fc32d7699f0218.png",
              small: "/storage/images/603075a4f72bb7e67437003598615339.png",
              original: "/storage/images/9c4f1bf7c4e300925e95ba43ad73e2a5.png",
            },
            {
              mobile: "/storage/images/198e0ee20d5ea4500addd86dda4b672f.png",
              shop_detail:
                "/storage/images/e348e1a882f19529107976aa72644128.png",
              search_icon:
                "/storage/images/b4e00e025fc89fa8cb2578c28387d822.png",
              search_page:
                "/storage/images/7a109149ab3aa1982c82765d8a1d4769.png",
              modal_mini:
                "/storage/images/6903458cc5cd7328cb686be62a9242e1.png",
              cart_mini: "/storage/images/618a35efce467e302d523d25faf9ecfb.png",
              cart_detail_mini:
                "/storage/images/82f5b895515d1f540690175ba748c2d3.png",
              small: "/storage/images/7be402691c45ebbe45fe3a59f0652ff0.png",
              original: "/storage/images/30bfbab12354ce8dba14e384abf13391.png",
            },
            {
              mobile: "/storage/images/eaa052c335c96eb8ce492f1b7b5060af.png",
              shop_detail:
                "/storage/images/3fd0773597d0e42b5092c1126fd4c90a.png",
              search_icon:
                "/storage/images/4c51b892c3738632b05236b367d5fde3.png",
              search_page:
                "/storage/images/a1325fd250d24a9087c949fa1ee7c7e1.png",
              modal_mini:
                "/storage/images/66d78b10730d155c42d2adf80cd66aeb.png",
              cart_mini: "/storage/images/ff43f52c432a1435e847248a40746609.png",
              cart_detail_mini:
                "/storage/images/c89eefb9137784b9d251db54724bb34a.png",
              small: "/storage/images/1e45ff790920755ae3e53751d7f20757.png",
              original: "/storage/images/adc750bade0422395946ed92086d6151.png",
            },
          ],
          price: 50,
          consist: "фыв фывфы вфы вфы вфыв фы в",
          description:
            "Скумбрия Русское Море атлантическая холодного копчения Скумбрия Русское Море атлантическая холодного копчения Скумбрия Русское Море атлантическая холодного копчения Скумбрия Русское Море атлантическая холодного копчения Скумбрия Русское Море атлантическая холодного копчения",
          weight: 1,
          weight_unit_id: 6,
          preparation_time: 1,
          other: null,
          sort: 1,
          is_active: 1,
          min_count: 1,
          in_cart_message: null,
          discount: null,
          weight_unit: { id: 6, name: "Штука", code: "st", short_name: "шт" },
          options: [],
          properties: [],
        };
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.product-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 20px;
  background-color: $white;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  text-decoration: none;
  @media screen and (max-width: $tablet) {
    border-radius: 8px;
    height: 249px;
  }
  &_in-cart {
    border: 2px solid $orange;
  }
  &__discount {
    position: absolute;
    top: 20px;
    left: 20px;
    min-width: 45px;
    padding: 0px 5px;
    height: 45px;
    border-radius: 90px;
    background-color: $red;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: $white;
    @media screen and (max-width: $tablet) {
      top: 15px;
      left: 15px;
      min-width: 36px;
      height: 36px;
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 10px;
    }
  }
  &__image {
    width: 100%;
    height: 190px;
    object-fit: cover;
    margin-bottom: 15px;
    @media screen and (max-width: $tablet) {
      margin-bottom: 7px;
      height: 111px;
    }
  }
  &__info {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 0px 20px;
    @media screen and (max-width: $tablet) {
      padding: 0px 15px;
    }
    width: 100%;
    flex-grow: 1;
    &__name {
      width: 100%;
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -moz-box;
      -moz-box-orient: vertical;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      line-clamp: 3;
      box-orient: vertical;
      @media screen and (max-width: $tablet) {
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 17px;
      }
    }
    &__weight {
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: $darkblue;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &__prices {
      flex-shrink: 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 15px;
      &__mobile {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 7px;
        max-width: 100%;
        width: 100%;
        &__price {
          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 500;
          font-size: 15px;
          line-height: 16px;
          white-space: nowrap;
          &_full {
            font-family: "SF Pro Display";
            font-style: normal;
            font-weight: 500;
            font-size: 13px;
            line-height: 16px;
            text-decoration-line: line-through;
            margin-left: clamp(0px, 50%, 18px);
            white-space: nowrap;
            color: $extra_dark_grey;
          }
        }
      }
      &__price {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        &_full {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 500;
          font-size: 15px;
          line-height: 17px;
          text-decoration-line: line-through;
          color: $extra_dark_grey;
          margin-left: min(10px, 100%);
        }
      }
      &__weight {
        margin-left: 5px;
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 17px;
        color: $darkblue;
      }
    }
  }
  &__buttons {
    margin-top: 25px;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    padding: 0px 20px;
    @media screen and (max-width: $tablet) {
      padding: 0px 15px;
      justify-content: flex-start;
      margin-top: 10px;
      margin-bottom: 17px;
    }
    &__button_add {
      height: 40px;
      width: 228px;
    }
    &__button_creases {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      &__count {
        width: 60px;
        max-width: 50%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        margin: 0px 10px;
        @media screen and (max-width: $tablet) {
          font-size: 16px;
          line-height: 19px;
          width: 34px;
          margin: 0px 4px;
        }
      }
    }
  }
}
</style>
