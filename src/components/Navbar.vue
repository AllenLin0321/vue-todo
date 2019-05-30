<template>
  <nav>
    <v-toolbar flat app class="text-uppercase grey--text">
      <v-toolbar-side-icon @click="drawer = !drawer" class="grey--text"></v-toolbar-side-icon>
      <v-toolbar-title>
        <span class="font-weight-light">Todo</span>
        <span>Allen</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat color="grey">
        <span>Sing Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app class="indigo" v-model="drawer">
        <p>test</p>
    </v-navigation-drawer>

  </nav>
</template>

<script>
export default {
    data() {
        return {
            drawer: false
        }
    }
};
</script>
