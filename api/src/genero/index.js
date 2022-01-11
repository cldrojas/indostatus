const generosRouter = require('./generos.router')

function routerApi(app) {
  app.use('/api/genero', generosRouter)
}

module.exports = routerApi
