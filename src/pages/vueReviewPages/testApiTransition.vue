<template>
  <div class="trans-content">
    <comp-transition-by-show :index="1"/>
    <comp-transition-by-css :index="2"/>
    <comp-transition-animationed :index="3"/>
    <comp-transition-by-animate-css :index="4"/>
    <comp-transition-by-velocity-js-a :index="5"/>
    <comp-transition-by-velocity-js-b :index="6"/>
    <comp-transition-to-use-custom-complete :index="7"/>

    <comp-transition-group-list :index="8"/>
    <comp-transition-group-flip-list :index="9"/>
    <comp-transition-group-list-complete-a :index="10"/>
    <comp-transition-group-list-complete-b :index="11"/>
    <comp-transition-group-straggered-fade :index="12"/>
  </div>
</template>
<script>
import compTransitionByShow from "../../components/vueReviewComponents/componentsTransitions/compTransitionByShow";
import compTransitionByCss from "../../components/vueReviewComponents/componentsTransitions/compTransitionByCss";
import compTransitionAnimationed from "../../components/vueReviewComponents/componentsTransitions/compTransitionAnimationed";
import compTransitionByAnimateCss from "../../components/vueReviewComponents/componentsTransitions/compTransitionByAnimateCss";
import compTransitionByVelocityJsA from "../../components/vueReviewComponents/componentsTransitions/compTransitionByVelocityJsA";
import compTransitionByVelocityJsB from "../../components/vueReviewComponents/componentsTransitions/compTransitionByVelocityJsB";
import compTransitionToUseCustomComplete from "../../components/vueReviewComponents/componentsTransitions/compTransitionToUseCustomComplete";
import compTransitionGroupList from "../../components/vueReviewComponents/componentsTransitions/compTransitionGroupList";
import compTransitionGroupFlipList from "../../components/vueReviewComponents/componentsTransitions/compTransitionGroupFlipList";
import compTransitionGroupListCompleteA from "../../components/vueReviewComponents/componentsTransitions/compTransitionGroupListCompleteA";
import compTransitionGroupListCompleteB from "../../components/vueReviewComponents/componentsTransitions/compTransitionGroupListCompleteB";
import compTransitionGroupStraggeredFade from "../../components/vueReviewComponents/componentsTransitions/compTransitionGroupStraggeredFade";
export default {
  name: "testApiTransitionPage",
  components: {
    compTransitionByShow,
    compTransitionByCss,
    compTransitionAnimationed,
    compTransitionByAnimateCss,
    compTransitionByVelocityJsA,
    compTransitionByVelocityJsB,
    compTransitionToUseCustomComplete,
    compTransitionGroupList,
    compTransitionGroupFlipList,
    compTransitionGroupListCompleteA,
    compTransitionGroupListCompleteB,
    compTransitionGroupStraggeredFade
  },
  data() {
    return {
      // view: "comp-transition-a"
    };
  },
  methods: {}
};
</script>
<style>
.trans-content {
  padding-bottom: 20vh;
}
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}
</style>


