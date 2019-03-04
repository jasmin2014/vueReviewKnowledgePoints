<script>
export default {
  data() {
    return {
      msgMixin01: "messages come from mixin01,for testing..."
    };
  },
  created() {
    this.hello();
  },
  methods: {
    hello() {
      console.log("note:this messages comes from mixin01!");
    }
  }
};
</script>
