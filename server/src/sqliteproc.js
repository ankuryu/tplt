const sqlite3 = require("sqlite3").verbose();

sqlio = {
  // properties
  dbpth:"",
  sqlstr:"",
  dbh:null,
  apar : [], //  array of parameters

// methods
  
 // Run a sql query  on db database, using paray array of params 
  run_qry: async function(db,sql,paray) {
    this.dbpth = db ;
    this.sqlstr = sql ;
    this.apar = paray ;
    try {
      this.dbh = await opn_db(this.dbpth);
      console.log("Opened Database : " + this.dbpth);
      const rslt = await qry_all(this.dbh,this.sqlstr,this.apar);
      console.log(sqlstr + " Query Executed ! ")
    } catch (err) {
      console.log("Error : "+err )
    }
  },

  //  Insert a record into the database using sqlstr and dbh handle  also the parameter array
  ins_rec: function(db,sql,paray){ // db is the db hndl sql is inserty sql query paray is array of parameters
    this.dbpth = db ;
    this.sqlstr = sql ;
    this.apar = paray ;
    try {
      this.dbh = await opn_db(this.dbpth);
      console.log("Opened Database : " + this.dbpth);
      const rslt = await qry_all(this.dbh,this.sqlstr,this.apar);
      console.log(sqlstr + "Insert Query Executed ! ");
      await clos_db(this.dbh);
      console.log(this.dbpth +" Database Closed !");
    } catch (err) {
      console.log("Error : "+err );
    }
  },

  // Update a record in the database using the sqlistr and dbh handl also the para array for values to update
  upd_rec: function(db,sql,paray){

    this.dbpth = db ;
    this.sqlstr = sql ;
    this.apar = paray ;
    try {
      this.dbh = await opn_db(this.dbpth);
      console.log("Opened Database : " + this.dbpth);
      const rslt = await qry_all(this.dbh,this.sqlstr,this.apar);
      console.log(sqlstr + "Update Query Executed ! ");
      await clos_db(this.dbh);
      console.log(this.dbpth +" Database Closed !");
    } catch (err) {
      console.log("Error : "+err );
    }
  },

  //  Delete a record in the database using the sqistr and dbh handle also the para array for where conditions
  del_rec: function(db,sql,paray){

    this.dbpth = db ;
    this.sqlstr = sql ;
    this.apar = paray ;
    try {
      this.dbh = await opn_db(this.dbpth);
      console.log("Opened Database : " + this.dbpth);
      const rslt = await qry_all(this.dbh,this.sqlstr,this.apar);
      console.log(sqlstr + "Delete Query Executed ! ");
      await clos_db(this.dbh);
      console.log(this.dbpth +" Database Closed !");
    } catch (err) {
      console.log("Error : "+err );
    }
  },

//  End of the methods
}  // End of the object sqliio

// Start of the functions 
//

function qry_all(db,query, params) {
    return new Promise((resolve, reject)=> {
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
        reject(" Error "+ err.message) ;
        console.log("Error in  running SQL "+ sql);
      }else {
        resolve(reslt);
        console.log(sql+" SQL Command executed Successfully");
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
