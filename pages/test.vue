<template>
    <div class="page test-page wrapper">
        <div class="test-page__content content">
        <!-- <PagesIndexStocksSlider /> -->
        <StockItem/>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.test-page{
    &__content{
    justify-content: center;align-items: center;
    background-color: rgba(0,0,0,.1);
    height: 100%; flex-grow: 1;
    }
}
</style>