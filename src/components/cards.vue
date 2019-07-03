<template lang='pug'>
  v-container(fluid)
    v-toolbar.mb-3(color="indigo" dark)
      v-toolbar-title CARDS
    v-layout(row justify-space-around)
      v-flex(xs4 class="grey lighten-3")
        v-card
          v-container(fluid grid-list-lg)
            v-layout(row wrap)
              v-flex(xs12)
                v-card( color="light-blue accent-3" class="white--text")
                  v-layout(row)
                    v-flex(xs5)
                      v-img(src='https://cdn.vuetifyjs.com/images/cards/foster.jpg'
                        height="125px"
                        contain)
                    v-flex(xs7)
                      v-card-title(primary-title)
                        div
                          div(class="headline") Supermodel
                          div Foster the Peaple
                          div (2014)
                  v-divider(light)
                  v-card-actions(class="pa-3") Rate this album
                    v-spacer
                    v-icon star_border
                    v-icon star_border
                    v-icon star_border
                    v-icon star_border
                    v-icon star_border
              
              v-flex(xs12)
                v-card(color="purple lighten-1" class="white--text")
                  v-layout(row)
                    v-flex(xs7)
                      v-card-title(primary-title)
                        div
                          div.headline Halycon Days
                          div Ellie Goulding
                          div (2013)
                    v-flex(xs5)
                      v-img(src='https://cdn.vuetifyjs.com/images/cards/halcyon.png' height="125px" contain)
                  v-divider(light)
                  v-card-actions.pa-3 Rate this album
                    v-spacer
                    v-icon star_border
                    v-icon star_border
                    v-icon star_border
                    v-icon star_border
                    v-icon star_border
      // Twiter Card
      v-flex(xs4)
        v-card(class="mx-auto" color="#26c6da" dark)
          v-card-title
            v-icon(large left) mdi-twitter
            span(class="title font-weight-light") Twitter
          v-card-text(class="headline font-weight-bold") Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
          v-card-actions
            v-list-tile.grow
              v-list-tile-avatar(color="grey darken-3")
                v-img.elevation-6(src="https://i.pinimg.com/originals/0d/2c/e7/0d2ce7de833e651e0bf4191c16e2d693.png")
              v-list-tile-content
                v-list-tile-title Jeanny Lins
              v-layout(align-center justify-end)
                v-icon.mr-1 mdi-heart
                span.subheading.mr-2 256
                span.mr-1 .
                v-icon.mr-1 mdi-share-variant
                span.subheading 45
        
</template>

<script>
export default {
  name: 'cards',
  }
</script>

<style scoped>

</style>