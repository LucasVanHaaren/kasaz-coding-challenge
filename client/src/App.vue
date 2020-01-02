<template>
  <v-app>
    <v-content>
      <AppBar />
      <HomeView />
    </v-content>
  </v-app>
</template>

<script>
import HomeView from '@/views/Home';
import AppBar from '@/components/AppBar';

export default {
  name: 'App',
  components: {
    HomeView,
    AppBar,
  }
};
</script>
