import { Router } from 'express'

const routes = new Router()

routes.get('/', (req, res) => {
  const message = req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out'
  res.render('sign-in', { message })
})

routes.get('/profile', (req, res) => {
  res.render('profile', { user: req.oidc.user });
})

export default routes