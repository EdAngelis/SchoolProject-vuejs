<template lang='pug'>
  v-container
    buttonsComponent
    btnSpeedDial
    btnLoading
    btnToggle
</template>

<script>
import btnToggle from '../components/btn-toggle-overflow.vue'
import buttonsComponent from '../components/buttons.vue'
import btnSpeedDial from '../components/fab-speed-dial.vue'
import btnLoading from '../components/button-loading.vue'

export default {
  name: 'buttons-icons',
  components: {
    buttonsComponent,
    btnSpeedDial,
    btnLoading,
    btnToggle
  }
  }
</script>

<style scoped>

</style>