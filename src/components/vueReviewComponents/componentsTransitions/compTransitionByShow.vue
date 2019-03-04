<template>
  <div class="trans-pub">
    <h3>{{index}}.compTransitionByShow!</h3>
    <div class="trans-box">        
        <button v-on:click="show=!show">Toggle</button>
        <transition name="fade">
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
<style>
.trans-pub {
  width: 600px;
  margin: 0 auto;
}
.trans-pub h3 {
  text-align: left;
  line-height: 40px;
  height: 40px;
  border-bottom: 1px solid #ddd;
  color: orange;
  margin-top: 20px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>


