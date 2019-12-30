<template>
  <v-app-bar app flat>
    <v-app-bar-nav-icon color="green"></v-app-bar-nav-icon>
    <div class="d-flex align-center">
      <v-img
        :src="require('../assets/logo.svg')"
        class="shrink mr-2"
        contain
        transition="scale-transition"
        width="180"
      ></v-img>
    </div>
  </v-app-bar>
</template>

<script>

export default {
  name: 'AppBar',
  data: () => ({
    // 
  })
};
</script>