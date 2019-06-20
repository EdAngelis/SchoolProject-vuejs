<template lang='pug'>
v-app#inspire
    NaviToolabr
    v-content
        v-container
            div(v-if="!AddHeroiComponent")
                v-btn(color="warning" large @click="AddHeroiComponent = !AddHeroiComponent") Adcionar Heroe
                heroeList
            div(v-else)
                v-btn(color="info" large @click="AddHeroiComponent = !AddHeroiComponent") Cancelar
                addHeroe(@submitedHeroe="addHeroe")
</template>

<script>
import NaviToolabr from '../components/Navigation-Toolbar'
import addHeroe from '../components/addHeroe'
import heroeList from '../components/listOfHeroes-component'
export default {
  name: 'rest-api',
  components: {
    addHeroe,
    heroeList,
    NaviToolabr
    },
  data () {
    return {
      usersList: [],
      drawer: null,
      right: null,
      AddHeroiComponent: false
    }
  },
  methods: {
   async addHeroe (heroe) {
     await this.axios.post( `${process.env.ROOT_API}/heroes/add-heroe`, heroe)
            .then(res => {
          console.log(res.msg)
          this.AddHeroiComponent = !this.AddHeroiComponent
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
