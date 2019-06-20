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
              v-icon.icon(@click="dialogDeleteOpen(heroe._id)") delete
              v-icon.icon(@click="edit = index") edit
          div.divider
      v-dialog(v-model="dialogDelete" width="500")
        v-container(center justify-center texte-center)  
          v-card
            v-card-title(class="headline grey lighten-2" primary-title)  Realmente Gostaria de Deletar o heroi?
            v-card-actions
              v-btn(color="warning" @click="deleteHeroe()") delete
              v-btn(color="info" @click="dialogDelete = !dialogDelete") cancel
</template>

<script>
export default {
  name: 'heroeList',
  data() {
      return {
          heroeList:[],
          edit: null,
          textToEdit: '',
          dialogDelete: false,
          heroeToDelete: ""
      }
  },
  methods: {
    async editHeroe(idHeroe) {
      const toSend = {
        id: idHeroe,
        text: this.textToEdit
      }
      await this.axios.put(`${process.env.ROOT_API}/heroes/edit-heroes`, toSend)
        .then(data => {
          console.log(data);
          this.edit = null
          mounted()
        })
      
    },
    dialogDeleteOpen(idHeroe) {
      this.heroeToDelete = idHeroe;
      this.dialogDelete = !this.dialogDelete;

    },
    deleteHeroe() {
      this.axios.delete(`${process.env.ROOT_API}/heroes/delete-heroe/${this.heroeToDelete}`)
        .then((result) => {
          console.log('Heroe sendo deletado');
          this.dialogDelete = !this.dialogDelete;
        }).catch(err => {
          console.log('Não foi possível deletar')
        })
      
    }
  },
  async mounted() {
    await this.axios.get(`${process.env.ROOT_API}/heroes/get-heroes`)
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