<template>
  <v-app>
    <NavigationDrawer/>
    <AppBar/>
    <Content/>
    <Footer/>
  </v-app>
</template>

<script>
import NavigationDrawer from './components/NavigationDrawer.vue';
import AppBar from './components/AppBar.vue';
import Content from './components/Content.vue';
import Footer from './components/Footer.vue';

export default {
  name: "App",
  components: {
    AppBar,
    NavigationDrawer,
    Content,
    Footer
  }
}
</script>
