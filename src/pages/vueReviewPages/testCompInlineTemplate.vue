<template>
  <div>
    <div>
      <p>These are the current template's content.</p>
    </div>
    <my-component inline-template>
      <div>
        <p>These are compiled as the component's own template.</p>
        <p>Not parent's transclusion content.</p>
      </div>
    </my-component>

    <my-component>
      <div>
        <p>These are the component's template.</p>
      </div>
    </my-component>
  </div>
</template>
<script>
import myComponent from "../../components/vueReviewComponents/componentsInlineTemplate/compInlineTemplate";
export default {
  name: "testCompInlineTemplatePage",
  components: { myComponent }
};
</script>
