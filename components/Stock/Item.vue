<template>
  <!-- <div class="stock-item stock-wrapper">
    
  </div> -->
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

.stock-wrapper {
  width: 100%;
  background-image: url("@/assets/images/stock-placeholder.png");
  border-radius: 20px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;
  transition: 0.3s;
}
.stock {
  width: 100%;
  height: 100%;
  background-color: rgba($orange, 0.9);
  display: flex;align-items: center;justify-content: flex-start;flex-direction: column;
  cursor: pointer;
  &__hood {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width:100%;
    flex-shrink: 0;
    margin-bottom: 22px;
    &.befored {
      margin-bottom: 57px;
      &::before {
        position: absolute;
        top: calc(100% + 15px);
        left: 0px;
        width: 69px;
        height: 1px;
        border-radius: 10px;
        background-color: $white;
        content: "";
        z-index: 2;
      }
    }
    &__logo {
      width: 120px;
      height: 60px;
      object-fit: contain;
      background-color: $white;
      border-radius: 10px;
      margin-right: 17px;
    }
    &__name {
      flex-grow: 1;
      color: $white;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      text-align: left;
    }
  }
  &__text {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 27px;
    color: $white;
    width:100%;
    max-height: 100%;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>

<template>
<div class="parent">
    <div class="stock">
      <div class="stock__content">
      <div class="stock__hood" :class="{ befored: true }">
        <img v-if="false" class="stock__hood__logo" />
        <p class="stock__hood__name">Кафе “Лимончелло”</p>
      </div>
      <p class="stock__text">Получайте 1% бонусами и скидку до 99%</p>
    </div>
    </div>
</div>
</template>
<style lang="scss" scoped>
.parent {
  background-color: red;
    position: relative;
    width: 400px;
    width:100%;
    max-width:400px;
}
.stock {
    position: relative;
    padding-bottom: calc(100% * 1 / 2);
    &__content{
      position: absolute;top:0px;left:0px;right:0px;bottom:0px;
    }
}


</style>