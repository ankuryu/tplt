/* eslint-disable no-console */
/* eslint-disable no-console */
<template>
  <div>
    <v-card>
      <v-data-table
      dense
       @click:row="jango"
        :items="bills"
        :headers="headers"
        show-select
        single-select
        item-key="bno"
        v-model="selected"
      ></v-data-table>
      <v-card-actions>
        <v-btn @click="addinvoice">Add</v-btn>
        <v-btn @click="ediinvoice">Edit</v-btn>
        <v-btn>Canc</v-btn>
        <v-btn>Print</v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog v-model="dia1">
      <v-card>
        <v-container>
          <v-row>
            <v-col cols="6">
              <v-text-field label="Party" v-model="vtop.pname"/>
            </v-col>
            <v-col cols="2">
              <v-text-field label="Bno" v-model="vtop.bno"/>
            </v-col>
            <v-col cols="2">
              <v-text-field label="Bdt" v-model="vtop.bdt"/>
            </v-col>
            <v-col cols="2">
              <v-text-field label="Amount" v-model="vtop.bamt"/>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-btn @click="sav_it">Save</v-btn>
          <v-btn @click="dia1=false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
/* eslint-disable no-debugger, no-console */
import  axios from 'axios'
export default {
  data() {
    return {
      aidx : 0,
      dia1: false,
      aflg: false, // flag to show adding content
      bills: [
      ],
      headers: [
        { text: "Party", value: "pname" },
        { text: "Bill No", value: "bno" },
        { text: "Bill Dt", value: "bdt" },
        { text: "Amount", value: "bamt" }
      ],
      selected: [],
      vtop: {id:0, pname: "", bno: "", bdt: "", bamt: 0 }
    };
  },
  methods: {
    jango: function(item) {alert("hello")
     console.log("jango",item)
    },
      getinvoice: function(id){
        var tmpar = null ;
          if(id==0){
              axios.get("/api/bills")
              .then( (response)=>{
                  this.bills = response 
              })
              .catch((err)=> {
                  console.log(err)
              })
          } else {
              axios.get("/api/bill/:id")
              .then( (response)=>{
                tmpar = response 
              })
              .catch((err)=> {
                  console.log(err)
              })
          }
          console.log(tmpar);
      },
      putinvoice: function(id){
          if(id==0){
              axios.post("/api/bill", this.vtop)
              .then( (response)=>{
                  console.log( response )
              })
              .catch((err)=> {
                  console.log(err)
              })
          } else {
              axios.put("/api/bill/:id", this.vtop)
              .then( (response)=>{
                console.log(response)
              })
              .catch((err)=> {
                  console.log(err)
              })
          }
      },
    addinvoice: function() {
      this.dia1 = true;
      this.aflg = true;
    },
    ediinvoice: function() {
      var tmpar = Object.assign(this.vtop,this.selected[0]) ;
      console.log(tmpar) ;
      this.aflg = false;
      this.dia1 = true;
      // check if selected array has a record
      if (this.selected.length != 1) {
        alert("first select a record to delete")
      } else {
        var tmpid = this.selected[0].id
        this.aidx = this.bills.findIndex( el => el.id == tmpid )

      }

      // transfer the value to that array to the vtop rec

      // set aflg false and dialog flag true


    },
    delinvoice: function() {
      // check if the selected array length has 1 record
      if(this.selected.length != 1){
        console.log("you have to select a record first")
      } else {
      // show the data and get confirmation for deleteion

      // start the actual process of removing the record from the array 
      // as well as the backend 
        var tmpid = this.selected[0].id ;
        this.aidx = this.bills.findIndex( el => el.id == tmpid);
        var tmpar = this.bills.splice(this.aidx,1)

          console.log(tmpar);
      }

    },
    mk_obj: function() {
      return { pname: "", bno: "", bdt: "", bamt: 0 };
    },
    sav_it: function() {
      var tmp ;
      if (this.aflg) {
        tmp = this.mk_obj();
        tmp = Object.assign(tmp, this.vtop);
        // save the object to database and get the id

        this.bills.push(tmp);
      } else {
        //console.log("Editing");
         tmp = Object.assign(this.bills[this.aidx],this.vtop);
        tmp = null ;
      }
      //console.log(this.bills);
      this.clr_it();
        this.aidx = 0 ;
      this.dia1 = false;
      this.aflg = false;
    },
    clr_it: function() {
      this.vtop.pname = "";
      this.vtop.bno = "";
      this.vtop.bdt = "";
      this.vtop.bamt = 0;
    }
  }
};
</script>

