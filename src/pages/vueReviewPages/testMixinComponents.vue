<template>
  <div class="mixin-example">
    <section>
      <h2>mixin test01</h2>
      <p>{{msgMixin02}}</p>
      <p>Note:the param [message:"{{message}}"] is the same param in mixin02 and the current components,but it just only get the current component 's value!</p>
      <ul>
        <li v-for="(item,index) in allParms" :key="index">
          <span>{{item}}</span>
          :{{totalDatas[item]}}
        </li>
      </ul>
    </section>
    <section>
      <h2>mixin test02</h2>
      <p>{{msgMixin01}}</p>
    </section>
    <section>
      <h2>mixin test03</h2>
      <p>{{mixin03}}</p>
    </section>
    <section>
      <h2>mixin test04</h2>
      <p>{{msgMixin04}}</p>
    </section>
    <section>
      <h2>mixin test05</h2>
      <p style="color:red">{{mixinGlobal}}</p>
      <p>globalInjectParams:{{globalInjectParams}},it comes from the enterJs "main.js"</p>
    </section>
  </div>
</template>
<script>
import mixin01 from "../../components/vueReviewComponents/componentsMixins/mixin01";
import mixin02 from "../../components/vueReviewComponents/componentsMixins/mixin02";
import mixin03 from "../../components/vueReviewComponents/componentsMixins/mixin03";
import mixin04 from "../../components/vueReviewComponents/componentsMixins/mixin04";
export default {
  name: "testMixinComponentsPage",
  mixins: [mixin01, mixin02, mixin03, mixin04],
  data() {
    return {
      message: "goodbye",
      bar: "def",
      allParms: []
    };
  },
  computed: {
    totalDatas() {
      return this.$data;
    }
  },
  created() {
    for (let item in this.$data) {
      console.log("item:", item);
      this.allParms.push(item);
    }
    console.log("this.allParms:", this.allParms);

    console.log("current component will be gotton after mixin03 object!");

    this.fooMixin04();
    this.barCurrentComp();
    this.conflicting();
    console.log("this.globalInjectParams:", this.globalInjectParams);
  },
  methods: {
    barCurrentComp() {
      console.log("current component:bar!");
    },
    conflicting() {
      console.log("current component:from itself!");
    }
  }
};
</script>
<style>
.mixin-example {
  width: 600px;
  margin: 0 auto;
  text-align: left;
}
.mixin-example section h2 {
  color: orange;
  margin-top: 20px;
}
.mixin-example section ul li span {
  color: orange;
}
</style>


