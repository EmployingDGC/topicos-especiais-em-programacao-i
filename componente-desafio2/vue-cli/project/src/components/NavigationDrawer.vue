<template>
  <v-navigation-drawer app>
    <ToolBar/>
    <v-divider/>
    <Menu/>
  </v-navigation-drawer>
</template>

<script>
import ToolBar from './ToolBar.vue';
import Menu from './Menu.vue';

export default {
  name: "NavigationDrawer",
  components: {
    ToolBar,
    Menu
  }
}
</script>
