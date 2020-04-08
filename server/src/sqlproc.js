const sqlite3 = require('sqlite3').verbose ;



/////////////////////// start of functions ////////////////////////////

//  Function to open a sqlte data and fetch data using the sql string
   async function ftch_sqldata(db,dbpth,sqlstr,apar) {

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

}; // end of functions

	 // function to open the  sqlitepath  , parameters  db object and dbpth as string , returns a promise for async await
const opn_db =function(db,dbpth) {
		 return new Promise( function( resolve , reject) {
			 console.log('Opening Database .. ',db,dbpth);
		 this.db = new sqlite3.Database(dbpth, (err)=>{
			 
		    if(err) reject('Open Error'+ err.message)
			 else resolve( this.db )
		 })
		 })
	 }


const clos_db =  function(db) {
    return new Promise(function(resolve, reject) {
				this.db.close((err)=>{
					if(err){
					  console.log('Closing Error');
						reject(err)}else{ resolve(true)}
				})
		
       // resolve(true)
    }) 
};
 // function to query db database using query and parameters, returns a promise for async await

function qry_all(db,query, body) {
		 return new Promise((resolve, reject)=> {
			 //resolve({name:"Varnil"});
			 
			// if(body == undefined) body=[]
			 console.log('In qry_all Param3',body);
			 console.log('db ',db,'Query : ',query, ' Params ',body);
			 debugger;
		 	 db.all(query, body, (err, rows)=>{
				 //console.log(rows);
					 if(err) reject("Read error: " + err.message)
					 else resolve(rows);
			 	})  
    			}) 
	};

function jango() {
	return new Promise((resolve,reject)=> {
		resolve({name:"Zarnil"});
	})
}


