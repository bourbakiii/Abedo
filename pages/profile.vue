<template>
  <div class="page profile-page-wrapper wrapper">
    <div class="profile-page content">
      <Breadcrumbs class="profile-page__breadcrumbs adaptive-non" />
      <h1 class="profile-page__title title-normal">Персональная информация</h1>
      <form @submit.prevent="edit" class="profile-page__form">
        <div class="profile-page__form__content">
          <InputBlock
            :value="$store.state.account.user.phone"
            text="Телефон"
            id="phone"
            name="phone"
            placeholder="(000) 000 000 00"
            pre="+7"
            mask="(###) ###-##-##"
            type="text"
            :readonly="true"
            class="profile-page__form__content__input-block"
          />
          <InputBlock
            :readonly="!editing"
            :value="user.email"
            @input="user.email = $event"
            text="Почта"
            id="email"
            name="email"
            placeholder="example@gmail.com"
            type="email"
            :required="false"
            class="profile-page__form__content__input-block"
          />
          <InputBlock
            :readonly="!editing"
            :value="user.first_name"
            @input="user.first_name = $event"
            text="Имя"
            id="first_name"
            name="first_name"
            placeholder="Введите имя"
            type="text"
            :required="false"
            class="profile-page__form__content__input-block"
          />
          <InputBlock
            :readonly="!editing"
            :value="user.last_name"
            @input="user.last_name = $event"
            text="Фамилия"
            id="last_name"
            name="last_name"
            placeholder="Введите фамилию"
            type="text"
            :required="false"
            class="profile-page__form__content__input-block"
          />
          <button
            type="button"
            @click.prevent="open"
            class="profile-page__form__content__gender"
          >
            <InputBlock
              :readonly="true"
              :value="user.gender"
              @input="user.gender = $event"
              text="Пол"
              id="gender"
              name="gender"
              placeholder="Выберите пол"
              type="text"
              :required="false"
              :arrow="editing"
              class="profile-page__form__content__input-block profile-page__form__content__gender__input-block"
            />
            <transition name="opacity">
              <div
                v-if="show_dropdown && editing"
                class="profile-page__form__content__gender__dropdown"
              >
                <button
                  type="button"
                  @click="selectGender('Мужской')"
                  class="profile-page__form__content__gender__dropdown__button"
                >
                  Мужской
                </button>
                <button
                  type="button"
                  @click="selectGender('Женский')"
                  class="profile-page__form__content__gender__dropdown__button"
                >
                  Женский
                </button>
              </div>
            </transition>
          </button>
          <InputBlock
            :readonly="!editing"
            :value="user.birthday"
            @input="user.birthday = $event"
            text="Дата рождения"
            id="birthday"
            name="birthday"
            placeholder="Дата рождения"
            type="date"
            :required="false"
            class="profile-page__form__content__input-block"
          />
          <InputBlock
            :readonly="!editing"
            v-model="user.password"
            text="Пароль"
            id="password"
            name="password"
            placeholder="Пароль"
            type="password"
            :required="false"
            class="profile-page__form__content__input-block"
          />
          <InputBlock
            :readonly="!editing"
            v-model="user.password_confirmation"
            text="Подтверждение пароля"
            id="password_confirmation"
            name="password_confirmation"
            placeholder="Подтверждение пароля"
            type="password"
            :required="false"
            class="profile-page__form__content__input-block"
          />
        </div>
        <div class="profile-page__form__buttons">
          <transition name="edit-buttons" mode="out-in">
            <ButtonStandart
              type="button"
              @click="editing = true"
              v-if="!editing"
              class="profile-page__form__buttons__button profile-page__form__buttons__button_edit filled"
            >
              Изменить
            </ButtonStandart>
            <div v-else class="profile-page__form__buttons__edits">
              <ButtonStandart
                class="profile-page__form__buttons__button profile-page__form__buttons__button_save filled"
                >Сохранить
              </ButtonStandart>
              <ButtonStandart
                type="button"
                @click="
                  () => {
                    errors = [];
                    user = { ...start_user };
                    editing = false;
                  }
                "
                class="profile-page__form__buttons__button profile-page__form__buttons__button_decline"
              >
                Отмена
              </ButtonStandart>
            </div>
          </transition>
        </div>
        <transition-group
          tag="div"
          class="profile-page__form__messages"
          name="message"
          appear
          mode="out-in"
          :class="{
            'profile-page__form__messages_margined': errors.length,
          }"
        >
          <Message
            v-for="error in errors"
            :key="error"
            class="profile-page__form__messages__item_error profile-page__form__messages__item"
            >{{ error }}</Message
          >
        </transition-group>
      </form>
    </div>
  </div>
