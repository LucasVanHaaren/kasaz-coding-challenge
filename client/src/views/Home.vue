<template>
  <div class="home">
    <ToolBar
      :showFilters="showFilterTab"
      @filtersClick="handleFiltersClick"
      @searchBarClick="handleSearchBarClick"
    />
    <FilterTab v-if="showFilterTab" />
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
    apartments: []
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
        console.error(err);
      });
    },
    // handleSearchBarClick: function(data) {
    //   this.fetchApartments(`title=${data}`).then(apartmentList => {
    //     this.apartments = apartmentList;
    //   }).catch(err => {
    //     console.error(err);
    //   });
    // },
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