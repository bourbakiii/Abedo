<template>
  <NuxtLink
    :to="parseLink(`/partners/${stock.shop.id}`)"
    class="stock__wrapper"
    :style="stock.image?`background: url(${$axios.defaults.baseURL}${stock.image.original})`:''"
  >
    <div class="stock" :class="parseColor(index)">
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
  </NuxtLink>
</template>
<script>
import previewHider from "@/mixins/preview-hider";

export default {
  mixins: [previewHider],
  props: {
    stock: {
      required: true,
    },
    index: {
      required: true,
      index: 0
    }
  },
  methods: {
    parseColor() {
      const index_of_color = this.index % 4;
      switch (index_of_color) {
        case 0:
          return 'blue';
        case 1:
          return 'red';
        case 2:
          return 'orange';
        case 3:
          return 'green';
      }
    }
  }

};
</script>
<style lang="scss" scoped>
.stock {
  &__wrapper {
    border-radius: 20px !important;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    overflow: hidden;
    transition: $transition;
    width: 100%;
    max-width: 403px;
    outline: none;
    border: none;
    color: $white;
  }

  position: relative;
  padding-bottom: calc(100% * (172 / 403));
  color: inherit;
  &.blue {
    background-color: rgba($darkblue, 0.9)
  }

  &.orange {
    background-color: rgba($orange, 0.9)
  }


  &.red {
    background-color: rgba($red, 0.9)
  }

  &.orange {
    background-color: rgba($orange, 0.9)
  }

  &.green {
    background-color: rgba($green, 0.9);
  }

  @media screen and (max-width: $tablet) {
    height: 134px;
    width: 335px;
    padding-bottom: 0;
  }
  @media screen and (max-width: $tablet) {
    width: 100%;
    height: 134px;
  }

  &__content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    cursor: pointer;
    color:inherit;
    &__hood {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      height: 60px;
      max-width: 100%;
      flex-shrink: 0;
      position: relative;
      color: inherit;
      @media screen and (max-width: $tablet) {
        height: 40px;
      }

      &.befored {
        align-items: flex-start;
        justify-content: flex-start;
        height: 35px;

        &::before {
          position: absolute;
          bottom: 0;
          left: 0;
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
        color: inherit;
        font-family: "Montserrat",serif;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        text-align: left;
        @media screen and (max-width: $tablet) {
          font-family: "SF Pro Display",serif;
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
      font-family: "Montserrat",serif;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 26px;
      color: inherit;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      text-align: left;
      @media screen and (max-width: $tablet) {
        font-family: "SF Pro Display",serif;
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
