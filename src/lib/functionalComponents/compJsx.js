import Vue from "vue";
var getChildrenTextContent = function(children) {
  return children
    .map(function(node) {
      return node.children ? getChildrenTextContent(node.children) : node.text;
    })
    .join("");
};
Vue.component("anchored-heading", {
  render: function(createElement) {
    // console.log("this.$slots.default:", this.$slots.default);
    var headingId = getChildrenTextContent(this.$slots.default)
      .toLowerCase()
      .replace(/\W+/g, "-")
      .replace(/(^-|-$)/g, "");

    return createElement("h" + this.level, [
      createElement(
        "a",
        { attrs: { name: headingId, href: "#" + headingId } },
        this.$slots.default
      ),
      createElement(
        "p",
        "Hello,every one ,I am a title, which title,depend on the prop 'level:'" +
          this.level
      )
    ]);
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
});

Vue.component("section-length-20", {
  render: function(createElement) {
    return createElement(
      "section",
      Array.apply(null, { length: 20 }).map(function() {
        return createElement(
          "p",
          "hi, I am from a render component which make with 'render',not a directly component.I have twenty brothers"
        );
      })
    );
  }
});
