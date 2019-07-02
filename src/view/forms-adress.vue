<template lang='pug'>
  v-app 
    v-container
      h1(class="text-xs-center") Validação de e-mail e senha, e busca de endereço por cep
      v-form(ref="form" v-model="valid" lazy-validation)
        v-layout(row wrap)
          v-flex(md6)
            v-text-field(
              v-model='register.name' 
              :rules="[rules.required]" 
              label="Nome")
          // Data de Nascimento Input    
          v-menu(
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px")
            template(v-slot:activator="{ on }")
              v-text-field(
                v-model='register.date'
                label='Data de Nascimento'
                :rules="[rules.required]"
                prepend-icon="event"
                readonly
                v-on="on")
            v-date-picker(
              ref="picker"
              v-model="register.date"
              :max="new Date().toISOString().substr(0, 10)"
              min="1950-01-01"
              @change="save"
            )
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
              v-model="register.cep" 
              v-on:keyup="searchCep" 
              label="CEP")
            span(v-show="cepNotFound" class="red--text") Cep não encontrado
          v-flex(md7 pr-2)
            v-text-field(
              v-model="register.street" 
              label="Logradouro"
              :rules="[rules.required]")
          v-flex(md2)
            v-text-field(
              v-model="register.streetNumber" 
              label="Número"
              :rules="[rules.required]")
          v-flex(md4 pr-2)
            v-text-field(
              v-model="register.neighborhood" 
              label="Bairro"
              :rules="[rules.required]")
          v-flex(md4 pr-2)
            v-autocomplete(v-model="estado" :rules="[rules.required]" :items="estados" label="Estado")
          v-flex(md4)
            v-autocomplete(
              v-model="register.city" 
              :rules="[rules.required]" 
              :items="cidades" 
              label="Cidade")
          v-flex(md4)
            v-btn(color="success" :disabled="!valid" @click="validate") Registrar
            v-btn(color="error" @click="resetForm") Limpar
    sliderForm

</template>

<script>
import brasil from '../../public/brasil.json'
import sliderForm from '../components/slide-forms.vue'
export default {
  name: 'forms-adress',
  components: { 
    sliderForm
  },
  data() {
    return {
      show1: false, show2: false, valid: true, naoLocalizado: false, cepNotFound: false, menu: false,
      register: {
        name: '',
        date: '',
        password: '',
        repeatPassword: '',
        email: '',
        confirmeEmail: '',
        cep: '',
        state: '',
        city: '',
        street: '',
        neighborhood: '',
        streetNumber: '',
      },
      date: null,
      estado: null,
      adress: {},
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
  // Assiste Variavel estado, esperando uma alteração
  watch: {
      'estado': function () {
        //Busca as cidades do estado selecionado e põe na variavel Cidades
        this.cidades = brasil[this.estado].cidades
        this.register.state = this.estado
      },
      menu (val) {
        val && setTimeout( () => (
          this.$refs.picker.activePicker = 'YEAR'
        ))
      }
  },
  methods: {
    save (date) {
      this.$refs.menu.save(this.register.date)
      console.log(this.register.date);
      
    },
    searchCep() {
      if(/^[0-9]{5}-[0-9]{3}$/.test(this.register.cep))
      {
        this.axios.get(`https://viacep.com.br/ws/${this.register.cep}/json/`)
          .then(data => {
            if(data.error){
              this.cepNotFound = true;
            }else {
              this.adress = data.data
              this.register.street = this.adress.logradouro
              this.register.state = this.adress.uf
              this.estado = this.adress.uf
              this.register.city = this.adress.localidade
              this.register.neighborhood = this.adress.bairro
            }
          })
      }
      
    },
  validate () {
    this.$refs.form.validate()
  },
  resetForm() {
    this.$refs.form.reset()
  }
  }
}
</script>

<style scoped>

</style>