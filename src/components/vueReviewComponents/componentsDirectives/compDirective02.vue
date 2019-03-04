<template>
  <div class="directive-example" v-demo:foo.a.b="message"></div>
</template>
<script>
export default {
  directives: {
    demo: {
      bind: function(el, binding, vnode) {
        var s = JSON.stringify;
        el.innerHTML =
          "name:" +
          s(binding.name) +
          "<br>" +
          "value:" +
          s(binding.value) +
          "<br>" +
          "expression:" +
          s(binding.expression) +
          "<br>" +
          "argument:" +
          s(binding.arg) +
          "<br>" +
          "modifiers:" +
          s(binding.modifiers) +
          "<br>" +
          "vnode keys:" +
          Object.keys(vnode).join(", ");
      }
    }
  },
  data() {
    return {
      message: "hello!"
    };
  }
};
</script>
<style>
.directive-example {
  width: 600px;
  margin: 0 auto;
  text-align: left;
}
</style>

