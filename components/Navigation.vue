<template>
  <header class="navigation-wrapper wrapper">
    <div class="navigation">
      <NuxtLink :to="parseLink('/')" class="navigation__logo">
        <svg
          width="156"
          height="44"
          viewBox="0 0 156 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.03 8.0014C11.7277 13.7319 7.91524 24.1869 9.61621 34.7182C9.66829 35.0286 9.62861 35.3474 9.50204 35.6356C9.37547 35.9237 9.16753 36.1686 8.90373 36.3402C8.63994 36.5118 8.33177 36.6026 8.01707 36.6016C7.70237 36.6005 7.39484 36.5076 7.13221 36.3342C4.39794 34.4838 2.29317 31.8433 1.09887 28.7654C-0.09542 25.6874 -0.3224 22.3184 0.448235 19.1081C1.21887 15.8977 2.95045 12.9988 5.41181 10.7984C7.87317 8.59796 10.9472 7.2007 14.2235 6.79313C14.3731 6.77444 14.5249 6.79776 14.662 6.86048C14.7992 6.92319 14.9161 7.02283 14.9998 7.14823C15.0835 7.27363 15.1307 7.41986 15.136 7.57053C15.1413 7.72121 15.1046 7.8704 15.03 8.0014Z"
            fill="#5C6784"
          />
          <path
            d="M32.55 28.1109C32.8005 28.0502 33.0605 28.0402 33.3149 28.0814C33.5693 28.1226 33.8129 28.2142 34.0314 28.3507C34.2499 28.4873 34.439 28.6662 34.5875 28.8768C34.736 29.0874 34.8409 29.3255 34.8962 29.5772C35.4316 31.9443 35.2252 34.4187 34.305 36.6644C33.3848 38.91 31.7955 40.8178 29.753 42.1284C27.7106 43.4391 25.3141 44.0891 22.8893 43.9901C20.4645 43.8911 18.129 43.0478 16.2002 41.5749C15.2193 40.8277 14.364 39.9288 13.6664 38.912C13.2751 38.3996 12.9481 37.8411 12.6927 37.2492C11.3847 33.0085 17.6138 30.5509 18.7663 30.0025C22.2856 28.3367 25.2183 28.3719 28.0395 28.4042C29.19 28.4383 30.3414 28.4069 31.4884 28.3103C31.8458 28.2644 32.2003 28.1978 32.55 28.1109Z"
            fill="#F95738"
          />
          <path
            d="M39.2687 19.7322C39.1824 19.835 39.0903 19.9329 38.9931 20.0255C38.8787 20.1399 38.7643 20.2425 38.647 20.3422C38.1319 20.7749 37.5427 21.1107 36.9079 21.3335C36.6155 21.4391 36.3155 21.5224 36.0105 21.5828C31.6701 22.4948 25.6581 19.9903 17.6372 26.0434C16.5755 26.8469 15.9362 26.5977 15.6312 25.6563C15.2353 24.448 15.3849 22.0901 15.8922 19.3363C16.9216 13.729 19.4115 6.47351 21.7576 3.88981C22.1092 3.49759 22.4874 3.13013 22.8896 2.79005C23.7602 2.05157 24.7345 1.44488 25.7813 0.989372C28.2563 -0.0929468 31.0276 -0.294068 33.6329 0.419549C36.2383 1.13317 38.5203 2.71838 40.0983 4.91085C41.6764 7.10332 42.4551 9.77051 42.3047 12.4677C42.1543 15.1648 41.0837 17.7288 39.2717 19.7322H39.2687Z"
            fill="#0EA976"
          />
          <path
            d="M63.2169 13.863H63.0321C62.7135 14.7525 62.3625 15.7633 61.9793 16.8954C61.5961 18.0274 61.1953 19.2005 60.7769 20.4146C60.3575 21.6317 59.9645 22.8106 59.6038 23.9338L59.0877 26.2272C58.9381 26.6964 58.7944 27.2126 58.6243 27.7786C58.4542 28.3446 58.29 28.9194 58.1082 29.5001C57.9263 30.0808 57.7504 30.6262 57.5891 31.1424C57.4278 31.6585 57.2958 32.119 57.1638 32.512C56.9175 32.5853 56.6535 32.6527 56.3691 32.7143C56.0341 32.7813 55.693 32.8128 55.3514 32.8082C54.6974 32.8429 54.0479 32.6816 53.4862 32.3448C53.2614 32.1931 53.0801 31.9853 52.9602 31.742C52.8404 31.4987 52.7861 31.2283 52.8029 30.9576C52.8044 30.6703 52.8479 30.3848 52.9319 30.1101C53.017 29.8168 53.1108 29.4796 53.2076 29.11C53.454 28.2967 53.7873 27.28 54.2077 26.06C54.628 24.84 55.0845 23.5193 55.5772 22.098C56.0699 20.6688 56.5812 19.2269 57.111 17.7722C57.6409 16.3176 58.1404 14.9559 58.6096 13.687C59.075 12.4201 59.4816 11.3545 59.8296 10.4904C60.2613 10.2689 60.721 10.1071 61.1963 10.0094C61.8141 9.86247 62.447 9.78864 63.082 9.78944C63.8677 9.78122 64.649 9.90616 65.393 10.159C66.0929 10.4053 66.5299 10.7963 66.7039 11.332C67.222 12.6869 67.7763 14.2393 68.3667 15.9892C68.9572 17.739 69.5613 19.5631 70.1791 21.4616C70.795 23.358 71.3864 25.2066 71.9534 27.0073C72.5204 28.808 73.0248 30.4405 73.4667 31.9049C73.1818 32.2005 72.834 32.428 72.449 32.5706C71.9711 32.75 71.4637 32.8375 70.9534 32.8287C70.14 32.8287 69.5535 32.6742 69.1937 32.3653C68.7891 31.978 68.5007 31.4854 68.3608 30.943L66.8476 26.1011L66.3666 23.7344C65.9756 22.4773 65.5846 21.2387 65.1935 20.0187C64.8025 18.7987 64.4389 17.6588 64.1026 16.5992C63.7585 15.5414 63.4633 14.6294 63.2169 13.863ZM57.0084 27.1334L58.7445 23.4763H67.9855L68.6893 27.1334H57.0084Z"
            fill="#2C2C2C"
          />
          <path
            d="M81.2942 17.8926H76.7485L76.8981 10.0916C77.0945 10.0418 77.379 9.9802 77.7485 9.90688C78.1506 9.82994 78.5592 9.79262 78.9685 9.79544C79.8308 9.79544 80.4593 9.94989 80.8543 10.2588C81.2492 10.5677 81.4447 11.1161 81.4408 11.904L81.2942 17.8926ZM85.4351 14.4907C86.921 14.4692 88.3887 14.819 89.7051 15.5083C90.9944 16.2065 92.0438 17.2764 92.717 18.5789C93.46 19.9474 93.8305 21.6543 93.8285 23.6993C93.8265 25.7444 93.4355 27.4698 92.6554 28.8755C91.9158 30.2211 90.779 31.3057 89.4001 31.9813C87.8824 32.6984 86.2188 33.0528 84.5407 33.0165C83.2956 33.0385 82.0545 32.8704 80.8601 32.518C79.9356 32.2366 79.0491 31.8426 78.2207 31.3449C77.7744 31.0478 77.3916 30.665 77.0945 30.2187C76.847 29.7867 76.7251 29.294 76.7426 28.7964V16.8574H81.2883V28.5031C81.6964 28.7654 82.1384 28.9706 82.6021 29.1131C83.2177 29.3066 83.8603 29.3997 84.5055 29.3888C85.1374 29.4151 85.7675 29.3031 86.3516 29.0604C86.9356 28.8178 87.4596 28.4504 87.8869 27.984C88.7373 27.0495 89.1626 25.6203 89.1626 23.6964C89.1626 21.7726 88.7461 20.36 87.9133 19.4587C87.4902 19.0125 86.9768 18.6619 86.4073 18.4303C85.8378 18.1986 85.2254 18.0913 84.611 18.1155C83.8201 18.1007 83.036 18.2651 82.3177 18.5965C81.7013 18.8841 81.1287 19.2573 80.6167 19.705L80.3234 16.0069C81.001 15.6087 81.7113 15.2693 82.4467 14.9922C83.4025 14.6389 84.4163 14.4687 85.4351 14.4907Z"
            fill="#2C2C2C"
          />
          <path
            d="M99.7056 26.063L99.5209 22.884L109.427 21.4176C109.371 20.5015 108.995 19.6341 108.366 18.9659C107.727 18.2777 106.79 17.9326 105.556 17.9307C104.97 17.916 104.387 18.0252 103.846 18.2511C103.305 18.477 102.817 18.8145 102.415 19.2416C101.577 20.1175 101.146 21.3688 101.122 22.9954L101.231 24.9163C101.454 26.4941 102.063 27.6525 103.061 28.3916C104.061 29.1306 105.322 29.5001 106.853 29.5001C107.833 29.5092 108.807 29.3535 109.735 29.0397C110.481 28.8005 111.19 28.4579 111.841 28.0221C112.177 28.2347 112.461 28.5191 112.674 28.855C112.881 29.1809 112.99 29.5597 112.988 29.9459C112.984 30.2671 112.906 30.583 112.758 30.8683C112.61 31.1535 112.398 31.4001 112.137 31.5882C111.454 32.105 110.668 32.4691 109.832 32.6557C108.755 32.9154 107.65 33.0396 106.542 33.0252C104.801 33.0588 103.076 32.6979 101.495 31.9695C100.053 31.2921 98.8539 30.1899 98.0574 28.811C97.2304 27.4072 96.8169 25.6573 96.8169 23.5614C96.7859 22.2057 97.0231 20.8572 97.5149 19.5935C97.9237 18.544 98.5547 17.5954 99.3646 16.8128C100.175 16.0302 101.144 15.4321 102.207 15.0596C103.273 14.6719 104.399 14.4734 105.533 14.473C107.015 14.4402 108.483 14.7768 109.803 15.4525C110.994 16.0787 111.991 17.0189 112.686 18.1711C113.402 19.3774 113.768 20.7597 113.741 22.1625C113.741 22.8547 113.563 23.3659 113.205 23.6963C112.784 24.0567 112.259 24.2716 111.706 24.3093L99.7056 26.063Z"
            fill="#2C2C2C"
          />
          <path
            d="M128.983 28.6497V17.0421H133.531V29.1366C133.549 29.6111 133.427 30.0804 133.179 30.4856C132.882 30.903 132.496 31.2503 132.05 31.5033C131.298 31.9682 130.483 32.3228 129.631 32.5561C128.494 32.88 127.317 33.0361 126.135 33.0195C124.39 33.0581 122.658 32.7242 121.053 32.0399C119.642 31.4127 118.469 30.35 117.706 29.0075C116.924 27.6389 116.533 25.9077 116.533 23.8137C116.533 21.6631 116.934 19.9035 117.736 18.5349C118.474 17.2126 119.6 16.1482 120.962 15.4849C122.371 14.8202 123.914 14.4852 125.472 14.5054C126.315 14.4961 127.154 14.6088 127.965 14.8397C128.608 15.0128 129.224 15.2744 129.795 15.6168V19.4821C129.338 19.0735 128.813 18.7479 128.244 18.5202C127.539 18.2387 126.785 18.1011 126.026 18.1155C125.165 18.1079 124.315 18.3091 123.548 18.702C122.783 19.1113 122.173 19.7604 121.812 20.5496C121.354 21.5904 121.139 22.7215 121.182 23.8577C121.182 25.7796 121.625 27.1844 122.513 28.072C123.401 28.9596 124.596 29.4025 126.1 29.4005C126.675 29.4127 127.248 29.3386 127.801 29.1806C128.215 29.0526 128.612 28.8743 128.983 28.6497ZM133.531 17.9659L128.983 17.9923L129.132 10.0741C129.305 10.0242 129.581 9.96261 129.965 9.8893C130.36 9.81411 130.762 9.7768 131.165 9.77785C132.044 9.77785 132.692 9.93329 133.088 10.2412C133.484 10.5492 133.675 11.0976 133.675 11.8865L133.531 17.9659Z"
            fill="#2C2C2C"
          />
          <path
            d="M154.359 18.8546C153.641 17.5024 152.551 16.3833 151.218 15.6286C149.775 14.84 148.15 14.4446 146.506 14.4819C144.858 14.4462 143.229 14.835 141.775 15.611C140.43 16.3488 139.327 17.4587 138.596 18.8076C137.798 20.3215 137.403 22.0152 137.449 23.7258C137.449 25.6477 137.825 27.2988 138.576 28.6791C139.298 30.0277 140.396 31.138 141.737 31.8757C143.214 32.6182 144.844 33.005 146.497 33.005C148.15 33.005 149.78 32.6182 151.257 31.8757C152.593 31.1314 153.679 30.0092 154.38 28.6498C155.15 27.121 155.531 25.4255 155.488 23.714C155.528 22.0249 155.139 20.3533 154.359 18.8546ZM149.685 27.9137C149.31 28.3942 148.826 28.7782 148.273 29.0333C147.72 29.2884 147.114 29.4073 146.506 29.38C145.123 29.38 144.048 28.8912 143.28 27.9137C142.511 26.9361 142.129 25.5382 142.133 23.7199C142.133 21.9446 142.524 20.5643 143.306 19.5789C143.678 19.1008 144.16 18.7184 144.709 18.4634C145.259 18.2084 145.862 18.0881 146.467 18.1126C147.848 18.1126 148.923 18.6111 149.693 19.6083C150.464 20.6054 150.846 21.9798 150.84 23.7316C150.834 25.5323 150.449 26.9263 149.685 27.9137Z"
            fill="#2C2C2C"
          />
        </svg>
      </NuxtLink>
      <ButtonStandart
        v-if="!is_preview && !announcement"
        @click.native="() => $router.push(parseLink('/partners'))"
        class="navigation__button hover-orange"
      >
        <svg
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
        Заведения
      </ButtonStandart>
      <p v-if="is_preview && !announcement" class="navigation__links_empty">Режим предварительного просмотра</p>

      <client-only>
        <div v-if="!announcement" class="navigation__links">
          <button
            class="navigation__links-link navigation__links-link__dropdown"
            v-click-outside="closeDropdown"
            @mouseleave="closeDropdown"
            @click='windowRedirect'
          >
            <button
              class="navigation__links-link__dropdown__button"
              @mouseenter="show_dropdown = true"
              @click="dropdownClick"
            >
              <svg
                class="navigation__links-link-svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="10" r="3" fill="#5C6784"/>
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="#5C6784"
                  stroke-width="1.2"
                />
                <path
                  d="M17.8719 18.8083C17.9489 18.7468 17.9799 18.6436 17.9452 18.5513C17.5693 17.5518 16.8134 16.6706 15.7814 16.0332C14.6966 15.3632 13.3674 15 12 15C10.6326 15 9.30341 15.3632 8.21858 16.0332C7.18663 16.6706 6.43066 17.5518 6.05477 18.5513C6.02009 18.6436 6.05115 18.7468 6.12813 18.8083C9.56196 21.552 14.438 21.552 17.8719 18.8083Z"
                  fill="#5C6784"
                  stroke="#5C6784"
                  stroke-width="1.2"
                  stroke-linecap="round"
                />
              </svg>
              <p class="navigation__links-link__text">Кабинет</p>
            </button>
            <client-only>
              <transition name="opacity">
                <div
                  v-if="show_dropdown && token && !is_preview"

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
                    @click="$store.dispatch('account/logout')"
                    class="navigation__links-link__dropdown-content-link"
                  >
                    Выход
                  </button>
                </div>
              </transition>
            </client-only>
          </button>
          <NuxtLink v-if="!is_preview" to="/stocks" class="navigation__links-link">
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
      </client-only>
      <div v-if="!is_preview && !announcement" class="navigation__icons">
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
                <rect width="20" height="20" fill="white"/>
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
      <NuxtLink v-if="!is_preview && !announcement" to="/cart" class="navigation__cart-block">
        <client-only>
          <span class="navigation__cart-block-icon">
            <transition name="cart-count">
              <div
                v-if="cart_products.length"
                class="navigation__cart-block-icon__indicator"
              >
                {{ cart_products.length }}
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
        </client-only>
      </NuxtLink>

      <div v-if="announcement" class="navigation__announcement-block">
        <a href="" class="navigation__announcement-block__whatsapp navigation__announcement-block__social">
          <svg class="navigation__announcement-block__whatsapp__icon navigation__announcement-block__social__icon"
               width="25" height="25"
               viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.0037 0H14.9963C6.72563 0 0 6.7275 0 15C0 18.2812 1.0575 21.3225 2.85563 23.7919L0.98625 29.3644L6.75188 27.5213C9.12375 29.0925 11.9531 30 15.0037 30C23.2744 30 30 23.2706 30 15C30 6.72938 23.2744 0 15.0037 0Z"
              fill="#4CAF50"/>
            <path
              d="M23.7318 21.1818C23.3699 22.2037 21.9337 23.0512 20.788 23.2987C20.0043 23.4655 18.9805 23.5987 15.5343 22.1699C11.1262 20.3437 8.28741 15.8643 8.06616 15.5737C7.85429 15.283 6.28491 13.2018 6.28491 11.0493C6.28491 8.89679 7.37804 7.84866 7.81866 7.39866C8.18054 7.02928 8.77866 6.86053 9.35241 6.86053C9.53804 6.86053 9.70491 6.86991 9.85491 6.87741C10.2955 6.89616 10.5168 6.92241 10.8074 7.61804C11.1693 8.48991 12.0505 10.6424 12.1555 10.8637C12.2624 11.0849 12.3693 11.3849 12.2193 11.6755C12.0787 11.9755 11.9549 12.1087 11.7337 12.3637C11.5124 12.6187 11.3024 12.8137 11.0812 13.0874C10.8787 13.3255 10.6499 13.5805 10.9049 14.0212C11.1599 14.4524 12.0412 15.8905 13.3387 17.0455C15.013 18.5362 16.3705 19.0124 16.8562 19.2149C17.218 19.3649 17.6493 19.3293 17.9137 19.048C18.2493 18.6862 18.6637 18.0862 19.0855 17.4955C19.3855 17.0718 19.7643 17.0193 20.1618 17.1693C20.5668 17.3099 22.7099 18.3693 23.1505 18.5887C23.5912 18.8099 23.8818 18.9149 23.9887 19.1005C24.0937 19.2862 24.0937 20.158 23.7318 21.1818Z"
              fill="#FAFAFA"/>
          </svg>
        </a>
        <a href="" class="navigation__announcement-block__telegram navigation__announcement-block__social">
          <svg class="navigation__announcement-block__telegram__icon navigation__announcement-block__social__icon"
               width="25" height="25"
               viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
              fill="#2AABEE"/>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M6.78979 14.8416C11.1626 12.9364 14.0785 11.6804 15.5374 11.0736C19.7031 9.34097 20.5687 9.03997 21.1328 9.03001C21.2569 9.02784 21.5344 9.05861 21.7141 9.20445C21.9807 9.42077 21.9822 9.89034 21.9526 10.2011C21.7269 12.573 20.7501 18.3288 20.2532 20.9854C20.0429 22.1094 19.6288 22.4864 19.2281 22.5232C18.357 22.6034 17.6955 21.9475 16.8519 21.3945C15.5317 20.5291 14.7858 19.9904 13.5043 19.1459C12.0234 18.17 12.9834 17.6336 13.8274 16.757C14.0483 16.5276 17.8863 13.0367 17.9606 12.72C17.9699 12.6803 17.9785 12.5327 17.8908 12.4548C17.8031 12.3768 17.6736 12.4034 17.5802 12.4246C17.4478 12.4547 15.3388 13.8487 11.2532 16.6066C10.6545 17.0177 10.1123 17.218 9.62649 17.2075C9.09088 17.1959 8.06069 16.9047 7.29481 16.6557C6.35543 16.3504 5.60883 16.1889 5.67387 15.6703C5.70774 15.4001 6.07969 15.1239 6.78979 14.8416Z"
                  fill="white"/>
          </svg>
        </a>
        <div class="navigation__announcement-block__contacts">
          <a :href="`tel:+79995321923`" class="navigation__announcement-block__contacts__phone">
            +7 999 532-19-23
          </a>
          <p class="navigation__announcement-block__contacts__time">
            Пн-Пт с 10:00 до 18:00
          </p>
        </div>
      </div>


    </div>
  </header>
