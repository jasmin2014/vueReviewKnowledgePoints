<template>
  <div>
    <div class="grid-container grid-container1">
      <div class="item item-a">a</div>
      <div class="item item-b">b</div>
      <div class="item item-c">c</div>
      <div class="item item-d">d</div>
    </div>
    <div class="grid-container grid-container2">
      <div class="item item-a">a</div>
      <div class="item item-b">b</div>
      <div class="item item-c">c</div>
      <div class="item item-d">d</div>
      <div class="item item-a">a</div>
      <div class="item item-b">b</div>
      <div class="item item-c">c</div>
      <div class="item item-d">d</div>
      <div class="item item-a">a</div>
    </div>
    <div class="grid-container grid-container3">
      <div class="item item-a">a</div>
      <div class="item item-b">b</div>
    </div>
    <div class="grid-container grid-container4">
      <div class="item-a">item-a</div>
      <div class="item-b">item-b</div>
      <div class="item-c">item-c</div>
      <div class="item-d">item-d</div>
      <div class="item-e">item-e</div>
    </div>
    <div class="grid-container grid-container5">
      <div class="item-a">item-a</div>
      <div class="item-b">item-b</div>
      <div class="item-c">item-c</div>
      <div class="item-d">item-d</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.item-a {
  background: olive;
}
.item-b {
  background: orchid;
}
.item-c {
  background: #f3d2a1;
}
.item-d {
  background: #d3a4c1;
}
.item-e {
  background: #a2d3f2;
}
.grid-container {
  width: 600px;
  margin: 20px auto 0 auto;
  display: grid;
}
.grid-container1 {
  background: #000;
  grid-column-gap: 2px;
  grid-row-gap: 2px;
  // grid-template-columns: repeat(2, 20px [col-start]) 5%;
  // grid-template-rows: [row1-start] 25% [row1-end row2-start] 25% [row2-end];
  // grid-template-rows: 1fr 50px 1fr 1fr;
  // grid-template-columns: 148px 148px 148px 150px;
  // grid-template-rows: auto;
  grid-template-areas:
    "header header header header"
    "sidebar main main main"
    "footer footer footer footer";

  .item-a {
    grid-area: header;
  }
  .item-b {
    grid-area: sidebar;
  }
  .item-c {
    grid-area: main;
  }
  .item-d {
    grid-area: footer;
  }
}
.grid-container2 {
  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 80px auto 80px;
  // grid-column-gap: 10px;
  // grid-row-gap: 15px;
  grid-gap: 10px 15px;
  // justify-items: start;  //横向对齐模式
  // align-items: start; //竖向对齐模式
  justify-content: center; //横向网格间隙布局模式
  // align-content: start;  //纵向网格间隙布局模式
  grid-auto-columns: 2fr;
}
.grid-container3 {
  grid-auto-columns: 2fr;
  grid-template-columns: 60px 60px;
  grid-template-rows: 90px 90px;
  .item-a {
    grid-column: 1/2;
    grid-row: 2/3;
  }
  .item-b {
    grid-column: 5/6;
    grid-row: 2/3;
  }
}
.grid-container4 {
  grid-template-columns: 60px 60px 60px 60px 60px;
  grid-template-rows: 30px 30px;
  grid-auto-flow: row;
  // grid: 200px auto / 1fr auto 1fr; // 等同于下面注释的三行
  // grid-template-rows: 200px auto;
  // grid-template-columns: 1fr auto 1fr;
  // grid-template-areas: none;
  .item-a {
    grid-column: 1;
    grid-row: 1/3;
  }
  .item-e {
    grid-column: 5;
    grid-row: 1/3;
  }
}
.grid-container5 {
  .item-a {
    grid-column-start: 2;
    grid-column-end: five;
    grid-row-start: row1-start;
    grid-row-end: 3;
    justify-self: center;
  }
  .item-b {
    grid-column-start: 1;
    grid-column-end: span col4-start;
    grid-row-start: 2;
    grid-row-end: span 2;
    align-self: start;
  }
  .item-c {
    grid-column: 3 / span 2;
    grid-row: third-line / 4;
  }
  .item-d {
    grid-area: 1 / col4-start / last-line / 6;
  }
}
</style>


