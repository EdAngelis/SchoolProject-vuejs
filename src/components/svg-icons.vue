<template>
<div>
<h1> here SVG icon</h1>
<svgicon name="" height=""  @click="show = !show"></svgicon>
<h1 v-if="show"> SVG ICON ESTA AQUI</h1>
<v-icon >home</v-icon>
</div>

</template>

<script>
export default {
  name: 'svg-icons',
  data() {
    return {
      show: false
    }
  }
  }
</script>

<style scoped>

</style>