<template lang='pug'>
  v-app#inspire
    v-container
      v-layout.v-layout(align-center style="height:300px")
        v-flex(xs6)
          v-card(dark color="secondary")
            v-card-text(class="px-0") v-flex
</template>

<script>
export default {
  name: 'elementos',
  }
</script>

<style scoped>
  .vcontainer{
    background-color: black
  }
  .vflex{
    background-color: aquamarine
  }
</style>