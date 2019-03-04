<template>
  <div class="trans-pub">
    <h3>{{index}}.compTranstionByVelocityJs</h3>
    <div class="trans-box">
        <button @click="show = !show">Toggle</button>
        <transition
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:leave="leave"
            v-bind:css="false"
        >
            <p v-if="show">Demo</p>
        </transition>
    </div>
  </div>
</template>
<script>
export default {
  props: { index: Number },
  data() {
    return {
      show: false
    };
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.transformOrigin = "left";
    },
    enter(el, done) {
      Velocity(
        el,
        {
          opacity: 1,
          fontSize: "1.4em"
        },
        {
          duration: 300
        }
      );
      Velocity(
        el,
        {
          fontSize: "1em"
        },
        {
          complete: done
        }
      );
    },
    leave(el, done) {
      Velocity(
        el,
        {
          translateX: "15px",
          rotateZ: "50deg"
        },
        { duration: 600 }
      );
      Velocity(el, { rotateZ: "100deg" }, { loop: 2 });
      Velocity(
        el,
        {
          rotateZ: "45deg",
          translateY: "30px",
          translateX: "30px",
          opacity: 0
        },
        { complete: done }
      );
    }
  }
};
</script>

