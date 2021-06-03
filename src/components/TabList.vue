<template>
  <div v-for="(tab, index) in tabs" @click="handleChangeTab(index)">{{tab}}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "TabList",
  props: {
    tabs: Array,
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

<style scoped>

</style>
