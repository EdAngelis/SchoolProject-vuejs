<template lang='pug'>
  v-container
    v-layout
      cards
    v-layout
      expasionPanel
    v-layout
      listComponent

</template>

<script>
import cards from '../components/cards.vue'
import expasionPanel from '../components/expasion-panel.vue'
import listComponent from '../components/list.vue'
export default {
  name: 'layouts',
  components: {
      cards,
      expasionPanel,
      listComponent
  }
  }
</script>

<style scoped>

</style>