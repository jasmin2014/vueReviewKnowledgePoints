<template>
  <div>
    <gly-input
      v-model="value"
      v-bind:label="label"
      v-on:focus="onFocus"
      v-on:blur="onBlur"
      v-on:change="onChange"
      v-on:click="onClick"
      v-on:input="onInput"
    >
      <!-- <label>请输入姓名</label> -->
    </gly-input>
  </div>
</template>
<script>
import glyInput from "../../components/vueReviewComponents/componentsform/glyInput";
export default {
  name: "testKeepBaseListernersInputPage",
  components: { glyInput },
  data() {
    return {
      label: "姓名",
      value: ""
    };
  },
  methods: {
    onFocus() {
      console.log("focus something!");
      console.log("onFocus_value:", this.value);
    },
    onBlur() {
      console.log("blur something!");
      console.log("onBlur_value:", this.value);
    },
    onChange() {
      console.log("change something!");
      console.log("onChange_value:", this.value);
    },
    onClick() {
      console.log("click something!");
      console.log("onClick_value:", this.value);
    },
    onInput() {
      console.log("input something!");
      console.log("onIput_value:", this.value);
    }
  }
};
</script>

