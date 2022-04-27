<template>
  <div class="page index-page__all-wrapper">
    <PagesIndexSearch class="index-page__content__search adaptive-non" />
    <div class="index-page__wrapper wrapper">
      <div class="index-page__content content">
        <PagesIndexAdaptiveCategories
          class="index-page__content__adaptive-categories adaptive"
        />
        <PagesIndexStocksSlider class="index-page__content__stocks-slider" />
        <PagesIndexNewShops
          class="index-page__content__new-shops adaptive-non"
        />
        <PagesIndexAdaptiveNewShops
          class="index-page__content__adaptive-new-shops adaptive"
        />
        <PagesIndexAbout class="index-page__content__about adaptive-non">
          Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
          сгенерировать несколько абзацев более менее осмысленного текста рыбы
          на русском языке, а начинающему оратору отточить навык публичных
          выступлений в домашних условиях. При создании генератора мы
          использовали небезизвестный универсальный код речей. Текст
          генерируется абзацами случайным образом от двух до десяти предложений
          в абзаце, что позволяет сделать текст более привлекательным и живым
          для визуально-слухового восприятия.
          <br />
          По своей сути рыбатекст является альтернативой традиционному lorem
          ipsum, который вызывает у некторых людей недоумение при попытках
          прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском
          языке наполнит любой макет непонятным смыслом и придаст неповторимый
          колорит советских времен.
        </PagesIndexAbout>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.index-page {
  padding-bottom: 0px !important;
  @media screen and (max-width: $tablet) {
    padding-bottom: 50px !important;
  }
  &__content {
    &__search {
      margin-bottom: 70px;
    }
    &__stocks-slider,
    &__new-shops {
      margin-bottom: 70px;
    }
    &__about {
      width: 100vw;
    }
    @media screen and (max-width: $tablet) {
      &__adaptive-categories {
        margin: 0px 0px 30px;
      }
      &__stocks-slider {
        margin-bottom: 60px;
      }
    }
  }
  @media screen and (max-width: $tablet) {
    padding-bottom: 30px;
  }
}
</style>
