<template>
  <div class="trans-pub">
    <h3>{{index}}.compTransitionByVelocityJsA</h3>
  
    <div class="trans-box">
        Fade In: <input type="range" v-model="fadeInDuration" min="0" v-bind:max="maxFadeDuration">
        Fade Out: <input type="range" v-model="fadeOutDuration" min="0" v-bind:max="maxFadeDuration">
        <transition
            v-bind:class="false"
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:leave="leave"
        >
            <p v-if="show">hello</p>
        </transition>
        <button v-if="stop" v-on:click="shop=false;show=false">Start animating</button>
        <button v-else v-on:click="stop=true">Stop it!</button>
    </div>
  </div>
</template>
<script>
export default {
  props: { index: Number },
  data() {
    return {
      show: true,
      fadeInDuration: 1000,
      fadeOutDuration: 1000,
      maxFadeDuration: 1500,
      stop: true
    };
  },
  mounted() {
    this.show = false;
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      var vm = this;
      Velocity(
        el,
        { opacity: 1 },
        {
          duration: this.fadeInDuration,
          complete() {
            done();
            if (!vm.stop) vm.show = false;
          }
        }
      );
    },
    leave(el, done) {
      var vm = this;
      Velocity(
        el,
        { opacity: 0 },
        {
          duration: this.fadeOutDuration,
          complete() {
            done();
            vm.show = true;
          }
        }
      );
    }
  }
};
</script>

