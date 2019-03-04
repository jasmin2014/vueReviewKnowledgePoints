<template>
  <div class="trans-pub">
    <h3>{{index}}.compTransitionAnimationed!</h3>  
    <div class="trans-animate">        
        <div>
            <button @click="show=!show">Toggle show</button>
        </div>
        <transition name="bounce">
            <p v-if="show">Lorem ipsum dolor sit amet,consectetur adipiscing elit.Mauris facilisis enim libero,at lacinia diam fermentum id.Pellentesque habitant morbi tristique senectus et netus.</p>
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
.trans-animate {
  width: 600px;
  margin: 15px auto 0 auto;
  /* display: flex; */
}
.trans-animate button {
  margin-right: 10px;
  display: block;
}
.trans-animate p {
  display: block;
  text-align: left;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>


