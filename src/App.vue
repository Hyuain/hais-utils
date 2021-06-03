<template>
  <util-list :utils="allUtils[0].utils"></util-list>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import allUtils from "./utils"
import UtilList from "./components/UtilList.vue"

export default defineComponent({
  name: "App",
  components: { UtilList },
  data() {
    return {
      allUtils,
    }
  },
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
