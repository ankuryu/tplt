const sqlite3 = require('sqlite3').verbose ;
console.log("starting sqlite3");

const sqlproc = { 

  // properties
  dbpth:"",
  sqlstr:"",
  dbh:null,
  apar : [], //  array of parameters

  /////////////////////// start of Methods ////////////////////////////

  //  Method to open a sqlte data and fetch data using the sql string
  //   ****** Method ftch_sqldata() ********
  // methods
  //  Queries a database  using the dbh handle and  sqlstr as also array parameters
  qry_tbl  : function(){  },
  //  Insert a record into the database using sqlstr and dbh handle  also the parameter array
  ins_tbl : function(){  },
  // Update a record in the database using the sqlistr and dbh handl also the para array for values to update
  upd_tbl : function(){  },
  //  Delete a record in the database using the sqistr and dbh handle also the para array for where conditions
  del_tbl : function(){  },

  ftch_sqldata :  async function (db,dbpth,sqlstr,apar) {

    // dbpth is the path to sqlite database ; sqlstr is the requisite SQLstring and apar is the array of parameters to be passed to sql command
    try {
      dbh =  await opn_db(db,dbpth) ;
      console.log('Param2',apar);
      rv_row = await qry_all(dbh,sqlstr,apar) ;
      console.log('closing',await clos_db(dbh));
    } catch(err) {
      console.log( err )
    }
    return rv_row;

  }, // end of Method
  // Method to open the  sqlitepath  , parameters  db object and dbpth as string , returns a promise for async await
  // returns a promise 
  opn_db: function(db,dbpth) {
    return new Promise( function( resolve , reject) {
      this.db = new sqlite3.Database(dbpth, (err)=>{
        if(err) reject('Open Error'+ err.message)
        else resolve( this.db )
      })
    })
  },

  // Method  Close Database 
  // returns a promise
  clos_db :  function(db) {
    return new Promise(function(resolve, reject) {
      this.db.close((err)=>{
        if(err){
          console.log('Closing Error');
          reject(err)}else{ resolve(true)}
      })
      // resolve(true)
    }) 
  },
  // Method to query db database using query and parameters, returns a promise for async await
  // returns a promise
  qry_all: function (db,query, params) {
    return new Promise((resolve, reject)=> {
      db.all(query, params, (err, rows)=>{
        if(err) reject("Read error: " + err.message)
        else resolve(rows);
      })  
    }) 
  }

} //  object sqlproc end bracket

module.exports =  sqlproc ;
// end of the file
