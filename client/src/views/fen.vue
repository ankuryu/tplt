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
                <v-col xs12> </v-col>
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
      /* fens: [],
      fitms: [],
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
      },*/
    };
  },
  methods: {},
  computed: {},
};
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
