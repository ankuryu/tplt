//ldrpriController.js
const {
  ldrpri
} = require('../models');

module.exports = {
  async index(req, res, next) {
    try {
      let modelData = await ldrpri.findAll({
        attributes:['id','mrp']
      })
      res.send(modelData)
    } catch (err) {
      res.status(500).send({error: 'An Error has occuretd in fetching data from ldrrpri'})
    }
  },
  async showicode(req, res, next) {
    try {
      let icode = req.params.icode
      let response = await ldrpri.findOne({
        where: {
          'icode': icode 
        }
      })
      res.send(response)
      res.end('OK')
    } catch (err) {
      res.status(500).send({error: 'An Error has occuretd in fetching data from ldrrpri icode'})
    }
  },
  async showlcode(req, res, next) {
    try {
      let lcode = req.params.lcode
      //  console.log(qid);
      let response = await ldrpri.findOne({
        where: {
          'lcode': lcode
        }
      })
      res.send(response)
      res.end('OK')
    } catch (err) {
      res.status(500).send({error: 'An Error has occuretd in fetching data from ldrrpri lcode'})
    }
  },
  async post(req, res, next) {
    try {
      var ldrpridata= req.body
	    console.log(ldrpridata);
      resp = await ldrpri.create(req.body)
      res.send(resp)
    } catch (err) {
      res.status(500).send({error: 'An Error has occured trying to create record ldrrpri'})
    }
  },
  async put (req, res, next) {
    try {
      var qid = req.params.id;
      quote = req.body
      await ldrpri.update(req.body, {
        where: {
          'id': qid
        }
      })
      res.send(req.boday)
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