</template>
<script>
import errorsMessagesMixin from "@/mixins/errors-messages.js";
export default {
  mixins: [errorsMessagesMixin],
  data() {
    return {
      editing: false,
      user: { ...this.$store.state.account.user },
      start_user: { ...this.$store.state.account.user },
      show_dropdown: false,
    };
  },

  methods: {
    selectGender(gender) {
      this.user.gender = gender;
    },
    open() {
      if (this.editing) {
        this.show_dropdown = true;
        document.addEventListener("click", this.nonDropdownClick);
      }
    },
    close() {
      this.show_dropdown = false;
      document.removeEventListener("click", this.nonDropdownClick);
    },
    nonDropdownClick(event) {
      const dropdown_content = document.querySelector(
        ".profile-page__form__content__gender"
      );
      if (!dropdown_content) return;
      let element_data = dropdown_content.getBoundingClientRect();
      if (
        !(
          event.x >= element_data.x &&
          event.x <= element_data.x + element_data.width &&
          event.y >= element_data.y &&
          event.y <= element_data.y + element_data.height
        )
      )
        this.close();
    },
    edit() {
      this.errors = [];
      let { first_name, last_name, gender, birthday, email } = this.user;
      gender = gender == "Мужской" ? "male" : "female";
      this.$axios
        .post(
          "/api/user/update",
          { first_name, last_name, gender, birthday, email },
          { headers: { Authorization: `Bearer ${this.token}` } }
        )
        .then(({ data: { user } }) => {
          user.gender = user.gender == "male" ? "Мужской" : "Женский";

          this.$store.commit("account/action", (state) => {
            state.user = Object.assign(state.user, user);
          });
          (this.user = { ...this.$store.state.account.user }),
            (this.start_user = { ...this.$store.state.account.user });
          this.errors = [];
          this.editing = false;
        })
        .catch((error) => {
          if (error?.response?.status == 422) {
            this.errors = Object.values(error.response.data.errors)
              .map((el) => el.flat())
              .flat();
          }
          this.editing = true;
        });
    },
  },
  computed: {
    token() {
      return this.$store.state.account.token;
    },
  },
  watch: {
    "$store.state.account.user": {
      handler() {
        (this.user = { ...this.$store.state.account.user }),
          (this.start_user = { ...this.$store.state.account.user }),
          (this.editing = false);
        console.log("Token changed");
      },
      deep: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.edit-buttons {
  &-enter,
  &-leave-to {
    opacity: 0;
  }
  &-enter-active,
  &-leave-active {
    transition: all 0.3s;
  }
}
.profile-page {
  &-wrapper {
    justify-content: flex-start;
    background-color: $light_grey;
  }
  align-items: flex-start;

  &__title {
    margin-bottom: 70px;
    @media screen and (max-width: $tablet) {
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      margin-bottom: 30px;
    }
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
      @media screen and (max-width: $tablet) {
        grid-gap: 30px;
      }
      @media screen and (max-width: $tablet) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 15px;
      }
      &__gender {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        background-color: transparent;
        outline: none;
        border: none;
        position: relative;
        label {
          width: 100%;
        }
        &__dropdown {
          position: relative;
          z-index: 10;
          background-color: transparent;
          border: none;
          outline: none;
          background-color: $white;
          position: absolute;
          top: 100%;
          left: 0%;
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
          height: auto;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
          box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
          padding: 7px 10px;
          &__button {
            outline: none;
            border: none;
            width: 100%;
            box-sizing: border-box;
            text-decoration: none;
            border-bottom: 1px solid $dark_grey;
            min-height: 50px;
            padding: 10px 30px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: row;
            transition: $transition;
            background-color: $white;
            outline: none;
            &:active {
              transform: scale(0.98);
            }
            &:last-child {
              border: none;
            }
          }
        }
      }
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
          background-color: $white;
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
          &_dropdown {
            cursor: pointer;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: row;
            &__selected.placeholdered {
              color: $extra_dark_grey;
            }
            &__content {
              overflow: hidden;
              position: absolute;
              top: 99%;
              left: 25px;
              display: flex;
              align-items: center;
              justify-content: flex-start;
              flex-direction: column;
              width: calc(100% - 50px);
              background-color: $white;
              z-index: $z_dropdown;
              box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
              border-radius: 0px 0px 20px 20px;
              &__button {
                text-align: left;
                width: 100%;
                background-color: transparent;
                border: none;
                padding: 6px 10px;
                border-bottom: 1px solid $dark_grey;
                &.indexed {
                  background-color: $light_grey;
                }
                &:last-of-type {
                  padding-bottom: 10px;
                  border: none;
                }
              }
            }
          }
        }
      }
    }
    &__buttons {
      margin-top: 60px;
      &__edits {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
      }
      &__button {
        width: 170px;
        &_decline {
          margin-left: 20px;
        }
      }
    }
    &__messages {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      width: 100%;
      transition: 0.3s;
      &_margined {
        margin-top: 15px;
      }
      transition: calc($transition * 2);
      .empty {
        margin-top: 0px;
      }
    }
  }
}
</style>
