<template lang='pug'>
  v-app#inspire
    NaviToolbar
    v-content
      v-toolbar
        v-toolbar-title grid
        v-spacer
        v-toolbar-items
          v-btn(flat) GRID 1
    v-container.v-container(text-center fluid)
      h3 Propriedade que define tamanho na tag v-flex
      v-layout(row wrap)
        v-radio-group.radios(v-model="flexClass1" @click="imprimirClasses" row)
          v-radio(v-for="item in radioFlex1" :key="item.id" :label="item" :value="item")
        v-radio-group.radios(v-model="flexClass2" @click="imprimirClasses" row)
          v-radio(v-for="item in radioFlex2" :key="item.id" :label="item" :value="item")
      h3 Propriedade da tag v-container
      v-layout(row wrap)
        v-flex(lg2 xs12)
            v-radio-group.radios(v-model="layoutClass1" @click="imprimirClasses" column)
               v-radio(v-for="(item, index) in radiosLayout1" :key="item.index" :label="item.title === '' ? 'Notthing' : item.title" :value="item.title")
        v-flex(lg2 xs12)
          v-radio-group.radios(v-model="layoutClass2" @click="imprimirClasses" column)
             v-radio(v-for="(item, index) in radiosLayout2" :key="item.index" :label="item.title === '' ? 'Notthing' : item.title" :value="item.title")
        v-flex(lg2 xs12)
          v-radio-group.radios(v-model="layoutClass3" @click="imprimirClasses" column)
             v-radio(v-for="(item, index) in radiosLayout3" :key="item.index" :label="item.title" :value="item.title")
          v-flex(@click="imprimirClasses")
            v-switch(v-model="wrap.title" label='wrap' value="wrap" color="warning")
            v-switch(v-model="fillHeight.title" label='fill-height' value="fill-height" color="indigo")
        v-flex(lg5 xs12)
          h4 v-layout(  {{layoutClass}} )
          v-container.v-container2()
            v-layout.layout2(:class="layoutClass" )
              v-flex.flex2(:class="flexClass" pa-2)
                v-card.cards(color="info")
                    v-card-text 
              v-flex.flex2(:class="flexClass" pa-2)
                v-card.cards(color="info")
                    v-card-text 
      v-layout(v-for="item in allProps" :key="item.id" text-left column)
        v-card
          h3 {{item.title}}
          p {{item.description}}      
      
</template>

<script>
import NaviToolbar from '../components/Navigation-Toolbar';
import mixins from '../mixins/mixins';
export default {
  name: 'grid',
  components: {
      NaviToolbar
  },
  mixins: {mixins},
  data() {
      return {
          allProps: [],
          flexClass: '',
          flexClass1: '',
          flexClass2: '',
          layoutClass1: '',
          layoutClass2: '',
          layoutClass3: '',
          layoutClass:  '',
          fillHeight: { title: '', description: 'Faz v-layout ter altura do elemento que a envolve'},
          wrap: { title: '', description: 'Não permite tamanho dos elementos se adptarem quando atingirem tamanho máximo da linha, fazendo com que os elemento passem para outra linha'},
          radiosLayout1: [
              {title: 'align-center', description: 'Quando em row layout alinha verticalmente no centro, quando em column alinha horizontalmente no centro.'},
              {title: 'align-end', description: 'Em row alinha no bottom do elemento, em column, alinha a direita do elemento'},
              {title: 'align-space-around', description: 'Iguala espaços entre elementos'},
              {title: 'align-space-between', description: 'Iguala espaço entre elementos, ignorando espaço laterais'},
              {title: 'align-start', description: 'Em row alinha no top do elemento, em column, alinha a esquerda do elemento'},
              {title: ''}
          ],
          radiosLayout2: [
              {title: 'justify-center', description: 'Em row ajusta horizontalmente no centro, quando em column, ajusta verticalmente no centro'},
              {title: 'justify-end', description: 'Em row ajusta  a direita, em column, ajusta no botton'},
              {title: 'justify-space-around', description: 'Iguala espaços entre elementos'},
              {title: 'justify-space-between', description: 'Iguala espaço entre elementos, ignorando espaço laterais'},
              {title: 'justify-start', description: 'Em row ajusta a esquerda, em column, ajusta no top'},
              {title: ''}
          ],
          radiosLayout3: [
              {title: 'row', description: 'Organiza os itens um ao lado do outro'},
              {title: 'column', description: ' Organiza os itens um em baixo do outro'},
              {title: ''}
          ],
          radioFlex1:[
            'xs1',
            'xs2',
            'xs4',
            'xs6',
            'xs8',
            'xs12'
          ]
      }
  },
  methods: {
      imprimirClasses() {
          this.layoutClass =  `${this.layoutClass1} ${this.layoutClass2} ${this.layoutClass3} ${this.fillHeight.title} ${this.wrap.title}`
          this.flexClass =  `${this.flexClass1}  ${this.flexClass2}`
          console.log(this.layoutClass);
          
      }
  },
  mounted() {
    this.allProps = this.allProps.concat(this.radiosLayout1, this.radiosLayout2, this.radiosLayout3, this.wrap, this.fillHeight)
    console.log(this.allProps);
    
  }
  }
</script>

<style scoped>
  .v-container2{
      background-color: rgb(205, 250, 134);
      height: 100%;
      width: 100%;
  }
  .v-layout{
      background-color: rgb(94, 0, 0)
  }
  .v-flex{
      background-color: rgb(115, 128, 39)
  }
  h3{
      margin-top: 20px;
  }
  .radios{
     
  }


</style>