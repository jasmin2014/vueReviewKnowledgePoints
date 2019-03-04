<template>
  <div class="render-example">
    <anchored-heading :level="1">Hello Title</anchored-heading>
    <anchored-heading :level="2">Hello world!</anchored-heading>
    <section-length-20></section-length-20>
    <h2>a component from a renderComp</h2>
    <my-anchored-heading></my-anchored-heading>
  </div>
</template>
<script>
import myAnchoredHeading from "../../components/vueReviewComponents/compRenders/compRender01";
export default {
  name: "testRenderComponentPage",
  components: { myAnchoredHeading }
};
</script>
<style>
.render-example h2 a {
  color: orange;
}
</style>

