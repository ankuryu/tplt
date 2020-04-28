const sqlite3 = require("sqlite3").verbose();

sqlio = {
  // properties
  dbpth:"",
  sqlstr:"",
  dbh:null,
  apar : [], //  array of parameters

// methods
  // Opens a database using the path given in the property this.pth
  opn_db : function(db,dbpth){
     opn_db(db,dbpth)
  },
  //  Closes a database  whose handle is in dbh prepery
  cls_db : function(db){
    clos_db(db)
  },
  db_run : function(db,sql){
   qry_all(db,sql)
  },
  //  Queries a database  using the dbh handle and  sqlstr as also array parameters
  qry_tbl  : function(){  },
  //  Insert a record into the database using sqlstr and dbh handle  also the parameter array
  ins_tbl : function(db,sql,paray){ // db is the db hndl sql is inserty sql query paray is array of parameters
    qry_all(db,sql, paray)
  },
  // Update a record in the database using the sqlistr and dbh handl also the para array for values to update
  upd_tbl : function(){  },
  //  Delete a record in the database using the sqistr and dbh handle also the para array for where conditions
  del_tbl : function(){  },

//  End of the methods
}  // End of the object sqliio

// Start of the functions 
//

function qry_all(db,query, params) {
    return new Promise((resolve, reject)=> {
ws://127.0.0.1:9229/e57498c9-c099-485c-9fd0-35cdd1109df9
      db.all(query, params, (err, rows)=>{
        if(err) reject("Read error: " + err.message)
        else resolve(rows);
      })  
    }) 
  }
function db_run(db,sql){  //  db is the  handle received from opening a database file sql is the slq command  you want to exe
  return new Promise( (resolve,rej) => {
    db.run(sql,(err,reslt) => {
      if(err) {
        reject(" Error "+ err.message) 
        console.log("Error in  running SQL "+ sql)
      }else {
        resolve(reslt)
        console.log(sql+" SQL Command executed Successfully")
      }
    }) 
  }) 
}
function opn_db(db,dbpth) {
    return new Promise( function( resolve , reject) {
      this.db = new sqlite3.Database(dbpth, (err)=>{
        if(err) reject('Open Error'+ err.message)
        else resolve( this.db )
      })
    })
  }

function  clos_db(db) {
    return new Promise(function(resolve, reject) {
      this.db.close((err)=>{
        if(err){
          console.log('Closing Error');
          reject(err)}else{ resolve(true)}
      })
      // resolve(true)
    }) 
  }

module.exports = sqlio
