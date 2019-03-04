<template>
    <div>
        <label>
            {{label}}
            <input
                v-bind="$attrs"
                v-bind:value="value"
                v-on="inputListerners"    
            >
            <slot></slot>
        </label>
    </div>
</template>
<script>
export default {
  inheritAttrs: false,
  props: ["label", "value"],
  computed: {
    inputListerners: function() {
      var vm = this;
      return Object.assign({}, this.$listeners, {
        input: function(event) {
          vm.$emit("input", event.target.value);
        }
      });
    }
  }
};
</script>

