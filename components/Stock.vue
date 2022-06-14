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
            v-if="stock.shop.logo"
            :src="`${$axios.defaults.baseURL}${stock.shop.logo.resized}`"
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
