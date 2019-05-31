const invsizeController = require('./controllers/invsizeController.js');
const invnameController = require('./controllers/invnameController.js');
const ldrpriController = require('./controllers/ldrpriController.js');
const stkController = require('./controllers/stkController.js');
const vndrmasController = require('./controllers/vndrmasController.js');
const cheq19Controller = require('./contorllers/cheq19Controller.js');

module.exports = (app) => {

  // routes regarding asize 

  app.get('/api/pri/asize',
    invsizeController.index);
  app.get('/api/pri/asize/:asize',
    invsizeController.showasize);
  app.get('/api/pri/msize/:msize',
    invsizeController.showmsize);
  app.put('/api/pri/asize/:id',
    invsizeController.put);
  app.post('/api/pri/asize',
    invsizeController.post);
  app.delete('/api/pri/asize/:id',
    invsizeController.remove);

  // routes regarding invname

  app.get('/api/pri/invname',
    invnameController.index);
  app.get('/api/pri/invname/icode/:icode',
    invnameController.showicode);
  app.get('/api/pri/invname/lcode/:lcode',
    invnameController.showlcode);
  app.put('/api/pri/invname/:id',
    invnameController.put);
  app.post('/api/pri/invname',
    invnameController.post);
  app.delete('/api/pri/invname/:id',
    invnameController.remove);

  // routes regarding ldrpri

  app.get('/api/pri/ldrpri',
    ldrpriController.index);
  app.get('/api/pri/ldrpri/icode/:icode',
    ldrpriController.showicode);
  app.get('/api/pri/ldrpri/lcode/:lcode',
    ldrpriController.showlcode);
  app.put('/api/pri/ldrpri/:id',
    ldrpriController.put);
  app.post('/api/pri/ldrpri',
    ldrpriController.post);
  app.delete('/api/pri/ldrpri/:id',
    ldrpriController.remove);

  // routes regarding stk

  app.get('/api/stk/:ofst/:lmt', stkController.index);
  app.get('/api/stk/mxrcs', stkController.maxRecs);
  app.get('/api/stk/:mfg/:icode/:asize', stkController.showmcs);
  app.get('/api/stk/:pg', stkController.showpg);
  app.post('/api/stk', stkController.post);
  app.put('/api/stk/:id', stkController.put);
  app.delete('/api/stk/:id', stkController.remove);

 // routes regarding vndrmas

  app.get('/api/vndrmas',vndrmasController.index);
  app.post('/api/vndrmas',vndrmasController.post);
  app.put('/api/vndrmas/:id',vndrmasController.put);
  app.delete('/api/vndrmas/:id',vndrmasController.remove);

 // routes regarding cheq19

  app.get('/api/cheq19',cheq19Controller.index);
  app.post('/api/cheq19',cheq19Controller.post);
  app.put('/api/cheq19/:id',cheq19Controller.put);
  app.delete('/api/cheq19/:id',cheq19Controller.remove);
};

/* const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BookmarksController')
const HistoriesController = require('./controllers/HistoriesController')

const isAuthenticated = require('./policies/isAuthenticated')
*/

/*
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/login',
    AuthenticationController.login)
*/

