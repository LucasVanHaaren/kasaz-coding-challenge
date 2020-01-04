<template>
  <v-toolbar color="purple darken-2" dark>
    <v-text-field
      solo
      light
      background-color="white"
      color="green"
      flat
      hide-details
      placeholder="Buscar"
      dense
      clearable
      v-model="searchBarData"
      @click:clear="emitClearSearchBarClick"
    />
    <v-btn icon color="green" @click.native="emitSearchBarClick">
      <v-icon>fas fa-search</v-icon>
    </v-btn>
    <v-spacer v-if="$vuetify.breakpoint.mdAndUp"></v-spacer>
    <v-tooltip bottom v-if="showClearFiltersBtn">
      <template v-slot:activator="{ on }">
        <v-btn icon color="green" v-on="on" @click.native="emitClearFiltersClick">
          <v-icon>fas fa-times-circle</v-icon>
        </v-btn>
      </template>
      <span>Filtros claros</span>
    </v-tooltip>
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
    },
    emitClearSearchBarClick: function() {
      this.$emit("clearSearchBarClick");
    },
    emitClearFiltersClick: function() {
      this.$emit("clearFiltersClick");
    },
  },
  props: {
    showFilters: {
      type: Boolean,
      required: true
    },
    showClearFiltersBtn: {
      type: Boolean,
      required: true
    }
  }
};
</script>