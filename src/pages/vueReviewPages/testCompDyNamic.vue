<template>
  <div>
    <gly-tabs></gly-tabs>
    <div class="tab-nav">
      <button
        v-for="tab in tabs"
        v-bind:key="tab"
        v-bind:class="['tab-button',{active:currentTab === tab}]"
        v-on:click="currentTab = tab"
      >{{tab}}</button>
    </div>
    <keep-alive>
      <component v-bind:is="currentTabComponent" class="tab"></component>
    </keep-alive>
  </div>
</template>
<script>
import glyTabs from "../../components/vueReviewComponents/componentsDynamic/glyTabs";
import tabPosts from "../../components/vueReviewComponents/componentsDynamic/tabPosts";
import tabArchive from "../../components/vueReviewComponents/componentsDynamic/tabArchive";
export default {
  name: "testCompDyNamicPage",
  components: { glyTabs, tabPosts, tabArchive },
  data() {
    return {
      currentTab: "Posts",
      tabs: ["Posts", "Archive"]
    };
  },
  computed: {
    currentTabComponent() {
      return "tab-" + this.currentTab.toLowerCase();
    }
  }
};
</script>
<style>
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover,
.tab-button.active {
  background: orange;
  color: #fff;
}
.tab {
  box-sizing: border-box;
  border: 1px solid #d5d5d5;
  padding: 10px;
}
.tab-nav {
  width: 100%;
  width: 600px;
  margin: 0 auto;
  text-align: left;
}
.posts-tab {
  display: flex;
  margin: 0 auto;
}
.posts-sidebar {
  max-width: 40vw;
  margin: 0;
  padding: 0 10px 0 0;
  list-style-type: none;
  border-right: 1px solid #d5d5d5;
}
.posts-sidebar li {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
}
.posts-sidebar li.selected {
  background: orange;
}
.selected-post-container {
  padding-left: 10px;
  text-align: left;
}
.selected-post > :first-child {
  margin-top: 0;
  padding-top: 0;
}
</style>


