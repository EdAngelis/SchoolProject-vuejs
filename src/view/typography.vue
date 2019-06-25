<template lang='pug'>
  v-app#inspire  
      v-container(fluid)
        v-layout(wrap)
          v-flex(xs12 md6 lg6)
            code(class="title text-xs-center") h1( class="{{propsText}}" ) 
            h1(:class="propsText") Alinhamento e Tipografia dos textos.
        v-layout(wrap)
          v-flex(md2 xs4)
            v-radio-group(v-model="lgAlignRadio" @click="refreshProps" column)
              v-radio(v-for="item in lgAligns" :key="item" :label='item === "" ? "Nothing" : item' :value='item')
          v-flex(md2 xs4)
            v-radio-group(v-model="mdAlignRadio" @click="refreshProps" column)
              v-radio(v-for="item in mdAligns" :key="item" :label='item === "" ? "Nothing" : item' :value='item')
          v-flex(md2 xs4)
            v-radio-group(v-model="xsAlignRadio" @click="refreshProps" column)
              v-radio(v-for="item in xsAligns" :key="item" :label='item === "" ? "Nothing" : item' :value='item')
          v-flex(md2 xs4)
            v-radio-group(v-model='weightsRadio' @click="refreshProps" column)
              v-radio(v-for="item in weightsProps" :key="item.id" :label='item === "" ? "Nothing" : item' :value='item')
          v-flex(md2 xs4)
            v-radio-group(v-model='sizesRadio' @click="refreshProps" column)
              v-radio(v-for="item in sizesProps" :key="item.id" :label='item === "" ? "Nothing" : item' :value='item')
          v-flex(md2 xs4  @click="refreshProps")
            v-switch(v-model="italic" label="italic" value="font-italic")
            v-switch(v-model="noWrap" label="text-no-wrap" value="text-no-wrap")
            v-switch(v-model="truncate" label="text-truncate" value="text-truncate")
            v-radio-group(v-model='transformSelected')
              v-radio(v-for='item in transforms' :key='item' :label='item' :value='item')


        // tag blockquote, com tag kbd e tag code.
        v-layout(class="display-1" wrap)
          v-flex
            blockquote(class="blockquote" ) Tag blockquote, mais class blockquote, com 
             kbd tag kbd e 
             code tag code
          v-flex
            span Alterando cores de texto com a  
              span(class="red--text") classe red--text 
            span e texto destacado com a 
             strong Tag strong, 
               strong(class="indigo--text text--darken") e strong com classe de cores 

</template>

<script>
import NaviToolbar from '../components/Navigation-Toolbar'
export default {
  name: 'typography',
  components: {
      NaviToolbar
  },
  data() {
    return {
      propsText: '',
      lgAlignRadio: '',
      mdAlignRadio: '',
      xsAlignRadio: '',
      weightsRadio: '',
      sizesRadio: '',
      italic: '',
      transformSelected: '',
      truncate: '',
      noWrap: '',
      lgAligns: ['text-lg-right', 'text-lg-center', 'text-lg-left', ''],
      mdAligns: ['text-md-right', 'text-md-center', 'text-md-left', ''],
      xsAligns: ['text-xs-right', 'text-xs-center', 'text-xs-left', ''],
      weightsProps: ['font-weight-thin', 'font-weight-light', 'font-weight-regular', 'font-weight-medium', 'font-weight-bold', 'font-weight-black'],
      sizesProps: ['display-4', 'display-3', 'display-2', 'display-1', 'headline', 'title', 'subheading', 'body-2', 'body-1', 'caption'],
      transforms: ['text-capitalize', 'text-lowercase',  'text-uppercase',  'text-none']
      
    }
  },
  methods: {
    refreshProps() {
      this.propsText = `${this.lgAlignRadio} ${this.mdAlignRadio} ${this.xsAlignRadio}  ${this.weightsRadio} ${this.sizesRadio} ${this.italic}  ${this.transformSelected} ${this.noWrap} ${this.truncate}`
      console.log(this.propsText);
      
    }
  }
  }
</script>

<style scoped>

</style>