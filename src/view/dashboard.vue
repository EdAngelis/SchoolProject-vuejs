<template lang="pug">
v-app#inspire
  v-container
    caroselComponent
</template>

<script>
import caroselComponent from '../components/carousel-home.vue';
import NaviToolbar from '../components/Navigation-Toolbar.vue'
import footerComponent from '../components/footer-component.vue'
  export default {
    name: 'dashboard',
    components: {
        NaviToolbar,
        caroselComponent,
        footerComponent
    },
    data: () => ({
    }),
    props: {
      source: String
    },
  }
</script>