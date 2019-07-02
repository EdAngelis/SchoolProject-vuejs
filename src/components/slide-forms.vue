<template lang='pug'>
  v-layout
    v-flex(pa-5)
      v-slider(
          v-model="quiz01"
          :tick-labels="seasons"
           thumb-label
           :max="3"
           step="1"
           thumb-size="128"
           ticks="always"
           tick-size="2"
           @change="printSlider")
        // Balão animado
        template( v-slot:thumb-label="props")
          span {{ season(props.value) }}
</template>

<script>
export default {
  name: 'slider-form',
  data() {
      return {
          quiz01: '',
          seasons: [
              'Muito insatisfeito',
              'Insatisfeito',
              'Satisfeito',
              'Muito satisfeito'
          ]
      }
  },
  methods: {
      season (val) {
          return this.seasons[val]
      },
      printSlider () {
          console.log(this.quiz01);
      }
  }
  }
</script>

<style scoped>

</style>