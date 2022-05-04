<template>
    <transition appear name="partner-desktop">
      <PartnerDesktop
        :partner="partner"
        v-if="width > 768"
        class="partner-item"
      />
      <PartnerAdaptive :partner="partner" v-else class="partner-item"/>
    </transition>
</template>
<script>
export default {
  props: {
    partner: {
      required: true,
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
  data() {
    return { width: window.innerWidth };
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize(e) {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    },
  },
};
</script>
<style lang="scss" scoped>
.filter {
  &-enter, &-leave-to {
    height:0px !important;
    opacity: 0;
    margin-bottom: 0px;
    padding-top:0px !important;
    padding-bottom: 0px !important;
  }
  &-enter-active,
  &-leave-active {
    transition: all $transition;
  }
}
</style>
