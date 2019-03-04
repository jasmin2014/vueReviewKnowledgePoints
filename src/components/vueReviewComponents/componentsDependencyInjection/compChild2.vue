<template>
<div>
    <h2>Child component2</h2>
    this is the second Child component.the param foo:{{foo}} come from its default value;
</div>
</template>
<script>
export default {
  inject: {
    foo: { from: "bar", default: () => [1, 2, 3] }
  }
};
</script>

