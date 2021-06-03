<template>
  当前选中{{allUtils[currentIndex].categoryName}}
  <tab-list :current-index="currentIndex" @changeTab="handleChangeTab" :tabs="allUtils.map((item) => ({ name: item.categoryName, id: item.categoryName }))"></tab-list>
  <util-list :utils="allUtils[currentIndex].utils"></util-list>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import allUtils from "./utils"
import UtilList from "./components/UtilList.vue"
import TabList from "./components/TabList.vue"

export default defineComponent({
  name: "App",
  components: { TabList, UtilList },
  data() {
    return {
      allUtils,
      currentIndex: 0,
    }
  },
  methods: {
    handleChangeTab(index: number) {
      this.currentIndex = index
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
