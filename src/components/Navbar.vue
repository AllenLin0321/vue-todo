<template>
  <nav>

    <!-- Notification -->
    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
      <span>Awesome! You added a new project.</span>
      <v-btn flat color="white" @click="snackbar = false">Close</v-btn>
    </v-snackbar>

    <v-toolbar flat app class="text-uppercase grey--text">
      <!-- Hamburger -->
      <v-toolbar-side-icon @click="drawer = !drawer" class="grey--text"></v-toolbar-side-icon>

      <!-- Website Title -->
      <v-toolbar-title>
        <span class="font-weight-light">Todo</span>
        <span>Allen</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Dropdown Menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn flat v-on="on" color="grey">
            <v-icon left>expand_more</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-tile v-for="link in links" :key="link.text" :to="link.route">
            <v-list-tile-title>{{ link.text }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-menu>
          <v-btn flat v-on="on" color="grey">
            <v-icon left>expand_more</v-icon>
            <span>Menu</span>
          </v-btn>
      </v-menu>

      <!-- Sign Out -->
      <v-btn flat color="grey">
        <span>Sing Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <!-- Navigation Drawer -->
    <v-navigation-drawer app class="deep-purple lighten-2" v-model="drawer">
      <v-layout column align-center>
        <!-- Header Image -->
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="avatar-1.jpg">
          </v-avatar>
          <p class="white--text subheading mt-1">Allen Lin</p>
        </v-flex>

        <!-- Add new project -->
        <v-flex class="mt-4 mb-3">
          <Popup @projectAdded="snackbar = true"/>
        </v-flex>
      </v-layout>

      <v-list>
        <v-list-tile v-for="(link, index) in links" :key="index" :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from "./Popup";
export default {
  components: {
    Popup
  },
  data() {
    return {
      drawer: true,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My Projects", route: "/projects" },
        { icon: "person", text: "Team", route: "/team" }
      ],
      snackbar: false
    };
  }
};
</script>
