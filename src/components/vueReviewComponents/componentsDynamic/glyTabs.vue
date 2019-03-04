<template>
    <div class="gly-tab" :style="'width:'+width + 'px'">
        <nav class="gly-tab-nav">
            <div :class="{'gly-tab-active':active === 'first'}" @click="handleChangeTab('first')">tab1</div>
            <div :class="{'gly-tab-active':active === 'second'}" @click="handleChangeTab('second')">tab2</div>
        </nav>
        <div v-if="active === 'first'" class="gly-tab-pannel" name="first">
            tab1 content
        </div>
        <div v-if="active === 'second'" class="gly-tab-pannel" name="second">
            tab2 content
        </div>
    </div>
</template>
<script>
export default {
  props: {
    width: {
      default() {
        return 600;
      }
    }
  },
  data() {
    return {
      active: "first"
    };
  },
  methods: {
    handleChangeTab(name) {
      this.active = name;
    }
  }
};
</script>

<style lang="scss">
.gly-tab {
  transition: 0.3s linear;
  width: 100%;
  margin: 0 auto;
  .gly-tab-nav {
    display: flex;
    border-bottom: 1px solid #d5d5d5;
    > div {
      background: #ffff;
      padding: 8px 20px;
      border: 1px solid #d5d5d5;
      border-right: none;
      border-bottom: none;
      margin-bottom: -1px;
      font-size: 14px;
      cursor: pointer;
    }
    > div:hover,
    > div.gly-tab-active {
      background: orange;
      color: #fff;
    }
    > div:first-child {
      border-top-left-radius: 4px;
    }
    > div:last-child {
      border-right: 1px solid #d5d5d5;
      border-top-right-radius: 4px;
    }
  }
  .gly-tab-pannel {
    text-align: left;
    line-height: 40px;
  }
}
</style>
