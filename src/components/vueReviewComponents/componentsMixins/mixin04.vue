<script>
export default {
  data() {
    return {
      msgMixin04: "message come from mixin04,for testing..."
    };
  },
  methods: {
    fooMixin04() {
      console.log("mixin04:foo!");
    },
    conflicting() {
      console.log("mixin04:from mixin04!");
    }
  }
};
</script>
