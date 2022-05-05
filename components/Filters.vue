<template>
  <form @submit.prevent="send" class="filters">
    <div class="filters__input__wrapper">
      <button class="filters__input__button">
        <svg
          class="filters__input__icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1887_4787)">
            <path
              d="M8.80758 0C3.95121 0 0 3.95121 0 8.80758C0 13.6642 3.95121 17.6152 8.80758 17.6152C13.6642 17.6152 17.6152 13.6642 17.6152 8.80758C17.6152 3.95121 13.6642 0 8.80758 0ZM8.80758 15.9892C4.8477 15.9892 1.62602 12.7675 1.62602 8.80762C1.62602 4.84773 4.8477 1.62602 8.80758 1.62602C12.7675 1.62602 15.9891 4.8477 15.9891 8.80758C15.9891 12.7675 12.7675 15.9892 8.80758 15.9892Z"
              fill="#A6A8A8"
            />
            <path
              d="M19.7617 18.6122L15.1005 13.9509C14.7829 13.6333 14.2685 13.6333 13.9509 13.9509C13.6332 14.2683 13.6332 14.7832 13.9509 15.1005L18.6121 19.7618C18.7709 19.9206 18.9788 20 19.1869 20C19.3948 20 19.6029 19.9206 19.7617 19.7618C20.0793 19.4444 20.0793 18.9295 19.7617 18.6122Z"
              fill="#A6A8A8"
            />
          </g>
          <defs>
            <clipPath id="clip0_1887_4787">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <input
        class="filters__input"
        type="text"
        name="query"
        placeholder="Фильтр по названию"
        required
        minlength="3"
        v-model="filters.keywords"
      />
    </div>
    <label for="delivery" class="filters__checkbox">
      <Checkbox
        class="filters__checkbox__checkbox"
        id="delivery"
        v-model="filters.has_delivery"
      />
      <p class="filters__checkbox__name">Бесплатная доставка</p>
    </label>
    <label for="gift" class="filters__checkbox">
      <Checkbox
        class="filters__checkbox__checkbox"
        id="gift"
        v-model="filters.has_gift"
      />
      <p class="filters__checkbox__name">Наличие подарка</p>
    </label>
    <label for="discount" class="filters__checkbox">
      <Checkbox
        class="filters__checkbox__checkbox"
        id="discount"
        v-model="filters.has_discount"
      />
      <p class="filters__checkbox__name">Наличие скидок</p>
    </label>
  </form>
</template>
<script>
export default {
  data() {
    return {
      filters: {
        keywords: null,
        has_delivery: false,
        has_gift: false,
        has_discount: false,
      },
      timer: null,
    };
  },
  methods: {
    send() {
      this.$emit("send", this.filters);
    },
  },
  watch: {
    filters: {
      handler() {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          clearTimeout(this.timer);
          this.send();
        }, 400);
      },
      deep: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.filters {
  width: 100%;
  display: flex;
  overflow: hidden;
  transition: $transition;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 20px;
  height: 70px;
  background-color: $dark_grey;
  @media screen and (max-width: $sidebar_dn) {
    flex-wrap: wrap;
    height: 130px;
  }
  @media screen and (max-width: $tablet_middle) {
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 160px;
  }
  &__input {
    width: 100%;
    height: 100%;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    border: none;
    outline: none;
    @media screen and (max-width: $tablet) {
      font-size: 15px;
      line-height: 17px;
    }
    &::placeholder {
      color: $extra_dark_grey;
    }

    &__wrapper {
      @media screen and (max-width: $notebook) {
        width: 35%;
      }
      @media screen and (max-width: $sidebar_dn) {
        width: 100%;
      }
      width: 414px;
      height: 50px;
      border-radius: 90px;
      background-color: $white;
      border: 1px solid $darkblue;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      padding: 15px;
    }
    &__button {
      background-color: transparent;
      outline: none;
      border: none;
      margin-right: 15px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  &__checkbox {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    &__checkbox {
      width: 25px;
      height: 25px;
      margin-right: 10px;
    }
    &__name {
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      @media screen and (max-width: $tablet) {
        font-size: 15px;
        line-height: 17px;
      }
    }
  }
}
</style>
