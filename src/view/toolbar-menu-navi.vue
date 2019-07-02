<template lang='pug'>
  v-container(fluid)
    v-toolbar(color="green accent-2")
      v-toolbar-side-icon
      v-toolbar-title Toolbar Title
      v-spacer
      v-toolbar-items
        v-btn(flat) Menu um
        v-btn(flat) Menu dois
        v-btn(flat) Menu três
    // tollbar floating
    v-flex(pa-5)
      h2 Floating Toolbar
      v-toolbar(floating dense)
        v-text-field( hide-details prepend-icon="search" single-line)
        v-btn(icon)
          v-icon my_location
        v-btn(icon)
          v-icon more_vert
    // Drawer Mini
    v-navigation-drawer(
        v-model="drawer"
        :mini-variant.sync="mini"
        hidy-hide-overlay
        stateless
        style="cursor: pointer")
      v-toolbar(flat class="transparent")
        v-list(class="pa-0")
          v-list-tile(avatar)
            v-list-tile-avatar
              img(src="https://randomuser.me/api/portraits/men/85.jpg")
            v-list-tile-content
              v-list-tile-title Avatar Rios
            v-list-tile-action
              v-btn(icon @click.stop="mini = !mini")
                v-icon chevron_left
      v-list(dense class="pt-0")
        v-divider
        v-list-tile(v-for="item in items" :key="item.title")
          v-list-tile-action
            v-icon {{item.icon}}
          v-list-tile-content
            v-list-tile-title {{item.title}}
    // Menu Popup
    v-layout(justify-end align-end fill-height)
      v-flex(xs2)
        v-menu(
            v-model="menu"
            :close-on-content-click="false"
            :nudge-width="200"
            offset-x)
          template(v-slot:activator="{ on }")
            v-btn(color="brown lighten-3" dark v-on="on") Menu Popup
          // Form com bootstrap
          form.form-group
            div.form-group(class="text-center" style="background: indigo")
              div.column
                div.col-md-12
                  label(class="white--text") Nome
                  input.form-control
                div.col-md-12
                  label(class="white--text") E-mail
                  input.form-control
                div.col-md-12
                  label(class="white--text") Menssagem
                  textarea.form-control
                div.col-md-12
                  button(class="white--text" color="info") Enviar
              


</template>

<script>
export default {
  name: 'toolbar-menu-navi',
  data() {
      return {
          menu: false,
          drawer: true,
          mini: true,
          right: null,
          items: [
            {title: 'home', icon: 'dashboard'},
            {title: 'favoritos', icon: 'edit'},
            {title: 'contatos', icon: 'question_answer'}              
          ]
      }
  }
  }
</script>

<style scoped>

</style>