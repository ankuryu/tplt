//  file to tes the sqlitproc file
 const sqlio= require("./sqliteproc.js")

// now open a sqlite database in memory
db = {}
sqlcrt = "CREATE TABLE IF NOT EXISTS tmp1 (name text, tel text);"
sqlins = "INSERT INTO tmp1 (name,tel ) VALUES (?,?) ;"
par1 = ["Sunil",'9967028765']
dbpth = ":memory:"
sqlio.run_qry(dbpth,sqlcrt,[])
//sqlio.db_run(db,sqlcrt)
//sqlio.ins_tbl(db,sqlins,par1)
