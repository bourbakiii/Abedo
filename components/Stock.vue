<template>
  <button
    @click.prevent="() => $router.push(`/partners/${stock.shop.id}`)"
    class="stock__wrapper"
    :style="`background: ${
      stock.image
        ? `url(${$axios.defaults.baseURL}${stock.image.original})`
        : 'red'
    };`"
  >
    <div class="stock">
      <div class="stock__content">
        <div
          class="stock__content__hood"
          :class="{ befored: !stock.shop.image.length }"
        >
          <img
            v-if="stock.shop.image"
            :src="`${$axios.defaults.baseURL}${stock.image.resized}`"
            class="stock__content__hood__logo"
          />
          <p class="stock__content__hood__name">
            {{ stock.shop.name }}
          </p>
        </div>
        <p class="stock__content__text">
          {{ stock.title }}
        </p>
      </div>
    </div>
  </button>
</template>
<script>
export default {
  props: {
    stock: {
      required: true,
      default() {
        return {
          id: 1,
          shop_id: 1,
          title: "Всем по пицце",
          image: {
            desktop: "/storage/images/4b383868425ee2df2f67f3f60a01d43a.jpeg",
            mobile: "/storage/images/6c8be4c41859abaf2f8eb9ded0f9cef4.jpeg",
            small: "/storage/images/e9a8f132c57dad974d5efdbabacd47a0.jpeg",
            original: "/storage/images/199d97b6297dca9ae1ec16f066d87325.jpeg",
          },
          created_at: "29.03.2021 08:34",
          updated_at: "29.03.2021 08:34",
          shop: {
            id: 1,
            name: "Лимончелло",
            image: [
              {
                desktop:
                  "/storage/images/9c6a55be47da6a16a38919c51297b889.jpeg",
                mobile: "/storage/images/fb3e69c013c03077699569d5771fd3b8.jpeg",
                modal: "/storage/images/1634840abae0817f20a0cb29905ecf52.jpeg",
                small: "/storage/images/290eae09bf1f0208d4380e9ce316de6d.jpeg",
                original:
                  "/storage/images/4e80b64ea3a25c03c888482580fd7f00.jpeg",
              },
            ],
            logo: {
              detail: "/storage/images/d1eb65c4efc91fb8a031488984332b31.png",
              desktop: "/storage/images/1989383073f2fdaa3c7229f643fcd020.png",
              search_logo:
                "/storage/images/efa0991efb0cbfdc74882ac58ddab35c.png",
              cart_mini: "/storage/images/c5f0a0100fac7fd0362f3731f7db4cbf.png",
              cart_detail_mini:
                "/storage/images/d6d1049dd47d802906bc6b1c9536699b.png",
              small: "/storage/images/4b5d28d346e491458ac64b968d04f1cc.png",
              original: "/storage/images/06ef79f1ecf04567982409d01914dddf.png",
            },
            city: "Владикавказ",
            street: "Пушкинская",
            house: "76/2",
            latitude: "43.039134",
            longitude: "44.699118",
            delivery_by_shop: 1,
            free_order_price: 1000,
            contact_phone: "9992344323",
            description:
              "фывфы вфы вфы вфыв фы вфы вфы вфыв фыв фыв фыв фыв фыв фы вфыв фы вфы вфыв фыв фыв фы вфы вфыв фыs",
            tags: null,
            is_active: 1,
            is_work_now: 0,
            created_at: null,
            updated_at: "2022-04-29T10:04:49.000000Z",
            is_favourite: false,
          },
        };
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.stock {
  &__wrapper {
    border-radius: 20px;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    overflow: hidden;
    transition: $transition;
    position: relative;
    width: 100%;
    max-width: 403px;
    outline: none;
    border: none;
  }

  position: relative;
  padding-bottom: calc(100% * (172 / 403));
  @media screen and (max-width: $tablet) {
    height: 134px;
    width: 335px;
    padding-bottom: 0px;
  }
  @media screen and (max-width: $tablet) {
    width: 100%;
    height: 134px;
  }
  &__content {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    padding: 20px;
    width: 100%;
    height: 100%;
    background-color: rgba($orange, 0.9);
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    cursor: pointer;
    &__hood {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      height: 60px;
      max-width: 100%;
      flex-shrink: 0;
      position: relative;
      @media screen and (max-width: $tablet) {
        height: 40px;
      }
      &.befored {
        align-items: flex-start;
        justify-content: flex-start;
        height: 35px;
        &::before {
          position: absolute;
          bottom: 0px;
          left: 0px;
          width: 69px;
          height: 1px;
          border-radius: 10px;
          background-color: $white;
          content: "";
          z-index: 2;
        }
      }
      &__logo {
        height: 100%;
        width: 100px;
        height: 100%;
        @media screen and (max-width: $tablet) {
          width: 80px;
        }
        object-fit: contain;
        margin-right: 20px;
        background-color: $white;
        border-radius: 10px;
        padding: 5px;
        flex-shrink: 0;
      }
      &__name {
        flex-grow: 1;
        color: $white;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        text-align: left;
        @media screen and (max-width: $tablet) {
          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 19px;
        }
      }
    }

    &__text {
      max-height: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 26px;
      color: $white;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-align: left;
      @media screen and (max-width: $tablet) {
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 21px;
        -webkit-line-clamp: 2;
      }
    }
  }
}
</style>
