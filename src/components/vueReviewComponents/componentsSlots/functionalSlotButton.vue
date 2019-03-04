<template>
  <button class="btn btn-primary" v-bind="$attrs" v-on="listerners">
    <slot/>
  </button>
</template>
<script>
export default {
  computed: {
    listerners: function() {
      var vm = this;
      return Object.assign({}, this.$listeners);
    }
  }
};
</script>

