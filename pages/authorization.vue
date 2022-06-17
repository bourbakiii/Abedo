<template>
  <div class="page authorization-page wrapper">
    <div class="authorization-page__over content">
      <h1 class="authorization-page__title title-normal">Регистрация</h1>
      <form
        @submit.prevent="authorizateAdmin"
        class="authorization-page__content"
      >
        <InputBlock
          v-model="form.phone"
          pre="+7"
          mask="(###) ###-##-##"
          placeholder="(000) 000 000 00"
          class="authorization-page__content__input-block authorization-page__content__phone"
          name="phone"
          id="login_phone"
          type="text"
          text="Телефон"
          :required="true"
          :autocomplete="false"
        />
        <InputBlock
          v-model="form.password"
          placeholder="Введите пароль"
          class="authorization-page__content__input-block authorization-page__content__password"
          name="registration_password"
          id="registration_password"
          type="password"
          text="Пароль"
          minlength="8"
          :required="true"
        />

        To route - {{ to_route }}

        <ButtonStandart :disabled="loading" :loader="loading" class="authorization-page__content__button"
        >Войти
        </ButtonStandart
        >
        <transition-group
          name="opacity"
          tag="div"
          :class="{
            'authorization-page__content__errors_margined': errors.length,
          }"
          class="authorization-page__content__errors"
        >
          <Message
            v-for="(error,index) in errors"
            :key="`registration-error-${index}`"
            class="authorization-page__content__errors__item_error authorization-page__content__errors__item"
          >{{ error }}
          </Message
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
      form: {
        phone: "",
        password: "",
      },
      to_route: null,
      loading: false,
    };
  },
  created() {

    let {shop_id, product_id} = this.$route.query;
    [shop_id, product_id] = [(shop_id || '').replace(/[^0-9]/g, ""), (product_id || '').replace(/[^0-9]/g, "")]

    try {


      if (shop_id && !product_id)
        this.to_route = `/partners/${shop_id}`
      else if (shop_id && product_id)
        this.to_route = `/product/${product_id}`
      // else throw('asf');
    } catch (error) {
      this.to_route = 'try/catched error';
    }
  },
  mounted() {
    this.$store.commit('variables/action', state => {
      state.adaptive_navigation = {
        text: "Авторизация мененджера",
        slot: 'label',
        info_click: null
      }
    });
  },
  methods: {
    authorizateAdmin() {
      if (this.loading) return;
      this.loading = true;
      this.errors = [];
      this.$axios.post('/api/admin/login', {
        api: 1,
        phone: parseInt(this.form.phone.replace(/\D+/g, "")),
        password: this.form.password

      }).then(({data: {token}}) => {
        this.$store.commit("admin_account/action", state => {
          state.token = token
          state.shop_id = this.$route.query.shop_id
        });
        this.$router.push({path: this.to_route, query: {preview: 1}});
      }).catch(({response}) => {
        if ((response?.status === 422)) {
          this.errors = Object.values(response.data.errors)
            .map((el) => el.flat())
            .flat();
        }
      }).finally(() => this.loading = false)
    },

  },
};
</script>
<style lang="scss" scoped>
.authorization-page {
  @media screen and (max-width: $notebook) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  @media screen and (max-width: $tablet) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  padding-top: 100px;
  padding-bottom: 100px;

  &__over {
    align-items: flex-start;
    justify-content: flex-start;
  }

  &__title {
    margin-bottom: 70px;
    @media screen and (max-width: $notebook) {
      margin-bottom: 50px;
      font-size: 25px;
    }
    @media screen and (max-width: $tablet) {
      margin-bottom: 20px;
      font-weight: 700;
      font-size: 20px;
      line-height: 20px;
    }
  }

  &__content {
    border-radius: 20px;
    background-color: $white;
    padding: 20px;
    width: 100%;
    max-width: 450px;

    &__input-block {
      margin-bottom: 20px;
    }

    &__text {
      margin: 20px 0;
      font-size: 16px;
      @media screen and (max-width: $tablet) {
        font-size: 15px;
      }
    }

    &__button {
      width: 100%;
      max-width: 200px;
      @media screen and (max-width: $tablet) {
        height: 40px;
      }
    }

    &__errors {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      width: 100%;
      transition: calc($transition * 2);

      &_margined {
        margin-top: 15px;
      }


      .empty {
        margin-top: 0;
      }
    }

    &_code {
      border-radius: 20px;
      background-color: $white;
      padding: 20px;
      width: 100%;
      max-width: 450px;

      &__text {
        margin: 20px 0;
        font-size: 16px;
        @media screen and (max-width: $tablet) {
          font-size: 15px;
        }
      }

      &__button {
        width: 100%;
        max-width: 200px;
        @media screen and (max-width: $tablet) {
          height: 40px;
        }
      }
    }
  }
}
</style>
