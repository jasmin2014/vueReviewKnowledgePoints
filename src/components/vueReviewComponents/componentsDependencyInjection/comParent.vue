<template>
    <div>
        <h1>This is the parant component!</h1>
        <slot></slot>
    </div>
</template>
<script>
export default {
  provide() {
    return {
      testFun: this.testFun,
      foo: "bar",
      parentvalue: "myParentValues"
    };
  },
  methods: {
    testFun() {
      console.log("this is the parent comp message!");
    }
  }
};
</script>
<style>
</style>


