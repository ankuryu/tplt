<template>
  <div class="ttly">
    <h3 class="hdgout">Output Data</h3>
    <div class="tblcont">
      <div class="tblsr">Sr</div>
      <div class="tblfnam">First Name</div>
      <div class="tbllnam">Last Name</div>
      <div class="tblmbl">Mobile</div>
      <div class="tblsel">Sel</div>
      <template v-for="(irec,index) in recs">
        <div class="tblsr">{{index+1}}</div>
        <div class="tblfnam">{{irec.fname}}</div>
        <div class="tbllnam">{{irec.lname}}</div>
        <div class="tblmbl">{{irec.mbl}}</div>
        <div class="tblsel">
          <input type="radio" v-model="sel" :value="index">
        </div>
      </template>
    </div>
  <button @click="prvPage">Prev</button> 
  <span> Page: {{this.offst}} </span>
  <button @click="nxtPage">Next</button>
    <hr>
    <h3 class="hdginp">Input Data</h3>

    <div class="inpcont">
      <div class="name">
        <input type="text" v-model="rec.fname" placeholder="Firt Name" :disabled="dsblflg == 1">
      </div>
      <div class="lname">
        <input type="text" v-model="rec.lname" placeholder="Last Name" :disabled="dsblflg == 1">
      </div>
      <div class="mbl">
        <input type="text" v-model="rec.mbl" placeholder="Mobile/Phone" :disabled="dsblflg == 1">
      </div>
      <div class="street">
        <input type="text" v-model="rec.street" placeholder="Street" :disabled="dsblflg == 1">
      </div>

      <div class="city">
        <input type="text" v-model="rec.city" placeholder="City" :disabled="dsblflg == 1">
      </div>
      <div class="pin">
        <input type="text" v-model="rec.pin" placeholder="Pin Code" :disabled="dsblflg == 1">
      </div>
      <div class="country">
        <input type="text" v-model="rec.country" placeholder="Country" :disabled="dsblflg == 1">
      </div>
      <div class="save">
        <button @click="savit" :disabled="dsblflg == 1">Save</button>
      </div>
      <div class="canc">
        <button @click="cancit" :disabled="dsblflg == 1">Cancel</button>
      </div>
    </div>
    <hr>
    <div class="oprcont">
      <div class="add">
        <button @click="addrec" :disabled="opbtflg == 1">Add</button>
      </div>
      <div class="edit">
        <button @click="edirec" :disabled="opbtflg == 1">Edit</button>
      </div>
      <div class="del">
        <button @click="delrec" :disabled="opbtflg == 1">Delete</button>
      </div>
      <!-- <div class="upload"><button @click="putrecs" :disabled = "opbtflg == 1">Upoad</button></div> -->
      <!-- <div class="dwnload"><button @click="getrecs" :disabled = "opbtflg == 1">Download</button></div> -->
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "ttly",
  props: {
    msg: String
  },
  data: function() {
    return {
      ediid: 0,
      sel: 0,
      dsblflg: 1,
      opbtflg: 0,
      offst: 0,
      lmt: 0,
      rec: {
        id: 0,
        fname: "",
        lname: "",
        mbl: "",
        street: "",
        city: "",
        pin: "",
        country: ""
      },
      recs: []
    };
  },
  methods: {
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
       axios.get('http://localhost:8000/api/ttly/mxrcs')//,this.maxrec
      .then((response)=>{
        this.maxrec= response.data.max 
      })
      .catch(function (err){
        console.log("In  error loop of getMaxrecs")
        console.log(err)
      })
      console.log("Over getMaxrecs")
    },
    getRecs: function(of,lm){
      axios.get('http://localhost:8000/api/ttly/'+  String(of*lm) +'/'+ String(lm) )
      .then((response)=>{
        this.stkds = response.data
      })
      .catch(function (err){
        console.log(err)
      })
    },
    inirec : function() {
      let ptr = this.stkd ;
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
      if(this.ediid = 0){
      // add the stkd record
      } else {
      // update the stkd record

      }
     // old code below should be deleted
    
     this.trsftoar(idx)   
    
     this.dsblflg = 1 ;
     this.opbtflg = 0 ;
     
    },
    cancit:function(){
      this.dsblflg = 1 ;
      this.opbtflg = 0 ;
    },
    addrec: function(){
      console.log("Adding..")
      this.ediid = 0 // make sure to flag editing of a record
      this.inirec();
      this.dsblflg = 0 ;
      this.opbtflg = 1 ;
      
    },
    edirec: function(){
      console.log("Editing..")
      this.ediid = this.sel ;  // preserve the id of vhe selected flag for editing
      this.dsblflg = 0 ;
      this.opbtflg = 1 ;
      // get the record from the database with the id and load it into stkd
      // give it for editing

    },
    delrec: function(){
      console.log("Deleting..")
      this.ediid = this.sel ;
      this.dblflg = 0;
      this.opbtflg = 1 ;
      if (shw_alert())
      { 
        // delete the record 
      }
      // repaint the records after positioning proper offset

      // restore this.ediid to 0 ;
      this.ediid = 0 ;
    },
    shw_alert : function (msg){


    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
body {
  background: #20262e;
  padding: 20px;
  font-family: Helvetica;
}

#app {
  background: #fff;
  border-radius: 4px;
  padding: 20px;
}

.hdgout {
  text-align: center;
}

.tblcont {
  display: grid;
  background-color: lightgray;
  grid-gap: 5px;
  grid-template-columns: 25px 1fr 1fr 1fr 25px;
}

.tblsr {
  grid-column: 1 /2;
}

.tblfnam {
  grid-column: 2/3;
}

.tbllnam {
  grid-column: 3/4;
}

.tblmbl {
  grid-column: 4/5;
}

.tblsel {
  grid-column: 5/6;
}

.hdginp {
  text-align: center;
}

.inpcont {
  display: grid;
  background-color: lightcyan;
  grid-gap: 3px;
  grid-template-areas: " name lname mbl" " street city pin " "country  .  ." "save canc . ";
}

.name {
  grid-area: name;
  background-color: lightskyblue;
}

.lname {
  grid-area: lname;
  background-color: lightgoldenrodyellow;
}

.mbl {
  grid-area: mbl;
  background-color: lemonchiffon;
}

.street {
  grid-area: street;
  background-color: lightblue;
}

.city {
  grid-area: city;
}

.pin {
  grid-area: pin;
}

.country {
  grid-area: country;
}

.save {
  grid-area: save;
}

.canc {
  grid-area: canc;
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
