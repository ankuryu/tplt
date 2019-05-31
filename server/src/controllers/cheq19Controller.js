//cheq19Controller.js
const {
  cheq19,Sequelize
} = require('../models');

module.exports = {
  //   send the max number of allowed records
  async maxRecs (req,res,next){    // jshint ignore:line
    try{
      let mx = await cheq19.findAll({
        attributes:[[ Sequelize.fn('sum',1),'max']]
      });
      res.send(mx[0]);
      console.log(mx[0]);
      res.end('200');
    }
    catch(err) {
      console.log("Error in maxRecs ",err );
    }
  },
  //  send the maximumber number of records from the table  starting at offset given
  async index (req, res, next) {   // jshint ignore:line
    let ofst = req.params.ofst ;
    let lmt = req.params.lmt;
    try {
      let modelData = await cheq19.findAll({
        offset:ofst,limit:lmt
      });
      res.send(modelData);
    } catch (err) {
      res.status(500).send({error: 'An Error has occuretd in fetching data from cheq19 all records'});
    }
  },
  async post(req, res, next) {             // jshint ignore:line
    try {
      var cheq19d= req.body;
      console.log("cheq19 DB3 :",cheq19);
      console.log("Add cheq19 Data ",cheq19d);
      resp = await cheq19.create(req.body);
      res.send(resp);
    } catch (err) {
      res.status(500).send({error: 'An Error has occured trying to create record in cheq19'});
    }
  },
  async put (req, res, next) {                //   jshint   ignore: line
    try {
      var qid = req.params.id;
      recdata= req.body;
      await cheq19.update(recdata , {
        where: {
          'id': qid
        }
      });
      res.send(req.body);
    } catch (err) {

    }
  },
  async remove (req, res, next) {            // jshint  ignore: line
    try {
      let qid = req.params.id;
      // console.log(qid);
      await cheq19.destroy(
        {
          where: {
            'id': qid
          }
        }
      );
      res.end('OK');
    } catch(err) {

    }
  }
};
