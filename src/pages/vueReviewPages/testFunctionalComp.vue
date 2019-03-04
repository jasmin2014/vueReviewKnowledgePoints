<template>
  <div>
    <my-special-transition>
      <p>afeasdfsagdsadf</p>
    </my-special-transition>
    <smart-list v-bind:items="myList" v-bind:is-ordered="true">
      <div>I am a innerHtml of the component [smart-list]</div>
    </smart-list>
    <my-functional-button>myFunctionalButton</my-functional-button>
    <my-functional-template-button
      v-on:click="onClick"
      v-on:focus="onFocus"
    >myFunctionalTemplateButton</my-functional-template-button>
  </div>
</template>
<script>
import myFunctionalTemplateButton from "../../components/vueReviewComponents/componentsSlots/functionalSlotButton";
export default {
  components: { myFunctionalTemplateButton },
  data() {
    return {
      myList: ["zhangsan", "lisi", "wangwu"]
    };
  },
  methods: {
    onClick() {
      console.log("clicking...");
    },
    onFocus() {
      console.log("focusing...");
    }
  }
};
</script>

