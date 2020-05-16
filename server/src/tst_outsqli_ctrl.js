// file  tst_outsqli_ctrl
// Test the file outsqli_ctr  for processing the outstd.db3 sqlite databae files
//
//
const oust = require("./outsqli_ctrl.js")

let j =  oust.gt_allrcv("pm")
console.log("J",j)
//console.log(rslt)
//if(Array.isArray(rslt)) console.log("array length",rslt.length)
