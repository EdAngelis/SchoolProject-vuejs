<template lang="pug">
v-app#inspire
    NaviToolbar
    v-content
        v-container
            caroselComponent
    v-footer(color="indigo" app)
      span(class="white--text") &copy; 2017
</template>

<script>
import caroselComponent from '../components/carousel-home.vue';
import NaviToolbar from '../components/Navigation-Toolbar.vue'
  export default {
    name: 'dashboard',
    components: {
        NaviToolbar,
        caroselComponent
    },
    data: () => ({
    }),
    props: {
      source: String
    },
  }
</script>