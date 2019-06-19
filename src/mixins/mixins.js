export default {
    data () {
        return {
          itensMixins: [
            { title: 'dashboard', icon: 'dashboard' },
            { title: 'rest-api', icon: 'question_answer' },
            { title: 'vFor_vIf_vShow', icon: 'question_answer' }
          ],
        }
    },
    methods: {
      goPage (page) {
      this.$router.push({path:page})
    }
    }
}