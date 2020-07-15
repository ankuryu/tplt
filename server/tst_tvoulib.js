
// file tst_tlyvoulib.js  to test the module  tvoulib.js
//
const tlylib = require('./tvoulib.js');



//  Testing area 

console.log('Starting .......');
vouch1 = new tlylib.tlyopr('sales','create');

console.log(vouch1.tvou.voucher) ;
vouch1.add_le('Party 1',-118);
vouch1.st_dtls('20200525','000101','Sales Invoice sold to Party 1');
vouch1.add_le('Sale Under GST 18%',100);
vouch1.add_le('GST 18% Tax',18) ;

tlylib.add_vou(vouch1); // add the voucher to the list


tlylib.out_jsn() ;
tlylib.out_xml() ;
//vouch1.wr_file() ;

console.log(vouch1.json);
console.log(vouch1.xmlstr);


// end of testing area

