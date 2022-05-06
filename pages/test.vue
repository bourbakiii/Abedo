<template>
  <div class="page test-page wrapper">
    <input type="text" v-model="query" @input="get_addresses_handler" />
    {{suggestions}}
  </div>
</template>
<script>
export default {
  data(){
    return{
      suggestions:[],
      timer: null,
      query: null
    }
  },
  methods:{
    get_addresses(){
      this.$axios
      .post(
        "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",
        { query: this.query }, // data
        {
          headers: {
            contentType: "application/json",
            Authorization: "Token 86b3d2232cfec3a06b3f04020518fdbc5a7b7adf", // тут должен быть ваш токен
          },
        }
      )
      .then(({data:{suggestions}}) =>{
        this.suggestions = suggestions;
      });
    },
    get_addresses_handler(){
      clearTimeout(this.timer);
      this.timer = setTimeout(()=>{
              clearTimeout(this.timer);
              this.get_addresses();
      },500);
    }
  }
};
</script>

