<template>
  <div @click.self="$store.commit('modals/close')" class="full-view-modal modal non-scrollbar">
    <button
      type='button'
      @click="$store.commit('modals/close')"
      class="full-view-modal__close"
    >
      <svg
        class="full-view-modal__close__icon"
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
    <div @click.self="$store.commit('modals/close')" class="full-view-modal__all-images" v-if="images">
      <img :src="`${$axios.defaults.baseURL}${image.original}`" v-for="(image,index) in images" :key="index" alt=""
           class="full-view-modal__all-images__image"/>
    </div>
    <div @click.self="$store.commit('modals/close')" v-scrolled class="full-view-modal__stream non-scrollbar">
      <div v-for="(image,index) in images" :key="index" class="full-view-modal__stream__image"
           @click="switchBiggy">
        <img :src="`${$axios.defaults.baseURL}${image.original}`" class="fill-view-modal__stream__image__content"
             alt=""/>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  directives: {
    scrolled: {
      inserted: function (el, binding) {
        // document.
        el.scrolling = function () {
          // let bodyRect = document.querySelector('.full-view-modal').getBoundingClientRect(),
          //   elemRect = this.getBoundingClientRect(),
          //   offset   = elemRect.top - bodyRect.top;
          // console.log(bodyRect);
          // console.log(this.getBoundingClientRect().height);
          // console.log(el.getBoundingClientRect());
          // console.log(el.offsetTop - this.getBoundingClientRect().height);
          // console.log(coordinates);
          // let element_y = el.getBoundingClientRect().height / 2;
          // let coordinates = [...document.querySelectorAll('.full-view-modal__stream__image')].map(el => el.getBoundingClientRect().y);
          //
          // let min = Math.abs(coordinates[0]);
          // let min_index = 0;
          // coordinates.forEach((el, index) => {
          //
          //   if (Math.abs(el) - Math.abs(element_y) <= Math.abs(min)-180) {
          //     min = Math.abs(el) - Math.abs(element_y);
          //     min_index = index;
          //   }
          // })
          // console.log('-');
          // console.log(min);
          // console.log(min_index);
        }

        // document.querySelector('.full-view-modal__stream').addEventListener("scroll", el.scrolling);
      }
    },
    unbind: function (el) {
      // document.querySelector('.full-view-modal__stream').addEventListener("scroll", el.scrolling);
    },
  },
  methods: {
    switchBiggy() {
      let elements = [...document.querySelectorAll('.full-view-modal__stream__image')];
      elements.splice(elements.indexOf(event.target),1);
        elements.forEach(el => el.classList.remove('biggy'));
      event.target.closest('.full-view-modal__stream__image').classList.toggle('biggy');

    }
  },
  computed: {
    images() {
      // return [{
      //   "large": "/storage/images/4753225a97b1a990fb9f4c7ab65670be.jpeg",
      //   "normal": "/storage/images/0f248d05d4215a66e0af5437f9867d4c.jpeg",
      //   "card": "/storage/images/9576a4779b4b3762fabc5229433f29ce.jpeg",
      //   "cart_mini": "/storage/images/8bb2ded41d62711733bb6808319fd3a2.jpeg",
      //   "original": "/storage/images/cbae8a62ba33546d630087c6c0539472.jpeg"
      // }, {
      //   "large": "/storage/images/54651febe14a8cf229da2b583d301501.jpeg",
      //   "normal": "/storage/images/a3e89a0a1fcce92849fc9abc1c3d3510.jpeg",
      //   "card": "/storage/images/7e079c1577023c772596bfd4fff36826.jpeg",
      //   "cart_mini": "/storage/images/fa898dab4760a636956d4b85cf92fdaf.jpeg",
      //   "original": "/storage/images/c62394067d0bc18f089301ab307d85a6.jpeg"
      // }, {
      //   "large": "/storage/images/895b1a0014644d526331d1946a92d311.jpeg",
      //   "normal": "/storage/images/b4cc732e9781aff125ad9361694d1aa2.jpeg",
      //   "card": "/storage/images/fa6a0bef312672048daf6dfdcc070c4b.jpeg",
      //   "cart_mini": "/storage/images/950720be44e602b916699ffdfc17cd03.jpeg",
      //   "original": "/storage/images/a3cc30ba6c6d2cc613abbdde88c2e4c0.jpeg"
      // }, {
      //   "large": "/storage/images/70d18b70657d82793858435bff5ac438.jpeg",
      //   "normal": "/storage/images/f3a153650b9c733f66b43ba33cd7c838.jpeg",
      //   "card": "/storage/images/33ef1627cfe3e2c65667ecadfd2a0007.jpeg",
      //   "cart_mini": "/storage/images/589bdb2ffce958743c0c67961c1181e7.jpeg",
      //   "original": "/storage/images/bebad27755c36479d953912c3fba794c.jpeg"
      // }, {
      //   "large": "/storage/images/3ec917abc3ea3ce06e786945d5c77cb7.jpeg",
      //   "normal": "/storage/images/9a09633bdf12cef8e99dae54003e57b8.jpeg",
      //   "card": "/storage/images/0acfca750cc8c1f4995adada5c8f4da5.jpeg",
      //   "cart_mini": "/storage/images/b468d0b3dac4997ac028a063c07b4e1c.jpeg",
      //   "original": "/storage/images/488acf3a5e9ee6b38501ab0374a32807.jpeg"
      // }]
      return this.$store.state.modals.full_view.images || [];
    },
  }
}
</script>
<style lang="scss" scoped>
.full-view-modal {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  height: 100%;
  width: 100%;
  max-width: 100%;
  overflow: hidden;


  &__close {
    position: absolute;
    right: 2vw;
    top: 2vh;
    width: max-content;
    height: max-content;
    background-color: transparent;
    border: none;
    z-index: 10;

    * {
      fill: $white;
      stroke: $white;
    }


  }

  &__all-images {
    width: 80px;
    height: 100%;
    max-width: 100%;
    overflow-y: auto;
    margin-right: 10px;
    z-index: 10;
    flex-shrink: 0;
    position: sticky;
    top: 0;

    &__image {
      max-width: 100%;
      object-fit: contain;
    }
  }

  &__stream {
    flex-grow: 1;
    overflow-y: auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    max-height: 100%;

    &__image {
      max-width: 60%;
      width: 60%;
      height: auto;
      cursor: zoom-in;
      transition: $transition / 2;

      &.biggy {
        max-width: 100%;
        width: 100%;
        cursor: zoom-out;
      }

      img {
        width: 100%;
        max-width: 100%;
        object-fit: cover;
      }
    }
  }

}
</style>
