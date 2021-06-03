<template>
  <label>
    输入
    <input v-model="inputData">
  </label>
  {{inputData}}
  <button @click="handleRun">运行</button>
  <div >
    <textarea style="height: 300px; width: 500px" v-model="xxx">
    </textarea>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import utils from "./utils"

const TEXT = `(${utils[0].methods[0].content})`

export default defineComponent({
  name: "App",
  components: {},
  data() {
    return {
      inputData: "",
      xxx: TEXT,
    }
  },
  methods: {
    handleRun() {
      console.log(utils)
      console.log(this.inputData)
      let a = this.inputData
      const c = this.xxx + `(${a})`
      console.log(c)
      console.log(eval(c))
    },
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
