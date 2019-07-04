<template lang='pug'>
      v-toolbar(color="indigo" dark)
        v-toolbar-title {{title}}
</template>

<script>
export default {
  name: 'card-session',
  props: {title: String}
  }
</script>

<style scoped>

</style>