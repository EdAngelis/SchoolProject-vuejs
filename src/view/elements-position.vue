<template lang='pug'>
  v-container(fluid)
    v-layout(row wrap)
      v-flex
        v-card#card1(:class="block1Class" color="success")
          v-card-text(class="display-1") bloco 1
          v-card-actions
            v-btn#btn(dark color="pink") click-me
        v-card#card2(:class="block2Class" color="info")
          v-card-text(class="display-1") bloco 2
          v-card-actions
            v-btn#btn(dark color="pink") click-me
        v-card#card3(:class="block3Class" color="error")
          v-card-text(class="display-1") bloco 3
          v-card-actions
            v-btn#btn(dark color="pink") click-me
      v-flex(xs4)
        v-layout(column wrap)
          v-flex
            span bloco 1
            v-layout(row wrap)
              v-radio-group(v-model='positionSelected1' @click="classRefress")
                v-radio(v-for='item in positions' :key='item' :label='item' :value='item')
              v-radio-group(v-model='zindexSeleted1' @click="classRefress")
                v-radio(v-for='item in zindex' :key='item' :label='item' :value='item')  
          v-flex
            span bloco 2
            v-layout(row wrap)
              v-radio-group(v-model='positionSelected2' @click="classRefress")
                v-radio(v-for='item in positions' :key='item' :label='item' :value='item')
              v-radio-group(v-model='zindexSeleted2' @click="classRefress")
                v-radio(v-for='item in zindex' :key='item' :label='item' :value='item')  
          v-flex
            span bloco 3
            v-layout(row wrap)
              v-radio-group(v-model='positionSelected3' @click="classRefress")
                v-radio(v-for='item in positions' :key='item' :label='item' :value='item')
              v-radio-group(v-model='zindexSeleted3' @click="classRefress")
                v-radio(v-for='item in zindex' :key='item' :label='item' :value='item')          

</template>

<script>
export default {
  name: 'elements-position',
  data() {
    return {
      positionSelected1: '',
      positionSelected2: '',
      positionSelected3: '',
      positions: [ 'absolute', 'relative', 'fixed' ],
      zindexSeleted1: '',
      zindexSeleted2: '',
      zindexSeleted3: '',
      zindex: [ 'zindex1', 'zindex2', 'zindex3', 'zindex0' ],
      block1Class: '',
      block2Class: '',
      block3Class: '',
    }
  },
  methods: {
    classRefress(){
      this.block1Class = `${this.positionSelected1} ${this.zindexSeleted1}`
      this.block2Class = `${this.positionSelected2} ${this.zindexSeleted2}`
      this.block3Class = `${this.positionSelected3} ${this.zindexSeleted3}`
      console.log(this.block1Class);
      console.log(this.block2Class);
      console.log(this.block3Class);
      
    }
  }
  }
</script>

<style scoped>
  #card1{
    top: 100px;
    left:100px;
    height: 300px;
    width: 300px;
  }
  #card2{
    top: 200px;
    left: 250px;
    height: 300px;
    width: 300px;
  }
  #card3{
    left: 400px;
    top: 300px;
    height: 300px;
    width: 300px;
  }
  #btn{
    font-size: 25px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
  }
  .fixed{
    position: fixed;
  }  
  .absolute{
    position: absolute;
  }
  .relative{
    position: relative;
  }
  .zindex1{
    z-index: 1;
  }  
  .zindex2{
    z-index: 2;
  }
  .zindex3{
    z-index: 3;
  }
  .zindex0{
    z-index: 0;
  }  

</style>