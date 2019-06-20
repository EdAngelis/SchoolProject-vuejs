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
      v-radio-group(v-model="propsClass" row)
        v-radio(label="xs12" value="xs12")
        v-radio(label="xs8" value="xs8")
        v-radio(label="xs6" value="xs6")
        v-radio(label="xs4" value="xs4")
        v-radio(label="xs3" value="xs3")
        v-radio(label="xs2" value="xs2")
        v-radio(label="xs1" value="xs1")

      v-layout.v-layout
        v-flex(:class="propsClass")
          v-card(dark color="secondary")
            v-card-text(class="px-0") v-flex
      
      h3 Propriedade da tag v-container
      v-radio-group(v-model="layoutClass1" @click="imprimirClasses" row)
         v-radio(v-for="(item, index) in radiosLayout1" :key="item.index" :label="item" :value="item")
      v-radio-group(v-model="layoutClass2" @click="imprimirClasses" row)
         v-radio(v-for="(item, index) in radiosLayout2" :key="item.index" :label="item" :value="item")
      v-radio-group(v-model="layoutClass3" @click="imprimirClasses" row)
         v-radio(v-for="(item, index) in radiosLayout3" :key="item.index" :label="item" :value="item")
    v-layout(justify-center fluid)
      h4 v-layout(  {{layoutClass}}   fill-height   )
    v-container.v-container2
      v-layout.layout2(:class="layoutClass" fill-height)
        v-flex.flex2(xs3 pa-2)
          v-card.cards(color="info")
              v-card-text card
        v-flex.flex2(xs3 pa-2)
          v-card.cards(color="info")
              v-card-text card
    v-btn(@click="imprimirClasses") testar junção de classes
          
      
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
          propsClass: '',
          layoutClass1: '',
          layoutClass2: '',
          layoutClass3: '',
          layoutClass:  '',
          radiosLayout1: [
              'align-center',
              'align-end',
              'align-space-around',
              'align-space-between',
              'align-start',
              'Nothing'
          ],
          radiosLayout2: [
              'justify-center',
              'justify-end',
              'justify-space-around',
              'justify-space-between',
              'justify-start',
              'Nothing'
          ],
          radiosLayout3: [
              'row',
              'column',
              'Nothing'
          ]
      }
  },
  methods: {
      imprimirClasses() {
          this.layoutClass =  `${this.layoutClass1}  ${this.layoutClass2}  ${this.layoutClass3}`
          console.log(this.layoutClass);
          
      }
  }
  }
</script>

<style scoped>
  .v-container2{
      border: 2px solid;
      height: 500px;
      width: 700px;
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
  .cards{
      
  }


</style>