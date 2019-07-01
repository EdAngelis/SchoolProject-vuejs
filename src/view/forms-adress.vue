<template lang='pug'>
  v-app 
    v-container
      h1(class="text-xs-center") Validação de e-mail e senha e busca de endereço por cep
      v-form(ref="form" v-model="valid" lazy-validation)
        v-layout(row wrap)
          v-flex(md12)
            v-text-field(v-model='register.name' :rules="nameRules" label="Nome" required)
          v-flex(md6 pr-3)
            v-text-field(
              v-model='register.password' 
              counter 
              label="Senha" 
              :append-icon="show1 ? 'visibility' : 'visibility_off'"
              :type="show1 ? 'text' : 'password'"
              :rules="passwordRules" 
              @click:append="show1 = !show1"
              required)
          v-flex(md6)
            v-text-field(
              v-model='register.repeatPassword' 
              :append-icon="show2 ? 'visibility' : 'visibility_off'"
              :type="show2 ? 'text' : 'password'"
              :rules="passwordRules"
              @click:append="show2 = !show2"
              counter 
              label="Confirme a senha" 
              required)
          v-flex(md6 pr-3)
            v-text-field(v-model='register.email' :rules="emailRules" label="E-mail" required)
          v-flex(md6)
            v-text-field(v-model='register.confirmeEmail' label="Confirme E-mail" required)
          v-flex(md3 pr-2)
            v-text-field(v-model="cep" v-on:keyup="searchCep" label="CEP")
            span(v-show="cepValido" class="red--text") digite um cep válido
          v-flex(md7 pr-2)
            v-text-field(v-model="adress.logradouro" label="Logradouro")
          v-flex(md2)
            v-text-field(v-model="register.streetNumber" label="Número")
          v-flex(md4 pr-2)
            v-text-field(v-model="adress.bairro" label="Bairro" required)
          v-flex(md4 pr-2)
            v-text(v-model="estado" )
              v-autocomplete(:items="estados" v-model="estado" label="Estado")
          v-flex(md4)
            v-text(v-model="adress.localidade" label="Cidade")
              v-autocomplete(:items="cidades" v-model="adress.localidade" label="Cidade")
          v-flex(md4)
            v-btn(color="success" :disabled="!valid" @click="validate") Registrar
            v-btn(color="error" @click="resetForm") Limpar

</template>

<script>
import brasil from '../../public/brasil.json'
export default {
  name: 'forms-adress',
  data() {
    return {
      show1: false, show2: false, valid: true, cepValido: false, naoLocalizado: false,
      register: {
        name: '',
        password: '',
        repeatPassword: '',
        email: '',
        confirmeEmail: '',
        cep: '',
        streetNumber: '',
      },
      adress: {},
      estado: null,
      cidades: [],
      brasil,
      nameRules: [
        v => !!v || 'É preciso colocar o Nome',
        v => (v && v.length <= 10 || 'Nome precisa ter mais de 10 caracteres')
      ],
      emailRules: [
        v => !!v || 'E-mail é necessário',
        v => /.+@.+/.test(v) || 'E-mail não valido'
      ],
      passwordRules:[
        v => !!v || 'Senha requerida',
        v => v.length >=8 || 'Mínimo de 8 caracteres'
      ],
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
      
    },
  validate () {
    if (this.$refs.form.validate()){
      this.snackbar = true
    }
  },
  resetForm() {
    this.$refs.form.reset()
  }
  }
}
</script>

<style scoped>

</style>