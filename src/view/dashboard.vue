<template lang="pug">
v-app#inspire
    v-navigation-drawer(v-model="drawer" fixed app)
        v-list(dense)
            v-list-tile.list(v-for="item in itensMixins" :key="item.title" @click="goPage(item.title)")
               v-list-tile-action
                  v-icon {{item.icon}}
               v-list-content
                   v-list-tile-title {{item.title}}
    v-toolbar(color="indigo" dark fixed app)
        v-toolbar-side-icon( @click.stop="drawer = !drawer")
        v-toolbar-title Projeto Escola Vue Js
    v-content
        v-container
    v-footer(color="indigo" app)
      span(class="white--text") &copy; 2017
</template>

<script>
import restApi from '../view/rest-api.vue'
import mixins from '../mixins/mixins'
  export default {
    name: 'dashboard',
    mixins:[mixins],
    components: {
        restApi
    },
    data: () => ({
      drawer: null,
    }),
    props: {
      source: String
    },
  }
</script>