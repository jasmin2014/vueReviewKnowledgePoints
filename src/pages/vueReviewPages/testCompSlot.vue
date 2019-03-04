<template>
  <div>
    <ul>
      <li>
        <navigation-link :url="'/'">
          <v-icon name="home"></v-icon>
          {{linkName}}
        </navigation-link>
      </li>
    </ul>

    <h2 class="h2">base-layout one</h2>
    <base-layout>
      <template slot="header">
        <h3>Here might be a page title</h3>
      </template>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <template slot="footer">
        <p>Here's some contact info</p>
      </template>
    </base-layout>

    <h2 class="h2">base layout two</h2>
    <base-layout>
      <h3 slot="header">Here might be a page title</h3>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <p slot="footer">Here's some contact info.</p>
    </base-layout>

    <h2 class="h2">todo list one</h2>
    <todo-list v-bind:todos="todos">
      <template slot-scope="slotProps">
        <span v-if="slotProps.todo.isComplete">✓</span>
        {{slotProps.todo.text}}
      </template>
    </todo-list>

    <h2 class="h2">todo list two</h2>
    <todo-list v-bind:todos="todos">
      <template slot-scope="{todo}">
        <span v-if="todo.isComplete">✓</span>
        {{todo.text}}
      </template>
    </todo-list>
  </div>
</template>
<script>
import NavigationLink from "../../components/vueReviewComponents/componentsSlots/NavigationLink";
import BaseLayout from "../../components/vueReviewComponents/componentsSlots/slotBeNamed";
import TodoList from "../../components/vueReviewComponents/componentsSlots/slotTodoList";
export default {
  name: "testCompSlotPage",
  components: { NavigationLink, BaseLayout, TodoList },
  data() {
    return {
      linkName: "Home",
      todos: [
        {
          id: 1,
          text: "列表1",
          isComplete: true
        },
        {
          id: 2,
          text: "列表2",
          isComplete: false
        }
      ]
    };
  },
  methods: {}
};
</script>
<style>
.h2 {
  color: rgb(22, 211, 104);
  margin-top: 1em;
}
</style>


