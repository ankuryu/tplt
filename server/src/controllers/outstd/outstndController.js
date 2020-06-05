console.log(global.appRoot+'/../db/outstd.db3')
const sqlio = require('../../sqliteproc.js');
const db = {};
const dbpth = global.appRoot+'/../db/outstd.db3';

module.exports = {
  async shwAllOutstd (req,res) {
    var co = req.params.co
    var opr = req.params.opr
    console.log("Request params ",req.params)
    var sqlstr = "rcv"
    if(opr="rcv"){
      sqlstr = "Select * from "+co +"rcvbl ;"
    }else {
      sqlstr = "Select * from " + co + "pybl ;"
    }
    try {
     let rslt =  await sqlio.run_qry(dbpth,sqlstr)
      res.send = rslt ;
      res.status(200);

    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to '
      })
    }
  },
  async shwPrtyOutstd (req,res) {
    try {

    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to '
      })
    }
  },
  async shwSmryAll(req,res) {
    try {

    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to '
      })
    }
  },
  async upd_outstd(req,res) {
    try {

    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to '
      })
    }
  },
}

