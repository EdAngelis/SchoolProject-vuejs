<template lang='pug'>
  v-app 
    v-container
      h1(class="text-xs-center") Validação de e-mail e senha, e busca de endereço por cep
      v-form(ref="form" v-model="valid" lazy-validation)
        v-layout(row wrap)
          v-flex(md12)
            v-text-field(
              v-model='register.name' 
              :rules="[rules.required]" 
              label="Nome")
          v-flex(md6 pr-3)
            v-text-field(
              v-model='register.password' 
              counter 
              label="Senha" 
              :append-icon="show1 ? 'visibility' : 'visibility_off'"
              :type="show1 ? 'text' : 'password'"
              :rules="[rules.required, rules.min8]" 
              @click:append="show1 = !show1"
              required)
          v-flex(md6)
            v-text-field(
              v-model='register.repeatPassword' 
              :append-icon="show2 ? 'visibility' : 'visibility_off'"
              :type="show2 ? 'text' : 'password'"
              :rules="[rules.required, rules.confirmPassword]"
              @click:append="show2 = !show2"
              counter 
              label="Confirme a senha" )
          v-flex(md6 pr-3)
            v-text-field(
              v-model='register.email' 
              :rules="[rules.validEmail, rules.required]" 
              label="E-mail")
          v-flex(md6)
            v-text-field(
              v-model='register.confirmeEmail' 
              :rules="[rules.required, rules.confirmEmail]"
              label="Confirme E-mail")
          v-flex(md3 pr-2)
            v-text-field(
              v-model="cep" 
              v-on:keyup="searchCep" 
              label="CEP"
              :rules="[rules.validCep]")
          v-flex(md7 pr-2)
            v-text-field(
              v-model="adress.logradouro" 
              label="Logradouro"
              :rules="[rules.required]")
          v-flex(md2)
            v-text-field(
              v-model="register.streetNumber" 
              label="Número"
              :rules="[rules.required]")
          v-flex(md4 pr-2)
            v-text-field(
              v-model="adress.bairro" 
              label="Bairro"
              :rules="[rules.required]")
          v-flex(md4 pr-2)
            v-text(
              v-model="estado"
              :rules="[rules.required]")
              v-autocomplete(v-model="estado" :items="estados" label="Estado")
          v-flex(md4)
            v-text(
              v-model="adress.localidade" 
              label="Cidade"
              :rules="[rules.required]")
              v-autocomplete(v-model="adress.localidade" :items="cidades" label="Cidade")
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
      show1: false, show2: false, valid: true, naoLocalizado: false,
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
      rules: {
        required: v => !!v || 'Campo requerido',
        validEmail: v => /.+@.+/.test(v) || 'E-mail não valido',
        min8: v => v.length >=8 || 'Mínimo de 8 caracteres',
        confirmPassword: v => v === this.register.password || 'Senhas não conferem',
        confirmEmail:  v => v === this.register.email || 'E-mails não conferem',
        validCep: v => /^[0-9]{5}-[0-9]{3}$/.test(v) || 'Digite um cep valido'
      },

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
            }else {
              this.adress = data.data
              this.estado = data.data.uf
            }
          }).catch( err => {
            console.log(err);
          })
      }
      
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