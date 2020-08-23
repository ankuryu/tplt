
// file tst_tlyvoulib.js  to test the module  tvoulib.js
//
const tlylib = require('./tvoulib.js');



//  Testing area 

console.log('Starting .......');
vouch1 = tlylib.new_vou('sales','create');

console.log(vouch1.tvou.voucher) ;
vouch1.add_le('Party 1',-118);
vouch1.st_dtls('20200525','000101','Sales Invoice sold to Party 1');
vouch1.add_le('Sale Under GST 18%',100);
vouch1.add_le('GST 18% Tax',18) ;

tlylib.add_vou(vouch1); // add the voucher to the list
vouch1 = tlylib.new_vou("sales",'create');
vouch1.add_le("Party_2",-236);
vouch1.st_dtls('20200822','000102','Sales Invoice sold to party_2');
vouch1.add_le('Local Sales Under GST 18%',200);
vouch1.add_le('CSGST 9% ',18);
vouch1.add_le('SGST 9% ',36) ;
tlylib.add_vou(vouch1); // add the voucher to the list
console.log("Vouchers:",tlylib.vous)
tlylib.out_jsn() ;
tlylib.out_xml() ;
//vouch1.wr_file() ;

console.log(tlylib.json);
console.log(tlylib.xmlstr);


// end of testing area

