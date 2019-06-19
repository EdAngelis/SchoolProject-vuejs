<template lang='pug'>
  div
     v-form(ref="form" v-model="valid" lazy-validation)
         v-layout(row)
             v-text-field(v-model="heroe.name" :rules="nameRules" label="Name of Heroe" required)
             v-radio-group(v-model="heroe.company" row)
                 v-radio(label="Marvel" value="Marvel")
                 v-radio(label="DC" value="DC")
         v-text-field(v-model="heroe.img" :rules="nameRules" label="Url da Imagem" required)         
         v-textarea(v-model="heroe.description" name="input-5-1" box label="Description" auto-grow)
         span(color="success" @click="addHeroe") Add Heroe
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

</style>