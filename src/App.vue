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
import uniqueArray from "./lib/unique-array"

const TEXT = `
(function(array) {
  const set = new Set()
  const newArray = []
  array.forEach((item) => {
    const key = typeof item + JSON.stringify(item)
    if (set.has(key)) { return }
    set.add(key)
    newArray.push(item)
  })
  return newArray
})`

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
    handleRun(e) {
      console.log(this.inputData)
      let a = this.inputData
      // console.log(eval("(function(){ a = " + this.inputData + "})()"))
      // console.log("1`" + a + "")
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
