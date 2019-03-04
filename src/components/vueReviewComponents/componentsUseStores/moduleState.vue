<template>
  <div>
    <p>
      testCount from moduleStateA:
      <button @click="decrement">-</button>
      {{countA}}
      <button @click="increment">+</button>
    </p>
    <p>
      doubleCount from moduleStateA:
      {{doneToDoubleCount}}
      <button
        @click="incrementFromStateAIfOdd"
      >OddCountAdd</button>
    </p>
    <p>testCount from moduleStateB: {{countB}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      countA: this.$store.state.a.testCount,
      countB: this.$store.state.b.testCount
    };
  },
  // if moduleStateA has a namespaced is true,we need to use its namespace 'a/'
  computed: {
    doneToDoubleCount() {
      console.log("this.$store:", this.$store);
      return this.$store.getters["a/doubleMoudleStateACount"];
    }
  },
  created() {},
  methods: {
    increment() {
      this.$store.commit("a/incrementModuleStateA");
      this.countA = this.$store.state.a.testCount;
    },
    decrement() {
      this.$store.commit("a/decrementModuleStateA");
      this.countA = this.$store.state.a.testCount;
    },
    incrementFromStateAIfOdd() {
      this.$store.dispatch("a/incrementFromStateAIfOdd");
      this.countA = this.$store.state.a.testCount;
    }
  }
};
</script>

