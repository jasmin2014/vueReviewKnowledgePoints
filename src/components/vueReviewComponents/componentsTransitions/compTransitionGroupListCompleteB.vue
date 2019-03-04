<template>
  <div class="trans-pub">
    <h3>{{index}}.compTransitionGroupListCompleteB</h3>
  
    <div class="trans-group-d">
        <h4>Lazy Sodoku</h4>
        <div>Keep hitting the shuffle button until you win.</div>
        <button v-on:click="shuffle">Shuffle</button>
        <transition-group name="list-complete" tag="p">
            <span v-for="item in items" v-bind:key="item.index" class="list-complete-item">{{item.number}}</span>
        </transition-group>
    </div>
  </div>
</template>
<script>
export default {
  props: { index: Number },
  data() {
    return {
      items: [
        //one
        {
          index: 0,
          number: 1
        },
        {
          index: 1,
          number: 2
        },
        {
          index: 2,
          number: 3
        },
        {
          index: 3,
          number: 4
        },
        {
          index: 4,
          number: 5
        },
        {
          index: 5,
          number: 6
        },
        {
          index: 6,
          number: 7
        },
        {
          index: 7,
          number: 8
        },
        {
          index: 8,
          number: 9
        },
        //two
        {
          index: 9,
          number: 1
        },
        {
          index: 10,
          number: 2
        },
        {
          index: 11,
          number: 3
        },
        {
          index: 12,
          number: 4
        },
        {
          index: 13,
          number: 5
        },
        {
          index: 14,
          number: 6
        },
        {
          index: 15,
          number: 7
        },
        {
          index: 16,
          number: 8
        },
        {
          index: 17,
          number: 9
        },
        //three
        {
          index: 18,
          number: 1
        },
        {
          index: 19,
          number: 2
        },
        {
          index: 20,
          number: 3
        },
        {
          index: 21,
          number: 4
        },
        {
          index: 22,
          number: 5
        },
        {
          index: 23,
          number: 6
        },
        {
          index: 24,
          number: 7
        },
        {
          index: 25,
          number: 8
        },
        {
          index: 26,
          number: 9
        },
        //four
        {
          index: 27,
          number: 1
        },
        {
          index: 28,
          number: 2
        },
        {
          index: 29,
          number: 3
        },
        {
          index: 30,
          number: 4
        },
        {
          index: 31,
          number: 5
        },
        {
          index: 32,
          number: 6
        },
        {
          index: 33,
          number: 7
        },
        {
          index: 34,
          number: 8
        },
        {
          index: 35,
          number: 9
        },
        //five
        {
          index: 36,
          number: 1
        },
        {
          index: 37,
          number: 2
        },
        {
          index: 38,
          number: 3
        },
        {
          index: 39,
          number: 4
        },
        {
          index: 40,
          number: 5
        },
        {
          index: 41,
          number: 6
        },
        {
          index: 42,
          number: 7
        },
        {
          index: 43,
          number: 8
        },
        {
          index: 44,
          number: 9
        },
        //six
        {
          index: 45,
          number: 1
        },
        {
          index: 46,
          number: 2
        },
        {
          index: 47,
          number: 3
        },
        {
          index: 48,
          number: 4
        },
        {
          index: 49,
          number: 5
        },
        {
          index: 50,
          number: 6
        },
        {
          index: 51,
          number: 7
        },
        {
          index: 52,
          number: 8
        },
        {
          index: 53,
          number: 9
        },
        //seven
        {
          index: 54,
          number: 1
        },
        {
          index: 55,
          number: 2
        },
        {
          index: 56,
          number: 3
        },
        {
          index: 57,
          number: 4
        },
        {
          index: 58,
          number: 5
        },
        {
          index: 59,
          number: 6
        },
        {
          index: 60,
          number: 7
        },
        {
          index: 61,
          number: 8
        },
        {
          index: 62,
          number: 9
        },
        //eight
        {
          index: 63,
          number: 1
        },
        {
          index: 64,
          number: 2
        },
        {
          index: 65,
          number: 3
        },
        {
          index: 66,
          number: 4
        },
        {
          index: 67,
          number: 5
        },
        {
          index: 68,
          number: 6
        },
        {
          index: 69,
          number: 7
        },
        {
          index: 70,
          number: 8
        },
        {
          index: 71,
          number: 9
        },
        //nine
        {
          index: 72,
          number: 1
        },
        {
          index: 73,
          number: 2
        },
        {
          index: 74,
          number: 3
        },
        {
          index: 75,
          number: 4
        },
        {
          index: 76,
          number: 5
        },
        {
          index: 77,
          number: 6
        },
        {
          index: 78,
          number: 7
        },
        {
          index: 79,
          number: 8
        },
        {
          index: 80,
          number: 9
        }
      ]
    };
  },
  computed: {
    randomNum() {
      return Math.floor(Math.random() * this.items.length);
    }
  },
  created() {
    console.log("this.randomNum:", this.randomNum);
  },
  methods: {
    shuffle() {
      this.items = _.shuffle(this.items);
    }
  }
};
</script>
<style>
.trans-group-d {
  width: 600px;
  margin: 30px auto;
  height: 240px;
  text-align: left;
}
.trans-group-d > p {
  width: 180px;
  box-sizing: border-box;
  margin-top: 20px;
}

.trans-group-d > p span {
  width: 20px;
  height: 20px;
  float: left;
  border: 1px solid #ddd;
  text-align: center;
  line-height: 20px;
  box-sizing: border-box;
}
.trans-group-d > p span.list-complete-item {
  margin: 0;
  padding: 0;
}
</style>


