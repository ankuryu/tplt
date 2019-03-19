<template>
  <div class="stock">

  <h3 class="hdgout">
    Output Data
  </h3>
  <div class="tblcont">
    <div class="tblsr">Sr</div>
    <div class="tblmfg">Mfg</div>
    <div class="tblicode">Icode</div>
    <div class="tblasize">Asize</div>
    <div class="tblqty">Qty</div>
    <div class="tblloc">Loc</div>
    <div class="tblpg">Page</div>
    <div class="tbldt">Date</div>
    <div class="tblsel">Sel</div>
    <template v-for="(irec,index) in recs">
      <div class="tblsr">{{index+1}}</div>
      <div class="tblmfg">{{irec.mfg}}</div>
      <div class="tblicode">{{irec.icode}}</div>
      <div class="tblasize">{{irec.asize}}</div>
      <div class="tblqty">{{irec.qty}}</div>
      <div class="tblloc">{{irec.loc}}</div>
      <div class="tblpg">{{irec.pg}}</div>
      <div class="tbldt">{{irec.dt}}</div>
      <div class="tblsel"><input type="radio" v-model="sel" :value="index" @click="trsffrar(index)"></div>
    </template>
  </div>
  <hr>
  <h3 class="hdginp">
    Input Data
  </h3>
 
  <div class="inpcont">
 
    <div class="name"><input type="text" v-model="stkd.mfg" placeholder="Mfg " :disabled="dsblflg == 1"></div>
    <div class="lname"><input type="text" v-model="stkd.icode" placeholder="Icode" :disabled="dsblflg == 1"></div>
    <div class="mbl"><input type="text" v-model="stkd.asize" placeholder="Asize" :disabled="dsblflg == 1" ></div>
    <div class="street"><input type="text" v-model="stkd.qty" placeholder="Qty" :disabled="dsblflg == 1"></div>
    <div class="city"><input type="text" v-model="stkd.loc" placeholder="Location" :disabled="dsblflg == 1"></div>
    <div class="pin"><input type="text" v-model="stkd.pg" placeholder="Page" :disabled="dsblflg == 1"> </div>
    <div class="country"><input type="text" v-model="stkd.dt" placeholder="Date" :disabled="dsblflg == 1"></div>
    <div class="save"><button @click="savit" :disabled="dsblflg == 1">Save</button></div>
    <div class="canc"><button @click="cancit" :disabled="dsblflg == 1">Cancel</button></div>

  </div>
  <hr>
  <div class="oprcont">
    <div class="add"><button @click="addrec" :disabled = "opbtflg == 1">Add</button></div>
    <div class="edit"><button @click="edirec" :disabled = "opbtflg == 1" >Edit</button></div>
    <div class="del"><button @click="delrec" :disabled = "opbtflg == 1">Delete</button></div>
    <div class="upload"><button @click="putrecs" :disabled = "opbtflg == 1">Upoad</button></div>
    <div class="dwnload"><button @click="getrecs" :disabled = "opbtflg == 1">Download</button></div>
  </div>

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
