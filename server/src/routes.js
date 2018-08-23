const invsizeController = require('./controllers/invsizeController.js');
const invnameController = require('./controllers/invnameController.js');
const ldrpriController = require('./controllers/ldrpriController.js');

module.exports = (app) => {
  app.get('/api/pri/size',
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


  app.get('/api/pri/ldrpri',
    ldrpriController.index);
  appget('/api/pri/ldrpri/icode/:icode',
    ldrpriController.showicode);
  app.get('/api/pri/ldrpri/lcode/:lcode',
    ldrpriController.showlcode);
  app.put('/api/pri/ldrpri/:id',
    ldrpriController.put);
  app.post('/api/ldrpri',
    ldrpriController.post);
  app.delete('/api/ldrpri/:id',
    ldrpriController.remove);

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

  /*
  app.get('/bookmarks',
    isAuthenticated,
    BookmarksController.index)
  app.post('/bookmarks',
    isAuthenticated,
    BookmarksController.post)
  app.delete('/bookmarks/:bookmarkId',
    isAuthenticated,
    BookmarksController.remove)

  app.get('/histories',
    isAuthenticated,
    HistoriesController.index)
  app.post('/histories',
    isAuthenticated,
    HistoriesController.post)
	*/
