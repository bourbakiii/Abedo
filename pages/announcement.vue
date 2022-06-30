<template>
  <div class="page announcement-page wrapper">
    <h1 class="announcement-page__title title-big">Запуск маркетплейса - 1 августа 2022</h1>
    <p class="announcement-page__red red">Открыта предварительная регистрация.</p>
    <p class="announcement-page__access">Заполните заявку и получите доступ в личный кабинет.</p>

    <div class="announcement-page__block">
      <h2 class="announcement-page__block__title title-normal">Запустите интернет-магазин</h2>
      <p class="announcement-page__block__text">В маркетплейсе РСО-Алания</p>
      <p class="announcement-page__block__text">Быстро. Удобно. Просто.</p>
    </div>

    <a href="https://abedo.ru/admin" class="announcement-page__button unselectable">Узнать подробнее о сервисе
    </a>

  </div>
</template>
<style lang="scss" scoped>
.announcement-page {
  padding-top: 73px;

  &__title {
    margin-bottom: 36px;
    text-align: center;
    @media screen and (max-width: $notebook) {
      font-size: 30px;
    }
    @media screen and (max-width: $tablet) {
      font-size: 24px;
    }
    @media screen and (max-width: $tablet_middle) {
      font-size: 20px;
    }
    @media screen and (max-width: 446px) {
      font-size: 18px;
    }
  }

  &__red, &__access {
    font-family: 'Montserrat', serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 34px;
    text-align: center;
    @media screen and (max-width: $tablet) {
      font-size: 17px;
    }
    @media screen and (max-width: $tablet_middle) {
      font-size: 15px;
    }
  }

  &__red {
    margin-bottom: 10px;
  }

  &__block {
    margin-top: 90px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    &__title {
      font-size: 34px;
      line-height: 41px;
      text-align: center;
      @media screen and (max-width: $tablet) {
        font-size: 22px;
      }
      @media screen and (max-width: $tablet_middle) {
        font-size: 19px;
      }
    }

    &__text {
      font-family: 'Montserrat', serif;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      margin-top: 19px;
      @media screen and (max-width: $tablet) {
        font-size: 17px;
      }
      @media screen and (max-width: $tablet_middle) {
        font-size: 15px;
      }
    }
  }

  &__button {
    width: 403px;
    height: 60px;
    font-family: 'SF Pro Display', serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: $white;
    background: linear-gradient(184.61deg, #FF8200 3.72%, #F48C20 50.48%, #F48C20 50.49%, #EA9740 96.27%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    border-radius: 5px;
    text-decoration: none;
    transition: $transition;
    margin-top: 43px;
    @media screen and (max-width: $tablet_middle) {
      width: 320px;
    }
    @media screen and (max-width: 446px) {
      font-size: 16px;
      line-height: 16px;
      width: 270px;
    }

    &:hover {
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);
    }
  }
}

</style>
