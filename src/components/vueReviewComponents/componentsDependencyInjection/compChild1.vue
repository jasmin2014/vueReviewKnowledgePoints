<template>
  <div>
    <h2>Child component 1</h2>
    <p>this is the first child component</p>
    <p>the param 'foo''s value come from its parent component!foo:{{foo}}</p>
    <p>parentValue:{{parentvalue}}</p>
    {{message}}
  </div>
</template>
<script>
export default {
  inject: ["testFun", "foo", "parentvalue"],
  props: {
    value: {
      default() {
        return this.parentvalue;
      }
    },
    message: {
      default() {
        return "this is the child component,it's come from the Child default message.";
      }
    }
  },
  created() {
    this.testFun();
    console.log("this.foo:", this.foo);
    console.log("default value:", this.value);
  }
};
</script>

