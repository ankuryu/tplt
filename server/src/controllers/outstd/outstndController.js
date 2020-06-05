console.log(module.filename)
const sqlio = require('../../sqliteproc.js');
const db = {};
const dbpth = '@/../db/outstd.db3'

module.exports = {
  async shwAllOutstd (req,res) {
    var co = req.co
    var opr = req.opr
    var sqlstr = ""
    if(opr="r"){
      sqlstr = ""
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

