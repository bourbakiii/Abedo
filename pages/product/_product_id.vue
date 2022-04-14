<template>
  <div class="page product-page wrapper">
    <div class="product-page__content content">
      <div class="product-page__content__main">
        <Breadcrumbs class="product-page__content__main__breadcrumbs" />
        <h1
          class="product-page__content__main__name title-extra-normal"
          contenteditable
        >
          Сырное ассорaСырное ассорaСырное ассорaСырное ассорaСырное
          ассорaСырное ассорaСырное ассорa
        </h1>
        <div class="product-page__content__main__images">
          <div class="product-page__content__main__images__slider"></div>
          <div class="product-page__content__main__images__image"></div>
        </div>
        <div class="product-page__content__main__additional">
          <div class="product-page__content__main__additional__description">
            <p class="product-page__content__main__additional__pre">
              Описание:
            </p>
            <p
              class="product-page__content__main__additional__description"
              contenteditable
            >
              Моцарелла, рикотта или фета (свежие); шаурс, нешатель (мягкие);
              эдам, гауда (полумягкие); маасдам, эмменталь (твердые); пармезан,
              грюйер (твердые, пикантные); пекорино, шеврет (козий, овечий
              сыры); рокфор, горгонзола или дор блю (с голубой плесенью).
            </p>
          </div>
          <div class="product-page__content__main__additional__information">
              <div class="product-page__content__main__additional__information__prices">
                  <p class="product-page__content__main__additional__information__prices__price" contenteditable>3 500 ₽</p>
                  <p class="product-page__content__main__additional__information__prices__weight" contenteditable>/ 150 г</p>
                  <p class="product-page__content__main__additional__information__prices__price_full" contenteditable>450 ₽ </p>
              </div>
              <div class="product-page__content__main__additional__information__options">
                  <div class="product-page__content__main__additional__information__options__item">

                  </div>
              </div>
              <ButtonStandart>
                  
              </ButtonStandart>
          </div>
            
        </div>
      </div>
      <SidebarCart class="product-page__content__sidebar" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.product-page {
  background-color: $light_grey;
  &__content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
    &__main {
      width: 80%;
      height: 1000px;
      margin-right: 30px;
      background-color: red;

      &__breadcrumbs {
        margin-top: 20px;
        margin-bottom: 40px;
      }
      &__name {
        width: 100%;
        max-width: 100%;
        margin-bottom: 40px;
      }
      &__images {
        background-color: green;
        height: 662px;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        &__slider {
          width: 126px;
          height: 100%;
          background-color: $white;
          border-radius: 20px;
          margin-right: 30px;
          flex-shrink: 0;
          flex-grow: 0;
        }
        &__image {
          flex-shrink: 0;
          background-color: blue;
          height: 100%;
          flex-grow: 1;
        }
      }
    }
    &__sidebar {
      width: 294px;
      flex-shrink: 0;
      position: sticky;
      top: 0px;
      top: 125px;
    }
  }
}
</style>