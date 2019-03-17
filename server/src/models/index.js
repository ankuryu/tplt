// { "parserOptions": { "ecmaVersion": 6 } }

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}
//config.db.options.storage = '../../modeldb.db3'
const salseq = new Sequelize(
  config.sls.db.database,
  config.user,
  config.password,
  config.sls.db.options
)
console.log('sls')
fs
  .readdirSync(path.join(__dirname + '/sls'))
  .filter((file) =>
//	  file == file
    path.extname(file) == '.js'
  ).forEach((file) => {
	  console.log('file:',file);
    const model = salseq.import(path.join(__dirname + '/sls', file))
    db[model.name] = model

    console.log('sls model ',model)
  })
//console.log(Object.keys(db))
  Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})  

db.salseq = salseq

const ttyseq = new Sequelize(
  config.tty.db.database,
  config.user,
  config.password,
  config.tty.db.options
)

console.log('ttly')
fs
  .readdirSync(path.join(__dirname + '/ttly'))
  .filter((file) =>
//	  file == file
    path.extname(file) == '.js'  
//    file == '*.js' &&  file !== 'index.js'
  ).forEach((file) => {
    const model1 = ttyseq.import(path.join(__dirname + '/ttly', file))
   console.log('ttly model : ',model1)
    db[model1.name] = model1
  })

Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

db.ttyseq = ttyseq

const stkseq = new Sequelize(
  config.stk.db.database,
  config.user,
  config.password,
  config.stk.db.options
)
console.log('stk')
fs
  .readdirSync(path.join(__dirname + '/stk'))
  .filter((file) =>
//	  file == file
    path.extname(file) == '.js'
  ).forEach((file) => {
	  console.log('stk file:',file);
    const model = stkseq.import(path.join(__dirname + '/stk', file))
    db[model.name] = model

    console.log('model: ',model)
  })
//console.log(Object.keys(db))
  Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})  

db.stkseq = stkseq
db.Sequelize = Sequelize

//console.log(db.ttyseq)
module.exports = db
