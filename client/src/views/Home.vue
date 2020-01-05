<template>
  <div class="home">
    <ToolBar
      :showFilters="showFilterTab"
      :showClearFiltersBtn="!!Object.keys(filters).length"
      @filtersClick="handleFiltersClick"
      @searchBarClick="handleSearchBarClick"
      @clearSearchBarClick="handleClearSearchBarClick"
      @clearFiltersClick="handleClearFiltersClick"
    />
    <FilterTab v-if="showFilterTab" @searchWithFiltersClick="handleSearchWithFiltersClick" />
    <ApartmentList :loading="loading" :apartments="apartments" />
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
import ToolBar from '@/components/ToolBar.vue'
import ApartmentList from '@/components/ApartmentList.vue'
import FilterTab from '@/components/FilterTab.vue'

export default {
  name: 'Home',
  components: {
    ToolBar,
    ApartmentList,
    FilterTab
  },
  data: () => ({
    showFilterTab: false,
    apartments: [],
    filters: {},
    loading: true
  }),
  mounted() {
    this.fetchApartments().then(apartmentList => {
      this.apartments = apartmentList;
    });
  },
  methods: {
    fetchApartments(params) {
      this.loading = true;
      const port = process.env.NODE_ENV === 'development' ? 3333 : 4444;
      let url = `http://localhost:${port}/apartments`;
      if(params) {
        url = url + '?' + params;
      }
      return axios.get(url).then(res => {
        this.loading = false;
        return res.data;
      }).catch(err => {
        this.loading = false;
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
      this.showFilterTab = false;
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
        if(filters[filter] || filters[filter] === 0) {
          if(!first) query = query + "&";
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
    },
    handleClearFiltersClick: function() {
      this.fetchApartments().then(apartmentList => {
          this.apartments = apartmentList;
          this.filters = {};
        }).catch(err => {
          throw err;
        });
    }
  }
}
</script>