<template>
  <div class="order">
    <div class="order__buttons">
      <ButtonStandart class="order__buttons__button" >Доставка
      </ButtonStandart>
      <ButtonStandart class="order__buttons__button">
      Самовывоз
      </ButtonStandart>

    </div>
    <InputBlock pre='+7' mask='true' placeholder='000 000 000 00' class='order__phone' name='phone' id='phone' type='text' text='Телефон'/>
  </div>
</template>

<style lang="scss" scoped>
.order {
  padding: 30px;
  border-radius: 20px;
  background-color: $white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  &__buttons {
    width: 100%;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    &__button {
      margin-right: 30px;
      &:last-of-type {
        margin-right: 0px;
      }
    }
  }
    &__phone{
        width:100%;
    }
}
</style>