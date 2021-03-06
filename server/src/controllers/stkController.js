//ldrpriController.js
const {
 stock,Sequelize
} = require('../models');

module.exports = {
  async maxRecs (req,res,next){
    try{
      let mx = await stock.findAll({
        attributes:[[ Sequelize.fn('sum',1),'max']]
      })
        res.send(mx[0]);
        console.log(mx[0]);
        res.end('200')
    }
    catch(err) {
      console.log("Error in maxRecs ",err )
    }
  },
  async index (req, res, next) {
    let ofst = req.params.ofst ;
    let lmt = req.params.lmt;
    try {
      let modelData = await stock.findAll({
     offset:ofst,limit:lmt
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
      let response = await stock.findAll({
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
      let response = await stock.findAll({
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
      console.log("Stock DB3 :",stock)
	    console.log("Add Stock Data ",stkdata);
      resp = await stock.create(req.body)
      res.send(resp)
    } catch (err) {
      res.status(500).send({error: 'An Error has occured trying to create record in stk'})
    }
  },
  async put (req, res, next) {
    try {
      var qid = req.params.id;
      stkdata= req.body
      await stock.update(req.body, {
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
