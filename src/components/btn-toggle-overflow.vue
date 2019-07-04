<template lang='pug'>
  v-card(height="200px")
    toolbarSession(title="Button toggle e overflow")
    v-layout(justify-center)
      v-flex(xs10)
        v-toolbar.mt-5(dense)
          //Butons Overflow
          v-overflow-btn.pa-0(
          :items="items"
          label="Itens"
          hide-details)
          v-overflow-btn.pa-0(
            :items="items2"
            editable
            label="Itens 2"
            hide-details
          )
          v-btn-toggle.transparent(
            v-model="toggle_multiple"
            multiple
          )
            v-btn(:value="1" flat)
              v-icon format_bold
            v-btn(:value="2" flat)
              v-icon format_italic
            v-btn(:value="3" flat)
              v-icon format_underlined
            v-btn(:value="4" flat)
              v-icon format_color_fill
    
    
          v-btn-toggle.transparent(
            v-model="toggle_exclusive"
            multiple
          )
            v-btn(:value="1" flat)
              v-icon format_align_left
            v-btn(:value="2" flat)
              v-icon format_align_center
            v-btn(:value="3" flat)
              v-icon format_align_right
            v-btn(:value="4" flat)
              v-icon format_align_justify
  

</template>

<script>
import toolbarSession from '../components/card-session.vue'
export default {
  name: 'btn-toggler-overflow',
  components: {
    toolbarSession,
  },
  data() {
    return {
      items: [
        { text: 'item 1'},
        { text: 'item 2'},
        { text: 'item 3'},
        { text: 'item 4'},
        { text: 'item 5'}
      ],
      items2: [
        { text: 'item 1'},
        { text: 'item 2'},
        { text: 'item 3'},
        { text: 'item 4'},
        { text: 'item 5'}
      ],
      toggle_exclusive: 2,
      toggle_multiple: [1, 2, 3]
    }

  }
  }
</script>

<style scoped>

</style>