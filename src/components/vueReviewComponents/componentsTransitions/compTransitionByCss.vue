<template>
  <div class="trans-pub">
    <h3>{{index}}.compTransitionByCss!</h3>
    <div class="trans-box">        
        <button @click="show = !show">Toggle render</button>
        <transition name="slide-fade">
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
.trans-box {
  width: 600px;
  margin: 15px auto 0 auto;
  display: flex;
}
.trans-box button {
  margin-right: 10px;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>


