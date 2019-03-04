<template>
    <div>
        <input
            type="checkbox"
            v-bind:checked="checked"
            v-on:change="handleChange"
        >{{checked ? '是':'否'}}
    </div>
</template>
<script>
export default {
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    checked: Boolean
  },
  methods: {
    handleChange($event) {
      console.log("aaaaaaaa");
      this.$emit("change", $event.target.checked);
    }
  }
};
</script>

