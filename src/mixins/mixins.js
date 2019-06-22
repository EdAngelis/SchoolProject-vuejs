export default {
    data () {
        return {
          itensMixins: [
            { title: 'rest-api', icon: 'question_answer' },
          ],
          vuetifySessions: [
            {title: 'grid', icon: 'edit'},
            {title: 'responsive-layout', icon: 'edit'}
          ],
          
        }
    },
    methods: {
      goPage (page) {
      this.$router.push({path:page})
    }
    }
}