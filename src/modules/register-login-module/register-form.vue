<template lang="pug">
div.container
    form.form-group
        input.form-control(v-model="user.name" placeholder="Nome")
        input.form-control(v-model="user.email" placeholder="Email")
        input.form-control(v-model="user.senha" placeholder="Senha")
        input.form-control(v-model="user.state" placeholder="Estado")
        input.form-control(v-model="user.city" placeholder="Cidade")
        span.submit(@click="submit") Cadastrar Usuário
</template>

<script>
export default {
  name: 'register-form',
  data () {
    return {
      user: {
        name: '',
        email: '',
        senha: '',
        state: '',
        city: ''
      }
    }
  },
  methods: {
    submit () {
      this.$emit('submited', this.user)
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style scoped>
  div {
    position: relative;
    top: 100px;
  }
  button {
    position: relative;
    top: 50px;
  }
</style>
