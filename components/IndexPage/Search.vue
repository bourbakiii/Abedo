<template>
  <div class="page index-page-search">
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      show_result: false,
      query: "",
      categories: [
        { id: 1, name: "Lorem ipsum dolor mi met megretto consis" },
        { id: 2, name: "Lorem ipsum dolor mi met megretto consis" },
        { id: 3, name: "Lorem ipsum dolor mi met megretto consis" },
        { id: 4, name: "Lorem ipsum dolor mi met megretto consis" },
        { id: 5, name: "Lorem ipsum dolor mi met megretto consis" },
        { id: 6, name: "Lorem ipsum dolor mi met megretto consis" },
        { id: 7, name: "Lorem ipsum dolor mi met megretto consis" },
        { id: 8, name: "Lorem ipsum dolor mi met megretto consis" },
        { id: 9, name: "Lorem ipsum dolor mi met megretto consis" },
        { id: 10, name: "Lorem ipsum dolor mi met megretto consis" },
        { id: 11, name: "Lorem ipsum dolor mi met megretto consis" },
        { id: 12, name: "Lorem ipsum dolor mi met megretto consis" },
      ],
    };
  },
  methods: {
    search() {
      this.showResult();
    },
    showResult(){
      this.show_result = true;
      this.dropdownClick();
    },
    dropdownClick(){
       const dropdownClick = (event) => {
        const dropdown_content = document.querySelector(
          ".search__input__dropdown-content"
        );
        if (!dropdown_content) return;
        let element_data = dropdown_content.getBoundingClientRect();
        if (
          !(
            event.x >= element_data.x &&
            event.x <= element_data.x + element_data.width &&
            event.y >= element_data.y &&
            event.y <= element_data.y + element_data.height
          )
        ) {
          this.show_result = false;
          document.removeEventListener("click", dropdownClick);
        }
      };
      document.addEventListener("click", dropdownClick);
    },
    watchAll() {
      this.$router.push('/search');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
