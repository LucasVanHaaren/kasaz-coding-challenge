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
    apartments: [
      {
        title: "Piso exterior y en buen estado con ascensor Sant Marti",
        price: 280000,
        sqm: 103,
        bedroomsCount: 4,
        bathroomsCount: 2,
        thumbnail: "/pictures/sample1.jpg"
      },
      {
        title: "Piso exterior y pres dos Sant Marti",
        price: 120000,
        sqm: 97,
        bedroomsCount: 2,
        bathroomsCount: 1,
        thumbnail: "/pictures/sample2.jpg"
      }
    ]
  }),
  methods: {
    handleSearchBarClick: function(data) {
      // TODO
      console.log(`handleSearchBarClick: ${data}`);
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