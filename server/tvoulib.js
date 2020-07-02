
const fs = require('fs');
const flow = require('xml-flow') ;
const tvou = {
  vous : [],
  json = "" ,
  xmlstr = "" ,
  fname = "tallvoutst.xml",
  preamb =  `<ENVELOPE>
         <HEADER>
         <TALLYREQUEST>Import Data</TALLYREQUEST> 
         </HEADER>
         - <BODY>
         - <IMPORTDATA>
         - <REQUESTDESC>
         <REPORTNAME>All Masters</REPORTNAME> 
         - <STATICVARIABLES>
         <SVCURRENTCOMPANY>CO 20-21 - (Open,Current)</SVCURRENTCOMPANY> 
         </STATICVARIABLES>
         </REQUESTDESC>
         - <REQUESTDATA>` ,
  endamb =   `</REQUESTDATA>
         </IMPORTDATA>
         </BODY>
         </ENVELOPE>`,

}  // end of object tvou 

// start of functions 


function tlyopr(tvtyp,topr ) {
  arvtyp = ['sales','purchase','payment','receipt','journal','contra'];
  aropr =  ['create','edit','delete'] ;
  if(arvtyp.indexOf(tvtyp) < 0 ){
    console.log("Invalid Voucher Type");
    return null ;
  }// end of if arvtyp
  if(aropr.indexOf(topr) < 0 ) {
    console.log("Invalid Opreation");
    return  null ;
  } // end of invalid operation check
  this.tvou = new tlymsgvou(tvtyp,topr);
  this.totamt = 0 ;  // total of  all ale in the voucher tvou 
  this.lec = 0 ;  //  count of the ale  in the voucher 
  //   Methods
  //   this.addle method
  this.add_le = function(ldgname,amt) {

    var vch = this.tvou.voucher ;
    this.lec = vch.allledgerentrieslist.length; 
    if(amt != 0){
      var alej = new ale(ldgname,amt) ;
      this.tvou.voucher.allledgerentrieslist.push(alej);
      this.totamt =+ amt ;
      if(this.lec == 0 ) {  //  check if it is the first item
        vch.partyledgername =  ldgname ;

      } // end of if first ale
    } // end of if

  };  // end of method  add_le
  this.out_jsn = function() {
    this.json = JSON.stringify(this.tvou);
  }; // end of methods out_jsn


  this.out_xml = function() {
    this.xmlstr = flow.toXml(this.tvou,{indent:' '}) ;
  }; // end of method out_xml


  this.wr_file = function() {
    fs.writeFile(this.fname,this.preamb + this.xmlstr + this.endamb ,function(err) {
      if(err){ 
        console.log(err);
        return;
      }
      console.log("The file was saved !!" ) ;
    });
  }; // end of wr_file method


  this.st_dtls = function(dt,vno,nar) {
    var	vch = this.tvou.voucher ;
    vch.date = dt ;
    vch.vouchernumber = vno ;
    vch.narration = nar ;

  };

} // end of tlyopr  object


function tlymsgvou(vtyp,act) {
  this.$name = "tallymessage" ;
  this.$attrs = {xmlns:UDF='TallyUDF' }; 
  var oattr = new  tlyvattr(vtyp,act);
  /* {
     "xmlns:udf":"TallyUDF"
     } ; */
  this.voucher = new tlyvou(oattr) ;

} //  end of function for creating  tlyvou	


function tlyvattr(vtyp,act) {
  // sets the attribute object , and incorporated in tlymsgvou
  this.remoteid = "c4aab193-f0e4-4462-8e73-304da9931651-00002b42";
  this.vchtype = vtyp ; // Sales / Purchase / Receipt / Payment / Contra /Journal
  this.action = act  ;// Create / Edit / Delete
}

function tlyvou(oattr) {
  // creates object incorporatied in tlymsgvou. Has date/nar/guid/vouchname/partly ledgername etc
  this.$name= 'Voucher' ;
  this.$attrs=oattr ; 	
  this.date="yyyymmdd";
  this.guid= this.$attrs.remoteid ;
  this.narration= "Narration comes here ";
  this.vouchertypename= this.$attrs.vchtype;
  this.vouchernumber= "000000" ;
  this.partyname = "";
  this.partygstin = "" ;
  this.statename = "MAHARASHTRA" ;
  this.partyledgername= "name of the tally ledger";
  this.fbtpaymenttype= "Default";
  this.diffactualqty= "No";
  this.audited= "No";
  this.forjobcosting= "No";
  this.isoptional= "No";
  this.effectivedate= "" ;
  this.useforinterest="No";
  this.useforgainloss="No";
  this.useforgodowntransfer="No";
  this.useforcompound="No";
  this.alterid="61102";
  this.exciseopening="No";
  this.iscancelled="No";
  this.hascashflow="Yes";
  this.ispostdated="No";
  this.usetrackingnumber="No";
  this.isinvoice="No";
  this.mfgjournal="No";
  this.hasdiscounts="No";
  this.aspayslip="No";
  this.isdeleted="No";
  this.asoriginal="No";
  this.allledgerentrieslist = [] ; //  array of  ALE  objects

  // methods 
  //
  // add_ All Ledger entries

}

function ale(acname,amt) {
  this.ledgername = acname;
  this.isdeemedpositive= amt > 0 ? "Yes":"No";
  this.ledgerfromitem="No";
  this.removezeroentries="No";
  this.ispartyledger="Yes";
  this.amount=amt;

}

module.exports = tvou 
