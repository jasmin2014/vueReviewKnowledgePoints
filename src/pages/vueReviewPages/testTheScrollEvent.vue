<template>
  <div class="scroll-height"></div>
</template>
<script>
export default {
  name: "testTheScrollEventPage",
  data() {
    return {
      scrollTop: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(e) {
      console.log("handleScroll:", e);
    }
  }
};
</script>
<style>
.scroll-height {
  display: block;
  width: 600px;
  margin: 0 auto;
  background: #ccc;
  height: 2000px;
}
</style>


