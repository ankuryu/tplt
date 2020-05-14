//  file to tes the sqlitproc file
const sqlio = require('./sqliteproc.js')

// now open a sqlite database in memory
const db = {}
const sqldeltbl = 'DROP TABLE IF EXISTS tmp1 ;'
const sqlcrt = 'CREATE TABLE IF NOT EXISTS tmp1 (id integer primary key asc ,name text, tel text);'
const sqlins = 'INSERT INTO tmp1 (name,tel ) VALUES (?,?) ;'
const par1 = ['Sunil', '9967028765']
const par2 = ['Varnil', '9820712305']
const par3 = ['Varsha', '9322224831']
const dbpth = './tmp.db3'
sqlio.run_qry(dbpth, sqldeltbl, [])
  .then(()=> sqlio.run_qry(dbpth, sqlcrt, []))
  .then(()=> sqlio.ins_rec(dbpth, sqlins, par1))
  .then(()=> sqlio.ins_rec(dbpth, sqlins, par2))
  .then(()=> sqlio.ins_rec(dbpth, sqlins, par3))
  .catch((err)=>console.log(err))

//sqlio.run_qry(dbpth, sqlins, par2)
//sqlio.run_qry(dbpth, sqlins, par3)

// sqlio.db_run(db,sqlcrt)
// sqlio.ins_tbl(db,sqlins,par1)
