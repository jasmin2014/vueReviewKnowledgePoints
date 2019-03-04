<template>
    <div class="trans-pub">
        <h3>{{index}}.compTransitionToUseCustomComplete</h3>
    
        <div class="trans-box">
            <input type="radio" name="transitionComponent" value="comp-transition-a" v-model="view"/>A
            <input type="radio" name="transitionComponent" value="comp-transition-b" v-model="view"/>B                    
            <transition name="component-fade" mode="out-in">
                <component v-bind:is="view"></component>
            </transition>
        </div>
    </div>
</template>
<script>
import compTransitionA from "./componentsTransitionToUseCustomComplete/compTransitionA";
import compTransitionB from "./componentsTransitionToUseCustomComplete/compTransitionB";
export default {
  components: { compTransitionA, compTransitionB },
  props: { index: Number },
  data() {
    return {
      view: "comp-transition-a"
    };
  }
};
</script>
