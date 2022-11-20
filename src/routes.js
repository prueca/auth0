import { Router } from 'express'
import { requiresAuth } from 'express-openid-connect'

const routes = new Router()

routes.get('/login', (req, res) => res.oidc.login({ returnTo: '/user' }))

routes.get('/universal', (req, res) => {
  res.render('universal', {
    isAuthenticated: req.oidc.isAuthenticated(),
    user: req.oidc.user,
  })
})

routes.get('/user', requiresAuth(), (req, res) => {
  res.render('user', { user: req.oidc.user })
})

routes.get('/embedded', (req, res) => {
  res.render('embedded')
})

export default routes