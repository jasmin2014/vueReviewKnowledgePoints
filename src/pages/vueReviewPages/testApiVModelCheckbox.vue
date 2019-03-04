<template>
  <div>
    <gly-checkbox v-model="lovingVue" @change="changeValues"></gly-checkbox>
  </div>
</template>
<script>
import glyCheckbox from "../../components/vueReviewComponents/componentsform/glyCheckbox";
export default {
  name: "testApiVModelCheckboxPage",
  components: { glyCheckbox },
  data() {
    return {
      lovingVue: false
    };
  },
  methods: {
    changeValues(value) {
      console.log("value:", value);
      console.log("lovingVue:", this.lovingVue);
    }
  }
};
</script>
