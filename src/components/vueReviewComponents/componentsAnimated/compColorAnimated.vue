<template>
  <div class="animated-example">
    <h2>{{index}}. animated2-Color</h2>
    <input v-model="colorQuery" v-on:keyup.enter="updateColor" placeholder="Enter a color">
    <button v-on:click="updateColor">Update</button>
    <p>Preview:</p>
    <span v-bind:style="{backgroundColor:tweenedCSSColor}" class="example-color-preview"></span>
    <p>{{tweenedCSSColor}}</p>
  </div>
</template>
<script>
var Color = net.brehaut.Color;
export default {
  props: {
    index: String
  },
  data() {
    return {
      colorQuery: "",
      color: {
        red: 0,
        green: 0,
        blue: 0,
        alpha: 1
      },
      tweenedColor: {}
    };
  },
  created() {
    this.tweenedColor = Object.assign({}, this.color);
  },
  watch: {
    color: function() {
      function animate() {
        if (TWEEN.update()) {
          requestAnimationFrame(animate);
        }
      }
      new TWEEN.Tween(this.tweenedColor).to(this.color, 750).start();
      animate();
    }
  },
  computed: {
    tweenedCSSColor: function() {
      return new Color({
        red: this.tweenedColor.red,
        green: this.tweenedColor.green,
        blue: this.tweenedColor.blue,
        alpha: this.tweenedColor.alpha
      }).toCSS();
    }
  },
  methods: {
    updateColor() {
      this.color = new Color(this.colorQuery).toRGB();
      this.colorQuery = "";
    }
  }
};
</script>
<style>
.example-color-preview {
  display: inline-block;
  width: 50px;
  height: 50px;
}
</style>

