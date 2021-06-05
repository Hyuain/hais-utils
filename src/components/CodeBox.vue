<template>
  <textarea ref="textarea">{{value}}</textarea>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { EditorFromTextArea, fromTextArea } from "codemirror"
import "codemirror/lib/codemirror.css"
import "codemirror/theme/monokai.css"
import "codemirror/mode/javascript/javascript"

export default defineComponent({
  name: "CodeBox",
  props: {
    value: {
      type: String,
      default: "",
    },
    language: {
      type: String,
      default: "javascript",
    },
  },
  data() {
    return {
      coder: null as EditorFromTextArea | null,
    }
  },
  setup() {
    const textarea = ref<HTMLTextAreaElement | null>(null)
    return {
      textarea,
    }
  },
  mounted() {
    this.coder = fromTextArea(this.textarea!, {
      tabSize: 2,
      theme: "monokai",
      mode: this.language,
      lineNumbers: true,
    })
    this.coder.on("change", (coder) => {
      const newValue = coder.getValue()
      this.$emit("update:value", newValue)
    })
  },
})
</script>

<style>
.CodeMirror {
  height: auto;
  font-family: "JetBrains Mono", sans-serif;
  border-radius: 16px;
}
</style>
