<template>
  <v-card class="mx-auto" max-width="700" outlined>
    <v-img :aspect-ratio="16/9" class="white--text align-end" height="300px" :src="thumbnail">
      <div class="ml-5 mb-2">
        <h1>{{ price }}€</h1>
        <h3>{{ pricePerSqm }}€/m²</h3>
      </div>
    </v-img>
    <v-card-title>{{ title }}</v-card-title>
    <v-divider></v-divider>
    <v-card-actions>
      <div>
        <v-icon>fas fa-check-circle</v-icon>
        {{ sqm }} m²
      </div>
      <v-spacer></v-spacer>
      <v-divider class="mx-4" inset vertical></v-divider>
      <v-spacer></v-spacer>
      <div>
        <v-icon>fas fa-bed</v-icon>
        {{ bedroomsCount }} habs.
      </div>
      <v-spacer></v-spacer>
      <v-divider class="mx-4" inset vertical></v-divider>
      <v-spacer></v-spacer>
      <div>
        <v-icon>fas fa-bath</v-icon>
        {{ bathroomsCount }} baños
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  name: 'Apartment',
  computed: {
      pricePerSqm: function () {
          return Math.floor(this.price / this.sqm);
      }
  },
  props: {
      title: {
          type: String,
          required: true
      },
      price: {
          type: Number,
          required: true
      },
      sqm: {
          type: Number,
          required: true
      },
      bedroomsCount: {
          type: Number,
          required: true
      },
      bathroomsCount: {
          type: Number,
          required: true
      },
      thumbnail: {
          type: String,
          required: false,
          default: "/pictures/default.jpg"
      }
  }
};
</script>