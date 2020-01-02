<template>
  <v-expand-transition>
    <v-card outlined>
      <v-form>
        <v-container>
          <v-label>PRECIO</v-label>
          <v-select :items="filters.price" label="min" v-model="selectedFilters.price.min"></v-select>
          <v-select :items="maxPriceFilter" label="max" v-model="selectedFilters.price.max"></v-select>

          <v-label>TAMAÑO</v-label>
          <v-select :items="filters.sqm" label="min" v-model="selectedFilters.sqm.min"></v-select>
          <v-select :items="maxSqmFilter" label="max" v-model="selectedFilters.sqm.max"></v-select>

          <v-label>HABITACIONES</v-label>
          <v-select :items="filters.bedroomsCount" v-model="selectedFilters.minBedroomsCount"></v-select>

          <v-label>BAÑOS</v-label>
          <v-select :items="filters.bathroomsCount" v-model="selectedFilters.minBathroomsCount"></v-select>

          <v-col>
            <v-btn color="purple darken-2" dark @click="emitSearchWithFiltersClick">Ver Inmuebles</v-btn>
          </v-col>
        </v-container>
      </v-form>
    </v-card>
  </v-expand-transition>
</template>

<script>
import lodash from "lodash";

export default {
  name: 'FilterTab',
  methods: {
    emitSearchWithFiltersClick: function() {
      this.$emit('searchWithFiltersClick', this.selectedFilters);
    }
  },
  computed: {
    maxPriceFilter: function() {
      return this.filters.price.filter(price => price.value >= this.selectedFilters.price.min);
    },
    maxSqmFilter: function() {
      return this.filters.sqm.filter(sqm => sqm.value >= this.selectedFilters.sqm.min);
    },
  },
  data: () => ({
    selectedFilters: {
      price: {
        min: null,
        max: null
      },
      sqm: {
        min: null,
        max: null
      },
      minBedroomsCount: null,
      minBathroomsCount: null
    },
    filters: {
      price: lodash.range(0, 1000001, 25000).map(function(item) {
        return {
          text: `${item} €`,
          value: item
        }
      }),
      sqm: [0,20,25,30,35,...lodash.range(40, 301, 10)].map(function(item) {
        return {
          text: `${item} m²`,
          value: item
        }
      }),
      bedroomsCount: [0,1,2,3,4,5].map(function(count) {
        if(count === 0) {
          return {
            text: "Todos",
            value: null
          }
        }  else {
          return {
            text: `${count}+`,
            value: count
          } 
        }
      }),
      bathroomsCount: [0,1,2,3,4,5].map(function(count) {
        if(count === 0) {
          return {
            text: "Todos",
            value: null
          }
        }  else {
          return {
            text: `${count}+`,
            value: count
          } 
        }
      })
    }
  })
};
</script>