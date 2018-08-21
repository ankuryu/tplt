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

fs
  .readdirSync(path.join(__dirname + '/sls'))
  .filter((file) =>
    file == '*.js' && file !== 'index.js'
  ).forEach((file) => {
    const model = salseq.import(path.join(__dirname + '/sls', file))
    console.log(model)
    db[model.name] = model
  })

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

fs
  .readdirSync(path.join(__dirname + '/ttly'))
  .filter((file) =>
    file == '*.js' &&  file !== 'index.js'
  ).forEach((file) => {
    const model = ttyseq.import(path.join(__dirname + '/ttly', file))
    console.log(model)
    db[model.name] = model
  })

Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

db.ttyseq = ttyseq

db.Sequelize = Sequelize

console.log(db.ttyseq)
module.exports = db
