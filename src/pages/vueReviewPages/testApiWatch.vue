<template>
  <div id="watch-example">
    <p>
      Ask a yes/no question:
      <input v-model="question">
    </p>
    <p>{{answer}}</p>
    <img :src="src">
  </div>
</template>

<script>
export default {
  name: "testApiWatchPage",
  data() {
    return {
      question: "",
      answer: "I cannot give you an answer until you ask a question!",
      src: ""
    };
  },
  watch: {
    question: function(newQuestion, oldQuestion) {
      this.answer = "Waiting for you to stop typing...";
      this.debouncedGetAnswer();
    }
  },
  created: function() {
    console.log(_.debounce);
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
    // this.getAnswer();
  },
  methods: {
    getAnswer: function() {
      if (this.question.indexOf("?") === -1) {
        this.answer = "Questions usually contain a question mark.;-)";
        return;
      }
      this.answer = "Thinking...";
      var vm = this;
      console.log("http:", vm.$http);
      vm.$axios
        .get("https://yesno.wtf/api")
        .then(response => {
          console.log("response:", response);
          vm.answer = _.capitalize(response.data.answer);
          vm.src = _.capitalize(response.data.image);
        })
        .catch(function(error) {
          vm.answer = "Error! Could not reach the API." + error;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
