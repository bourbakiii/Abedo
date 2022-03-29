<template>
  <div class="navigation">
      <NuxtLink to = '/' class='navigation__logo'>
      <img src="@/assets/images/abedo-logo.png" class="navigation__logo-image"/>
      <img src="@/assets/images/abedo-logo-text.png" class="navigation__logo-image"/>
      </NuxtLink>
      <ButtonIcon color='red' icon='squares' text='Партнеры'/>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.navigation{
    width:100%;
    height:100px;
    background-color: $white;
    border: 1px solid black;
    display: flex;align-items: center;justify-content: center;
    &__logo{
        display: flex;align-items: center;justify-content: center;
        &-image:first-of-type{
            margin-right:18px;
        }
    }
}
</style>