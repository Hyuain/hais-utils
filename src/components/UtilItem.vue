<template>
  <div>{{utilName}}</div>
  <div>参数</div>
  <textarea v-model="utilInput"></textarea>
  <button @click="handleRun">运行</button>
  <div>
    <textarea style="height: 300px; width: 500px" v-model="utilContent">
    </textarea>
  </div>
  输出
  <pre>
    {{utilOutput}}
  </pre>
  <button @click="handleResetUtilContent">重置</button>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent ({
  name: "UtilItem",
  props: {
    defaultUtil: Object,
  },
  computed: {
  },
  data() {
    return {
      utilName: (this.defaultUtil?.filename || "").split(".")[0],
      utilContent: this.defaultUtil?.content || "",
      utilInput: "",
      utilOutput: "",
    }
  },
  watch: {
    defaultUtil: {
      handler(val) {
        this.utilContent = val.content
        this.utilName = (val.filename || "").split(".")[0]
        this.utilInput = ""
        this.utilOutput = ""
      },
      deep: true,
    }
  },
  methods: {
    handleRun() {
      const output = eval(`(${this.utilContent})(${this.utilInput})`)
      this.utilOutput = output
      console.log(`${this.utilName} 运行结果：`)
      console.log(output)
    },
    handleResetUtilContent() {
      this.utilContent = this.defaultUtil?.content
    }
  },
})
</script>

<style scoped>

</style>
