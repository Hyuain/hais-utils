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

<script>

export default {
  name: "UtilItem",
  props: {
    defaultUtil: Object,
  },
  data() {
    return {
      utilName: (this.defaultUtil.filename || "").split(".")[0],
      utilContent: this.defaultUtil.content || "",
      utilInput: "",
      utilOutput: "",
      utilLogs: "",
    }
  },
  methods: {
    handleRun() {
      let tempLog = []
      const output = eval(`(${this.utilContent})(${this.utilInput})`)
      this.utilOutput = output
      console.log(`${this.utilName} 运行结果：`)
      console.log(output, tempLog)
    },
    handleResetUtilContent() {
      this.utilContent = this.defaultUtil.content
    }
  }
}
</script>

<style scoped>

</style>
