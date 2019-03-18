<template>
  <div class="stock">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="stkd.mfg" placeholder="MFG">
    <input type="text" v-model="stkd.icode" placeholder="ICODE">
    <input type="text" v-model="stkd.asize" placeholder="ASIZE">
    <input type="text" v-model="stkd.qty" placeholder="QTY">
    <input type="text" v-model="stkd.loc" placeholder="LOCATION">
    <input type="text" v-model="stkd.pg" placeholder="PAGE">
    <button @click="sndData">Send</button>
  </div>
</template>

<script>
const axios = require('axios')
export default {
  name: 'stock',
  props: {
    msg: String
  },
  data: function() {
    return {
      stkd: {
        mfg:"",
        icode:"",
        asize:"",
        qty:0,
        loc:"",
        pg:""
      }
    }
  },
  methods:{
    sndData: function(){
      axios.post('http://localhost:8000/api/stk',this.stkd)
      .then()
      .catch()
    }
  }
}  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
