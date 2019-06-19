<template lang='pug'>
    div
      div.headerTitle(class="text-center container")
        h1 API Rest, Obtendo lista de herois com Requisição Get via Ajax
        p Ao iniciar o component uma requisição get é enviada para o back-end que retornará a lista de herois 
      div
        div(class="col-md-12 row" v-for="(heroe, index) in heroeList")
          div.row
            img.col-md-3(:src='heroe.img')
            div.col-md-8
              h3(class="headline mb-0") {{heroe.name}}
              p {{heroe.description}}
              div.row(v-show="edit == index")
                v-textarea(class="textarea col-md-10" v-model="textToEdit")
                div.col-md-2 
                  v-btn(color="success" @click='editHeroe(heroe._id)') Salvar
                  v-btn(color="info" @click="edit = null") Cancelar
            div.col-md-1    
              v-icon.icon delete
              v-icon.icon(@click="edit = index") edit
          div.divider
</template>

<script>
export default {
  name: 'heroeList',
  data() {
      return {
          heroeList:[],
          edit: Number,
          textToEdit: ''
      }
  },
  methods: {
    editHeroe(idHeroe) {
      const toSend = {
        id: idHeroe,
        text: this.textToEdit
      }
      this.axios.post(`${process.env.ROOT_API}/heroes/edit-heroes`, toSend)
        .then(data => {
          console.log(data);
        })
      
    }
  },
  beforeCreate() {
    this.axios.get(`${process.env.ROOT_API}/heroes/get-heroes`)
      .then(data => {
        this.heroeList = data.data
        
      }).catch(err => {
        console.log('Não foi possível obter lista', err);
        
      })
      
  }
  }
</script>

<style scoped>
  img{
    height: 100px;
  }
  .divider{
    border-top: 2px solid;
    width: 100%;
    padding: 5px;
  }
  .headerTitle{
    background-color: rgb(224, 224, 224);
    margin-bottom: 20px;
    border-radius: 20px;
  }
  p{
    font-size: 20px;
  }
  .icon{
    padding: 20px;
    cursor: pointer;
  }
  .textarea{
    background-color: rgb(230, 230, 230);
    border: 1px solid;
  }
</style>