<template>
  <div class="page profile-page-wrapper wrapper">
    <div class="profile-page content">
      <Breadcrumbs class="profile-page__breadcrumbs" />
      <h1 class="profile-page__title title-normal">Персональная информация</h1>
      <form class="profile-page__form">
        <div class="profile-page__form__content">
          <label for="phone" class="profile-page__form__content__input-block">
            <p class="profile-page__form__content__input-block__name">
              Телефон
            </p>
            <input
              required
              disabled
              class="profile-page__form__content__input-block__input"
              type="text"
              name="phone"
              id="phone"
              placeholder="Введите ваше телефон"
            />
          </label>
          <label for="email" class="profile-page__form__content__input-block">
            <p class="profile-page__form__content__input-block__name">Почта</p>
            <input
              class="profile-page__form__content__input-block__input"
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.ru"
            />
          </label>
          <label for="name" class="profile-page__form__content__input-block">
            <p class="profile-page__form__content__input-block__name">Имя</p>
            <input
              class="profile-page__form__content__input-block__input"
              required
              type="text"
              name="name"
              id="name"
              placeholder="Введите ваше имя"
            />
          </label>
          <label for="surname" class="profile-page__form__content__input-block">
            <p class="profile-page__form__content__input-block__name">
              Фамилия
            </p>
            <input
              class="profile-page__form__content__input-block__input"
              required
              type="text"
              name="surname"
              id="surname"
              placeholder="Введите вашу фамилию"
            />
          </label>
          <label for="sex" class="profile-page__form__content__input-block">
            <p class="profile-page__form__content__input-block__name">Пол</p>
            <input
              class="profile-page__form__content__input-block__input"
              required
              type="text"
              name="sex"
              id="sex"
              placeholder="Введите ваш пол"
            />
          </label>
          <label for="date" class="profile-page__form__content__input-block">
            <p class="profile-page__form__content__input-block__name">
              Дата рождения
            </p>
            <input
              class="profile-page__form__content__input-block__input"
              required
              type="date"
              name="date"
              id="date"
              placeholder="Выберите дату рождения"
            />
          </label>
          <label
            for="password"
            class="profile-page__form__content__input-block"
          >
            <p class="profile-page__form__content__input-block__name">Пароль</p>
            <input
              class="profile-page__form__content__input-block__input"
              required
              type="password"
              name="password_repeat"
              id="password"
              placeholder="Выберите пароль"
            />
          </label>
          <label
            for="password"
            class="profile-page__form__content__input-block"
          >
            <p class="profile-page__form__content__input-block__name">Пароль</p>
            <input
              class="profile-page__form__content__input-block__input"
              required
              type="password"
              name="password_repeat"
              id="password"
              placeholder="Повторите ваш пароль"
            />
          </label>
        </div>
        <div class="profile-page__form__buttons">
          <ButtonStandart
            class="profile-page__form__buttons__edit"
            text="Изменить"
          />
          <ButtonStandart
            class="profile-page__form__buttons__Save"
            text="Сохранить"
          />
          <ButtonStandart
            class="profile-page__form__buttons__Save"
            text="Отмена"
          />
        </div>
        <div class="profile-page__form__messages">
          <div
            class="
              profile-page__form__messages__item_success
              profile-page__form__messages__item
            "
          >
            <div class="profile-page__form__messages__item__icon-block">
              <svg
                class="profile-page__form__messages__item__icon-block__icon"
                width="10"
                height="7"
                viewBox="0 0 10 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.84 0.62371L9.51244 0.296149C9.40951 0.193141 9.27228 0.136475 9.12577 0.136475C8.97927 0.136475 8.84195 0.193141 8.73902 0.296149L4.13634 4.89875L1.26065 2.02298C1.15772 1.92013 1.02041 1.86339 0.873902 1.86339C0.72748 1.86339 0.590244 1.92013 0.487236 2.02298L0.159593 2.35046C0.0565854 2.45363 0 2.59103 0 2.73737C0 2.88379 0.0565854 3.02111 0.159593 3.12412L3.40642 6.37079C3.41073 6.37688 3.41528 6.38257 3.42057 6.38778L3.74821 6.70997C3.85114 6.81257 3.98846 6.86387 4.1361 6.86387H4.1378C4.28439 6.86387 4.42171 6.81257 4.52447 6.70997L4.85219 6.38493C4.85748 6.37973 4.86195 6.37542 4.86463 6.37103L9.83992 1.39623C10.0533 1.1833 10.0533 0.836881 9.84 0.62371Z"
                  fill="#0EA976"
                />
              </svg>
            </div>
            <p class="profile-page__form__messages__item__text">Ваши данные успешно обновлены</p>
          </div>
         <div
            class="
              profile-page__form__messages__item_error
              profile-page__form__messages__item
            "
          >
            <p class="profile-page__form__messages__item__text">Введенные пароли не совпадают</p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.profile-page {
  padding-bottom: 100px;
  &-wrapper {
    justify-content: flex-start;
    background-color: $light_grey;
  }
  align-items: flex-start;
  &__breadcrumbs {
    margin-top: 24px;
    margin-bottom: 40px;
  }
  &__title {
    margin-bottom: 70px;
  }
  &__form {
    width: 100%;
    max-width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: $white;
    flex-direction: column;
    max-width: 730px;
    padding: 30px;
    border-radius: 20px;
    &__content {
      width: 100%;

      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 30px 76px;

      &__input-block {
        &__name {
          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 17px;
          margin-bottom: 10px;
        }
        &__input {
          width: 100%;
          height: 50px;
          border-radius: 50px;
          border: 1px solid $dark_grey;
          box-sizing: border-box;
          border-radius: 50px;
          padding: 0px 30px;
          outline: none;
          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          &::placeholder {
            color: $extra_dark_grey;
          }
          &:disabled {
            background-color: $dark_grey;
          }
        }
      }
    }
    &__buttons {
      margin-top: 60px;
    }
    &__messages{
      display: flex;align-items: center;justify-content: flex-start;flex-direction: column;
      width:100%;
      &__item{
        width:100%;
        background-color: $dark_grey;
        display: flex;align-items: center;justify-content: flex-start;flex-direction: row;
        padding: 15px 30px;
        border-radius: 20px;
        min-height: 60px;
        &__icon-block{
          width: 30px;
          height: 30px;
          display: flex;align-items: center;justify-content: center;
          border-radius: 90px;
          background-color: $light_green;
          margin-right: 15px;
          *{
            fill:$white;
          }
        }
        &__text{
          font-family: 'SF Pro Display';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
        }
        &_success p{
          color: $light_green !important;
        }
        &_error p{
          color: $red !important;
        }
      }
    }
  }
}
</style>