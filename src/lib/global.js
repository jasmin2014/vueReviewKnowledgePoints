import lodash from "lodash";
// import http from "./https";

function install(Vue) {
  //   Vue.prototype.$http = http;
  Vue.prototype.lodash = lodash;
}
export default { install };
