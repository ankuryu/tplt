/* eslint-disable no-console */
/* eslint-disable no-console */
<template>
  <div>
    <v-card>
      <v-data-table
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
export default {
  data() {
    return {
      dia1: false,
      aflg: false, // flag to show adding content
      bills: [
        { pname: "Party 1", bno: "00001", bdt: "2020/01/01", bamt: 1001 },
        { pname: "Party 2", bno: "00002", bdt: "2020/01/01", bamt: 1001 },
        { pname: "Party 3", bno: "00003", bdt: "2020/01/01", bamt: 1001 },
        { pname: "Party 4", bno: "00004", bdt: "2020/01/01", bamt: 1001 }
      ],
      headers: [
        { text: "Party", value: "pname" },
        { text: "Bill No", value: "bno" },
        { text: "Bill Dt", value: "bdt" },
        { text: "Amount", value: "bamt" }
      ],
      selected: [],
      vtop: { pname: "", bno: "", bdt: "", bamt: 0 }
    };
  },
  methods: {
    addinvoice: function() {
      this.dia1 = true;
      this.aflg = true;
    },
    ediinvoice: function() {},
    delinvoice: function() {},
    mk_obj: function() {
      return { pname: "", bno: "", bdt: "", bamt: 0 };
    },
    sav_it: function() {
      if (this.aflg) {
        var tmp = this.mk_obj();
        tmp = Object.assign(tmp, this.vtop);
        this.bills.push(tmp);
      } else {
        //console.log("Editing");
      }
      //console.log(this.bills);
      this.clr_it();
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

