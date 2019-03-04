<template>
  <div>
    <input v-focus>
    <directive-demo></directive-demo>
    <directive-demo02></directive-demo02>
  </div>
</template>
<script>
import myDirectiveMixin from "../../components/vueReviewComponents/componentsDirectives/compDirective01";
import directiveDemo from "../../components/vueReviewComponents/componentsDirectives/compDirective02";
import directiveDemo02 from "../../components/vueReviewComponents/componentsDirectives/compDirective03";
export default {
  name: "testApiDirectivePage",
  components: { directiveDemo, directiveDemo02 },
  mixins: [myDirectiveMixin]
  //   directives: {
  //     focus: {
  //       inserted: function(el) {
  //         console.log("aaaaaaaaaa");
  //         el.focus();
  //       }
  //     }
  //   }
};
</script>

