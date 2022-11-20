import { Router } from 'express'

const routes = new Router()

routes.get('/', (req, res) => {
  res.render('demo', {
    isAuthenticated: req.oidc.isAuthenticated(),
    user: req.oidc.user,
  })
})

export default routes