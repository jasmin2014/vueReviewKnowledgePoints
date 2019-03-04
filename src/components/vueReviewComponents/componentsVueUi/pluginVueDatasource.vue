<template>
  <div>
    <section>
      <h2>2. test the vue-ui vueDatasource</h2>
      <server-datasource
        :source="items"
        :total="total_of_items"
        :columns="columns"
        :actions="actions"
      ></server-datasource>
    </section>
  </div>
</template>
<script>
import { ServerDatasource } from "vue-datasource";
export default {
  components: { ServerDatasource },
  data() {
    return {
      items: [
        {
          id: "1",
          FirstName: "George",
          LastName: "Epic Bluth"
        },
        {
          id: "2",
          FirstName: "Janet",
          LastName: "Epic Weaver"
        },
        {
          id: "3",
          FirstName: "Emma",
          LastName: "Epic Wong"
        }
      ],
      total: 3,
      columns: [],
      actions: []
    };
  }
};
</script>
<style>
</style>


