<template lang='pug'>
  v-app 
    v-form
      v-container
        h1(class="text-xs-center") Validação de e-mail e senha
        h1(class="text-xs-center") Busca de endereço por cep e auto-complete cidade por estado
        v-layout(row wrap)
          v-flex(md3)
            v-text-field(v-model="cep" v-on:keyup="searchCep" label="CEP")
            span(v-show="cepValido" class="red--text") digite um cep válido
          v-flex(md7)
            v-text-field(v-model="adress.logradouro" label="Logradouro")
          v-flex(md2)
            v-text-field(v-model="streetNumber" label="Número")
          v-flex(md4)
            v-text-field(v-model="adress.bairro" label="Bairro")
          v-flex(md4)
            v-text(v-model="estado" )
              v-autocomplete(:items="estados" v-model="estado" label="Estado")
          v-flex(md4)
            v-text(v-model="adress.localidade" label="Cidade")
              v-autocomplete(:items="cidades" v-model="adress.localidade" label="Cidade")

</template>

<script>
import brasil from '../../public/brasil.json'
export default {
  name: 'forms-adress',
  data() {
    return {
      cep: '',
      streetNumber: '',
      cepValido: false,
      adress: {},
      naoLocalizado: false,
      estado: null,
      cidades: [],
      brasil,
      estados: [
        { value: null, text: "Selecione um estado" },
        { value: "AC", text: "Acre" },
        { value: "AL", text: "Alagoas" },
        { value: "AP", text: "Amapá" },
        { value: "AM", text: "Amazonas" },
        { value: "BA", text: "Bahia" },
        { value: "CE", text: "Ceará" },
        { value: "DF", text: "Distrito Federal" },
        { value: "ES", text: "Espírito Santo" },
        { value: "GO", text: "Goiás" },
        { value: "MA", text: "Maranhão" },
        { value: "MT", text: "Mato Grosso" },
        { value: "MS", text: "Mato Grosso do Sul" },
        { value: "MG", text: "Minas Gerais" },
        { value: "PA", text: "Pará" },
        { value: "PB", text: "Paraíba" },
        { value: "PR", text: "Paraná" },
        { value: "PE", text: "Pernambuco" },
        { value: "PI", text: "Piauí" },
        { value: "RJ", text: "Rio de Janeiro" },
        { value: "RN", text: "Rio Grande do Norte" },
        { value: "RS", text: "Rio Grande do Sul" },
        { value: "RO", text: "Rondônia" },
        { value: "RR", text: "Roraima" },
        { value: "SC", text: "Santa Catarina" },
        { value: "SP", text: "São Paulo" },
        { value: "SE", text: "Sergipe" },
        { value: "TO", text: "Tocantins" }
      ]
    }
  },
watch: {
    'estado': function () {
      this.cepValido = false
      this.cidades = brasil[this.estado].cidades
    }
  },
  methods: {
    searchCep() {
        
      if(/^[0-9]{5}-[0-9]{3}$/.test(this.cep))
      {
        this.axios.get(`https://viacep.com.br/ws/${this.cep}/json/`)
          .then(data => {
            if(data.error){
              this.cepValido = true
            }else {
              this.adress = data.data
              this.estado = data.data.uf
            }
          }).catch( err => {
            console.log(err);
          })
      }else this.cepValido = true;
      
    }
  }
  }
</script>

<style scoped>

</style>