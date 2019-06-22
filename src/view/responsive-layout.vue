<template lang='pug'>
  v-app#inspire
    NaviToolbar
    v-content
      v-toolbar
        v-toolbar-title grid
        v-spacer
        v-toolbar-items
          v-btn(flat) GRID 1
    v-container
      v-layout(column wrap)
        v-flex
          h1 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        v-layout(row wrap)
          v-flex(:class="sizeClasses" xs4 pa-2)
            v-card  
              v-img(aspect-ratio="2.75" src='http://www.monsterbrain.com.br/wp-content/uploads/2016/04/O-Justiceiro-1-e1462050258483.jpg')
              v-card-title Justiceiro
              v-card-text Uma prova do quão perigoso Frank Castle pode ser foi apresentado na HQ Justiceiro Massacra o Universo Marvel. A história se passa em uma realidade alternativa em que Frank é um agente da SWAT de Nova York e sua família morre no Central Park após um confronto dos X-men contra os alienígenas Skrull.
          v-flex(:class="sizeClasses" xs4 pa-2)
            v-card
              v-img(aspect-ratio="2.75" src='https://cdn11.bigcommerce.com/s-1ah1x75lfn/images/stencil/original/products/2170/12117/a_main__42258.1528402195.jpg?c=2')
              v-card-title Deedpool
              v-card-text Deadpool foi criado por Rob Liefeld e Fabian Nicieza e apareceu pela primeira vez em 1991, como um vilão em New Mutants #98 (história que no Brasil saiu dentro de Os Fabulosos X-Men #584 em 1994).
    v-container
      v-layout(row)
        v-flex
          v-radio-group(v-model="xs" @click="refreshSize" column)
            v-radio(v-for="xs in xsArray" :label="xs === '' ? 'Nothing' : xs" :key="xs.id" :value="xs")          
        v-flex
          v-radio-group(v-model="sm" @click="refreshSize" column)
            v-radio(v-for="sm in smArray" :label="sm === '' ? 'Nothing' : sm" :key="sm.id" :value="sm")      
        v-flex
          v-radio-group(v-model="md" @click="refreshSize" column)
            v-radio(v-for="md in mdArray" :label="md === '' ? 'Nothing' : md" :key="md.id" :value="md")
        v-flex
          v-radio-group(v-model="lg" @click="refreshSize" column)
            v-radio(v-for="lg in lgArray" :label="lg === '' ? 'Nothing' : lg" :key="lg.id" :value="lg")    
</template>

<script>
import NaviToolbar from '../components/Navigation-Toolbar'
export default {
    name: 'responsive-layout',
    components: {
        NaviToolbar
    },
    data() {
      return {
        xsArray: ['xs2','xs4','xs6','xs8','xs12',''],
        smArray: ['sm2','sm4','sm6','sm8','sm12',''],
        mdArray: ['md2','md4','md6','md8','md12',''],
        lgArray: ['lg2','lg4','lg6','lg8','lg12',''],
        sm: '',
        xs: '',
        md: '',
        lg: '',
        sizeClasses: ''
      }
    },
    methods: {
        refreshSize() {
            this.sizeClasses = `${this.sm} ${this.xs} ${this.md} ${this.lg}`
        }
    }
}
</script>
