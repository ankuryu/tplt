/* const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BookmarksController')
const HistoriesController = require('./controllers/HistoriesController')

const isAuthenticated = require('./policies/isAuthenticated')
*/
const model1Controler = require('./controllers/model1Controller.js')

module.exports = (app) => {
  /*
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/login',
    AuthenticationController.login)
*/
  app.get('/api/pri/asize',
    model1Controler.index)
  app.get('/api/pri/asize/:asize',
    model1Controler.index)
  app.get('/api/pri/asize/:msize',
    model1Controler.index)
 
  app.get('/model1/:qno',
    model1Controler.show)
  app.put('/model1/:qno',
    model1Controler.put)
  app.post('/model1',
    model1Controler.post)
  app.delete('/model1/:qno',
    model1Controler.remove)

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
}
