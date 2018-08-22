//ldrpriController.js
const {
  ldrpri
} = require('../models');

module.exports = {
  async index(req, res, next) {
    try {
      let modelData = await ldrrpri.findAll({
        attributes:['id','lsize','asize','msize']
      })
      res.send(modelData)
    } catch (err) {
      res.status(500).send({error: 'An Error has occuretd in fetching data from ldrrpri'})
    }
  },
  async showasize (req, res, next) {
    try {
      var asize = req.params.asize
      let response = await ldrrpri.findOne({
        where: {
          'asize': asize 
        }
      })
      res.send(response)
      res.end('OK')
    } catch (err) {
      res.status(500).send({error: 'An Error has occuretd in fetching data from ldrrpri asize'})
    }
  },
  async showmsize (req, res, next) {
    try {
      var msize= req.params.msize
      //  console.log(qid);
      let response = await ldrrpri.findOne({
        where: {
          'mmsize': msize 
        }
      })
      res.send(response)
      res.end('OK')
    } catch (err) {
      res.status(500).send({error: 'An Error has occuretd in fetching data from ldrrpri mmsize'})
    }
  },

  async post (req, res, next) {
    try {
      var ldrrpridata = req.body
	    console.log(ldrrpri);
      resp = await ldrrpri.create(req.body)
      res.send(resp)
    } catch (err) {
      res.status(500).send({error: 'An Error has occured trying to create record ldrrpri'})
    }
  },
  async put (req, res, next) {
    try {
      var qid = req.params.id;
      quote = req.body
      await ldrrpri.update(req.body, {
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
      await ldrrpri.destroy({
        where: {
          'id': qid
        }
      })
      res.end('OK')
    } catch (err) {

    }
  }
}
