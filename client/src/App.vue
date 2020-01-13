<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark>
<v-btn>Home</v-btn>

      <v-spacer></v-spacer>

      <v-btn
      flat
      class="white--text" > 
      >Stock
       
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      
      <v-btn class= "ma-3 pa-3" icon
      >About
      </v-btn>
      <v-btn class= "ma-3 pa-3" icon
      >phone
      </v-btn>
      <v-btn class= "ma-3 pa-3" icon router to="/login"
      >login
      </v-btn>
      <v-btn class= "ma-3 pa-3" icon router to="/register"
      >Register
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