</template>

<script>
import dropdownMixin from "@/mixins/dropdowns.js";
import previewHider from "@/mixins/preview-hider.js";

export default {
  mixins: [dropdownMixin, previewHider],
  mounted() {
    document.addEventListener("scroll", () => {
      if (window.scrollY > this.$store.state.variables.navigation_transition_to)
        document.querySelector(".navigation-wrapper").classList.add("scaled");
      else if (
        window.scrollY < this.$store.state.variables.navigation_transition_back
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
  methods: {
    windowRedirect() {
      if (this.is_preview) window.location.href = "https://abedo.ru/admin"
    },
    dropdownClick() {
      if (this.is_preview) return;
      if (this.token) return this.show_dropdown = true;
      this.$store.commit("modals/open", {modal_name: "login"});
    },
    closeDropdown() {
      this.show_dropdown = false;
      document.body.removeEventListener("click", this.closeDropdown);
    },
  },
  computed: {
    announcement() {
      return this.$store.state.announcement || false;
    },
    token() {
      return this.$store.state.account.token;
    },
    cart_products() {
      return this.$store.state.cart.products;
    }
  },
  watch: {
    "$route.path": {
      handler() {
        this.closeDropdown();
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation-wrapper {
  position: sticky;
  top: 0;
  flex-direction: row;
  height: 90px;
  background-color: $white;
  box-sizing: border-box;
  padding: 5px 10px;
  z-index: $z_navigation + 1;
  transition: height $transition;

  .delete-note {
    @media screen and (max-width: $notebook) {
      display: none;
    }
  }

  &.scaled {
    height: 70px;

    .navigation {
      &__logo {
        transform: scale(0.8);
      }

      &__button {
        height: 45px;
        width: 175px;
      }

      &__icons {
        transform: scale(0.8);
      }

      &__cart-block-icon {
        transform: scale(0.8);
      }
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
      transition: $transition;
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
      padding: 5px 0;

      &__icon {
        margin-right: 10px;
      }

      &:hover {
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

          &__button {
            background-color: transparent;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row;
          }

          &-content {
            background-color: $white;
            position: absolute;
            top: 100%;
            left: 0%;
            width: 257px;
            border-radius: 0 0 20px 20px;
            overflow: hidden;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: column;
            box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
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
              outline: none;
              font-family: "Montserrat";
              font-style: normal;
              font-weight: 400;
              font-size: 15px;
              line-height: 17px;

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

      &_empty {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
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
        transition: $transition;

        &__indicator {
          height: 24px;
          min-width: 24px;
          padding: 0 5px;
          width: auto;
          position: absolute;
          top: 5px;
          left: 82%;
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

    &__announcement-block {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-direction: row;

      &__social {
        margin-right: 10px;
      }

      &__contacts {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        flex-direction: column;
        margin-left: 20px;

        &__phone {
          font-family: 'Montserrat', serif;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 22px;
          text-decoration: none;
          &:hover{
            text-decoration: underline;
          }
        }

        &__time {
          font-family: 'Montserrat', serif;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;
        }
      }
    }
  }
}
</style>
