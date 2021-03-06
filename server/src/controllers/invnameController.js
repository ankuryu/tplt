// invnameControler.js
const {
  invname
} = require('../models');

module.exports = {
  async index(req, res, next) {
    try {
      let modelData = await invname.findAll({
        attributes:['id','lcode','icode','desc','ddesc']
      })
      res.send(modelData)
    } catch (err) {
      res.status(500).send({error: 'An Error has occuretd in fetching data from invname'})
    }
  },
  async showicode(req, res, next) {
    try {
      let icode = req.params.icode
      let response = await invname.findOne({
        where: {
          'icode': icode 
        }
      })
      res.send(response)
      res.end('OK')
    } catch (err) {
      res.status(500).send({error: 'An Error has occuretd in fetching data from invname icode'})
    }
  },
  async showlcode(req, res, next) {
    try {
      let lcode = req.params.lcode
      //  console.log(qid);
      let response = await invname.findOne({
        where: {
          'lcode': lcode
        }
      })
      res.send(response)
      res.end('OK')
    } catch (err) {
      res.status(500).send({error: 'An Error has occuretd in fetching data from invname lcode'})
    }
  },

  async post(req, res, next) {
    try {
      var invnamedata = req.body
	    console.log(invname);
      resp = await invname.create(req.body)
      res.send(resp)
    } catch (err) {
      res.status(500).send({error: 'An Error has occured trying to create record invname'})
    }
  },
  async put(req, res, next) {
    try {
      var qid = req.params.id;
      quote = req.body
      await invname.update(req.body, {
        where: {
          'id': qid
        }
      })
      res.send(req.boday)
    } catch (err) {

    }
  },
  async remove(req, res, next) {
    try {
      let qid = req.params.id
      // console.log(qid);
      await invname.destroy({
        where: {
          'id': qid
        }
      })
      res.end('OK')
    } catch (err) {

    }
  }
}
