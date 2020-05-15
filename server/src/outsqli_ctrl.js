//  File Name tstsqloutstd.js 
//  file to test the outstd.db3 
//
const sqlio = require('./sqliteproc.js')

// now open a sqlite database in memory
const db = {}

const dbpth = './outstd.db3'

function gt_allrcv(co) { 
 // Get all receivable   
  const sqlpth = "select * from $corcvbl; "
  return sqlio.qry_all(dbpth,sqlstr,[]) 
}
function gt_aselrcv(co) {
  // Get  All slected  Reevievables 
   const sqlstr = " select * from $corcvbl where "
  return sqlio.qry_all(dbpth,sqlstr,[]) 
}
function gt_prtyrcv() {
  // Get all recivables of a single party
}
function gt_psmtrcv() {
  // Get all  summary total of  all parties in file
}
function gt_pssmtrcv() {   }
function gt_pselrcv() {   }


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


