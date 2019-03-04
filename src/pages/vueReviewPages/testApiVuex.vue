<template>
  <div class="test-the-api-vuex">
    <section>
      <h2>vuexState1</h2>
      <p>Some simple states</p>
      <vuexState1/>
    </section>
    <section>
      <h2>vuexState2</h2>
      <p>use to some complex programs</p>
      <vuexState2/>
    </section>
  </div>
</template>
<script>
import vuexState1 from "../../components/vueReviewComponents/componentsUseStores/state1";
import vuexState2 from "../../components/vueReviewComponents/componentsUseStores/moduleState";
export default {
  name: "testTheApiVuexPage",
  components: { vuexState1, vuexState2 }
};
</script>
<style lang="scss">
.test-the-api-vuex {
  width: 600px;
  margin: 0 auto;
  text-align: left;
}
.test-the-api-vuex section h2,
.test-the-api-vuex section p {
  text-align: left;
}
.test-the-api-vuex section h2 {
  margin-top: 20px;
}
.test-the-api-vuex section > p {
  margin-bottom: 20px;
}
</style>

