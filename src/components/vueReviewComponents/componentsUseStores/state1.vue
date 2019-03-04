<template>
  <div class="vuex-state">
    <div>{{doneTodos}} - count: {{doneTodosCount}}</div>
    <div>getTodoById:{{getTodoById}}</div>
    <div>
      <button @click="decrement">-</button>
      {{count}}
      <button @click="increment">+</button>
      <p>
        {{name}} {{age}}
        <button @click="testAction">display Name</button>
      </p>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      // doneTodos: this.$store.getters.doneTodos
    };
  },
  computed: {
    ...mapState(["count", "name", "age"]),
    ...mapGetters(["doneTodos", "doneTodosCount"]),
    // doneTodos() {
    //   return this.$store.getters.doneTodos;
    // },
    // doneTodosCount() {
    //   return this.$store.getters.doneTodosCount;
    // },
    getTodoById() {
      return this.$store.getters.getTodoById(2);
    }
  },
  methods: {
    increment() {
      this.$store.dispatch("incrementAsync");
    },
    decrement() {
      this.$store.commit("decrement");
    },
    testAction() {
      this.$store.dispatch("actionB").then(() => {
        console.log("this.$store.state.name:", this.$store.state.name);
        console.log("this.$store.state.age:", this.$store.state.age);
        // this.$store.state.name = "testAction";
      });
    }
  },
  watch: {
    count: function(oldVal, Val) {
      this.count = Val;
    }
  },
  created() {}
};
</script>
<style>
.vuex-state {
  width: 600px;
  margin: 0 auto;
  text-align: left;
}
</style>

