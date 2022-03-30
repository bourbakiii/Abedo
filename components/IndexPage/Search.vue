<template>
  <div class="search-wrapper index-page-search">
    <div class="search">
      <h1 class="title title-big lightblack">Быстрая доставка еды</h1>
      <form class="search__input">
        <svg
          class="search__input-icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1887_4787)">
            <path
              d="M8.80758 0C3.95121 0 0 3.95121 0 8.80758C0 13.6642 3.95121 17.6152 8.80758 17.6152C13.6642 17.6152 17.6152 13.6642 17.6152 8.80758C17.6152 3.95121 13.6642 0 8.80758 0ZM8.80758 15.9892C4.8477 15.9892 1.62602 12.7675 1.62602 8.80762C1.62602 4.84773 4.8477 1.62602 8.80758 1.62602C12.7675 1.62602 15.9891 4.8477 15.9891 8.80758C15.9891 12.7675 12.7675 15.9892 8.80758 15.9892Z"
              fill="#A6A8A8"
            />
            <path
              d="M19.7617 18.6122L15.1005 13.9509C14.7829 13.6333 14.2685 13.6333 13.9509 13.9509C13.6332 14.2683 13.6332 14.7832 13.9509 15.1005L18.6121 19.7618C18.7709 19.9206 18.9788 20 19.1869 20C19.3948 20 19.6029 19.9206 19.7617 19.7618C20.0793 19.4444 20.0793 18.9295 19.7617 18.6122Z"
              fill="#A6A8A8"
            />
          </g>
          <defs>
            <clipPath id="clip0_1887_4787">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <input
          placeholder="Найти магазин товар или услугу "
          type="text"
          minlength="3"
          class="search__input-input"
        />
      </form>
      {{categories.length}}
      <div class="search__categories" v-if='categories'>
        <CategoryItem v-for='category in categories' :key='category.id' class='black' :category='category'/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      categories:[
        {id:1,name:'Lorem ipsum dolor mi met megretto consis'},
        {id:2,name:'Lorem ipsum dolor mi met megretto consis'},
        {id:3,name:'Lorem ipsum dolor mi met megretto consis'},
        {id:4,name:'Lorem ipsum dolor mi met megretto consis'},
        {id:5,name:'Lorem ipsum dolor mi met megretto consis'},
        {id:6,name:'Lorem ipsum dolor mi met megretto consis'},
        {id:7,name:'Lorem ipsum dolor mi met megretto consis'},
        {id:8,name:'Lorem ipsum dolor mi met megretto consis'},
        {id:9,name:'Lorem ipsum dolor mi met megretto consis'},
        {id:10,name:'Lorem ipsum dolor mi met megretto consis'},
        {id:11,name:'Lorem ipsum dolor mi met megretto consis'},
        {id:12,name:'Lorem ipsum dolor mi met megretto consis'},
        {id:13,name:'Lorem ipsum dolor mi met megretto consis'},
        {id:14,name:'Lorem ipsum dolor mi met megretto consis'},
        {id:15,name:'Lorem ipsum dolor mi met megretto consis'},
        {id:16,name:'Lorem ipsum dolor mi met megretto consis'},
        {id:17,name:'Lorem ipsum dolor mi met megretto consis'},
      ]
    }
  }
};
</script>

<style lang='scss' scoped>
.search-wrapper {
  width: 100%;
  min-height: 319px;
  background-color: $gray_three;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 70px 0px;
}
.search {
  width: 100%;
  height: 100%;
  flex-grow: 1;
  max-width: $maxwidth;
  border: 1px solid black;
  .title {
    margin-bottom: 40px;
  }
  &__input {
    width: 730px;
    height: 60px;
    background-color: $white;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    overflow: hidden;
    &-icon {
      margin: 0px 20px;
    }
    &-input {
      height: 100%;
      width: 100%;
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      display: flex;
      align-items: center;
      outline: none;
      border: none;
      overflow: hidden;
      padding-right: 15px;
      border-radius: 0px 50px 50px 0px;
      &::placeholder {
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        display: flex;
        align-items: center;
      }
    }
  }
  &__categories{
    width:100%; max-width:100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 30px;
    overflow: hidden;
    .category{
      width: 295px;
    }
  }
}
</style>