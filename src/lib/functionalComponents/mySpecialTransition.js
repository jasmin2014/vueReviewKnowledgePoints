import Vue from "vue";
Vue.component("my-special-transition", {
  template: `
    <transition\
        name="very-special-transition"\
        mode="out-in"\
        v-on:before-enter="beforeEnter"\
        v-on:after-enter="afterEnter"\
    >\
        <slot></slot>\
    </transition>\
    `,
  methods: {
    beforeEnter: function(el) {
      console.log("beforeEnter:", el);
    },
    afterEnter: function(el) {
      console.log("afterEnter:", el);
    }
  }
});

var EmptyList = {};
var TableList = {};
var OrderedList = {};
var UnorderedList = {};
var getChildrenTextContent = function(children) {
  return children
    .map(function(node) {
      return node.children ? getChildrenTextContent(node.children) : node.text;
    })
    .join("");
};
Vue.component("smart-list", {
  functional: true,
  props: {
    items: { type: Array, required: true },
    isOrdered: Boolean
  },
  render: function(createElement, context) {
    function appropriateListComponent() {
      var items = context.props.items;
      console.log("items:", items);

      if (items.length === 0) return EmptyList;
      if (typeof items[0] === "object") return TableList;
      if (context.props.isOrdered) return OrderedList;

      return UnorderedList;
    }
    console.log("testaaaaa:", appropriateListComponent());
    console.log("context.props.items:", context.props.items);
    console.log("context:", context);
    console.log(
      "context.slots:",
      getChildrenTextContent(context.slots().default)
    );
    // console.log(
    //   "getTextFromCommonMixin",
    //   context.getChildrenTextMixin(context.slots().default)
    // );
    return createElement(
      "ul",
      Array.apply(null, { length: context.props.items.length }).map(function(
        _,
        index
      ) {
        console.log("index:", index);
        console.log("_:", _);
        // return createElement(
        //   "li",
        //   index +
        //     ":" +
        //     context.props.items[index] +
        //     " innerText:" +
        //     getChildrenTextContent(context.slots().default),
        //   context.children
        // );
        return createElement(
          "li",
          index +
            ":" +
            context.props.items[index] +
            " innerText:" +
            getChildrenTextContent(context.slots().default),
          context.data,
          context.children
        );
      })
    );
  }
});

Vue.component("my-functional-button", {
  functional: true,
  render: function(createElement, context) {
    return createElement("button", context.data, context.children);
  }
});
