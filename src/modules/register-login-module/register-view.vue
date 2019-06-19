<template lang="pug">
div
  h1 REGISTER VIEW
  registerForm(@submited="addUser")
</template>

<script>
import registerForm from './register-form'
export default {
  name: 'register',
  components: {
    registerForm
  },
  methods: {
    async addUser (user) {
      console.log('Enviando', user)
      await this.axios.post('http://localhost:3000/users/add-users', user)
        .then(res => {
          console.log('Requisição Enviada', res)
        })
    },
        deleteUser (userToRemove) {
      this.axios.post('http://localhost:3000/users/delete-user', userToRemove)
        .then(data => {
          console.log(data)
        }).catch(erro => {
          console.log('Erro ao tentar deletar')
        })
    }
  }
}
</script>

<style scoped>

</style>
