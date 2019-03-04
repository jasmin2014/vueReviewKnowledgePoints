<template>
    <li>{{title}}<button v-on:click="remove">Remove</button></li>
</template>
<script>
export default {
  name: "todoItem",
  props: ["title"],
  methods: {
    remove() {
      this.$emit("remove");
    }
  }
};
</script>

