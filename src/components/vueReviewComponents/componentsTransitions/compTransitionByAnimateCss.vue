<template>
  <div class="trans-pub">
      <h3>{{index}}.compTransitionByAnimateCss</h3>    
      <div class="trans-box">
        <button @click="show = !show">Toggle render</button>
        <transition
            name="custion-classes-transition"
            enter-active-class="animated tada"
            leave-active-class="animated bounceOutRight"
        >
            <p v-if="show">hello</p>
        </transition>
      </div>
    </div>
</template>
<script>
export default {
  props: { index: Number },
  data() {
    return {
      show: true
    };
  }
};
</script>

