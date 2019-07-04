<template lang='pug'>
  v-container(fluid)
    v-card.pa-2
      v-toolbar(color="indigo" dark)
        v-toolbar-title Buttons Properties
        // Button
      v-layout(justify-center)
          v-btn(
            :color="color" 
            :small="small"
            :large="large"
            :outline="outline"
            :round="round"
            :block="block"
            :icon="iconType"
            :disabled="disabled"
            :depressed="depressed"
            :fab="fab") {{text === true ? "Botão" : ""}}
            v-icon.pa-1(v-if="withIcon") android
      v-card-actions
        v-layout(row)
          v-flex(md2)
            v-subheader.font-weight-bold Cores
            v-radio-group(v-model='color')
              v-radio(v-for='item in colors' :key='item' :label='item' :value='item' :color="item")
          v-flex(md2)
            v-subheader.font-weight-bold Tamanho
            v-radio-group(v-model='scale' @click="sizeButton")
              v-radio(v-for='item in scales' :key='item' :label='item' :value='item')  
          // Swites
          v-flex(md2)
            v-switch( v-model='outline' label='outline' value='outline')
            v-switch( v-model='round' label='round' value='round')
            v-switch( v-model='block' label='block' value='block')
            v-switch( v-model='iconType' label='iconType' value='iconType')
          v-flex(md2)  
            v-switch( v-model='disabled' label='disabled' value='disabled')
            v-switch( v-model='depressed' label='depressed' value='depressed')
            v-switch( v-model='fab' label='fab' value='fab')
          v-flex(md2)
            v-checkbox(v-model="withIcon" label="With Icon")
            v-checkbox(v-model="text" label="With Text")

                
</template>

<script>
import cardSession from '../components/card-session.vue'
export default {
  name: 'buttons',
  components: {
      cardSession
  },
  data() {
      return {
          large: false, 
          small: false,
          outline: false,
          round: false,
          block: false,
          iconType: false,
          withIcon: false,
          disabled: false,
          depressed: false,
          fab: false,
          title: 'Button Fab with speed-dial',
          scale: '',
          scales: ['small', 'normal', 'large'],
          text: true,
          color: '',
          colors: ['success', 'error', 'warning', 'info']
      }
  },
  methods: {
    sizeButton() {
        if( this.scale === "large") 
        {
            this.large = true
            this.small = false
        }
        else if (  this.scale === "small" )
        {   
            this.large = false
            this.small = true
        }else
        {
            this.large = false
            this.small = false
        } 
            
    }
  }
  }
</script>

<style scoped>

</style>