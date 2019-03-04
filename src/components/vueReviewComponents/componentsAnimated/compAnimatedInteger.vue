<template>
  <div class="animated-example">
    <h2>{{index}}. animated4-animated in components</h2>
    <input v-model.number="firstNumber" type="number" step="20">+
    <input v-model.number="secondNumber" type="number" step="20">
    =
    {{result}}
    <p>
      <animated-integer v-bind:value="firstNumber"></animated-integer>+
      <animated-integer v-bind:value="secondNumber"></animated-integer>=
      <animated-integer v-bind:value="result"></animated-integer>
    </p>
  </div>
</template>
<script>
import animatedInteger from "./compNumberAnimatedInComp";
export default {
  components: { animatedInteger },
  props: {
    index: String
  },
  data() {
    return {
      firstNumber: 20,
      secondNumber: 40
    };
  },
  computed: {
    result: function() {
      return this.firstNumber + this.secondNumber;
    }
  }
};
</script>

