/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable no-path-concat */
/* eslint-disable eqeqeq */
// { "parserOptions": { "ecmaVersion": 6 } }

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config/config');
const db = {};
//config.db.options.storage = '../../modeldb.db3'
const salseq = new Sequelize(
  config.sls.db.database,
  config.user,
  config.password,
  config.sls.db.options
);
console.log('sls');
fs
  .readdirSync(path.join(__dirname + '/sls'))
  .filter((file) =>
  //	  file == file
    path.extname(file) == '.js'
  ).forEach((file) => {
	  console.log('file:', file);
    const model = salseq.import(path.join(__dirname + '/sls', file));
    db[model.name] = model;

    console.log('sls model ', model);
  });
//console.log(Object.keys(db))
Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.salseq = salseq;
salseq.sync();
//console.log('--------------->',config.tty);
const ttyseq = new Sequelize(
  config.tty.db.database,
  config.user,
  config.password,
  config.tty.db.options
);

//console.log('ttly');
fs
  .readdirSync(path.join(__dirname + '/ttly'))
  .filter((file) =>
  //	  file == file
    path.extname(file) == '.js'
    //    file == '*.js' &&  file !== 'index.js'
  ).forEach((file) => {
    const model1 = ttyseq.import(path.join(__dirname + '/ttly', file));
//    console.log('ttly model : ', model1);
    db[model1.name] = model1;
  });

Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.ttyseq = ttyseq;
ttyseq.sync();
//console.log('--------------->',config.stk)
try {
var stkseq = new Sequelize(
  config.stk.db.database,
  config.user,
  config.password,
  config.stk.db.options
); 
// console.log(stkseq);
} catch(err) {console.log("OUch ",err);
}
//console.log(stkseq);
fs
  .readdirSync(path.join(__dirname + '/stk'))
  .filter((file) =>
  //	  file == file
    path.extname(file) == '.js'
  ).forEach((file) => {
	  console.log('stk file:---------------->', file);
    try {
//      stkseq.authenticate().then(()=>{console.log("Connection--------------------------->")} )
//        .catch((err)=>{console.log("Big ERoor-=====>",err)});
    var model = stkseq.import('./stk/stk.js');
    db[model.name] = model;
   } catch(err) {console.log('BooHoo',err);
}
 //   console.log('stk model: ', model.name);
  });
//console.log(Object.keys(db))
Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});
db.stkseq = stkseq ;

const chqseq = new Sequelize(
  config.chq.db.database,
  config.user,
  config.password,
  config.chq.db.options
);
//console.log('chq');
fs
  .readdirSync(path.join(__dirname + '/chq'))
  .filter((file) =>
  //	  file == file
    path.extname(file) == '.js'
  ).forEach((file) => {
//	  console.log('chq file:', file);
    const model = chqseq.import(path.join(__dirname + '/chq', file));
    db[model.name] = model;

//    console.log('chq model: ', model.name);
  });
//console.log(Object.keys(db))
Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.chqseq = chqseq;
db.Sequelize = Sequelize;

//console.log(db.ttyseq)
module.exports = db;
