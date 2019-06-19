<template lang='pug'>
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
            heroeList
            addHeroe(@submitedHeroe="addHeroe")
</template>

<script>
import addHeroe from '../components/addHeroe'
import itensMixins from '../mixins/mixins'
import heroeList from '../components/listOfHeroes-component'
export default {
  name: 'rest-api',
  components: {
    addHeroe,
    heroeList
    },
  mixins: [itensMixins],
  data () {
    return {
      usersList: [],
      drawer: null,
      right: null
    }
  },
  methods: {
   async addHeroe (heroe) {
     await this.axios.post( `${process.env.ROOT_API}/heroes/add-heroe`, heroe)
            .then(res => {
          console.log(res.msg)
        }).catch(err => {
          console.log('Requisition dont go');
        })
    }
  },
}
</script>

<style scoped>
  h1 {
    font-size: 50px;
  }
</style>
