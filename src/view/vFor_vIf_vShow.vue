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
        h1 DIRETIVAS V-FOR V-IF E V-SHOW
</template>

<script>
import itensMixins from '../mixins/mixins'

export default {
  name: 'vFor_vIf_vShow',
  mixins: [itensMixins],
  data () {
    return {
      usersList: [],
      drawer: null,
      right: null
    }
  },
  methods: {
    deleteUser (userToRemove) {
      this.axios.post('http://localhost:3000/users/delete-user', userToRemove)
        .then(data => {
          console.log(data)
        }).catch(erro => {
          console.log('Erro ao tentar deletar')
        })
    }
  },
  beforeCreate () {
    this.axios.get('http://localhost:3000/users/lista-de-users')
      .then(data => {
        this.usersList = data.data
      }).catch(erro => {
        console.log('Erro ao carregar Lista')
      })
  }
}
</script>

<style scoped>
  h1 {
    font-size: 50px;
  }
</style>
