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
    <template v-for="(irec,index) in stkds">
      <div class="tblsr">{{index+1}}</div>
      <div class="tblmfg">{{irec.mfg}}</div>
      <div class="tblicode">{{irec.icode}}</div>
      <div class="tblasize">{{irec.asize}}</div>
      <div class="tblqty">{{irec.qty}}</div>
      <div class="tblloc">{{irec.loc}}</div>
      <div class="tblpg">{{irec.pg}}</div>
      <div class="tbldt">{{irec.dt}}</div>
      <div class="tblsel"><input type="radio" v-model="sel" :value="irec.id" @change="trsffrar(index)"></div>
    </template>
  </div>
  <button @click="prvPage">Prev</button> 
  <span> Page: {{this.offst}} </span>
  <button @click="nxtPage">Next</button>
  <hr>
  <h3 class="hdginp">
    Input Data
  </h3>
 
  <div class="inpcont">
    <div class="mfg"><input type="text" v-model="stkd.mfg" placeholder="Mfg " size="5" :disabled="dsblflg == 1"></div>
    <div class="icode"><input type="text" v-model="stkd.icode" placeholder="Icode"  size="15" :disabled="dsblflg == 1"></div>
    <div class="asize"><input type="text" v-model="stkd.asize" placeholder="Asize"  size="3" :disabled="dsblflg == 1" ></div>
    <div class="qty"><input type="text" v-model="stkd.qty" placeholder="Qty"  size="5" :disabled="dsblflg == 1"></div>
    <div class="loc"><input type="text" v-model="stkd.loc" placeholder="Location"  size="15" :disabled="dsblflg == 1"></div>
    <div class="pg"><input type="text" v-model="stkd.pg" placeholder="Page"  size="5" :disabled="dsblflg == 1"> </div>
    <div class="dt"><input type="text" v-model="stkd.dt" placeholder="Date"  size="13" :disabled="dsblflg == 1"></div>
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

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
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
      maxrec : 0,
      offst:0,
      lmt:0,
      stkd: {
        id:0,
        mfg:"",
        icode:"",
        asize:"",
        qty:0,
        loc:"",
        pg:""
      },
      stkds:[]
    }
  },
  created: function(){
    console.log("Created")
    this.lmt = 10 ;
    this.getMaxrecs();
    this.offst = Math.floor(this.maxrec/this.lmt) ;
    this.getRecs(this.offst,this.lmt);
  },
  methods:{
    nxtPage: function(){
      this.offst++;
      if(this.offst*this.lmt > this.maxrec){
        this.offst--;
      }
      this.getRecs(this.offst,this.lmt);
    },
    prvPage: function(){
      this.offst--;
      if(this.offst < 0 ){
        this.offst++;
      }
      this.getRecs(this.offst,this.lmt);
    },
    getMaxrecs: function(){
       console.log("starting getMaxrecs")
       axios.get('http://localhost:8000/api/stk/mxrcs')//,this.maxrec
      .then((response)=>{
/*        console.log("response -> ",response.data)
        console.log("status-> ",response.status)
        console.log("statusText-> ",response.statusText)
        console.log("headers-> ",response.headers)
        console.log("config-> ",response.config) */
        this.maxrec= response.data.max 
      })
      .catch(function (err){
        console.log("In  error loop of getMaxrecs")
        console.log(err)
      })
      console.log("Over getMaxrecs")
    },
    getRecs: function(of,lm){
      axios.get('http://localhost:8000/api/stk/'+  String(of*lm) +'/'+ String(lm) )
      .then((response)=>{
        this.stkds = response.data
      })
      .catch(function (err){
        console.log(err)
      })
    },
    sndData: function(){
      axios.post('http://localhost:8000/api/stk',this.stkd)
      .then((response)=>{
        //this.stkds = response
      })
      .catch(function (err){
        console.log(err)
      })
    },
      inirec : function() {
   let ptr = this.rec ;
   ptr.id = 0;
   ptr.mfg = '';
   ptr.icode= "";
   ptr.asize= "";
   ptr.qty= 0;
   ptr.pg= 0;
   ptr.loc= "";
   ptr.dt= "";
  },
  savit:function(){
  debugger ;
    let idx = this.rec.id ;
    if (idx == 0){
      this.recs.push({}) ;
      idx = this.recs.length - 1 ;
      this.rec.id = idx ;
    }
    this.trsftoar(idx)   
    this.dsblflg = 1 ;
    this.opbtflg = 0 ;
  },
  cancit:function(){},
  trsftoar: function(idx){
   let tmp = this.recs[idx] ;
   let r = this.rec ;
   tmp.id =  r.id ;
   tmp.mfg = r.mfg;
   tmp.icode = r.icode;
   tmp.asize = r.asize;
   tmp.qty = r.qty;
   tmp.pg = r.pg;
   tmp.loc = r.loc;
   tmp.dt = r.dt;
  },
  trsffrar : function(idx){
    alert("the id is "+ String(this.sel))
    return
   let tmp = this.recs[idx] ;
   let r = this.rec ;
   r.id =  tmp.id ;
   r.mfg = tmp.mfg;
   r.icode = tmp.icode;
   r.asize = tmp.asize;
   r.qty = tmp.qty;
   r.pg = tmp.pg;
   r.loc = tmp.loc;
   r.dt = tmp.dt;
  },
  addrec: function(){
   console.log("Adding..")
   this.inirec();
   this.dsblflg = 0 ;
   this.opbtflg = 1 ;
   
  },
  edirec: function(){
   console.log("Editing..")
   this.dsblflg = 0 ;
   this.opbtflg = 1 ;

  },
  delrec: function(){
   console.log("Deleting..")
  },
  putrecs: function(){
   console.log("Putting..")
   let mx = this.recs.length ;
   for (i= 0; i<mx ;i++) {
    tmprec = recs[1]
    axios.post('http://localhost/'+tmprec.id,tmprec)
    .then(function(resp){})
    .catch(function(err){console.log(err)})
   }
  },
  getrecs: function(){
   console.log("Getting..")
   axios.get('http://localhost/')
   .then(function(res){})
   .catch(function(err){console.log(err)})
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
  background-color: lightblue;
  /*grid-gap: 1px;*/
  gap: 2px ;
  grid-template-columns: 25px 1fr 1fr 1fr 1fr 2fr 1fr 1fr 25px;
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
  grid-template-areas: " mfg icode asize qty" " loc pg dt ."  " . . save canc";
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
