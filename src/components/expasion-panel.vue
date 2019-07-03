<template>
<v-container>
    <v-toolbar class="mb-3" color="indigo" dark>
        <v-toolbar-title>
            Expasion Panel
        </v-toolbar-title>
    </v-toolbar>
<v-expansion-panel focusable>
    <v-expansion-panel-content
      v-for="(item,i) in 5"
      :key="i"
    >
      <template v-slot:header>
        <div>Item</div>
      </template>
      <v-card>
        <v-card-text class="grey lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
  </v-container>
  

</template>

<script>
export default {
  name: 'expasion-panel',
  }
</script>

<style scoped>

</style>