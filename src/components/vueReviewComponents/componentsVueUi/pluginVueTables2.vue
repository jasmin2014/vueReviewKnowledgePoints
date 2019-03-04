<template>
  <section class="vue-ui-exacmple">
    <h2>1. test the Vue-ui vueTable2</h2>
    <v-client-table :data="tableData" :columns="columns" :options="options">
      <a
        slot="edit"
        slot-scope="props"
        class="fa fa-edit"
        :href="edit(props.row.id)"
      >aa+{{props.row.id}}</a>
    </v-client-table>
  </section>
</template>
<script>
import Vue from "vue";
import { ServerTable, ClientTable, Event } from "vue-tables-2";
Vue.use(ServerTable);
Vue.use(ClientTable);
export default {
  data() {
    return {
      columns: ["id", "name", "age"],
      tableData: [
        { id: 1, name: "John", age: "20" },
        { id: 2, name: "Jane", age: "24" },
        { id: 3, name: "Susan", age: "16" },
        { id: 4, name: "Chris", age: "55" },
        { id: 5, name: "Dan", age: "40" }
      ],
      options: {
        childRow: function(h, row) {
          return <div>My custom content for row {row.id}</div>;
        },
        childRowTogglerFirst: true,
        clientMultiSorting: true
      }
    };
  }
};
</script>
<style>
.vue-ui-exacmple {
  width: 600px;
  margin: 0 auto;
  text-align: left;
}
.vue-ui-exacmple table {
  width: 100%;
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
.vue-ui-exacmple table th,
.vue-ui-exacmple table td {
  height: 30px;
  line-height: 30px;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.VueTables__child-row-toggler {
  width: 16px;
  height: 16px;
  line-height: 16px;
  display: block;
  margin: auto;
  text-align: center;
}

.VueTables__child-row-toggler--closed::before {
  content: "+";
}

.VueTables__child-row-toggler--open::before {
  content: "-";
}
</style>


