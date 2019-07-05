<template lang='pug'>
  v-container
    v-layout(justify-space-around)
      heartFaceSvg
      paletteSvg
      ScissorsSvg
      watchSVG  
</template>

<script>
import heartFaceSvg from '../components/svg-animations/IconHeartFace'
import paletteSvg from '../components/svg-animations/IconPalette'
import ScissorsSvg from '../components/svg-animations/IconScissors'
import watchSVG from '../components/svg-animations/IconWatch'

export default {
  name: 'svg-animations',
  components: {
  heartFaceSvg,
  paletteSvg,
  ScissorsSvg,
  watchSVG
  }
  }
</script>

<style scoped>

</style>