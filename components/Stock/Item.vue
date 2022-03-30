<template>
  <div class="stock-item stock">
      <div class="stock-overlay"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .stock{
        width:403px;
        height:200px;
        background-image: url('@/assets/images/stock-placeholder.png');
        border-radius: 20px;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        border-radius: 20px;
        overflow: hidden;
        &-overlay{
            width:100%;
            height:100%;
            position: absolute;
            top: 50%;
            left:50%;
            background-color: $orange;
            opacity:0.9;
            transform: translate(-50%, -50%);
            z-index: 10;
        }
    }
</style>