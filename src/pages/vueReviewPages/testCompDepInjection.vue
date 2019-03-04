<template>
  <comp-parent>
    <comp-child1></comp-child1>
    <comp-child1 :value="value" :message="message"></comp-child1>
    <comp-child2></comp-child2>
  </comp-parent>
</template>

<script>
import compParent from "../../components/vueReviewComponents/componentsDependencyInjection/comParent";
import compChild1 from "../../components/vueReviewComponents/componentsDependencyInjection/compChild1";
import compChild2 from "../../components/vueReviewComponents/componentsDependencyInjection/compChild2";
export default {
  name: "testCompDepInjectionPage",
  components: { compParent, compChild1, compChild2 },
  data() {
    return {
      value: "children Value",
      message:
        'this message come from the page which import its child component "comp-child"'
    };
  }
};
</script>

<style>
</style>
