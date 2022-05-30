<template>
  <div class="catalog partner-catalog">
    <h2 class="catalog__title title-extra-normal adaptive-non">
      Разделы каталога “{{ partner.name }}”
    </h2>
    <div class="catalog__sections adaptive-non">
      <SectionItem
        class="catalog__sections__item"
        v-for="section in sections"
        :key="section.id"
        :section="section"
        :id="`section-item-${section.id}`"
      />
    </div>
    <SectionSlider
      :sections="sections"
      class="catalog__sections__slider adaptive"
    />
    <div class="catalog__products">
      <div
        class="catalog__products__section section"
        :id="`section-${section.id}`"
        :script_id="section.id"
        v-for="section in sections"
        :key="section.id"
      >
        <h3 class="catalog__products__section__title title-small">
          {{ section.name }}
        </h3>
        <div class="catalog__products__section__content">
          <ProductItem
            class="catalog__products__section__content__item"
            v-for="product in section.products"
            :key="product.id"
            :product="Object.assign(product, sectionWithoutProducts(section))"
            :partner="partner"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    partner: {
      required: true,
    },
  },
  async fetch() {
    await this.$axios
      .get(`/api/shops/${this.$route.params.partner_id}/menu`)
      .then(({ data: { sections } }) => {
        this.sections = sections;
      });
  },
  data() {
    return {
      sections: [],
    };
  },
  methods: {
    sectionWithoutProducts(section) {
      let object = { ...section };
      delete object.products;
      return { section: object };
    },
  },
  mounted() {
    document.addEventListener("scroll", (event) => {
      for (let element of [
        ...document.querySelectorAll(".section-item"),
        ...document.querySelectorAll(".slider-section-item"),
      ])
        element.classList.remove("active");
      for (let element of Array.from(document.querySelectorAll(".section"))) {
        if (element.getBoundingClientRect().y > 0) {
          document
            .getElementById(`section-item-${element.getAttribute(`script_id`)}`)
            .classList.add("active");
          document
            .getElementById(
              `slider-section-item-${element.getAttribute(`script_id`)}`
            )
            .classList.add("active");
          return;
        }
      }
    });
  },
};
</script>
<style lang="scss" scoped>
.catalog {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  &__title {
    align-self: flex-start;
    margin-bottom: 15px;
  }
  &__sections {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 50px;
    position: sticky;
    top: 70px;
    background-color: $light_grey;
    z-index: $z_navigation + 1;
    padding-top: 15px;
    &::before {
      z-index: 10;
      content: "";
      position: absolute;
      width: 100%;
      height: 7px;
      background: linear-gradient(0deg, transparent, $light_grey);
      top: 100%;
      left: 0px;
    }
    &__slider {
      margin-bottom: 15px;
      padding: 15px 0px;
      position: sticky;
      top: 60px;
      background-color: $light_grey;
      z-index: $z_navigation + 1;
      &::before {
        z-index: 10;
        content: "";
        position: absolute;
        width: 100%;
        height: 7px;
        background: linear-gradient(0deg, transparent, $light_grey);
        top: 100%;
        left: 0px;
      }
    }
    &__item {
      flex-grow: 0;
      flex-shrink: 0;
      margin-right: 5px;
      margin-bottom: 10px;
    }
  }
  &__products {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    &__section {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      margin-bottom: 30px;
      &:last-of-type {
        margin-bottom: 0px;
      }
      &__title {
        margin-bottom: 30px;
      }
      &__content {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 30px;
        @media screen and (max-width: $notebook) {
          grid-gap: 10px;
        }
        @media screen and (max-width: $tablet) {
          grid-gap: 20px;
          width: 100%;
        }
        @media screen and (max-width: $phone) {
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 15px;
        }
        &__item {
          width: auto;
          overflow: hidden;
          @media screen and (max-width: $tablet) {
            width: 100%;
            overflow: hidden;
          }
        }
      }
    }
  }
}
</style>
