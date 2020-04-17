// file : frmPdf.js
// Contains routines to render  form as QUO/BILL etc in PDF format
const jsPdf = require("jsPdf");
// following Properties
// doc : document for pdf object 
// co : Company code
// codtl :  Object containing details of the company such as name/addr/gst
// topdtl : Details of the party as name/addr/gst
// middtl: Detailed array  of the item/desc/size/qty/rate/disc/tax
// **********Methods***************
//
const frmPdf = {
  doc = null ,  //  stores the pdf document object
  co = "",
  codtl = null,
  topdtl = null,
  middtl = null,

  //  *****************   start of the methods used for rendering the form ************ //
  // gen_doc :   Generates a new PDF document using jsPDF
  // rndr_hdg :  
  // rndr_lns :
  // rndr_lbl :
  // rndr_mid :
  // rndr_

  gen_doc = function() {
    this.doc = new jsPdf()
  },
  rndr_hdg = function(co ){

  },
  rndr_lns= function( ){
    let vdoc = this.doc ;
    // Function prints the varous lines of the forms 
    let font = 10 ;
    let color = 255 ;
    vdoc.setFontSize(font);

    // top mid line
    //  100,85 to 
    // hdg bot line
    // top line = 12,62  end 203,62
    const  pg_top_ln = [12,62,203,62 ] ;
    prn_lin(vdoc,pg_top_ln);
    // hdg top line
    const  hdg_tp_ln =  [12,104 ,203,104];
    prn_lin(vdoc,hdg_tp_ln);
    // hdg bot line  
    const  hdg_bt_ln =[ 12,114 , 203,114];
    prn_lin(vdoc,hdg_bt_ln);
    // bot mid line
    const pg_ttl_ln = [12,212, 203,212];
    prn_lin(vdoc,pg_ttl_ln);
    // bot bot line
    const pg_bt_ln = [12,254, 203,254] ;
    prn_lin(vdoc,pg_bt_ln) ;
    const  vlft_ln = [12,62,12,254 ];
    prn_lin(vdoc,vlft_ln);
    const  vrt_ln = [203,62,203,254 ];
    prn_lin(vdoc,vrt_ln);
    const  sr_ln = [23,104,23,212 ] ;
    prn_lin(vdoc,sr_ln);
    const  desc_ln = [93,104,93,254 ] ;
    prn_lin(vdoc,desc_ln);
    const  qty_ln = [115,104,115,212 ] ;
    prn_lin(vdoc,qty_ln);
    const  unt_ln = [128,104,128,212 ] ;
    prn_lin(vdoc,unt_ln);
    const  rate_ln = [146,104,146,212 ] ;
    prn_lin(vdoc,rate_ln);
    const  disc_ln = [159,104,159,212 ];
    prn_lin(vdoc,disc_ln);
    const  tax_ln = [174,104,174,254 ] ;
    prn_lin(vdoc,tax_ln);
    //var  amt_ln = [ ] ;
    // prn_lin(doc,amt_ln);

    // tin top line
    const tin_tp_ln = [12,242,93,242] ;
    prn_lin(vdoc,tin_tp_ln);

    // totb1 line
    const ttl_1_ln = [174,218,203,218 ];
    prn_lin(vdoc,ttl_1_ln);
    // totb2 line
    const ttl_2_ln = [174,224,203,224 ];
    // totb3 line
    const ttl_3_ln = [174,230,203,230 ];
    // totb4 line
    const ttl_4_ln = [174,236,203,236 ];
    // totb5 line
    const ttl_5_ln = [174,242,203,242 ];
    //  ================= now vertical lines ===============
    // in top bill
    //  98,63 to 98,104
    // ****** vertical lines in item part of bill
    // y = 104 for all
    // sno line 24,104 to 24,214
    // desc line 93,104 to 93,254
    // qty line         to   ,214
    // unt line         to ,214
    // rate line        to ,214
    // disc line        to ,214
    // tax line      to  ,254
    // amt line

  },
  rndr_lbl = function(){
    let vdoc = this.doc ;
    // renders the varios lables in the forms
    let font=8;
    let color = "red";


    const lbl_ms = [14,67, "Ms", font , color];
    prn_lbl(vdoc,lbl_ms);
    //   prn_fld( doc,[20,67,btop.pname])
    //   prn_fld(doc,[21,70,btop.paddr])
    const lbl_no = [100,67, "NO", font , color];
    prn_lbl(vdoc,lbl_no);
    //   prn_fld(doc, [108,67,btop.bno])
    const lbl_bdt =  [157,67, "Dt", font ,color] ;
    prn_lbl(vdoc,lbl_bdt);
    //   prn_fld(doc, [165,67,btop.bdt])
    const lbl_chl = [100,75, "Challan No", font, color];
    prn_lbl(vdoc,lbl_chl);
    const lbl_cdt =  [157,75, "Dated" , font, color] ;
    prn_lbl(vdoc,lbl_cdt);
    const lbl_Ono =  [100,83 ,"Order no",font,color];
    prn_lbl(vdoc,lbl_Ono);
    const lbl_odt =  [157,83 , "Dated",font,color];
    prn_lbl(vdoc,lbl_odt);
    const hdgrw= 110 ;
    const hdg_sr = [13,hdgrw,"S No",font,color] ;
    prn_lbl(vdoc,hdg_sr);
    const hdg_desc =  [39,hdgrw,"Description of Goods",font,color];
    prn_lbl(vdoc,hdg_desc);
    const hdg_qty =  [95,hdgrw,"Quantity",font,color];
    prn_lbl(vdoc,hdg_qty);
    const hdg_unt =  [118,hdgrw,"Unit",font,color] ;
    prn_lbl(vdoc,hdg_unt);
    const hdg_rat =  [131,hdgrw,"U.Rate",font,color] ;
    prn_lbl(vdoc,hdg_rat);
    const hdg_dsc =  [147,hdgrw,"Disc %",font,color] ;
    prn_lbl(vdoc,hdg_dsc);
    const hdg_tax =  [162,hdgrw,"Tax %",font,color] ;
    prn_lbl(vdoc,hdg_tax);
    const hdg_amt = [180,hdgrw-2,"AMOUNT",font,color];
    prn_lbl(vdoc,hdg_amt);
    const hdg_rs =  [177,hdgrw+3,"Rs",font,color];
    prn_lbl(vdoc,hdg_rs);
    const hdg_ps =  [200,hdgrw+3,"P.",font,color];
    prn_lbl(vdoc,hdg_ps);

    var lbl_ttl =  [97,215,"Total",font,color] ;
    prn_lbl(vdoc,lbl_ttl);
    var lbl_gtl =  [97,246,"Grand Total",font,color] ;
    prn_lbl(vdoc,lbl_gtl);

  },
  rndr_mid= function( ){

  },

}
function prn_lin(pdoc,ar){
	//  prints a line on jsPDF 'doc', using co-ord given by array 'ar'
	pdoc.line(ar[0],ar[1],ar[2],ar[3]) ;
			return pdoc;
			}

function prn_lbl(pdoc,ar) {
	// prints a string label on jsPDF 'doc' using data provided by array ar
	pdoc.text(ar[0],ar[1],ar[2])
		return pdoc;
}
function prn_fld(pdoc,ar){
	// prints a string label on jsPDF 'doc' using data provided by array ar
	pdoc.text(ar[0],ar[1],ar[2])
		return pdoc;
}
export default frmPdf
