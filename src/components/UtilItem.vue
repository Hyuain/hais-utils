<template>
  <div class="util-item">
    <div class="util-name">{{ utilName }}</div>
    <div class="area params-area">
      <div class="title">参数</div>
      <div class="help">直接输入参数即可，不同参数之间用逗号隔开，比如 <code>[1, 2, 3], true</code></div>
      <div class="help">函数 <code>{{utilName}}</code> 也已经绑定到 <code>window</code> 上了，可以直接调用 <code>{{utilName}}(yourArgs)</code></div>
      <div class="run-params">
        <div class="code-box-wrapper">
          <code-box ref="inputCodeBox" v-model:value="utilInput"></code-box>
        </div>
        <div class="button" @click="handleRun">运行</div>
      </div>
    </div>
    <div class="area code-area">
      <div @click="handleToggleCode" class="title">
        {{ isShowCode ? "收起" : "展开" }}代码
        <icon name="show-detail" :class="['icon', { up: isShowCode }]"></icon>
      </div>
      <div class="help">可以展开查看源代码，也可以直接在上面修改。试着打个 <code>console.log</code> 吧~</div>
      <div v-if="isShowCode" class="code-box-wrapper">
        <code-box ref="codeCodeBox" v-model:value="utilContent"></code-box>
        <div class="area action-area">
          <div class="button" @click="handleResetUtilContent">重置代码</div>
        </div>
      </div>
    </div>
    <div class="area output-area">
      <div class="title">输出</div>
      <div class="help">也可以在控制台查看输出</div>
      <pre>{{utilOutput}}</pre>
    </div>
    <div class="area action-area">
      <div class="button" @click="handleClearOutput">清空输出</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, PropType, ref } from "vue"
import { IUtilItem } from "../interface/utils.interface"
import Icon from "./Icon.vue"
import CodeBox from "./CodeBox.vue"

export default defineComponent({
  name: "UtilItem",
  components: { CodeBox, Icon },
  props: {
    defaultUtil: Object as PropType<IUtilItem>,
  },
  computed: {},
  setup() {
    const inputCodeBox = ref<typeof CodeBox | null>(null)
    const codeCodeBox = ref<typeof CodeBox | null>(null)
    return {
      inputCodeBox,
      codeCodeBox,
    }
  },
  data() {
    return {
      utilName: this.defaultUtil?.filename.split(".")[0],
      utilContent: this.defaultUtil?.content,
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
        nextTick(() => {
          this.inputCodeBox?.reInitCoder()
          this.codeCodeBox?.reInitCoder()
        })
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
      this.utilContent = this.defaultUtil?.content
      nextTick(() => {
        this.codeCodeBox?.reInitCoder()
      })
    },
    handleClearOutput() {
      this.utilOutput = ""
    },
    handleToggleCode() {
      this.isShowCode = !this.isShowCode
    },
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
  &:not(:first-child) {
    margin-top: 16px;
  }
}
.title {
  padding-bottom: 8px;
}
.help {
  font-size: small;
  padding-bottom: 8px;
}
.params-area {
  .run-params {
    display: flex;
    padding: 8px 0;
    .code-box-wrapper {
      flex: 1;
      margin-right: 8px;
    }
    .button {
      flex-shrink: 0;
    }
  }
}
.code-area {
  .title {
    cursor: pointer;
  }
  .icon {
    &.up {
      transform: rotateZ(-180deg);
      transition: all 300ms;
    }
    transition: all 300ms;
  }
}
.action-area {
  padding: 8px 0;
  display: flex;
  justify-content: flex-end;
}
.button {
  background: #66B9BF;
  border-radius: 18px;
  color: white;
  line-height: 28px;
  padding: 0 12px;
  text-align: center;
  cursor: pointer;
}
.area {
  padding: 8px 0;
}
</style>
