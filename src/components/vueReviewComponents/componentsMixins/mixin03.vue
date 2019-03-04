<script>
export default {
  data() {
    return {
      msgMixin03: "messages come from mixin03! for testing...",
      mixin03: "mixin03 Objects will be gotten before the current component!"
    };
  },
  created() {
    console.log("mixin03 Objects will be gotten before!");
  }
};
</script>
