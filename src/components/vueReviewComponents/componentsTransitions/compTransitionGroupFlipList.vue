<template>
  <div class="trans-pub">
    <h3>{{index}}.compTransitionGroupFlipList</h3>
    <div class="trans-group">
        <button v-on:click="shuffle">Shuffle</button>
        <transition-group name="flip-list" tag="ul">
            <li v-for="item in items" v-bind:key="item">
                {{item}}
            </li>
        </transition-group>
    </div>
  </div>
</template>
<script>
export default {
  props: { index: Number },
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  },
  methods: {
    shuffle() {
      this.items = _.shuffle(this.items);
    }
  }
};
</script>
<style>
.flip-list-move {
  transition: transform 1s;
}
.trans-group {
  width: 600px;
  margin: 15px auto 0 auto;
  text-align: left;
}
.trans-group button {
  margin-right: 10px;
}
.trans-group ul {
  display: flex;
}
.trans-group ul li {
  margin-right: 15px;
}
</style>


