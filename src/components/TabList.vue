<template>
  <div v-for="(tab, index) in tabs" @click="handleChangeTab(index)">{{tab.name}}</div>
</template>

<script>
export default {
  name: "TabList",
  props: {
    tabs: Array,
    currentIndex: Number,
  },
  emits: ['changeTab'],
  methods: {
    handleChangeTab(index) {
      console.log(index)
      this.$emit('changeTab', index)
    }
  }
}
</script>

<style scoped>

</style>
