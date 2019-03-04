<template>
  <div>
    <comp-number-animated :index="'01'"></comp-number-animated>
    <comp-color-animated :index="'02'"></comp-color-animated>
    <comp-polygon-animated :index="'03'"></comp-polygon-animated>
    <comp-animated-integer :index="'04'"></comp-animated-integer>
  </div>
</template>
<script>
import compNumberAnimated from "../../components/vueReviewComponents/componentsAnimated/compNumberAnimated";
import compColorAnimated from "../../components/vueReviewComponents/componentsAnimated/compColorAnimated";
import compPolygonAnimated from "../../components/vueReviewComponents/componentsAnimated/compPolygonAnimated";
import compAnimatedInteger from "../../components/vueReviewComponents/componentsAnimated/compAnimatedInteger";
export default {
  name: "testApiComponentsPage",
  components: {
    compNumberAnimated,
    compColorAnimated,
    compPolygonAnimated,
    compAnimatedInteger
  }
};
</script>

