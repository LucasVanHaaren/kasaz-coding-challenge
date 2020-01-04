<template>
  <div class="home">
    <ToolBar
      :showFilters="showFilterTab"
      @filtersClick="handleFiltersClick"
      @searchBarClick="handleSearchBarClick"
      @clearSearchBarClick="handleClearSearchBarClick"
    />
    <FilterTab v-if="showFilterTab" @searchWithFiltersClick="handleSearchWithFiltersClick" />
    <template v-for="(apartment, index) in apartments">
      <Apartment v-bind="apartment" :key="index" class="apartment" />
    </template>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
import ToolBar from '@/components/ToolBar.vue'
import Apartment from '@/components/Apartment.vue'
import FilterTab from '@/components/FilterTab.vue'

export default {
  name: 'Home',
  components: {
    ToolBar,
    Apartment,
    FilterTab
  },
  data: () => ({
    showFilterTab: false,
    apartments: [],
    filters: {}
  }),
  mounted() {
    this.fetchApartments().then(apartmentList => {
      this.apartments = apartmentList;
    });
  },
  methods: {
    fetchApartments(params) {
      let url = 'http://localhost:3333/apartments';
      if(params) {
        url = url + '?' + params;
      }
      return axios.get(url).then(res => {
        return res.data;
      }).catch(err => {
        throw err;
      });
    },
    handleSearchBarClick: function(data) {
      this.fetchApartments(`title=${data}`).then(apartmentList => {
        this.apartments = apartmentList;
        this.filters.title = data;
      }).catch(err => {
        throw err;
      });
    },
    handleSearchWithFiltersClick: function(data) {
      this.fetchApartments(this.buildQueryString(data)).then(apartmentList => {
        this.apartments = apartmentList;
        this.filters = data;
      }).catch(err => {
        throw err;
      });
    },
    buildQueryString(filters) {
      let query = "";
      let first = true;
      for(const filter in filters) {
        if(!first) query = query + "&";
        if(filters[filter]) {
          query = query + filter + "=" + filters[filter];
          first = false;
        }
        
      }
      return query;
    },
    handleClearSearchBarClick: function() {
      if(this.filters.title) {
        this.fetchApartments().then(apartmentList => {
          this.apartments = apartmentList;
          this.filters.title = "";
        }).catch(err => {
          throw err;
        });
      }
    },
    handleFiltersClick: function() {
      this.showFilterTab = !this.showFilterTab;
    }
  }
}
</script>

<style lang="scss" scoped>
.apartment {
  margin-top: 0.5em;
}
</style>