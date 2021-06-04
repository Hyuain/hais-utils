<template>
  <div class="tab-list">
    <div v-for="(tab, index) in tabs"
         @click="handleChangeTab(index)"
         :class="['tab-item', { selected: currentIndex === index }]"
    >{{ tab.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import { ITabItem } from "../interface/basic.interface"

export default defineComponent({
  name: "TabList",
  props: {
    tabs: Array as PropType<ITabItem[]>,
    currentIndex: Number,
  },
  emits: ['changeTab'],
  methods: {
    handleChangeTab(index: number) {
      this.$emit('changeTab', index)
    }
  }
})
</script>

<style scoped lang="scss">
.tab-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tab-item {
  font-size: x-large;
  margin-bottom: 16px;
  text-transform: capitalize;
  cursor: pointer;
  &.selected {
    color: #66B9BF;
    font-weight: bold;
  }
}
</style>
