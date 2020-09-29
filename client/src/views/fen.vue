<template>
  <div class="fen">
    <h3>fen</h3>
    <v-tabs v-model="tab">
      <v-tab>Fens</v-tab>
      <v-tab>Bill</v-tab>
      <v-tab>Item</v-tab>
      <v-tab>Trspt</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card>
          <p>Dashboard</p>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col xs12 md6 >
<v-data-table :headers="headers" :items="fens"></v-data-table>
                     </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card>
          <v-card-text>
            <p>jango</p>
            <v-container>
              <v-row>
                <v-col xs12> </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card>
          <h3>Item</h3>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col xs12> </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card>
          <v-card-text>
            <h3>Trspt</h3>
            <v-container>
              <v-row>
                <v-col xs12> </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>


<script>
export default {
  name: "Fen",
  data() {
    return {
      tab: null,
      aflg: false,
      opf: false,
      dashboard: "Dash",
      hdfen:[""],
       fitms: [],
      fens: [
        { fno: 1, vndr: "Vndr1", bno: "0123", bdt: "2020-09-20", bamt: 3390 },
        { fno: 2, vndr: "Vndr2", bno: "9939", bdt: "2020-09-20", bamt: 4010 },
        { fno: 3, vndr: "Vndr3", bno: "3974", bdt: "2020-09-20", bamt: 3100 },
        { fno: 4, vndr: "Vendor Jagdamba", bno: "2341", bdt: "2020-09-20", bamt: 1030 },
      ],
      fen: { fno: 0, vndr: "", bno: "", bdt: "", bamt: 0 },
      itm: {
        hsn: "",
        mfg: "",
        icode: "",
        asize: "",
        qty: 0,
        rate: 0,
        rcpd: "",
        loc: "",
      },
      ftrsp: {
        trsp: "",
        lr: "",
        lrdt: "",
        pmk: "",
        pkg: "",
        wt: 0,
        bno: "",
        bdt: "",
        bamt: 0,
      },
    };
  },
  methods: {},
  computed: {
      headers(){
    return [
        {text:"Fen",value:"fno"},
        {text:"Vendor",value:"vndr"},
        {text:"Bno",value:"bno"},
        {text:"Bdt",value:"bdt"},
        {text:"Bamt",value:"bamt"}

    ]
      }
  },
};
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
