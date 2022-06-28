<template>
  <form @submit.prevent="send" class="rate-modal modal">
    <h3 class="rate-modal__title title-normal">Оцените заказ</h3>
    <button
      type='button'
      @mousedown.prevent="$store.commit('modals/close')"
      class="rate-modal__close"
    >


      <svg
        class="rate-modal__close__icon"
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
    <div
      class="rate-modal__stars"
    >
      <div class="rate-modal__stars__content">
        <div @click="setRating(item)" @mouseleave="removeNonIndex" @mousemove="starsMouseMove(item)" v-for="item in 5"
             class="rate-modal__stars__content__star">
          <svg width="26" height="25" viewBox="0 0 26 25" fill="none"
               class="rate-modal__stars__content__star__star rate-modal__stars__content__star__star_unfilled star-svg-unfilled"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M25.4873 9.53427L25.4874 9.53445C25.5176 9.627 25.4927 9.72914 25.4217 9.79798L25.4217 9.79801L19.5889 15.4598L19.3997 15.6435L19.4445 15.9035L20.8215 23.898C20.8215 23.898 20.8215 23.898 20.8215 23.898C20.838 23.9939 20.7986 24.0917 20.718 24.15C20.6373 24.2084 20.5297 24.2163 20.4409 24.1699C20.4408 24.1699 20.4408 24.1698 20.4408 24.1698L13.2319 20.3953L13 20.2739L12.7681 20.3953L5.55884 24.1699L5.55876 24.1699C5.52038 24.1901 5.47852 24.2 5.43641 24.2C5.38146 24.2 5.32735 24.183 5.28179 24.1501C5.20116 24.0918 5.16183 23.994 5.17835 23.8981L5.17836 23.8981L6.55493 15.9034L6.59969 15.6435L6.41046 15.4598L0.578358 9.79808L0.578314 9.79804C0.507377 9.72919 0.482389 9.62702 0.512649 9.5343L0.512666 9.53424C0.542978 9.44132 0.624282 9.37217 0.723712 9.3578L0.723789 9.35779L8.78376 8.19134L9.04357 8.15374L9.16014 7.91852L12.765 0.644864L12.3183 0.423503L12.765 0.64486C12.8086 0.556924 12.8993 0.5 13 0.5C13.1008 0.5 13.1915 0.556946 13.235 0.64479L13.235 0.644857L16.8397 7.91851L16.9563 8.15374L17.2161 8.19134L25.2763 9.35779L25.2763 9.3578C25.3757 9.37216 25.457 9.44123 25.4873 9.53427Z"
              fill="#F4F6FC" stroke="#DDE2F2"/>
          </svg>
          <svg
            class="rate-modal__stars__content__star__star rate-modal__stars__content__star__star_filled star-svg-filled"
            width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M25.9627 9.37923C25.8731 9.10457 25.6348 8.90441 25.3479 8.86294L17.2877 7.69649L13.6831 0.422835C13.5548 0.163905 13.29 0 13 0C12.7101 0 12.4453 0.163905 12.317 0.422835L8.71214 7.69649L0.652174 8.86294C0.365312 8.90441 0.126895 9.10458 0.0373174 9.37918C-0.0523112 9.65384 0.0224385 9.9553 0.230082 10.1568L6.06219 15.8186L4.68561 23.8132C4.63656 24.0978 4.75407 24.3854 4.98862 24.5552C5.12131 24.6511 5.27848 24.7 5.43641 24.7C5.55768 24.7 5.67935 24.6712 5.79076 24.6129L13 20.8383L20.2089 24.6128C20.4656 24.7472 20.7766 24.7248 21.0111 24.5551C21.2457 24.3854 21.3632 24.0977 21.3142 23.8131L19.9372 15.8186L25.77 10.1568C25.9776 9.9553 26.0524 9.65384 25.9627 9.37923Z"
              fill="#EE964B"/>
          </svg>
        </div>
      </div>
      <p class="rate-modal__stars__value adaptive-non">
        {{ rating }} из 5
      </p>
    </div>

    <div class="rate-modal__message">
      <p class="rate-modal__message__title">
        Ваш отзыв
      </p>
      <textarea v-model="message" class="rate-modal__message__textarea" placeholder="Текст отзыва"/>
    </div>

    <ButtonStandart :loader="loading" class="rate-modal__button filled">Отправить</ButtonStandart>
  </form>
