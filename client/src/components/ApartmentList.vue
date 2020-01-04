<template>
  <div>
    <div v-if="loading" class="text-center loader">
      <v-progress-circular indeterminate color="green" />
    </div>
    <div v-else>
      <template v-for="(apartment, index) in apartments">
        <Apartment v-bind="apartment" :key="index" class="apartment" />
      </template>
    </div>
    <div class="text-center loader" v-if="!loading && !apartments.length">
      <h1>Your search seems to have no results</h1>
    </div>
    <!-- <div v-else>
      <v-container v-if="$vuetify.breakpoint.mdAndUp">
        <v-row>
          <v-col>
            <template v-for="(apartment, index) in apartments">
              <Apartment v-bind="apartment" :key="index" class="apartment" />
            </template>
          </v-col>
          <v-col>
            <h1>hey</h1>
          </v-col>
        </v-row>
      </v-container>
      <template v-else v-for="(apartment, index) in apartments">
        <Apartment v-bind="apartment" :key="index" class="apartment" />
      </template>
    </div>-->
  </div>
</template>

<script>
import Apartment from '@/components/Apartment.vue';

export default {
  name: 'ApartmentList',
  components: {
      Apartment,
  },
  props: {
      loading: {
          type: Boolean,
          required: true
      },
      apartments: {
          type: Array,
          required: true
      }
  }
};
</script>

<style lang="scss" scoped>
.apartment {
  margin-top: 0.5em;
}

.loader {
  margin-top: 3em;
}
</style>