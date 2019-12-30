<template>
  <v-toolbar color="purple darken-2" dark>
    <v-text-field
      solo
      light
      background-color="white"
      color="green"
      flat
      hide-details
      placeholder="Search"
      dense
      clearable
    />
    <v-btn icon color="green">
      <v-icon>fas fa-search</v-icon>
    </v-btn>
    <template v-if="$vuetify.breakpoint.mdAndUp">
      <v-btn icon>
        <v-icon>mdi-export-variant</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-delete-circle</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-plus-circle</v-icon>
      </v-btn>
    </template>
    <template v-else>
      <v-btn text>
        Filtros
        <v-icon color="green" right>fas fa-chevron-down</v-icon>
        <!-- <v-icon color="green" right>fas fa-chevron-up</v-icon> -->
      </v-btn>
    </template>
  </v-toolbar>
</template>

<script>

export default {
  name: 'ToolBar',
  data: () => ({
    // 
  })
};
</script>