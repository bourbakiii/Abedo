<template>
  <div class="search-input-wrapper">
    <div class="search-input__content">
      <h1 class="search-input__content__title title-small adaptive">
        Поиск заведения
      </h1>
      <form @submit.prevent="timerHandler" class="search-input">
        <transition name="search-input-button_close__transition" appear mode="out-in">
          <button
            type="button"
            v-if="keyword.length"
            @click.prevent="keyword = ''"
            class="search-input-button search-input-button_close"
          >

            <svg
              class="search-input-button-icon"
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
        </transition>
        <input
          placeholder="Найти заведение товар или услугу "
          type="text"
          required
          class="search-input-input"
          v-model="keyword"
          @change="timerHandler"
          minlength='3'
        />

        <button class="search-input-button search-input-button_search">
          <svg
            class="search-input-button-icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3 .org/2000/svg"
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
                <rect width="20" height="20" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </button>


      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchPageSearch",
  data() {
    return {
      keyword: this.$store.state.temporary.search_keyword ?? "",
      founded: {
        partners: null,
        products: null,
      },
    };
  },
  created() {
    this.$store.commit("temporary/action", (state) => {
      state.search_keyword = null;
    })
  },
  async fetch() {
    this.show_result = false;
    if (this.keyword.length < 3) return;
    this.$emit('changeLoading', true);

    await this.$axios
      .get("/api/search", {
        params: {
          keyword: this.keyword ?? "",
        },
      })
      .then(({data: {result}}) => {
        this.founded = {
          partners: result.shops.data,
          products: result.products.data,
        };
      }).finally(() => this.$emit('changeLoading', false));
  },
  methods: {
    timerHandler() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.timer = null;
        this.$fetch();
      }, 400);
    },
  },
  watch: {
    founded(value) {
      this.$emit("search", value);
    },
  },
};
</script>

<style lang="scss" scoped>
.search-input {
  border: 1px solid $dark_grey;

  &__content {
    width: 100%;
    max-width: $maxwidth;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    &__title {
      margin-bottom: 20px;
    }
  }

  &-wrapper {
    width: 100%;
  }

  width: 650px;
  height: 60px;
  @media screen and (max-width: $notebook) {
    height: 50px;
  }
  @media screen and (max-width: $tablet) {
    width: 100%;
    height: 40px;
  }
  background-color: $white;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  position: relative;
  z-index: 5;
  overflow: hidden;
  padding: 0 30px;
  @media screen and (max-width: $tablet) {
    padding: 0 24px;

  }

  &-button {
    outline: none;
    border: none;
    background-color: transparent;


    transition: $transition;
    @media screen and (max-width: $tablet) {
      svg {
        width: 15px;
        height: 15px;
      }
    }

    &_search {
      margin-left: 20px;
      @media screen and (max-width: $tablet) {
        margin-left: 11px;
      }

      * {
        fill: $darkblue;
      }
    }

    &_close {
      margin-right: 27px;
      @media screen and (max-width: $tablet) {
        margin-right: 11px;
      }
      width: 20px;
      transition: $transition;

      &__transition {
        &-enter, &-leave-to {
          margin-right: 0;
          width: 0;
          opacity: 0;
          transform: scale(0.4);
        }

        &-enter-to {
          transform: scale(1.1);
        }

      }
    }
  }

  &-input {
    @media screen and (max-width: $tablet) {
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 17px;
    }

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
