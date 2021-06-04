<template>
  <div class="util-item">
    <div class="util-name">{{ utilName }}</div>
    <div class="params-area">
      <div class="title">参数</div>
      <textarea v-model="utilInput"></textarea>
      <div class="button" @click="handleRun">运行</div>
      <div @click="handleToggleCode" class="show-detail">
        {{isShowCode ? '收起' : '展开'}}代码
        <icon name="show-detail" :class="['icon', { up: isShowCode }]"></icon>
      </div>
    </div>
    <div class="help">直接输入参数即可，不同参数之间用逗号隔开，比如 <code>[1, 2, 3], true</code> </div>
    <div v-if="isShowCode" class="code-area">
      <textarea v-model="utilContent">
      </textarea>
    </div>
    <div class="output-area">
      <div>输出</div>
      <div class="help">也可以在控制台查看输出</div>
      <pre>{{ utilOutput }}</pre>
    </div>
    <div class="action-area">
      <div class="button" @click="handleResetUtilContent">重置</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import { IUtilItem } from "../interface/utils.interface"
import Icon from "./Icon.vue"

export default defineComponent({
  name: "UtilItem",
  components: { Icon },
  props: {
    defaultUtil: Object as PropType<IUtilItem>,
  },
  computed: {},
  data() {
    return {
      utilName: this.defaultUtil.filename.split(".")[0],
      utilContent: this.defaultUtil.content,
      utilInput: "",
      utilOutput: "",
      isShowCode: false,
    }
  },
  watch: {
    defaultUtil: {
      handler(val) {
        this.utilContent = val.content
        this.utilName = val.filename.split(".")[0]
        this.utilInput = ""
        this.utilOutput = ""
      },
      deep: true,
    },
  },
  methods: {
    handleRun() {
      const output = eval(`(${this.utilContent})(${this.utilInput})`)
      this.utilOutput = output
      console.log(`${this.utilName} 运行结果：`)
      console.log(output)
    },
    handleResetUtilContent() {
      this.utilContent = this.defaultUtil.content
    },
    handleToggleCode() {
      this.isShowCode = !this.isShowCode
    }
  },
})
</script>

<style lang="scss" scoped>
.util-name {
  text-transform: capitalize;
  font-size: xx-large;
  font-weight: bold;
  color: #66B9BF;
}
.util-item {
  border: 2px solid #66B9BF;
  border-radius: 16px;
  padding: 12px;
  margin-right: 200px;
}
.help {
  font-size: small;
  padding-top: 4px;
  padding-bottom: 8px;
}
.params-area {
  padding: 8px 0;
  display: flex;
  align-items: center;
  .title {
    flex-shrink: 0;
  }
  textarea {
    margin-left: 16px;
    height: 32px;
    width: 100%;
    max-width: 400px;
    line-height: 32px;
  }
  .button {
    flex-shrink: 0;
    margin-left: 16px;
  }
  .show-detail {
    margin-left: 16px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
  }
  .icon {
    &.up {
      transform: rotateZ(180deg);
      transition: all 300ms;
    }
    transition: all 300ms;
  }
}
.code-area {
  padding: 8px 0;
  textarea {
    height: 300px;
    width: 500px;
  }
}
.action-area {
  padding: 8px 0;
  display: flex;
  justify-content: flex-end;
}
.button {
  background: #66B9BF;
  border-radius: 14px;
  color: white;
  height: 28px;
  line-height: 28px;
  width: 48px;
  text-align: center;
  cursor: pointer;
}
textarea {
  border-radius: 12px;
  padding: 4px 8px;
  border-color: #66B9BF;
  overflow: hidden;
}
</style>
