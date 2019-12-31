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
      v-model="searchBarData"
    />
    <v-btn icon color="green" @click.native="emitSearchBarClick">
      <v-icon>fas fa-search</v-icon>
    </v-btn>
    <v-spacer v-if="$vuetify.breakpoint.mdAndUp"></v-spacer>
    <v-btn text @click.native="emitFiltersClick">
      Filtros
      <v-icon v-if="showFilters" color="green" right>fas fa-chevron-up</v-icon>
      <v-icon v-else color="green" right>fas fa-chevron-down</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>

export default {
  name: 'ToolBar',
  data: () => ({
    searchBarData: ""
  }),
  methods: {
    emitFiltersClick: function() {
      this.$emit("filtersClick");
    },
    emitSearchBarClick: function() {
      if(this.searchBarData) {
        this.$emit("searchBarClick", this.searchBarData);
        this.searchBarData = "";
      }
    }
  },
  props: {
    showFilters: {
      type: Boolean,
      required: true
    }
  }
};
</script>