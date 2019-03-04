<script>
export default {
  methods: {
    getChildrenTextMixin(children) {
      return children
        .map(function(node) {
          return node.children
            ? getChildrenTextMixin(node.children)
            : node.text;
        })
        .join("");
    }
  }
};
</script>
