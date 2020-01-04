<template>
  <v-expand-transition>
    <v-card outlined>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" align="center">
              <v-label>PRECIO</v-label>
            </v-col>
            <v-col>
              <v-row>
                <v-select
                  outlined
                  :items="filters.price"
                  label="min"
                  v-model="selectedFilters.minPrice"
                />
                <v-select
                  outlined
                  :items="maxPriceFilter"
                  label="max"
                  v-model="selectedFilters.maxPrice"
                />
              </v-row>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" align="center">
              <v-label>TAMAÑO</v-label>
            </v-col>
            <v-col>
              <v-row>
                <v-select
                  outlined
                  :items="filters.sqm"
                  label="min"
                  v-model="selectedFilters.minSqm"
                />
                <v-select
                  outlined
                  :items="maxSqmFilter"
                  label="max"
                  v-model="selectedFilters.maxSqm"
                />
              </v-row>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" align="center">
              <v-label>HABITACIONES</v-label>
            </v-col>
            <v-col sm="6" offset-sm="3">
              <v-select :items="filters.bedroomsCount" v-model="selectedFilters.minBedroomsCount"></v-select>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" align="center">
              <v-label>BAÑOS</v-label>
            </v-col>
            <v-col sm="6" offset-sm="3">
              <v-select :items="filters.bathroomsCount" v-model="selectedFilters.minBathroomsCount"></v-select>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" align="center">
              <v-btn color="purple darken-2" dark @click="emitSearchWithFiltersClick">Ver Inmuebles</v-btn>
            </v-col>
          </v-row>
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
      return this.filters.price.filter(price => price.value >= this.selectedFilters.minPrice);
    },
    maxSqmFilter: function() {
      return this.filters.sqm.filter(sqm => sqm.value >= this.selectedFilters.minSqm);
    },
  },
  data: () => ({
    selectedFilters: {
      minPrice: null,
      maxPrice: null,
      minSqm: null,
      maxSqm: null,
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