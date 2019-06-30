export default {
    data () {
        return {
          itensMixins: [
            { title: 'rest-api', icon: 'question_answer' },
          ],
          vuetifySessions: [
            {title: 'grid', icon: 'edit'},
            {title: 'responsive-layout', icon: 'edit'},
            {title: 'typography', icon: 'edit'},
            {title: 'elements-position', icon: 'edit'},
            {title: 'forms-adress', icon: 'edit'}
            

          ],
          
        }
    },
    methods: {
      goPage (page) {
      this.$router.push({path:page})
    }
    }
}