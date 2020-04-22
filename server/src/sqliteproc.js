sqlio = {
  // properties
  dbpth:"",
  sqlstr:"",
  dbh:null,
  apar : [], //  array of parameters

// methods
  // Opens a database using the path given in the property this.pth
  opn_db : function(){  },
  //  Closes a database  whose handle is in dbh prepery
  cls_db : function(){  },
  //  Queries a database  using the dbh handle and  sqlstr as also array parameters
  qry_tbl  : function(){  },
  //  Insert a record into the database using sqlstr and dbh handle  also the parameter array
  ins_tbl : function(){  },
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
      db.all(query, params, (err, rows)=>{
        if(err) reject("Read error: " + err.message)
        else resolve(rows);
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
