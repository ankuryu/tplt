const {
  invsize
} = require('../models');

module.exports = {
  async index(req, res, next) {
    try {
      let modelData = await invsize.findAll({
        attributes:['asize']
      })
      res.send(modelData)
    } catch (err) {
      res.status(500).send({error: 'An Error has occuretd in fetching data from invsize'})
    }
  },
  async showasize (req, res, next) {
    try {
      var asize = req.params.asize
      let response = await invsize.findOne({
        where: {
          'asize': asize 
        }
      })
      res.send(response)
      res.end('OK')
    } catch (err) {
      res.status(500).send({error: 'An Error has occuretd in fetching data from invsize asize'})
    }
  },
  async showmsize (req, res, next) {
    try {
      var msize= req.params.msize
      //  console.log(qid);
      let response = await invsize.findOne({
        where: {
          'mmsize': msize 
        }
      })
      res.send(response)
      res.end('OK')
    } catch (err) {
      res.status(500).send({error: 'An Error has occuretd in fetching data from invsize mmsize'})
    }
  },

  async post (req, res, next) {
    try {
      var invsizedata = req.body
      resp = await invsize.create(req.body)
      res.send(resp)
    } catch (err) {
      res.status(500).send({error: 'An Error has occured trying to create record invsize'})
    }
  },
  async put (req, res, next) {
    try {
      var qid = req.params.id;
      quote = req.body
      await invsize.update(req.body, {
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
      await invsize.destroy({
        where: {
          'id': qid
        }
      })
      res.end('OK')
    } catch (err) {

    }
  }
}
