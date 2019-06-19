<template lang='pug'>
  div
    v-container.headerC(center text-center)
      h1 API Rest, Adcionando heroes com Requisição ajax post 
      p Após submeter o formulário, o componente form irá emitir os dados do form que estarão salvas numa variavél, que será capturada pela pelo componente pai através da tag do component filho, e que acionará a função que enviará a requisição ajax.
    v-form(ref="form")
        v-layout(row)
            v-text-field(v-model="heroe.name" label="Name of Heroe" required)
            v-radio-group(v-model="heroe.company" row)
                v-radio(label="Marvel" value="Marvel")
                v-radio(label="DC" value="DC")
        v-text-field(v-model="heroe.img" label="Url da Imagem" required)         
        v-textarea(v-model="heroe.description" name="input-5-1" box label="Description" auto-grow)
        v-btn(color="success" @click="addHeroe") Add Heroe
</template>

<script>
export default {
  name: 'addHeroe',
  data () {
    return {
      heroe: {
        name:"",
        company:"",
        img: "",
        description: ""
      }
    }
  },
  methods: {
    addHeroe() {
      this.$emit('submitedHeroe', this.heroe)
    }
  }
}
</script>

<style scoped>
  .headerC{
    background-color: rgb(219, 219, 219)
  }
  p{
    font-size: 20px;
  }
</style>