<template>
  <div>
    <p>beforeRouteEnter:{{beforeEnterRoute}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      beforeEnterRoute: ""
    };
  },
  beforeRouteEnter(to, from, next) {
    this.beforeEnterRoute = "I am entering before the route enter";
    console.log(this.beforeEnterRoute);
  },
  methods: {}
};
</script>

