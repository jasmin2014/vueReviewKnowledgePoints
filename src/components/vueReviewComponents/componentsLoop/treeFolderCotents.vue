<template>
    <ul>
        <li v-for="child in children" v-bind:key="child.id">
            <tree-folder v-if="child.children" :folder="child" />
            <span v-else>{{child.name}}</span>
        </li>
    </ul>
</template>
<script>
import treeFolder from "./treeFolder";
export default {
  name: "treeFolderContents",
  props: {
    children: [Object, Array]
  },
  components: { treeFolder },
  beforeCreate() {
    this.$options.components.treeFolderContents = require("./treeFolderCotents");
  }
};
</script>

