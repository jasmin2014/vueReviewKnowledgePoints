<template>
  <div class="trans-pub">
    <h3>{{index}}.compTransitionGroupList</h3>
    <div class="trans-box">
      <input type="text" v-model="inputValue">
      <button v-on:click="inputAdd">Add</button>        
      <button v-on:click="InputRemove">Remove</button>
      <transition-group name="list" tag="p">
          <span v-for="item in inputItems" v-bind:key="item" class="list-item">
              {{item}}
          </span>
      </transition-group>
    </div>
    <div class="trans-box">
        <button v-on:click="add">Add</button>
        <button v-on:click="remove">Remove</button>
        <transition-group name="list" tag="p">
            <span v-for="item in items" v-bind:key="item" class="list-item">
                {{item}}
            </span>
        </transition-group>
    </div>
  </div>
</template>
<script>
export default {
  props: { index: Number },
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
      inputItems: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      inputValue: ""
    };
  },
  methods: {
    randomIndex() {
      return Math.floor(Math.random() * this.items.length);
    },
    randomIndexInput() {
      return Math.floor(Math.random() * this.inputItems.length);
    },
    add() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove() {
      this.items.splice(this.randomIndex(), 1);
    },
    inputAdd() {
      this.inputItems.splice(this.randomIndexInput(), 0, this.inputValue);
    },
    InputRemove() {
      this.inputItems.splice(this.randomIndexInput(), 1);
    }
  }
};
</script>
<style>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>


