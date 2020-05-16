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
    let rv = false 

    try {
      const dbh = await opn_db(db);
      console.log("Opened Database : " + db);
      console.log("Param Ar",paray)
      const rslt = await db_run(dbh,sql,paray);
      console.log(sql+ " Query Executed ! ")
      await clos_db(dbh); 
      console.log(db+" Database Closed !");
      rv = rslt ;
    } catch (err) {
      console.log("Error : "+err )
    }
    return rv
  },

  //  Insert a record into the database using sqlstr and dbh handle  also the parameter array
  ins_rec: async function(dbpth,sqlstr,apar){ // db is the db hndl sql is inserty sql query paray is array of parameters

    try {
      const dbh = await opn_db(dbpth);
      console.log("Opened Database : " + dbpth);
      const rslt = await db_run(dbh,sqlstr,apar);
      console.log(sqlstr + "Insert Query Executed ! ");
      await clos_db(dbh); 
      console.log(dbpth +" Database Closed !");
    } catch (err) {
      console.log("Error : "+err );
    }
  },

  // Update a record in the database using the sqlistr and dbh handl also the para array for values to update
  upd_rec: async function(dbpth,sqlstr,apar){

    try {
      const dbh = await opn_db(dbpth);
      console.log("Opened Database : " + dbpth);
      const rslt = await db_run(dbh,sqlstr,apar);
      console.log(sqlstr + "Update Query Executed ! ");
      await clos_db(dbh);
      console.log(dbpth +" Database Closed !");
    } catch (err) {
      console.log("Error : "+err );
    }
  },

  //  Delete a record in the database using the sqistr and dbh handle also the para array for where conditions
  del_rec: async function(db,sql,paray){

    try {
      const dbh = await opn_db(db);
      console.log("Opened Database : " + db);
      const rslt = await db_run(dbh,sql,paray);
      console.log(sql+ "Delete Query Executed ! ");
      await clos_db(dbh);
      console.log(db+" Database Closed !");
    } catch (err) {
      console.log("Error : "+err );
    }
  },


  //  Query records in the database using the sqistr and dbh handle also the para array for where conditions
  qry_all: async function(db,sql,paray){
   let rslt = ""
    try {
      const dbh = await opn_db(db);
      console.log("Opened Database : " + db);
      rslt = await qry_all(dbh,sql,paray);
      console.log(sql+ "Query Records Executed ! ");
      console.log("Result",rslt)
      await clos_db(dbh);
      console.log(db+" Database Closed !");
    } catch (err) {
      console.log("Error : "+err );
    }
    return rslt ;
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
function db_run(db,sql,apar){  //  db is the  handle received from opening a database file sql is the slq command  you want to exe
  return new Promise( (resolve,rej) => {
    db.run(sql,apar,(err,reslt) => {
      if(err) {
        rej(" Error "+ err.message) ;
        console.log("Error in  running SQL "+ sql);
      }else {
        resolve(reslt);
        console.log(sql+" SQL Command executed Successfully");
      }
    }) 
  }) 
}

// function opn_db(db,dbpth) {
function opn_db(dbpth) {
    return new Promise( function( resolve , reject) {
      const db = new sqlite3.Database(dbpth, (err)=>{
        if(err) reject('Open Error'+ err.message)
        else resolve( db )
      })
    })
  }

function  clos_db(db) {
    return new Promise(function(resolve, reject) {
      db.close((err)=>{
        if(err){
          console.log('Closing Error');
          reject(err)}else{ resolve(true)}
      })
      // resolve(true)
    }) 
  }

module.exports = sqlio
