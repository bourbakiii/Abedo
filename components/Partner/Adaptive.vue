<template>
  <div  @click.self="$router.push(`/partners/${partner.id}`)" class="shop-adaptive shop">
    <button @click="like" class="shop-adaptive__favourite" :class='{"shop-adaptive__favourite_filled": is_favourite}'>
      <svg
        class="shop-adaptive__favourite__icon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.8326 2.39186C14.0435 1.45069 12.9487 0.932381 11.75 0.932381C10.0641 0.932381 8.99678 1.99068 8.39828 2.8785C8.243 3.10888 8.11091 3.33989 8 3.55726C7.88909 3.33989 7.75703 3.10888 7.60172 2.8785C7.00322 1.99068 5.93588 0.932381 4.25 0.932381C3.05131 0.932381 1.95653 1.45072 1.16734 2.39189C0.414594 3.2897 0 4.49213 0 5.77765C0 7.17699 0.519781 8.47851 1.63578 9.87354C2.63319 11.1204 4.06809 12.4056 5.72969 13.8938C6.34884 14.4484 6.98913 15.0218 7.67078 15.6487L7.69125 15.6676C7.77963 15.7489 7.88981 15.7895 8 15.7895C8.11019 15.7895 8.22038 15.7489 8.30875 15.6676L8.32922 15.6487C9.01088 15.0218 9.65116 14.4484 10.2704 13.8937C11.9319 12.4056 13.3668 11.1204 14.3642 9.87354C15.4802 8.47848 16 7.17699 16 5.77765C16 4.49213 15.5854 3.2897 14.8326 2.39186ZM9.66228 13.1438C9.12853 13.6218 8.57922 14.1138 8 14.6431C7.42081 14.1139 6.87147 13.6219 6.33763 13.1437C3.08578 10.2312 0.9375 8.30702 0.9375 5.77765C0.9375 4.73216 1.26891 3.76111 1.87069 3.04339C2.47938 2.31753 3.32434 1.91776 4.25 1.91776C5.53528 1.91776 6.36613 2.75001 6.83675 3.44818C7.25891 4.07436 7.47919 4.70559 7.55431 4.9479C7.61716 5.15072 7.79706 5.28798 8 5.28798C8.20294 5.28798 8.38284 5.15072 8.44569 4.9479C8.52081 4.70559 8.74109 4.07436 9.16325 3.44815C9.63387 2.75001 10.4647 1.91776 11.75 1.91776C12.6757 1.91776 13.5206 2.31753 14.1293 3.04339C14.7311 3.76111 15.0625 4.73216 15.0625 5.77765C15.0625 8.30702 12.9142 10.2312 9.66228 13.1438Z"
          fill="#5C6784"
        />
      </svg>
    </button>
    <div @click="$router.push(`/partners/${partner.id}`)" class="shop-adaptive__info">
      <p class="shop-adaptive__info__name" >
        {{ partner.name }}
      </p>
      <p class="shop-adaptive__info__category" >
        {{ cuisines }}
      </p>
    </div>
    <div @click="$router.push(`/partners/${partner.id}`)" class="shop-adaptive__icons">
      <span
        v-if="partner.order_gifts.length"
        class="shop-adaptive__icons__icon__wrapper shop-adaptive__icons__icon__gift"
      >
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.8552 4.38594H13.0311C13.3131 4.01109 13.4806 3.54536 13.4806 3.04121C13.4806 1.80541 12.4752 0.799999 11.2394 0.799999C10.4949 0.799999 9.94603 1.0667 9.51186 1.63932C9.14863 2.1184 8.88304 2.7873 8.5499 3.63244C8.21677 2.78727 7.95117 2.1184 7.58794 1.63932C7.15378 1.0667 6.60486 0.799999 5.86045 0.799999C4.62465 0.799999 3.61924 1.80541 3.61924 3.04121C3.61924 3.54536 3.78667 4.01109 4.06871 4.38594H2.24463C1.50315 4.38594 0.899902 4.98918 0.899902 5.73066V6.62715C0.899902 7.21151 1.27466 7.70974 1.79639 7.89478V14.7553C1.79639 15.4968 2.39963 16.1 3.14111 16.1H13.9587C14.7002 16.1 15.3034 15.4968 15.3034 14.7553V7.89478C15.8251 7.70974 16.1999 7.21151 16.1999 6.62715V5.73066C16.1999 4.98918 15.5967 4.38594 14.8552 4.38594ZM9.37269 3.98969C10.0594 2.24758 10.3204 1.69648 11.2394 1.69648C11.9808 1.69648 12.5841 2.29973 12.5841 3.04121C12.5841 3.78269 11.9808 4.38594 11.2394 4.38594H9.2159C9.27082 4.24803 9.32321 4.11526 9.37269 3.98969ZM5.86045 1.69648C6.77938 1.69648 7.04043 2.24758 7.72711 3.98969C7.77659 4.11526 7.82898 4.24803 7.8839 4.38594H5.86045C5.11897 4.38594 4.51572 3.78269 4.51572 3.04121C4.51572 2.29973 5.11897 1.69648 5.86045 1.69648ZM6.75693 15.2035H3.14111C2.89395 15.2035 2.69287 15.0024 2.69287 14.7553V7.97187H6.75693V15.2035ZM6.75693 7.07539H2.24463C1.99747 7.07539 1.79639 6.87431 1.79639 6.62715V5.73066C1.79639 5.4835 1.99747 5.28242 2.24463 5.28242H6.75693V7.07539ZM9.44639 15.2035H7.65342V5.28242C7.74734 5.28242 8.93121 5.28242 9.44639 5.28242V15.2035ZM14.4069 14.7553C14.4069 15.0024 14.2059 15.2035 13.9587 15.2035H10.3429V7.97187H14.4069V14.7553ZM15.3034 6.62715C15.3034 6.87431 15.1023 7.07539 14.8552 7.07539H10.3429V5.28242H14.8552C15.1023 5.28242 15.3034 5.4835 15.3034 5.73066V6.62715Z"
            fill="white"
          />
        </svg>
      </span>
      <span
        v-if="partner.discounts.length"
        class="shop-adaptive__icons__icon__wrapper shop-adaptive__icons__icon__discount"
      >
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.50977 0.990234C3.84961 1.37695 4.01953 1.90039 4.01953 2.56055C4.01953 3.2207 3.84961 3.74609 3.50977 4.13672C3.16992 4.52734 2.71484 4.72266 2.14453 4.72266C1.57422 4.72266 1.11914 4.52734 0.779297 4.13672C0.443359 3.74609 0.275391 3.2207 0.275391 2.56055C0.275391 1.90039 0.443359 1.37695 0.779297 0.990234C1.11914 0.599609 1.57422 0.404297 2.14453 0.404297C2.71484 0.404297 3.16992 0.599609 3.50977 0.990234ZM2.14453 3.80273C2.36328 3.80273 2.5332 3.69336 2.6543 3.47461C2.7793 3.25195 2.8418 2.94727 2.8418 2.56055C2.8418 2.16992 2.7793 1.86523 2.6543 1.64648C2.5332 1.42383 2.36328 1.3125 2.14453 1.3125C1.92969 1.3125 1.75977 1.42383 1.63477 1.64648C1.51367 1.86523 1.45312 2.16992 1.45312 2.56055C1.45312 2.94727 1.51367 3.25195 1.63477 3.47461C1.75977 3.69336 1.92969 3.80273 2.14453 3.80273ZM2.26172 9H0.984375L4.25977 4.51758L7.16602 0.544922H8.43164L5.24414 4.91016L2.26172 9ZM8.63672 5.37305C8.97656 5.76367 9.14648 6.28906 9.14648 6.94922C9.14648 7.60938 8.97656 8.13477 8.63672 8.52539C8.29688 8.91211 7.8418 9.10547 7.27148 9.10547C6.70117 9.10547 6.24609 8.91211 5.90625 8.52539C5.57031 8.13477 5.40234 7.60938 5.40234 6.94922C5.40234 6.28906 5.57031 5.76367 5.90625 5.37305C6.24609 4.98242 6.70117 4.78711 7.27148 4.78711C7.8418 4.78711 8.29688 4.98242 8.63672 5.37305ZM6.76172 7.85742C6.88672 8.08008 7.05664 8.19141 7.27148 8.19141C7.48633 8.19141 7.65625 8.08008 7.78125 7.85742C7.90625 7.63477 7.96875 7.33008 7.96875 6.94336C7.96875 6.55664 7.90625 6.25195 7.78125 6.0293C7.65625 5.80664 7.48633 5.69531 7.27148 5.69531C7.05664 5.69531 6.88672 5.80664 6.76172 6.0293C6.64062 6.25195 6.58008 6.55664 6.58008 6.94336C6.58008 7.33008 6.64062 7.63477 6.76172 7.85742Z"
            fill="white"
          />
        </svg>
      </span>
      <span
        v-if="partner.delivery"
        class="shop-adaptive__icons__icon__wrapper shop-adaptive__icons__icon__delivery"
      >
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2510_5576)">
            <path
              d="M12.8394 10.1071C11.6578 10.1071 10.6965 11.0684 10.6965 12.25C10.6965 13.4316 11.6578 14.3928 12.8394 14.3928C14.0212 14.3928 14.9823 13.4316 14.9823 12.25C14.9823 11.0684 14.021 10.1071 12.8394 10.1071ZM12.8394 13.3214C12.2485 13.3214 11.768 12.8409 11.768 12.25C11.768 11.6591 12.2485 11.1785 12.8394 11.1785C13.4303 11.1785 13.9108 11.6591 13.9108 12.25C13.9108 12.8409 13.4303 13.3214 12.8394 13.3214Z"
              fill="white"
            />
            <path
              d="M5.51786 10.1071C4.33626 10.1071 3.375 11.0684 3.375 12.25C3.375 13.4316 4.33626 14.3928 5.51786 14.3928C6.69946 14.3928 7.66073 13.4316 7.66073 12.25C7.66073 11.0684 6.69946 10.1071 5.51786 10.1071ZM5.51786 13.3214C4.92698 13.3214 4.44643 12.8409 4.44643 12.25C4.44643 11.6591 4.92698 11.1785 5.51786 11.1785C6.10858 11.1785 6.58929 11.6591 6.58929 12.25C6.58929 12.8409 6.10875 13.3214 5.51786 13.3214Z"
              fill="white"
            />
            <path
              d="M14.2824 3.97357C14.1913 3.79268 14.0061 3.67856 13.8036 3.67856H10.9822V4.74999H13.4732L14.932 7.65141L15.8895 7.16997L14.2824 3.97357Z"
              fill="white"
            />
            <path
              d="M11.232 11.7322H7.17847V12.8036H11.232V11.7322Z"
              fill="white"
            />
            <path
              d="M3.91064 11.7322H2.05352C1.75762 11.7322 1.51782 11.972 1.51782 12.2679C1.51782 12.5638 1.75765 12.8036 2.05352 12.8036H3.91067C4.20658 12.8036 4.44637 12.5637 4.44637 12.2679C4.44637 11.972 4.20655 11.7322 3.91064 11.7322Z"
              fill="white"
            />
            <path
              d="M16.8874 8.45714L15.8337 7.09999C15.7325 6.96927 15.5762 6.89284 15.4107 6.89284H11.5178V3.14285C11.5178 2.84694 11.278 2.60715 10.9821 2.60715H2.05352C1.75762 2.60715 1.51782 2.84697 1.51782 3.14285C1.51782 3.43872 1.75765 3.67855 2.05352 3.67855H10.4464V7.42854C10.4464 7.72445 10.6862 7.96424 10.9821 7.96424H15.1483L15.9285 8.96923V11.7321H14.4464C14.1504 11.7321 13.9107 11.9719 13.9107 12.2678C13.9107 12.5637 14.1505 12.8035 14.4464 12.8035H16.4642C16.7601 12.8035 16.9999 12.5637 16.9999 12.2678V8.78572C16.9999 8.66678 16.9603 8.55107 16.8874 8.45714Z"
              fill="white"
            />
            <path
              d="M3.875 9.01789H1.4107C1.11479 9.01789 0.875 9.25772 0.875 9.55359C0.875 9.8495 1.11483 10.0893 1.4107 10.0893H3.87497C4.17087 10.0893 4.41067 9.84946 4.41067 9.55359C4.4107 9.25772 4.17087 9.01789 3.875 9.01789Z"
              fill="white"
            />
            <path
              d="M5.10714 6.9107H0.535699C0.239826 6.9107 0 7.15052 0 7.44643C0 7.74234 0.239826 7.98213 0.535699 7.98213H5.10714C5.40305 7.98213 5.64284 7.7423 5.64284 7.44643C5.64284 7.15056 5.40305 6.9107 5.10714 6.9107Z"
              fill="white"
            />
            <path
              d="M5.98214 4.80355H1.4107C1.11479 4.80355 0.875 5.04338 0.875 5.33925C0.875 5.63516 1.11483 5.87495 1.4107 5.87495H5.98214C6.27805 5.87495 6.51784 5.63512 6.51784 5.33925C6.51787 5.04338 6.27805 4.80355 5.98214 4.80355Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_2510_5576">
              <rect width="17" height="17" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </span>
    </div>
    <svg
    @click="$router.push(`/partners/${partner.id}`)"
      class="shop-adaptive__icon"
      width="9"
      height="15"
      viewBox="0 0 9 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-5.78355e-07 1.76877L5.56508 7.5L-7.73154e-08 13.2312L1.71743 15L9 7.5L1.71743 -1.02875e-06L-5.78355e-07 1.76877Z"
        fill="#5C6784"
      />
    </svg>
  </div>
