<template>
  <div class="animated-example">
    <h2>{{index}}. animated1-Number</h2>
    <input v-model.number="number" type="number" step="20">
    <span>{{animatedNumber}}</span>
  </div>
</template>
<script>
export default {
  name: "animatedNumberDemo",
  props: {
    index: String
  },
  data() {
    return {
      number: 0,
      tweenedNumber: 0
    };
  },
  computed: {
    animatedNumber() {
      return this.tweenedNumber.toFixed(0);
    }
  },
  watch: {
    number: function(newValue) {
      TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue });
    }
  }
};
</script>
<style>
.animated-example {
  width: 600px;
  margin: 0 auto;
  text-align: left;
}
.animated-example h2 {
  color: orange;
  margin-top: 20px;
}
</style>

