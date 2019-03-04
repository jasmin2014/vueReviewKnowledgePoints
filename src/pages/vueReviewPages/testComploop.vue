<template>
  <div>
    <tree-folder :folder="folder"/>
  </div>
</template>
<script>
import treeFolder from "../../components/vueReviewComponents/componentsLoop/treeFolder";
export default {
  name: "testCompLoopPage",
  components: { treeFolder },
  data() {
    return {
      folder: [
        {
          name: "tree0",
          children: [
            {
              name: "tree0-1"
            },
            {
              name: "tree0-2",
              children: [
                {
                  name: "tree0-2-1"
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>

