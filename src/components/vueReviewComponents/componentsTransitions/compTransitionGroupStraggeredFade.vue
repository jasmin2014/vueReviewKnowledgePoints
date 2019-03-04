<template>
  <div class="trans-pub">
    <h3>{{index}}.compTransitionGroupStraggeredFade</h3>
    <div class="trans-group-e">
        <input v-model="query"/>
        <transition-group
            name="staggered-fade"
            tag="ul"
            v-bind:css="false"
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:leave="leave"
        >
            <li
                v-for="(item,index) in computedList"
                v-bind:key="item.msg"
                v-bind:data-index="index"
            >{{item.msg}}</li>
        </transition-group>
    </div>
  </div>
</template>
<script>
export default {
  props: { index: Number },
  data() {
    return {
      query: "",
      list: [
        { msg: "Bruce Lee" },
        { msg: "Jackie Chan" },
        { msg: "Chuck Norris" },
        { msg: "Jet Li" },
        { msg: "Kung Fury" }
      ]
    };
  },
  computed: {
    computedList() {
      var vm = this;
      return this.list.filter(item => {
        return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1;
      });
    }
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter(el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(() => {
        Velocity(el, { opacity: 1, height: "1.6em" }, { complete: done });
      }, delay);
    },
    leave(el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(() => {
        Velocity(el, { opacity: 0, height: 0 }, { complete: done });
      }, delay);
    }
  }
};
</script>
<style>
.trans-group-e {
  width: 600px;
  margin: 0 auto;
  text-align: left;
}
</style>


