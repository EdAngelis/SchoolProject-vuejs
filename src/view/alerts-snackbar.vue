<template lang='pug'>
  v-container(fluid)  
    v-layout(row justify-center)  
      v-flex(xs2)
        v-snackbar(
            v-model="snackbar"
            color="success"
            top
            right
            multi-line
            timeout="3000") Snackbar Error
        v-btn(color="success" @click="snackbar= true") Snackbar Success
      v-flex(xs2)
        v-snackbar(
            v-model="snackbarError"
            color="error"
            bottom
            left
            vertical
            timeout="3000") Snackbar Error
        v-btn(color="error" @click="snackbarError= true") Snackbar error 
    v-layout(column)
      v-flex()
        v-alert(
          :value="alertSuccess"
          dismissible
          type="success" 
        ) Alerta de Sucesso
        v-btn(color="success" @click="alertSuccess= !alertSuccess") Alert Success
      v-flex()
        v-alert(
          :value="alertWarning"
          dismissible
          type="warning" 
        ) Alerta de Warning
        v-btn(color="warning" @click="alertWarning= !alertWarning") Alert Warning
      v-flex()
        v-alert(
          :value="alertInfo"
          dismissible
          type="info"
          outline 
        ) Alerta de info
        v-btn(color="info" @click="alertInfo= !alertInfo") Alert info                
             
</template>

<script>
export default {
  name: 'snackbar-alerts',
  data() {
      return {
          snackbar: false,
          snackbarError: false,
          alertSuccess: false,
          alertWarning: false,
          alertInfo: false,

      }
  }
  }
</script>

<style scoped>

</style>