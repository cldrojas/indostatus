const generosRouter = require('./generos/generos.router')
//const rolesRouter = require('./roles/roles.router')

function routerApi(app) {
  const router = require('express').Router()
  app.use('/api/v1', router) //ruta base

  router.use('/generos', generosRouter)
  router.use('/usuarios', generosRouter)
  router.use('/roles', generosRouter)
}

module.exports = routerApi
