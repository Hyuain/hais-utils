<template>
  <util-item v-for="util in utils" :default-util="util"></util-item>
</template>

<script>
import UtilItem from "./UtilItem.vue"
export default {
  name: "UtilList",
  components: { UtilItem },
  props: {
    utils: Array,
  }
}
</script>

<style scoped>

</style>
