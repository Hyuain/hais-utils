<template>
  <div class="page">
    <section class="tab-list-wrapper">
      <tab-list :current-index="currentIndex" @changeTab="handleChangeTab" :tabs="tabs"></tab-list>
    </section>
    <section class="content-wrapper">
      <util-list :utils="allUtils[currentIndex].utils"></util-list>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import allUtils from "./utils"
import UtilList from "./components/UtilList.vue"
import TabList from "./components/TabList.vue"
import { ITabItem } from "./interface/basic.interface"
import "https://at.alicdn.com/t/font_2593192_y1ygkg4ehs.js"

export default defineComponent({
  name: "App",
  components: { TabList, UtilList },
  data() {
    return {
      allUtils,
      tabs: allUtils.map((item) => {
        return {
          name: item.categoryName,
          id: item.categoryName,
        }
      }) as ITabItem[],
      currentIndex: 0,
    }
  },
  methods: {
    handleChangeTab(index: number) {
      this.currentIndex = index
    },
  },
})
</script>

<style lang="scss">
@font-face {
  font-family: 'JetBrains Mono';
  src: url('./assets/JetBrainsMono-Regular.woff2') format('woff2'),
  url('./assets/JetBrainsMono-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  box-sizing: border-box;
}
.page {
  display: flex;
}
.tab-list-wrapper {
  width: 200px;
}
.content-wrapper {
  flex: 1;
}
textarea, pre, code {
  margin: 0;
  padding: 0;
  font-family: 'JetBrains Mono', sans-serif;
}
code {
  background-color: rgba(102, 185, 191, 0.1);
  color: #66B9BF;
  border-radius: 12px;
  padding: 4px 6px;
}
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
