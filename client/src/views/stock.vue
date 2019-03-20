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
 
    <div class="mfg"><input type="text" v-model="stkd.mfg" placeholder="Mfg " :disabled="dsblflg == 1"></div>
    <div class="icode"><input type="text" v-model="stkd.icode" placeholder="Icode" :disabled="dsblflg == 1"></div>
    <div class="asize"><input type="text" v-model="stkd.asize" placeholder="Asize" :disabled="dsblflg == 1" ></div>
    <div class="qty"><input type="text" v-model="stkd.qty" placeholder="Qty" :disabled="dsblflg == 1"></div>
    <div class="loc"><input type="text" v-model="stkd.loc" placeholder="Location" :disabled="dsblflg == 1"></div>
    <div class="pg"><input type="text" v-model="stkd.pg" placeholder="Page" :disabled="dsblflg == 1"> </div>
    <div class="dt"><input type="text" v-model="stkd.dt" placeholder="Date" :disabled="dsblflg == 1"></div>
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
      sel:0,
      dsblflg : 1,
      opbtflg : 0,
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

body {
  background: #20262E;
  padding: 20px;
  font-family: Helvetica;
}

#app {
  background: #fff;
  border-radius: 4px;
  padding: 20px;
}

.hdgout {
  text-align: center
}

.tblcont {
  display: grid;
  background-color: lightgray;
  grid-gap: 5px;
  grid-template-columns: 25px 1fr 1fr 1fr 1fr 21fr 1fr 1fr 25px;
}

.tblsr {
  grid-column: 1 /2;
}

.tblmfg{
  grid-column: 2/3
}

.tblicode{
  grid-column: 3/4
}

.tblasize{
  grid-column: 4/5
}

.tblqty{
  grid-column: 5/6
}

.tblloc{
  grid-column: 6/7
}

.tblpg{
  grid-column: 7/8
}

.tbldt{
  grid-column: 8/9
}
.tblsel {
  grid-column: 9/10
}

.hdginp {
  text-align: center
}

.inpcont {
  display: grid;
  background-color: lightcyan;
  grid-gap: 3px;
  grid-template-areas: " mfg icode asize qty" " loc pg dt"  " . save canc";
}

.mfg{
  grid-area: mfg;
  background-color: lightskyblue
}

.icode{
  grid-area: icode;
  background-color: lightgoldenrodyellow
}

.asize{
  grid-area: asize;
  background-color: lemonchiffon
}

.loc{
  grid-area: loc;
  background-color: lightblue
}

.pg{
  grid-area: pg 
}

.dt{
  grid-area:dt 
}

.save {
  grid-area: save
}

.canc {
  grid-area: canc
}

.oprcont {
  display: grid;
  background-color: lightgray;
  grid-template-columns: 3em 3em 4em 4em 5em;
  grid-template-rows: 22px;
}

li {
  margin: 8px 0;
}

h2 {
  font-weight: bold;
  margin-bottom: 15px;
}

del {
  color: rgba(0, 0, 0, 0.3);
}

</style>