</template>
<script>
import partnerMixin from "@/mixins/partner.js";
export default {
  mixins: [partnerMixin],
  props: {
    partner: {
      required: false,
      type: Object,
      default: () => {
        return {
          id: 1,
          name: "Prop default",
          image: [
            {
              desktop: "/storage/images/b53faa1dd6fb57a38bf5b754e2735cc8.jpeg",
              mobile: "/storage/images/de727808fbf2862d02a878ea2a74466d.jpeg",
              modal: "/storage/images/64b2cc8139a3b1655836bba4368a00c3.jpeg",
              small: "/storage/images/41389ed2c9511ba6cd4156edfb76ae05.jpeg",
              original: "/storage/images/86f3708df1f1be00bcc4b6790b22d09c.jpeg",
            },
          ],
          logo: {
            detail: "/storage/images/d1eb65c4efc91fb8a031488984332b31.png",
            desktop: "/storage/images/1989383073f2fdaa3c7229f643fcd020.png",
            search_logo: "/storage/images/efa0991efb0cbfdc74882ac58ddab35c.png",
            cart_mini: "/storage/images/c5f0a0100fac7fd0362f3731f7db4cbf.png",
            cart_detail_mini:
              "/storage/images/d6d1049dd47d802906bc6b1c9536699b.png",
            small: "/storage/images/4b5d28d346e491458ac64b968d04f1cc.png",
            original: "/storage/images/06ef79f1ecf04567982409d01914dddf.png",
          },
          description:
            "фывфы вфы вфы вфыв фы вфы вфы вфыв фыв фыв фыв фыв фыв фы вфыв фы вфы вфыв фыв фыв фы вфы вфыв фыs",
          rate: "5",
          is_work_now: 1,
          free_order_price: 4000,
          is_favourite: false,
          discounts: [
            {
              id: 4,
              discountable_type: "App\\Models\\Product",
              discountable_id: 25,
              percent: 12,
              shop_id: 1,
              is_work_now: 1,
            },
          ],
          order_gifts: [1, 2],
          cuisines: [
            {
              id: 1,
              name: "Рестораны и кафе",
              icon: "/storage/images/hU77DF0GGdnm6aPzSaWYlL4XuxwbiLnzyP67fNVs.svg",
              image: {
                desktop:
                  "/storage/images/aed8f8af878517a1f4bb74629ddd4889.jpeg",
                mobile: "/storage/images/34b82a6984dad2ad4e6102093219760a.jpeg",
                small: "/storage/images/f28c46e0aa6801a148c8b15405c0e9ca.jpeg",
                original:
                  "/storage/images/7946cd7b407fc849b945f9674bd3354b.jpeg",
              },
              created_at: null,
              updated_at: "2022-04-12T10:30:40.000000Z",
            },
            {
              id: 2,
              name: "Еще что-то",
              icon: "/storage/images/hU77DF0GGdnm6aPzSaWYlL4XuxwbiLnzyP67fNVs.svg",
              image: {
                desktop:
                  "/storage/images/aed8f8af878517a1f4bb74629ddd4889.jpeg",
                mobile: "/storage/images/34b82a6984dad2ad4e6102093219760a.jpeg",
                small: "/storage/images/f28c46e0aa6801a148c8b15405c0e9ca.jpeg",
                original:
                  "/storage/images/7946cd7b407fc849b945f9674bd3354b.jpeg",
              },
              created_at: null,
              updated_at: "2022-04-12T10:30:40.000000Z",
            },
          ],
          delivery: { id: 2, shop_id: 1, price: 120, door_delivery_price: 30 },
        };
      },
    },
  },
  computed: {
    cuisines() {
      return this.partner.cuisines.map((cuisine) => cuisine.name).join("/");
    },
  },
};
</script>
<style lang="scss" scoped>
.shop-adaptive {
  width: 100%;
  border: 1px solid $dark_grey;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  border-radius: 10px;
  padding: 8px 10px;
  height: auto;
  background-color: $white;
  text-decoration: none;
  transition: $transition;
  &:hover {
    background-color: $darkblue;
  }
  &__favourite{
    background-color: transparent;
    &_filled{
      border-color: $red !important;
        background-color: $red !important;
        svg * {
          fill:$white;
        }
      }
  }
  &:hover & {
    &__favourite{
      &:not(&_filled)
      {
        border-color: $white;
        svg * {
          fill: $white;
        }
      }

  }
    &__info {
      &__name {
        color: $white;
      }
      &__category {
        color: $white;
      }
    }
    &__icon * {
      fill: white;
    }
  }
  &:last-of-type {
    margin-bottom: 0;
  }
  &__info {
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    height: auto;
    margin-left: 15px;

    &__name {
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 17px;
      width: 100%;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &__category {
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      color: $darkblue;
      width: 100%;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  &__favourite {
    width: 30px;
    height: 30px;
    border: 1px solid $darkblue;
    border-radius: 90px;
    background-color: transparent;
    outline: none;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: $transition;
    &:hover {
      svg * {
        fill: $white;
      }
      border-color: $red !important;
      background-color: $red;
    }
  }
  &__icons {
    margin-left: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    position: relative;
    &__icon {
      &__delivery {
        background-color: $orange;
      }
      &__gift {
        background-color: $green;
      }
      &__discount {
        background-color: $red;
      }
      &__wrapper {
        width: 30px;
        height: 30px;
        border-radius: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        &:nth-last-child(2) {
          transform: translate(33%);
          z-index: 2;
        }
        &:nth-last-child(3) {
          transform: translate(66%);
          z-index: 3;
        }
      }
    }
  }
  &__icon {
    margin-left: 17px;
  }
}
</style>
