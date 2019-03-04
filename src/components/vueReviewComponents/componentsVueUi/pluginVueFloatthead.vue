<template>
  <div>
    <section>
      <h2>test the vue-ui vueFloatthead</h2>
      <float-thead-table>
        <thead>
          <tr>
            <th>
              <a href="#" id="demoHeader1">xclick me</a>
            </th>
            <th>
              <a href="#" id="demoHeader2">mouse over me</a>
            </th>
            <th>
              <a href="#" id="demoHeader3">Header ... 3</a>
            </th>
          </tr>
          <tbody>
              <tr>
                  <td>Cell Content 1</td>
                  <td>Cell Content 2</td>
                  <td>Cell Content 3</td>
              </tr>
          </tbody>
        </thead>
      </float-thead-table>
    </section>
  </div>
</template>
<script>
import Vue from "vue";
import FloatThead from "vue-floatthead";
Vue.use(FloatThead);
export default {
  components: {
    FloatThead
  }
};
</script>

