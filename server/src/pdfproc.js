const jsPdf = require("jsPDF");
const frmPdf = require("frmPdf");  // library of routines for printing form such as invoice/quo etc
const chqPdf = require("chqPdf"); // library of rountines for  printing cheques
//  functions required for internal use and not exported
//  Generate  Company letterhead
//  Generate  Cheque format
//  Generate  Bill/quo format
//



const objPdf = {
  fname = "",
  pdfstr = "",   
  doc = null ,
  co = "PM",
  codtl = null ,


  gen_quo = function(){
    this.doc = new jsPdf('p')

  }, 
  gen_chq = function(){

  },
  gen_vou = function() {

  },


};

export default objPdfe
