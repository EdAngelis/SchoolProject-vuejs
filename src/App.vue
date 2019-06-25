<template lang="pug">
  v-app(id="app")
    v-content
      NaviToolbar
      router-view
      footerComponent
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vuetify/dist/vuetify.min.css'
import NaviToolbar from './components/Navigation-Toolbar'
import footerComponent from './components/footer-component.vue'

export default {
  name: 'App',
  components: {
    NaviToolbar,
    footerComponent
  }

}
</script>

<style>

</style>
