<template>
  <div class="navigation-wrapper wrapper">
    <div class="navigation">
      <NuxtLink to="/" class="navigation__logo">
        <img
          src="@/assets/images/abedo-logo.png"
          class="navigation__logo-image"
        />
        <img
          src="@/assets/images/abedo-logo-text.png"
          class="navigation__logo-image"
        />
      </NuxtLink>
      <ButtonStandart
        @click.native="() => $router.push('/partners')"
        class="navigation__button"
        ><svg
          class="navigation__button__icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="4"
            y="4"
            width="6"
            height="7"
            rx="1"
            stroke="white"
            stroke-width="2"
            stroke-linejoin="round"
          />
          <rect
            x="4"
            y="15"
            width="6"
            height="5"
            rx="1"
            stroke="white"
            stroke-width="2"
            stroke-linejoin="round"
          />
          <rect
            x="14"
            y="4"
            width="6"
            height="5"
            rx="1"
            stroke="white"
            stroke-width="2"
            stroke-linejoin="round"
          />
          <rect
            x="14"
            y="13"
            width="6"
            height="7"
            rx="1"
            stroke="white"
            stroke-width="2"
            stroke-linejoin="round"
          />
        </svg>
        Заведения</ButtonStandart
      >
      <div class="navigation__links">
        <button
          class="navigation__links-link navigation__links-link__dropdown"
          @mouseenter.prevent="show_dropdown = true"
          @mouseleave.prevent="show_dropdown = false"
          @mousedown.prevent="dropdownClick"
        >
          <svg
            class="navigation__links-link-svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="10" r="3" fill="#5C6784" />
            <circle cx="12" cy="12" r="9" stroke="#5C6784" stroke-width="1.2" />
            <path
              d="M17.8719 18.8083C17.9489 18.7468 17.9799 18.6436 17.9452 18.5513C17.5693 17.5518 16.8134 16.6706 15.7814 16.0332C14.6966 15.3632 13.3674 15 12 15C10.6326 15 9.30341 15.3632 8.21858 16.0332C7.18663 16.6706 6.43066 17.5518 6.05477 18.5513C6.02009 18.6436 6.05115 18.7468 6.12813 18.8083C9.56196 21.552 14.438 21.552 17.8719 18.8083Z"
              fill="#5C6784"
              stroke="#5C6784"
              stroke-width="1.2"
              stroke-linecap="round"
            />
          </svg>
          <p class="navigation__links-link__text">Кабинет</p>
          <transition name="opacity">
            <div
              v-if="show_dropdown && token"
              class="navigation__links-link__dropdown-content"
            >
              <NuxtLink
                to="/profile"
                class="navigation__links-link__dropdown-content-link"
              >
                Мои данные
              </NuxtLink>
              <NuxtLink
                to="/addresses"
                class="navigation__links-link__dropdown-content-link"
              >
                Адреса доставки
              </NuxtLink>
              <NuxtLink
                to="/orders"
                class="navigation__links-link__dropdown-content-link"
              >
                История заказов
              </NuxtLink>
              <button
              @click.prevent="$store.dispatch('account/logout')"
                class="navigation__links-link__dropdown-content-link"
              >
                Выход
              </button>
            </div>
          </transition>
        </button>
        <NuxtLink to="/stocks" class="navigation__links-link">
          <svg
            class="navigation__links-link-svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.6845 2.47362C13.9235 2.16764 13.0942 2 12.2292 2C8.8731 2 6.05373 4.52345 5.68312 7.85899L5.43132 10.1252L5.42527 10.1793C5.31244 11.1625 4.9924 12.1106 4.48627 12.9611L4.45832 13.0077L3.88029 13.9711L3.85614 14.0114C3.61462 14.4138 3.3958 14.7785 3.25005 15.0879C3.10193 15.4024 2.94356 15.8286 3.01979 16.3117C3.09514 16.7893 3.34092 17.2233 3.71164 17.5337C4.08671 17.8476 4.53359 17.931 4.87948 17.9658C5.21985 18.0001 5.6451 18 6.11449 18L6.16139 18H18.2969L18.3438 18C18.8132 18 19.2385 18.0001 19.5788 17.9658C19.9247 17.931 20.3716 17.8476 20.7467 17.5337C21.1174 17.2233 21.3632 16.7893 21.4385 16.3117C21.5148 15.8286 21.3564 15.4024 21.2083 15.0879C21.0625 14.7785 20.8437 14.4138 20.6022 14.0114L20.578 13.9711L20 13.0077L19.9721 12.9611C19.5933 12.3247 19.3188 11.6336 19.1573 10.914C18.8565 10.9705 18.5463 11 18.2292 11C17.8452 11 17.4713 10.9567 17.1122 10.8748C17.2968 11.9715 17.6832 13.0259 18.2534 13.9839L18.285 14.0367L18.863 15.0001C19.1365 15.456 19.3014 15.733 19.3989 15.9401C19.4042 15.9514 19.4091 15.9621 19.4136 15.972C19.4027 15.9733 19.3911 15.9746 19.3786 15.9759C19.1509 15.9988 18.8285 16 18.2969 16H6.16139C5.6298 16 5.30742 15.9988 5.07968 15.9759C5.06722 15.9746 5.05558 15.9733 5.04471 15.972C5.0492 15.9621 5.05409 15.9514 5.05942 15.9401C5.15695 15.733 5.32177 15.456 5.59527 15.0001L6.17331 14.0367L6.20494 13.9839C6.85568 12.8904 7.26716 11.6714 7.41223 10.4073L7.41908 10.3461L7.67089 8.07985C7.92896 5.75718 9.8922 4 12.2292 4C12.6922 4 13.1405 4.06898 13.5639 4.19767C13.8158 3.54594 14.2004 2.96023 14.6845 2.47362ZM17.2113 4.27804C16.6233 4.62632 16.2292 5.26713 16.2292 6C16.2292 6.14503 16.2446 6.28645 16.2739 6.42272C16.3943 6.6476 16.4967 6.88404 16.5789 7.13021C16.9393 7.65547 17.544 8 18.2292 8C18.421 8 18.6066 7.97298 18.7823 7.92254L18.7752 7.85899C18.623 6.48875 18.0575 5.25555 17.2113 4.27804Z"
              fill="#5C6784"
            />
            <path
              d="M9.33123 17.6647C9.50215 18.6215 9.87879 19.467 10.4027 20.0701C10.9267 20.6731 11.5686 21 12.229 21C12.8894 21 13.5314 20.6731 14.0553 20.0701C14.5792 19.467 14.9559 18.6215 15.1268 17.6647"
              stroke="#5C6784"
              stroke-width="2"
              stroke-linecap="round"
            />
            <circle
              cx="18.229"
              cy="6"
              r="2.5"
              fill="#5C6784"
              stroke="#5C6784"
            />
          </svg>

          <p class="navigation__links-link__text">
            Акции <span class="delete-note">заведений</span>
          </p>
        </NuxtLink>
      </div>
      <div class="navigation__icons">
        <NuxtLink to="/search" class="navigation__icons-icon">
          <svg
            class="navigation__icons-icon-svg"
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
        </NuxtLink>
        <NuxtLink to="/favourites" class="navigation__icons-icon">
          <svg
            class="navigation__icons-icon-svg"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.5408 1.90117C17.5543 0.781872 16.1859 0.165466 14.6875 0.165466C12.5802 0.165466 11.246 1.42406 10.4979 2.47992C10.3038 2.7539 10.1386 3.02863 10 3.28715C9.86137 3.02863 9.69629 2.7539 9.50215 2.47992C8.75402 1.42406 7.41984 0.165466 5.3125 0.165466C3.81414 0.165466 2.44566 0.781912 1.45918 1.90121C0.518242 2.96894 0 4.39894 0 5.92777C0 7.59195 0.649727 9.1398 2.04473 10.7989C3.29148 12.2817 5.08512 13.8101 7.16211 15.58C7.93605 16.2395 8.73641 16.9216 9.58848 17.6671L9.61406 17.6895C9.72453 17.7862 9.86227 17.8345 10 17.8345C10.1377 17.8345 10.2755 17.7862 10.3859 17.6895L10.4115 17.6671C11.2636 16.9216 12.0639 16.2396 12.838 15.5799C14.9149 13.8102 16.7085 12.2817 17.9553 10.7989C19.3503 9.13976 20 7.59195 20 5.92777C20 4.39894 19.4818 2.96894 18.5408 1.90117ZM12.0779 14.688C11.4107 15.2566 10.724 15.8417 10 16.4711C9.27602 15.8418 8.58934 15.2566 7.92203 14.688C3.85723 11.2242 1.17188 8.93586 1.17188 5.92777C1.17188 4.68441 1.58613 3.52957 2.33836 2.67601C3.09922 1.81277 4.15543 1.33734 5.3125 1.33734C6.9191 1.33734 7.95766 2.32711 8.54594 3.15742C9.07363 3.90211 9.34898 4.65281 9.44289 4.94097C9.52145 5.18218 9.74633 5.34543 10 5.34543C10.2537 5.34543 10.4786 5.18218 10.5571 4.94097C10.651 4.65281 10.9264 3.90211 11.4541 3.15738C12.0423 2.32711 13.0809 1.33734 14.6875 1.33734C15.8446 1.33734 16.9008 1.81277 17.6616 2.67601C18.4139 3.52957 18.8281 4.68441 18.8281 5.92777C18.8281 8.93586 16.1428 11.2242 12.0779 14.688Z"
              fill="#A6A8A8"
            />
          </svg>
        </NuxtLink>
      </div>
      <NuxtLink to="/cart" class="navigation__cart-block">
      
        <span
          class="navigation__cart-block-icon"
        >
        <transition name="indicator" appear>
          <div v-if='cart_products.length' class="navigation__cart-block-icon__indicator">
            {{cart_products.length}}
          </div>
        </transition>
          <svg
            class="navigation__cart-block-icon-svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.8249 4.54601C19.6766 4.36351 19.4539 4.25757 19.2187 4.25757H18.9372L14.9082 0.228593C14.6031 -0.0765233 14.1084 -0.0765233 13.8033 0.228593L12.1096 1.9223L10.4158 0.228593C10.1107 -0.0765233 9.61604 -0.0765233 9.31096 0.228593L5.28198 4.25757H5.0678L5.00983 3.72507L5.00776 3.70796C4.73042 1.59394 2.91339 -0.000234371 0.781249 -0.000234371C0.349765 -0.000234371 0 0.349531 0 0.781014C0 1.2125 0.349765 1.56226 0.781249 1.56226C2.12914 1.56226 3.27824 2.56808 3.45749 3.9032L4.3862 12.4352C3.57421 12.8038 3.00781 13.6218 3.00781 14.57C3.00781 14.5767 3.00863 14.583 3.00878 14.5896C3.00863 14.5961 3.00781 14.6025 3.00781 14.6091C3.00781 15.9015 4.05921 16.9529 5.35155 16.9529H5.67018C5.59065 17.1859 5.54686 17.4354 5.54686 17.695C5.54686 18.9659 6.58077 19.9997 7.85155 19.9997C9.12233 19.9997 10.1562 18.9659 10.1562 17.695C10.1562 17.4354 10.1124 17.1859 10.0329 16.9529H13.4045C13.325 17.1859 13.2812 17.4354 13.2812 17.695C13.2812 18.9659 14.3151 19.9997 15.5859 19.9997C16.8567 19.9997 17.8906 18.9659 17.8906 17.695C17.8906 16.4242 16.8567 15.3904 15.5859 15.3904H5.35155C4.92077 15.3904 4.5703 15.0399 4.5703 14.6091C4.5703 14.6025 4.56948 14.5961 4.56933 14.5896C4.56948 14.583 4.5703 14.5767 4.5703 14.57C4.5703 14.1393 4.92077 13.7888 5.35155 13.7888H15.3254C16.7122 13.7888 17.985 12.9308 18.5678 11.6028C18.7412 11.2077 18.5615 10.7468 18.1665 10.5734C17.7714 10.4 17.3105 10.5797 17.1371 10.9748C16.8085 11.7234 16.0805 12.2263 15.3254 12.2263H5.93518L5.23788 5.82007H18.2577L17.8755 7.65276C17.7874 8.07514 18.0584 8.48897 18.4807 8.57705C18.5346 8.5883 18.5882 8.59365 18.6411 8.59365C19.0032 8.59365 19.3282 8.34033 19.4051 7.97178L19.9836 5.19835C20.0315 4.96811 19.9732 4.72851 19.8249 4.54601ZM15.5859 16.9529C15.9952 16.9529 16.3281 17.2858 16.3281 17.695C16.3281 18.1043 15.9952 18.4372 15.5859 18.4372C15.1767 18.4372 14.8437 18.1043 14.8437 17.695C14.8437 17.2858 15.1767 16.9529 15.5859 16.9529ZM7.85155 16.9529C8.2608 16.9529 8.59373 17.2858 8.59373 17.695C8.59373 18.1043 8.2608 18.4372 7.85155 18.4372C7.44229 18.4372 7.10936 18.1043 7.10936 17.695C7.10936 17.2858 7.44229 16.9529 7.85155 16.9529ZM9.77432 4.25757H7.4917L9.86342 1.88586L11.0047 3.02718L9.77432 4.25757ZM11.984 4.25757L14.3558 1.88586L16.7274 4.25757H11.984Z"
              fill="#5C6784"
            />
          </svg>
        </span>
        <p class="navigation__cart-block__text delete-note">Корзина</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.addEventListener("scroll", () => {
      if (window.scrollY > this.$store.state.variables.navigation_transtion_to)
        document.querySelector(".navigation-wrapper").classList.add("scaled");
      else if (
        window.scrollY < this.$store.state.variables.navigation_transtion_back
      )
        document
          .querySelector(".navigation-wrapper")
          .classList.remove("scaled");
    });
  },
  data() {
    return {
      show_dropdown: false,
    };
  },
  methods:{
    dropdownClick(){
      if(this.token) this.show_dropdown = !this.show_dropdown;
      else this.$store.commit("modals/open", {modal_name:"login"});
    }
  },
  computed:{
    token(){
      return this.$store.state.account.token;
    },
    cart_products(){
      return this.$store.state.cart.products;
    }
  },
  watch: {
    "$route.path": {
      handler() {
        this.show_dropdown = false;
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation-wrapper {
  position: sticky;
  top: 0px;
  flex-direction: row;
  height: 90px;
  background-color: $white;
  box-sizing: border-box;
  padding: 5px 10px;
  z-index: $z_navigation;
  transition: height $transition;
  .delete-note {
    @media screen and (max-width: $notebook) {
      display: none;
    }
  }
  &.scaled {
    height: 70px;
    .navigation > * {
      transform: scale(0.85);
    }
  }
  .navigation {
    width: 100%;
    height: 100%;
    max-width: $maxwidth;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > * {
      transition: transform $transition !important;
    }
    &__logo {
      display: flex;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: $notebook) {
        width: 160px;
        transform: scale(0.8);
      }
      &-image:first-of-type {
        margin-right: 18px;
      }
    }
    &__button {
      background-color: $darkblue;
      color: $white;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      width: 181px;
      height: 50px;
      padding: 5px 0px;
      &__icon {
        margin-right: 10px;
      }
      &:hover{
        svg * {
          fill: inherit;
        }
      }
      @media screen and (max-width: $notebook + 20px) {
        &__icon {
          display: none;
        }
        transform: scale(0.9);
        width: 160px;
      }
    }
    &__links {
      width: max-content;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      &-link {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        &:first-of-type {
          margin-right: 40px;
          @media screen and (max-width: $notebook) {
            margin-right: 10px;
          }
        }
        &:hover {
          text-decoration: underline;
        }
        &-svg {
          margin-right: 13px;
        }
        &__text {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          display: flex;
          align-items: center;
          .delete-note {
            margin-left: 5px;
          }
        }
        &__dropdown {
          position: relative;
          z-index: 10;
          background-color: transparent;
          border: none;
          outline: none;
          &-content {
            background-color: $white;
            position: absolute;
            top: 100%;
            left: 0%;
            width: 257px;
            border-radius: 0px 0px 20px 20px;
            overflow: hidden;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: column;
            box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
            padding-top: 7px;
            padding-bottom: 17px;
            &-link {

              width: 100%;
              box-sizing: border-box;
              text-decoration: none;
              border-bottom: 1px solid $dark_grey;
              min-height: 50px;
              padding: 10px 30px;
              display: flex;
              align-items: center;
              justify-content: flex-start;
              flex-direction: row;
              transition: $transition;
              background-color: $white;
                      outline:none;
              &:active {
                transform: scale(0.98);
              }
              &:last-child {
                border: none;
              }
            }
          }
        }
      }
    }
    &__icons {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      width: 120px;
      @media screen and (max-width: $notebook) {
        width: 110px;
        transform: scale(0.9);
      }
      &-icon {
        cursor: pointer;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 90px;
        border: 1px solid $extra_dark_grey;
        transition: $transition;
        * {
          transition: $transition;
        }
        &:hover {
          border-color: $darkblue;
          * {
            fill: $darkblue;
          }
        }
      }
    }
    &__cart-block {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      @media screen and (max-width: $notebook) {
        transform: scale(0.9);
      }
      &:hover {
        .navigation__cart-block__text {
          color: $darkblue;
          text-decoration: underline;
        }
      }
      &-icon {
        position: relative;
        cursor: pointer;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 90px;
        border: 1px solid $darkblue;
        margin-right: 15px;
        &__indicator {
          height: 24px;
          min-width: 24px;
          padding: 0px 5px;
          width: auto;
          position: absolute;
          top: 5px;
          left: 87%;
          transform: translate(-50%, -50%);
          background-color: $red;
          border-radius: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: $white;
          z-index: 2;
          overflow: hidden;
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 700;
          font-size: 11px;
          line-height: 13px;
          display: flex;
          align-items: center;
        }
      }
      &__text {
        transition: $transition;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        @media screen and (max-width: $tablet) {
          display: none;
        }
      }
    }
  }
}
</style>
