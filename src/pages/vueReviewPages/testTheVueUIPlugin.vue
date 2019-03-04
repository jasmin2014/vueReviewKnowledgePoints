<template>
  <div>
    <v-client-table2></v-client-table2>
    <v-floatthead></v-floatthead>
  </div>
</template>
<script>
import vClientTable2 from "../../components/vueReviewComponents/componentsVueUi/pluginVueTables2";
import vFloatthead from "../../components/vueReviewComponents/componentsVueUi/pluginVueFloatthead";
export default {
  name: "testTheVueUIPluginPage1",
  components: { vClientTable2, vFloatthead }
};
</script>

