<template>
  <div class="founded-partners">
    <h1 class="founded-partners__title title-normal">Найденные заведения</h1>
    <div class="founded-partners__content content">
      <client-only>
      <PartnerItem
        class="founded-partners__content__item"
        v-for="partner in partners"
        :key="partner.id"
        :partner='partner'
      />
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  name: "FoundedPartners",
  props:{
    partners: {
      required: true,
      default: []
    }
  }
};
</script>

<style lang="scss" scoped>
.founded-partners {
  width: 100%;
  max-width: $maxwidth;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  &__title {
    margin-bottom: 40px;
    @media screen and (max-width: $tablet) {
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 30px;
    }
  }
  &__content {
    width: 100%;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    @media screen and (max-width: $notebook) {
    grid-template-columns: repeat(3, 1fr);
      grid-gap: 30px;
    }
    @media screen and (max-width: $tablet) {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 15px;
    }

    &__item {
      width: auto;
      overflow: hidden;
    }
  }
}
</style>
