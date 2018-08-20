const {
  model1
} = require('../models');

module.exports = {

  async index(req, res, next) {
    try {
      let modelData = await model1.findAll({
        attributes:[];
      })
      res.send(modelData)
    } catch (err) {
      res.status(500).send({error: 'An Error has occuretd in fetching data from model1'})
    }
  },
  async show (req, res, next) {
    try {
      var qid = req.params.id
      //  console.log(qid);
      let response = await model1.findOne({
        where: {
          'id': qid
        }
      })
      //		console.log(response);
      res.send(response)
      //		res.send({pname:"jango",paddr:" xyz lane"});
      res.end('OK')
    } catch (err) {
      res.status(500).send({error: 'An Error has occuretd in fetching data from model1'})
    }
  },
  async post (req, res, next) {
    try {
    //	console.log('add route');
    //	console.log(quote);
    //  var qt2 = {qno:"00005",qdt:"2018-11-01",pname:"Maruti",paddr:"jango",enqno:"01",enqdt:"2018-11-01",qamt:0}
      var model1data = req.body
      resp = await model1.create(req.body)
      res.send(resp)
    } catch (err) {
      res.status(500).send({error: 'An Error has occured trying to create record model1'})
    }
  },
  async put (req, res, next) {
    try {
      var qid = req.params.id;
      /*	console.log(req.params);
      console.log(qid);
    	console.log(req.body);
    	*/
      quote = req.body
      await model1.update(req.body, {
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
      await model1.destroy({
        where: {
          'id': qid
        }
      })
      res.end('OK')
    } catch (err) {

    }
  }
}
