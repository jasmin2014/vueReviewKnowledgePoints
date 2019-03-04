// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Vuex from "vuex";
import App from "./App";
import router from "./router";
import Global from "./lib/global";
import axios from "axios";
import "./assets/index.css";
import "vue-awesome/icons/flag";
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";
import "./lib/components";
import states from "./stores/index";

Vue.config.productionTip = false;

Vue.use(Global);

Vue.prototype.$axios = axios;

Vue.component("v-icon", Icon);
Vue.use(Vuex);

const store = new Vuex.Store(states);

Vue.mixin({
  data: function() {
    return {
      mixinGlobal:
        'NOTE:Message come from the enterJs "main.js",Every components will get it,wether import mixins or not ,it will be gotton in every vue.js,Use global mixing with caution!',
      globalInjectParams: "this is a globalInjectiParam"
    };
  },
  created: function() {
    console.log("Global mixin injection...");
    var myOption = this.$options.myOption;
    if (myOption) {
      console.log(myOption);
    }
  }
});

const merge = Vue.config.optionMergeStrategies.computed;
Vue.config.optionMergeStrategies.vuex = function(toVal, fromVal) {
  if (!toVal) return fromVal;
  if (!fromVal) return toVal;
  return {
    getters: merge(toVal.getters, fromVal.getters),
    state: merge(toVal.state, fromVal.state),
    actions: merge(toVal.actions, fromVal.actions)
  };
};

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  router,
  components: { App },
  template: "<App/>"
});
