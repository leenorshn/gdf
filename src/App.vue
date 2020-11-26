<template>
  <v-app >
    <v-navigation-drawer app  permanent color="white">
<template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="./assets/profile.png">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Victor Shn</v-list-item-title>
            <v-list-item-subtitle>Connected</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          route :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      color="primary"
      flat
      dark
      dense
    >

      
    </v-app-bar>

    <v-main class="grey lighten-4">
      <v-container fluid>
      <router-view></router-view>
    </v-container>
      
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    items: [
          { title: 'Home', icon: 'dashboard' ,route:"/"},
          { title: 'Gestion fonciere', icon: 'mdi-credit-card',route:"/dossiers" },
          { title: 'Finances', icon: 'timeline',route:"/finances" },
          { title: 'Zone couverte', icon: 'mdi-map',route:"/map" },
          { title: 'Utilisateurs', icon: 'mdi-account-group-outline' ,route:"/users"},
        ],
  }),
};
</script>
