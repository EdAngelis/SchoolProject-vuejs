<template lang='pug'>
  v-container(fluid)
    v-layout(column)
      v-card.mt-3
        toolbarSession(title="Google Material Desing Icons")
        v-layout(px-5 py-2 justify-space-around)
            v-icon( color="error") home
            v-icon(medium color="error") home
            v-icon(large color="error") home
            v-icon(x-large color="error") home
        v-layout(px-5 py-2 justify-space-around)
            v-icon( color="primary") people
            v-icon(medium color="primary") people
            v-icon(large color="primary") people
            v-icon(x-large color="primary") people
        v-layout(px-5 py-2 justify-space-around)
            v-icon( color="success") build
            v-icon(medium color="success") build
            v-icon(large color="success") build
            v-icon(x-large color="success") build
        v-layout(px-5 py-2 justify-space-around teal)
            v-icon( dark) check_circle
            v-icon(medium dark) check_circle
            v-icon(large dark) check_circle
            v-icon(x-large dark) check_circle


      v-card.mt-3
        toolbarSession(title="Font Awesome 5 Icons")
        v-layout(px-5 py-2 justify-space-around)
            v-icon(color="info") fas fa-air-freshener
            v-icon(medium color="info") fas fa-air-freshener
            v-icon(large color="info") fas fa-air-freshener
            v-icon(x-large color="info") fas fa-air-freshener
        v-layout(px-5 py-2 justify-space-around)
            v-icon( color="warning") fas fa-at
            v-icon(medium color="warning") fas fa-at
            v-icon(large color="warning") fas fa-at
            v-icon(x-large color="warning") fas fa-at
        v-layout(px-5 py-2 justify-space-around)
            v-icon( color="pink") fa-angry
            v-icon(medium color="pink") fa-angry
            v-icon(large color="pink") fa-angry
            v-icon(x-large color="pink") fa-angry
        v-layout(px-5 py-2 justify-space-around teal)
            v-icon( dark) fa-hashtag
            v-icon(medium dark) fa-hashtag
            v-icon(large dark) fa-hashtag
            v-icon(x-large dark) fa-hashtag

      v-card.mt-3
        toolbarSession(title="Material Design Icons")
        v-layout(px-5 py-2 justify-space-around)
            v-icon(color="green") mdi-bell-ring-outline
            v-icon(medium color="green") mdi-bell-ring-outline
            v-icon(large color="green") mdi-bell-ring-outline
            v-icon(x-large color="green") mdi-bell-ring-outline
        v-layout(px-5 py-2 justify-space-around)
            v-icon( color="black") mdi-bug
            v-icon(medium color="black") mdi-bug
            v-icon(large color="black") mdi-bug
            v-icon(x-large color="black") mdi-bug
        v-layout(px-5 py-2 justify-space-around)
            v-icon( color="purple") mdi-cloud-upload
            v-icon(medium color="purple") mdi-cloud-upload
            v-icon(large color="purple") mdi-cloud-upload
            v-icon(x-large color="purple") mdi-cloud-upload
        v-layout(px-5 py-2 justify-space-around teal)
            v-icon(dark) mdi-email-outline
            v-icon(medium dark) mdi-email-outline
            v-icon(large dark) mdi-email-outline
            v-icon(x-large dark) mdi-email-outline
      v-card.mt-3
        toolbarSession(title="Custom SVG icons")
        svgIconsComponent
      v-card.mt-3
        toolbarSession(title="Animation SVG icons")
        animationsSVG
 
</template>

<script>
import animationsSVG from '../components/svg-animations'
import svgIconsComponent from '../components/svg-icons.vue'
import toolbarSession from '../components/card-session.vue'
export default {
  name: 'icons',
  components: {
    toolbarSession,
    svgIconsComponent,
    animationsSVG  
  }
  }
</script>

<style scoped>

</style>