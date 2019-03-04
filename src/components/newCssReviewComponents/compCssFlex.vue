<template>
  <div>
    <div class="container">
      <div>a</div>
      <div>b</div>
      <div>c</div>
      <div>d</div>
      <div>e</div>
    </div>
    <div class="container2">
      <div class="item">bbb</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.container {
  width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  //   flex-direction: row-reverse;
  flex-wrap: wrap;
  div {
    width: 185px;
    height: 180px;
    background: orange;
    margin-bottom: 10px;
    margin-right: 10px;
    box-sizing: content-box;
  }
  div:nth-child(3n) {
    flex: 1;
    flex-shrink: 1;
  }
}
.container2 {
  display: flex;
  width: 600px;
  height: 300px;
  margin: 0 auto;
  background: #ccc;
  .item {
    width: 100px;
    height: 100px;
    margin: auto;
    background: orchid;
  }
}
</style>