</template>
<script>
export default {
  data() {
    return {
      message: null,
      rating: 0,
      loading: false
    }
  },
  methods: {
    starsMouseMove(index) {
      let element = event.target.closest('.rate-modal__stars__content__star');
      let array = Array.from(document.querySelectorAll('.rate-modal__stars__content__star__star_filled'));
      array.forEach(element => {
        element.classList.remove('per');
        element.classList.remove('full');
      });

      array = array.slice(0, index - 1);

      array.forEach(element => {
        element.classList.add('full')
      });

      if (event.offsetX <= element.scrollWidth / 2) element.children[1].classList.add('per');
      else element.children[1].classList.add('full');
    },
    removeNonIndex() {
      let array = Array.from(document.querySelectorAll('.rate-modal__stars__content__star__star_filled'));
      array.forEach(element => {
        element.classList.remove('per');
        element.classList.remove('full');
      });
      if (this.rating) {
        array[+(this.rating.toFixed(0)) - 1].classList.add(this.rating % 1 > 0 ? 'per' : 'full');
        array.splice(0, +this.rating.toFixed(0) - 1).forEach(element => {
          element.classList.add('full')
        })
      }
    },
    setRating(index) {
      let element = event.target.closest('.rate-modal__stars__content__star');
      if (event.offsetX <= element.scrollWidth / 2) this.rating = (index * 2 - 1) / 2;
      else this.rating = index;
    },
    send() {
      this.loading = true;
      this.$axios.post(`/api/order/${this.$store.state.modals.rate.order.id}/addComment`, {
        order_rating: +this.rating,
        order_comment: this.message
      }, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }).then(({data:{comment}}) => {
        this.$store.state.modals.rate.order.comments.push(comment);
        this.$store.commit('modals/close');
      }).catch((error) => {
        console.log("Order rate error:");
        console.log(error);
      }).finally(() => {
        this.loading = false;
      });
    }
  },
  computed: {
    token() {
      return this.$store.state.account.token
    }
  },
  watch: {
    token(value) {
      if (value == null)
        this.$store.commit('modals/close')
    }
  }
}
</script>
<style lang="scss" scoped>
.rate-modal {
  width: 100%;
  max-width: 1028px;
  background-color: $white;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  @media screen and (max-width: $tablet) {
    margin-top: 57px;
    max-width: calc(100% - 48px);
    border-radius: 10px;
    padding: 40px 20px 30px;
  }

  &__close {
    position: absolute;
    top: 30px;
    right: 30px;
    background-color: transparent;
    outline: none;
    border: none;
  }

  &__title {
    margin-bottom: 40px;
    line-height: 30px;
    @media screen and (max-width: $tablet) {
      font-family: 'SF Pro Display';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 26px;
      margin-bottom: 30px;
    }
  }

  &__stars {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    margin-bottom: 41px;
    @media screen and (max-width: $tablet) {
      margin-bottom: 31px;
    }

    &__content {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      position: relative;

      &__star {
        position: relative;
        margin-right: 10px;
        cursor: pointer;

        &:last-of-type {
          margin-right: 0;
        }

        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        &__star {
          flex-shrink: 0;
          flex-grow: 0;
          overflow: hidden;

          &_filled {
            position: absolute;
            visibility: hidden;

            &.per {
              visibility: visible;
              z-index: 2;
              clip-path: polygon(0px 0, 50% 0, 50% 100%, 0 100%);
            }

            &.full {
              visibility: visible;
              clip-path: none;
            }
          }
        }
      }
    }

    &__value {
      margin-left: 27px;
      font-family: 'SF Pro Display';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
    }
  }

  &__message {
    max-width: 100%;
    width: 100%;
    overflow: hidden;
    margin-bottom: 30px;

    &__title {
      font-family: 'SF Pro Display';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      margin-bottom: 10px;
      @media screen and (max-width: $tablet) {
        margin-bottom: 7px;
      }
    }

    &__textarea {
      width: 100%;
      max-width: 100%;
      min-width: 100%;
      min-height: 160px;
      font-family: 'SF Pro Display';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      padding: 20px 30px;
      border-radius: 20px;
      outline: none;
      border: 1px solid $dark_grey;
      @media screen and (max-width: $tablet) {
        padding: 15px 10px;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }

  &__button {
    width: 129px;
    height: 40px;
    @media screen and (max-width: $tablet) {
      width: 102px;
      font-family: 'SF Pro Display';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
    }
  }
}
</style>
