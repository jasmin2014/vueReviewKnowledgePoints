<template>
    <div>
        <p>this is a recursive components {{maxTimes}}</p>
        <component v-if="maxTimes<=0" v-bind:is="'recursive-component'"></component>
    </div>
</template>
<script>
import recursiveComponent from "./recursive";
export default {
  name: "recursiveComponent",
  components: { recursiveComponent },
  data() {
    return {
      maxTimes: 5
    };
  },
  created() {
    this.countDown(5);
  },
  methods: {
    countDown(time) {
      if (time >= 0) {
        this.maxTimes = `${time}`;
        setTimeout(() => {
          this.countDown(--time);
        }, 1000);
      }
    }
  }
};
</script>

