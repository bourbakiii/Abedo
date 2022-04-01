<template>
  <div class="search__input-wrapper wrapper">
    <div class="search__input__content">
      <form @submit.prevent="search" class="search__input">
        <button class="search__input-button">
          <svg
            class="search__input-button-icon"
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
          placeholder="Найти магазин товар или услугу "
          type="text"
          minlength="3"
          required
          class="search__input-input"
          v-model="query"
        />
        <transition name="opacity">
          <button
            v-if="query.length"
            @click.prevent="query = ''"
            class="search__input-button search__input-button-close"
          >
            <svg
              class="search__input-button-icon"
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
        </transition>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchPageSearch",
  fetch() {
    if (this.$route.query.query) this.search_request(this.$route.query.query);
  },
  fetchOnServer: false,
  methods: {
    search_request(query) {
      console.log("query for the fetch");
      console.log("the query is:" + query);
    },
  },
  data() {
    return {
      query: this.$route.query.query ?? "",
    };
  },
};
</script>

<style lang="scss"scoped>
.search__input {
  &__content{
    width:100%; max-width: $maxwidth;
    display: flex;align-items: center;justify-content: flex-start;
  }
  width: 650px;
  height: 60px;
  background-color: $white;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  position: relative;
  z-index: 5;
  &-button {
    outline: none;
    border: none;
    background-color: transparent;
    margin: 0px 20px;
    &-close {
      margin-left: 0px 8px !important;
    }
    transition: 0.3s;
    &:active {
      transition: 0.05s;
      transform: scale(0.9);
    }
  }
  &-input {
    height: 100%;
    flex-grow: 1;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    outline: none;
    border: none;
    overflow: hidden;
    border-radius: 0px 50px 50px 0px;
    &::placeholder {
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      display: flex;
      align-items: center;
    }
  }
}
</style>