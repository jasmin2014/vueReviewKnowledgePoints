<template>
  <div id="app">
    <div class="header">
      <div class="content">
        <router-link to="/">
          <span class="img">
            <img src="./assets/logo.png">
          </span>
          <span class="text">Review Vue.js</span>
        </router-link>
      </div>
    </div>
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      transitionName: ""
    };
  },
  watch: {
    $route(to, from) {
      console.log("to:", to);
      console.log("from:", from);
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      console.log("toDepth:", toDepth);
      console.log("fromDepth:", fromDepth);
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
      console.log("this.transitionName:", this.transitionName);
    }
  }
};
</script>

<style>
.header {
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  height: 3em;
  line-height: 3em;
  border-bottom: 1px solid #ddd;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  padding: 0.3em 0;
}
.header .content {
  display: flex;
  position: relative;
  width: 60%;
  margin: 0 auto;
}
.header .content a {
  display: block;
  width: 100%;
}
.header span.img {
  width: 40px;
  height: 40px;
  position: absolute;
  left: 50%;
  top: 5px;
  margin-left: -100px;
}
.header span.img img {
  width: 40px;
  height: 40px;
}
.header span.text {
  height: 40px;
  line-height: 40px;
  flex: 1;
}
#app {
  padding-top: 3em;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
