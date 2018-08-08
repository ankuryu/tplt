/* jshint  esversion:6 */
/* file: serverquo.js */
const fs = require('fs');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const sqlite3 = require("sqlite3").verbose();

const app = express();

//app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

const Sequelize = require('sequelize');
const sequel = new Sequelize('sqlite:./db/quot18.db3');
sequel.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

const Quotop = sequel.define('quotop', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  qno: {
    type: Sequelize.STRING
  },
  qdt: {
    type: Sequelize.DATE
  },
  pname: {
    type: Sequelize.STRING
  },
  paddr: {
    type: Sequelize.STRING
  },
  enqno: {
    type: Sequelize.STRING
  },
  enqdt: {
    type: Sequelize.DATE
  },
  tel: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true,
  timestamps: false
});
/* sequel.sync().then(function(){
	Quotop.create({
		qno: '00001',
		qdt: '01/04/2018',
		pname: 'Kamlesh Corporation',
		paddr: '89, Nagdevti Street, Mumbai 400 003',
	});
		Quotop.findAll().then(quotations=> {
		console.log(quotations.length);
	});
}) ; */
const Quoitm = sequel.define('quoitm', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  qno: {
    type: Sequelize.STRING
  },
  sr: {
    type: Sequelize.INTEGER
  },
  desc: {
    type: Sequelize.STRING
  },
  qty: {
    type: Sequelize.DECIMAL
  },
  unt: {
    type: Sequelize.STRING
  },
  rate: {
    type: Sequelize.DECIMAL
  },
  disc: {
    type: Sequelize.DECIMAL
  },
  tax: {
    type: Sequelize.DECIMAL
  },
  cost: {
    type: Sequelize.DECIMAL
  },
  fac: {
    type: Sequelize.DECIMAL
  },
  incr: {
    type: Sequelize.DECIMAL
  },
  nar: {
    type: Sequelize.STRING
  }

}, {
  freezeTableName: true,
  timestamps: false
});

const Quotc = sequel.define('quotc', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  qno: {
    type: Sequelize.STRING
  },
  vld: {
    type: Sequelize.INTEGER
  },
  vldunt: {
    type: Sequelize.STRING
  },
  pmt: {
    type: Sequelize.STRING
  },
  pmtunt: {
    type: Sequelize.STRING
  },
  dlvtm: {
    type: Sequelize.DECIMAL
  },
  dlvunt: {
    type: Sequelize.STRING
  },
  dlvloc: {
    type: Sequelize.STRING
  },
  tax: {
    type: Sequelize.DECIMAL
  },
  disc: {
    type: Sequelize.DECIMAL
  },
  wrt: {
    type: Sequelize.STRING
  },
  nar1: {
    type: Sequelize.STRING
  },
  nar2: {
    type: Sequelize.STRING
  },
  nar3: {
    type: Sequelize.STRING
  }

}, {
  freezeTableName: true,
  timestamps: false
});
sequel.sync().then(function() {
  console.log("tables ready");
  app.listen(8000, function() {
    console.log("listening on port 8000");
  });
});
/*	Quotop.create({
		qno: '00008',
		qdt: '2018-04-09',
		pname: 'R Jayeshkumar & Co',
		paddr: '84, Nagdevti Street, Mumbai 400 003',
	});
		Quotop.findAll().then(quotations=> {
		console.log(quotations.length);
                sequel.query('Select * from quotop;').then(quote=>{console.log(quote);
			sequel.close().then(()=>{console.log("connection closed");});
		});
	});

app.listen(8000 , function() {
 console.log( "Listening on port 8000");
});
*/

app.get('/', (req, res) => {
  res.sendFile(_dirname + '/dist/index.html');

});
//for getting all quotations

app.get('/api/quotes', (req, res,next) => {

  Quotop.findAll({
    attributes: ['id','qno', 'qdt', 'pname']
  }).then(quotes => {
    var qnew = [];
    for(i=0 ; i < quotes.length ; i++){
      quo = quotes[i];
      if(quo.pname != null){
         qnew.push(quo)
      }
    }
 //   console.log("get quotations")
 //   console.log(qnew[0].qno);
    res.send(qnew);
  });
});

//  for adding a quotation
app.post('/api/quote/add', (req, res,next) => {
  var quote = req.body;
//	console.log('add route');
//	console.log(quote);
//  var qt2 = {qno:"00005",qdt:"2018-11-01",pname:"Maruti",paddr:"jango",enqno:"01",enqdt:"2018-11-01",qamt:0}
  Quotop.create(quote).then(console.log("Added Quote"))
	res.end('OK');
});

// for deleting the quotation with identity of id

app.delete('/api/quotes/:id', (req, res,next) => {
	var qid = req.params.id ;
 // console.log(qid);
	Quotop.destroy({where:{"id":qid}})
		.then( (response) =>{	
			res.end('OK')
		})
		.catch( (error) => {});


});

// for Updating the quotation with an id : id
app.put('/api/quotes/:id', (req, res,next) => {
	var qid = req.params.id ;
/*	console.log(req.params);
  console.log(qid);
	console.log(req.body);
	*/
	quote = req.body ;
	Quotop.update(quote,{where:{"id":qid}})
		.then( (response) =>{
		res.end('OK')
		})
		.catch( (error) => {console.log(error)});
});


// for getting the quotation with an id : id
app.get('/api/quotes/:id', (req, res,next) => {
	var qid = req.params.id ;
//  console.log(qid);
	Quotop.findOne({where:{"id":qid}})
		.then( (response) =>{
	//		console.log(response);
			res.send(response);
	//		res.send({pname:"jango",paddr:" xyz lane"});
			res.end('OK');
		})
		.catch( (error) => {
			console.log(error);
		});
});

