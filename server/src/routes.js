const invsizeController = require('./controllers/invsizeController.js');

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


  app.get('/api/pri/asize',
    invnameController.index);
  app.get('/api/pri/asize/:asize',
    invnameController.showasize);
  app.get('/api/pri/msize/:msize',
    invnameController.showmsize);
  app.put('/api/pri/asize/:id',
    invnameController.put);
  app.post('/api/pri/asize',
    invnameController.post);
  app.delete('/api/pri/asize/:id',
    invnameController.remove);


  app.get('/api/pri/asize',
    ldrpriController.index);
  app.get('/api/pri/asize/:asize',
    ldrpriController.showasize);
  app.get('/api/pri/msize/:msize',
    ldrpriController.showmsize);
  app.put('/api/pri/asize/:id',
    ldrpriController.put);
  app.post('/api/ldrpri
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
