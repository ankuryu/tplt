<template>
    <v-card>
        <v-list-item>
            <v-title>
                Login

            </v-title>
            <v-form>
                <v-text-field v-model="name" label="Name" />
                <v-text-field v-model="password" label = "Password" type="password" />
                <v-btn>submit</v-btn>
            </v-form>
            
        </v-list-item>

    </v-card>
</template>

<script>
export default {
    name: "login",
    props: {},
  data: ()=>{
      return {
          name:"",
          password:""
      }
  },
  methods:{

  }
}
</script>