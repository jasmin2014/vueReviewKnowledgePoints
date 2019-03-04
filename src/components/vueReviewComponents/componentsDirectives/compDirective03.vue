<template>
  <div v-demo="{color:'white',text:'hello!'}"></div>
</template>
<script>
export default {
  directives: {
    demo: {
      bind: function(el, binding) {
        console.log(binding.value.color);
        console.log(binding.value.text);
      }
    }
  }
};
</script>

