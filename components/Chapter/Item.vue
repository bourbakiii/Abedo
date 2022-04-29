<template>
  <button @click.prevent='act' class="chapter-item">
      {{chapter.name}}
      </button>
</template>
<script>
export default {
    props:{
        chapter:{
            required: true
        },
        action:{
            required:false,
        }
    },
    methods:{
        act(){
            if(this.action) this.action();
            else {
            const element = document.getElementById(`chapter-${this.chapter.id}`);
              element.scrollIntoView({block: "center", behavior: "smooth"});
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.chapter-item {
  border-radius: 50px;
  background-color: $white;
  border: 1px solid $darkblue;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  white-space: nowrap;
  height: 45px;
  padding: 0px 25px;
    transition:  $transition;
  &:hover, &.active{
      background-color: $darkblue;
      color:$white;
  }
}
</style>
