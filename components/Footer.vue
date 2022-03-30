<template>
  <div class="footer-wrapper">
    <div class="footer">
      <div class="footer__top">
        <div class="footer__top__logo-block">
          <NuxtLink to="/" class="footer__top__logo-block-logo">
            <img
              src="@/assets/images/abedo-logo.png"
              alt=""
              class="footer__top__logo-block-logo-logo"
            />
            <img
              src="@/assets/images/abedo-logo-text.png"
              alt=""
              class="footer__top__logo-block-logo-logo"
            />
          </NuxtLink>
          <p class="footer__top__logo-block-text">
            © {{ new Date().getFullYear() }}
          </p>
          <p class="footer__top__logo-block-text">Все права защищены</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer-wrapper {
  width: 100%;
  background-color: $black;
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer {
  width: 100%;
  max-width: $maxwidth;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  color: $white;
  &__top {
    width: 100%;
    height: 198px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    border: 1px solid red;
    padding: 0px 63px;
    &__logo-block {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      &-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
        &-logo {
          &:first-of-type {
            width: 30px;
            height: 30px;
            object-fit: contain;
          }
          &:last-of-type {
            width: 77px;
            height: 24px;
            object-fit: contain;
          }
        }
      }
      &-text {
        margin: 0;
        color: $white;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
