<template>
    <div class="tab-archive" :style="'width:'+width+'px'">Archive component</div>
</template>
<script>
export default {
  props: {
    width: {
      default() {
        return 600;
      }
    }
  }
};
</script>
<style>
.tab-archive {
  margin: 0 auto;
}
</style>


