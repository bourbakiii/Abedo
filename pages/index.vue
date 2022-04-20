<template>
  <div class="page index-page">
    <PagesIndexSearch class="index-page__search adaptive-non" />
    <PagesIndexAdaptiveCategories class="index-page__adaptive-categories adaptive" />
    <PagesIndexStocksSlider class="index-page__stocks-slider" />
    <PagesIndexNewShops class="index-page__new-shops adaptive-non" />
    <PagesIndexAdaptiveNewShops class="index-page__adaptive-new-shops adaptive" />
    <PagesIndexAbout class="adaptive-non">
      Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать
      несколько абзацев более менее осмысленного текста рыбы на русском языке, а
      начинающему оратору отточить навык публичных выступлений в домашних
      условиях. При создании генератора мы использовали небезизвестный
      универсальный код речей. Текст генерируется абзацами случайным образом от
      двух до десяти предложений в абзаце, что позволяет сделать текст более
      привлекательным и живым для визуально-слухового восприятия.
      <br />
      По своей сути рыбатекст является альтернативой традиционному lorem ipsum,
      который вызывает у некторых людей недоумение при попытках прочитать рыбу
      текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит
      любой макет непонятным смыслом и придаст неповторимый колорит советских
      времен.
    </PagesIndexAbout>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
<style lang="scss" scoped>
.index-page {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  &__adaptive-categories {
    margin: 30px 0px;
  }
  &__adaptive-new-shops {
    margin-top: 30px;
  }
}
.search-wrapper {
  margin-bottom: 73px;
}
.new-shops {
  margin-bottom: 70px;
}
.stocks-slider {
  margin-bottom: 63px;
}
</style>

