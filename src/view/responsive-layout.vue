<template lang='pug'>
  v-app#inspire
      v-container(fluid)
        v-layout(column wrap)
          v-flex
            h1(class="text-xs-center") xs até 600px /sm 600px a 960px/ md 960px a 1264px / lg 1264px a 1904px / xl acima de 1904px 
          v-layout(:class="wrap" row)
            v-flex(:class="sizeClasses" pa-2)
              v-card  
                v-img(aspect-ratio="2" src='http://www.monsterbrain.com.br/wp-content/uploads/2016/04/O-Justiceiro-1-e1462050258483.jpg')
                v-card-title Justiceiro
                v-card-text Uma prova do quão perigoso Frank Castle pode ser foi apresentado na HQ Justiceiro Massacra o Universo Marvel. A história se passa em uma realidade alternativa em que Frank é um agente da SWAT de Nova York e sua família morre no Central Park após um confronto dos X-men contra os alienígenas Skrull.
            v-flex(:class="sizeClasses" pa-2)
              v-card(class="elevation-24")
                v-img(aspect-ratio="2" src='https://cdn11.bigcommerce.com/s-1ah1x75lfn/images/stencil/original/products/2170/12117/a_main__42258.1528402195.jpg?c=2')
                v-card-title Deedpool
                v-card-text Deadpool foi criado por Rob Liefeld e Fabian Nicieza e apareceu pela primeira vez em 1991, como um vilão em New Mutants #98 (história que no Brasil saiu dentro de Os Fabulosos X-Men #584 em 1994).
        v-layout(row wrap)
          v-flex
            v-radio-group(v-model="xs" @click="refreshSize" column)
              v-radio(v-for="xs in xsArray" :label="xs === '' ? 'Nothing' : xs" :key="xs.id" :value="xs")               
          v-flex
            v-radio-group(v-model="md" @click="refreshSize" column)
              v-radio(v-for="md in mdArray" :label="md === '' ? 'Nothing' : md" :key="md.id" :value="md")
          v-flex
            v-radio-group(v-model="lg" @click="refreshSize" column)
              v-radio(v-for="lg in lgArray" :label="lg === '' ? 'Nothing' : lg" :key="lg.id" :value="lg")
          v-flex
            v-switch(v-model="wrap" label="wrap" value="wrap")
        v-layout(column)
          v-flex
            h2 Outros atributos úteis:
            v-card(v-for="item in responsiveProps" :key="item.id")
              h3 {{item.title}}
              p {{item.description}}
</template>

<script>
import NaviToolbar from '../components/Navigation-Toolbar'
import footerComponent from '../components/footer-component.vue'
export default {
    name: 'responsive-layout',
    components: {
        NaviToolbar,
        footerComponent
    },
    data() {
      return {
        xsArray: ['xs2','xs4','xs6','xs8','xs12',''],
        mdArray: ['md2','md4','md6','md8','md12',''],
        lgArray: ['lg2','lg4','lg6','lg8','lg12',''],
        sm: '',
        xs: '',
        md: '',
        lg: '',
        wrap: '',
        sizeClasses: '',
        responsiveProps: [
          {title: 'offset', description: 'Com a propriedade offset-xs/sm/md/lg Você pode determinar o a posição do elemento nos diferentes dispositivos. ex: offset-md-3  '},
          {title: 'order', description: 'Com order-xs/sm/md/lg você poderá alterar a ordem do elementos por tamanho da tela usada'},
          {title: 'wrap', description: 'Com Wrap na tag v-layout, os elementos pulam de linha quando a soma dos elementos ultrapassa 12 na escala do vuetify'}
        ]
      }
    },
    methods: {
        refreshSize() {
            this.sizeClasses = `${this.xs} ${this.md} ${this.lg}`
        }
    }
}
</script>
