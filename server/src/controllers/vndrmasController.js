//vndrmasController.js
const {
  vndrmas,Sequelize
} = require('../models');

module.exports = {
  //   send the max number of allowed records
  async maxRecs (req,res,next){    // jshint ignore:line
    try{
      let mx = await vndrmas.findAll({
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
      let modelData = await vndrmas.findAll({
        offset:ofst,limit:lmt
      });
      res.send(modelData);
    } catch (err) {
      res.status(500).send({error: 'An Error has occuretd in fetching data from vndrmas all records'});
    }
  },
  async post(req, res, next) {             // jshint ignore:line
    try {
      var vndrmasd= req.body;
      console.log("vndrmas DB3 :",vndrmas);
      console.log("Add vndrmas Data ",vndrmasd);
      resp = await vndrmas.create(req.body);
      res.send(resp);
    } catch (err) {
      res.status(500).send({error: 'An Error has occured trying to create record in vndrmas'});
    }
  },
  async put (req, res, next) {                //   jshint   ignore: line
    try {
      var qid = req.params.id;
      recdata= req.body;
      await vndrmas.update(recdata , {
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
      await vndrmas.destroy(
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
