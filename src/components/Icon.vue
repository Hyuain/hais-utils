<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="'#icon-' + name"></use>
  </svg>
</template>

<script lang="ts">
import UtilItem from "./UtilItem.vue"
import { defineComponent, PropType } from "vue"
import { IUtilItem } from "../interface/utils.interface"
export default defineComponent({
  name: "Icon",
  props: {
    name: String,
  }
})
</script>

<style scoped>

</style>
