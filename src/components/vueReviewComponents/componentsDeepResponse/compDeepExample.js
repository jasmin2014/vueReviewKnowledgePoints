import Vue from "vue";
Vue.component("compDeepResponse", {
  template: "<span>{{message}}</span>",
  data() {
    return {
      message: "没有更新"
    };
  },
  methods: {
    updateMessage: async function() {
      this.message = "更新完成";
      console.log(this.$el.textContent);
      await this.$nextTick(function() {
        console.log(this.$el.textContent);
      });
    }
  }
});
