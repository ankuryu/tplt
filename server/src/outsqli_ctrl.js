//  File Name tstsqloutstd.js 
//  file to test the outstd.db3 
//
const sqlio = require('./sqliteproc.js')

const oust = {} ;
oust.dbpth = "./outstd.db3" ;

// now open a sqlite database in memory
const db = {}

//const dbpth = ''

oust.gt_allrcv = function (co) { 
 // Get all receivable   
  const sqlstr = `select * from ${co}rcvbl; `
  console.log(sqlstr)
  let rslt = ""
  let dbpth = oust.dbpth ;
 sqlio.qry_all(dbpth,sqlstr,[]).then( (t)=> rslt = t ) 
  return rslt
}
oust.gt_aselrcv  =  function(co) {
  // Get  All slected  Reevievables 
   const sqlstr = " select * from $corcvbl where "
  return sqlio.qry_all(dbpth,sqlstr,[]) 
}
 oust.gt_prtyrcv = function() {
  // Get all recivables of a single party
}
  oust.gt_psmtrcv = function () {
  // Get all  summary total of  all parties in file
}
  oust.gt_pssmtrcv = function () {   }
  oust.gt_pselrcv = function () {   }

module.exports = oust ;



/*
const sqldeltbl = 'DROP TABLE IF EXISTS tmp1 ;'
const sqlcrt = 'CREATE TABLE IF NOT EXISTS tmp1 (id integer primary key asc ,name text, tel text);'
const sqlins = 'INSERT INTO tmp1 (name,tel ) VALUES (?,?) ;'
const par1 = ['Sunil', '9967028765']
const par2 = ['Varnil', '9820712305']
const par3 = ['Varsha', '9322224831']
sqlio.run_qry(dbpth, sqldeltbl, [])
  .then(()=> sqlio.run_qry(dbpth, sqlcrt, []))
  .then(()=> sqlio.ins_rec(dbpth, sqlins, par1))
  .then(()=> sqlio.ins_rec(dbpth, sqlins, par2))
  .then(()=> sqlio.ins_rec(dbpth, sqlins, par3))
  .catch((err)=>console.log(err))
*/

