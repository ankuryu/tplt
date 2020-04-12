const sqlite3 = require('sqlite3').verbose ;
console.log("starting sqlite3");

const sqlproc = { 

  /////////////////////// start of functions ////////////////////////////


  //  Function to open a sqlte data and fetch data using the sql string
  //   ****** function ftch_sqldata() ********
  ftch_sqldata =  async function (db,dbpth,sqlstr,apar) {

    // dbpth is the path to sqlite database ; sqlstr is the requisite SQLstring and apar is the array of parameters to be passed to sql command
    try {
      dbh =  await opn_db(db,dbpth) ;
      console.log('Param2',apar);
      rv_row = await qry_all(dbh,sqlstr,apar) ;
      //rv_row = await jango()
      //		console.log('Rv-row', rv_row);

      console.log('closing',await clos_db(dbh));
    } catch(err) {
      console.log( err )
    }
    return rv_row;

  }, // end of functions

  // function to open the  sqlitepath  , parameters  db object and dbpth as string , returns a promise for async await
  opn_db =function(db,dbpth) {
    return new Promise( function( resolve , reject) {
      console.log('Opening Database .. ',db,dbpth);
      this.db = new sqlite3.Database(dbpth, (err)=>{

        if(err) reject('Open Error'+ err.message)
        else resolve( this.db )
      })
    })
  },


  clos_db =  function(db) {
    return new Promise(function(resolve, reject) {
      this.db.close((err)=>{
        if(err){
          console.log('Closing Error');
          reject(err)}else{ resolve(true)}
      })

      // resolve(true)
    }) 
  },
  // function to query db database using query and parameters, returns a promise for async await

  qry_all= function (db,query, params) {
    return new Promise((resolve, reject)=> {
      //resolve({name:"Varnil"});

      // if(params == undefined) params=[]
      console.log('In qry_all Param3',params);
      console.log('db ',db,'Query : ',query, ' Params ',params);
      debugger;
      db.all(query, params, (err, rows)=>{
        //console.log(rows);
        if(err) reject("Read error: " + err.message)
        else resolve(rows);
      })  
    }) 
  }

} //  object sqlproc end bracket

export default  sqlproc ;
// end of the file
