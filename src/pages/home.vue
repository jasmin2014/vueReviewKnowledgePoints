<template>
  <div class="review-vue">
    <h2>重学Vue.js</h2>
    <ul class="clearfix">
      <li>
        <router-link to="/test-api-whatch">Lesson01,Review of the watchers</router-link>
      </li>
      <li>
        <router-link to="/test-directive-v-for">Lesson02,test the directive v-for one</router-link>
      </li>
      <li>
        <router-link to="/test-directive-v-for-delete">Lesson03,test the directive v-for two</router-link>
      </li>
      <li>
        <router-link to="/test-api-v-model-checkbox">Lesson04,test the api v-model at the checkbox</router-link>
      </li>
      <li>
        <router-link
          to="/test-keep-base-listerners-input"
        >Lesson05,test keep base listerners on input</router-link>
      </li>
      <li>
        <router-link to="/test-comp-slot">Lesson06,test the Api Slot</router-link>
      </li>
      <li>
        <router-link
          to="/test-comp-dep-injection"
        >Lesson07,test the components of Dependency Injection</router-link>
      </li>
      <li>
        <router-link to="/test-comp-dynamic">Lesson08,test the DynamicComponents</router-link>
      </li>
      <li>
        <router-link to="/test-comp-recursive">Lesson09,test the component of recursive</router-link>
      </li>
      <li>
        <router-link to="/test-comp-loop">Lesson10,test the loop components</router-link>
      </li>
      <li>
        <router-link to="/test-comp-inline-template">Lesson11,test the components of inline-template</router-link>
      </li>
      <li>
        <router-link to="/test-api-transition">Lesson12,test the components of transition</router-link>
      </li>
      <li>
        <router-link to="/test-functional-comp">Lesson13,test the functional components</router-link>
      </li>
      <li>
        <router-link to="/test-api-animated">Lesson14,test the api animated</router-link>
      </li>
      <li>
        <router-link to="/test-mixins-comp">Lesson15,test the mixin components</router-link>
      </li>
      <li>
        <router-link to="/test-directive">Lesson16,test the api directives</router-link>
      </li>
      <li>
        <router-link to="/test-render-comp">Lesson17,test the render component</router-link>
      </li>
      <li>
        <router-link to="/test-plugn-vue-table2">Lesson18,test the VueUI vueTable2 plugin</router-link>
      </li>
      <li>
        <router-link to="/test-deep-response">Lesson19,test the deep response componet</router-link>
      </li>
      <li>
        <router-link to="/test-the-before-route-enter">Lesson20,test the api [beforeRouteEnter]</router-link>
      </li>
      <li>
        <router-link to="/test-the-scroll-event">Lesson21,test the window's scroll event!</router-link>
      </li>
    </ul>
    <h2>重学Vuex</h2>
    <ul class="clearfix">
      <li>
        <router-link to="/test-the-api-vuex">Lesson22,test the api [Vuex]</router-link>
      </li>
    </ul>
    <h2>重学Flexbox</h2>
    <ul class="clearfix">
      <li>
        <router-link to="/test-the-css-flex">Lesson01,test the css flex</router-link>
      </li>
      <li>
        <router-link to="/test-the-css-grid">Lesson02,test the css grid</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1,
h2 {
  font-weight: normal;
}
.review-vue {
  h2 {
    line-height: 40px;
    border-left: 4px solid orange;
    text-align: left;
    padding-left: 10px;
    margin-top: 30px;
  }
}
.clearfix {
  zoom: 1;
}
.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
.review-vue {
  width: 60%;
  margin: -30px auto 0 auto;
  ul {
    line-height: 40px;
    li {
      float: left;
      margin-right: 20px;
    }
  }
}
</style>
