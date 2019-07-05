<template lang="pug">
  v-container
    v-layout(justify-space-around)
      svgIcon(width="32" height="32")
        peixeSVG
      svgIcon(width="48" height="48")
        groupSvg
      svgIcon(width="64" height="64")
        birdSvg
      svgIcon(width="80" height="80")
        macawSvg
      svgIcon(width="96" height="96")
        notificationSvg
      svgIcon(width="128" height="128")
        typeWriterSvg
      
</template>

<script>
import notificationSvg from '../components/icons/notification-svg.vue'
import macawSvg from '../components/icons/macaw-svg.vue'
import typeWriterSvg from '../components/icons/typewriter-svg.vue'
import birdSvg from '../components/icons/bird-svg.vue'
import svgIcon from '../components/icons/IconBase.vue'
import peixeSVG from '../components/icons/peixe-svg.vue'
import groupSvg from '../components/icons/group.vue'
// Animations SVG icons
export default {
  name: 'svg-icons',
  components: {
    svgIcon,
    peixeSVG,
    groupSvg,
    birdSvg,
    macawSvg,
    notificationSvg,
    typeWriterSvg
  },
  data() {
    return {
      show: false
    }
  }
}
</script>

<style scoped>

</style>