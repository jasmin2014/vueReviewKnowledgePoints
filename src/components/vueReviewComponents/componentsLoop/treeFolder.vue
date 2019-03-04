<template>
    <p>
        <span>{{currentFolder.name}}</span>
        <tree-folder-cotents :children="currentFolder.children" />
    </p>
</template>
<script>
import treeFolderCotents from "./treeFolderCotents";
export default {
  name: "treeFolder",
  props: {
    folder: [Array, Object]
  },
  components: { treeFolderCotents },
  data() {
    return {
      currentFolder: {
        name: "tree",
        children: [
          {
            name: "tree1",
            children: [
              {
                name: "tree2"
              }
            ]
          },
          {
            name: "tree2"
          }
        ]
      }
    };
  }
};
</script>

