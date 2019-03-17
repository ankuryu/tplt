//ldrpriController.js
const {
 stk 
} = require('../models');

module.exports = {
  async index (req, res, next) {
    try {
      let modelData = await stk.findAll({
     offset:0,limit:10 
      })
      res.send(modelData)
    } catch (err) {
      res.status(500).send({error: 'An Error has occuretd in fetching data from stk all records'})
    }
  },
  async showmcs(req, res, next) {
    try {
      let mfg = req.params.mfg
      let icode = req.params.icode
      let asize = req.params.asize
      let response = await stk.findAll({
        where: {
          'mfg': mfg,
          'icode': icode ,
          'asize': asize 
        }
      })
      res.send(response)
      res.end('OK')
    } catch (err) {
      res.status(500).send({error: 'An Error has occuretd in fetching data from stk with mfg icode and asize'})
    }
  },
  async showpg(req, res, next) {
    try {
      let pg = req.params.pg
      //  console.log(qid);
      let response = await stk.findAll({
        where: {
          'pg': pg
        }
      })
      res.send(response)
      res.end('OK')
    } catch (err) {
      res.status(500).send({error: 'An Error has occured in fetching data from stk for pg'})
    }
  },
  async post(req, res, next) {
    try {
      var stkdata= req.body
	    console.log(stkdata);
      resp = await stk.create(req.body)
      res.send(resp)
    } catch (err) {
      res.status(500).send({error: 'An Error has occured trying to create record in stk'})
    }
  },
  async put (req, res, next) {
    try {
      var qid = req.params.id;
      stkdata= req.body
      await stk.update(req.body, {
        where: {
          'id': qid
        }
      })
      res.send(req.body)
    } catch (err) {

    }
  },
  async remove (req, res, next) {
    try {
      let qid = req.params.id
      // console.log(qid);
      await ldrpri.destroy({
        where: {
          'id': qid
        }
      })
      res.end('OK')
    } catch (err) {

    }
  }
}
