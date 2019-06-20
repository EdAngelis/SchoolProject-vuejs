<template lang='pug'>
div
  v-navigation-drawer(v-model="drawer" fixed app)
        v-list(dense)
            v-list-tile.list( @click="goPage('home')")
               v-list-tile-action
                  v-icon home
               v-list-tile-content
                   v-list-tile-title home
            v-list-tile.list(@click="vueJs = !vueJs")
               v-list-tile-action
                  v-icon dashboard
               v-list-tile-content
                   v-list-tile-title Vue Js
            v-flex(v-show="vueJs")  
              v-list-tile.list(v-for="item in itensMixins" :key="item.title" @click="goPage(item.title)")
                 v-list-tile-action
                    v-icon {{item.icon}}
                 v-list-tile-content
                     v-list-tile-title {{item.title}}
        v-list(dense)
            v-list-tile.list(@click="vuetify = !vuetify")
               v-list-tile-action
                  v-icon favorite
               v-list-tile-content
                   v-list-tile-title Vuetify
            v-flex(v-show="vuetify")  
              v-list-tile.list(v-for="item in vuetifySessions" :key="item.title" @click="goPage(item.title)")
                 v-list-tile-action
                    v-icon {{item.icon}}
                 v-list-tile-content
                     v-list-tile-title {{item.title}}
  v-toolbar(color="indigo" dark fixed app)
      v-toolbar-side-icon( @click.stop="drawer = !drawer")
      v-toolbar-title Projeto Escola Vue Js
</template>

<script>
import mixins from '../mixins/mixins'
export default {
  name: 'NaviToolbar',
  mixins: [mixins],
   data() {
      return {
        drawer: false,
        vueJs: false,
        vuetify: false
      }
  }
  }
 
</script>

<style scoped>

</style>