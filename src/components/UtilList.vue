<template>
  <util-item v-for="util in utils" :default-util="util"></util-item>
</template>

<script lang="ts">
import UtilItem from "./UtilItem.vue"
import { defineComponent } from "vue"
export default defineComponent({
  name: "UtilList",
  components: { UtilItem },
  props: {
    utils: Array as any,
  }
})
</script>

<style scoped>

</style>
