<template>
  <util-item v-for="util in utils" :default-util="util"></util-item>
</template>

<script lang="ts">
import UtilItem from "./UtilItem.vue"
import { defineComponent, PropType } from "vue"
import { IUtilItem } from "../interface/utils.interface"
export default defineComponent({
  name: "UtilList",
  components: { UtilItem },
  props: {
    utils: Array as PropType<IUtilItem[]>,
  }
})
</script>

<style scoped>

</style>
