<script>
export default {
  directives: {
    focus: {
      inserted: function(el) {
        console.log("this is a custom directive");
        el.focus();
      }
    }
  }
};
</script>
