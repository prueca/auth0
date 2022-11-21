import { Router } from 'express'
import { requiresAuth } from 'express-openid-connect'
import { AUTH_CONFIG } from '../config'

const router = new Router()

// override default login for universal
// set AUTH_CONFIG.routes.login to false
// universal login's default returnTo is /
router.get('/login', (req, res) => res.oidc.login({ returnTo: '/universal/user' }))

// override default logout for universal
// set AUTH_CONFIG.auth0Logout to true
// universal login's default returnTo is /
router.get('/logout', (req, res) => res.oidc.logout({
  returnTo: '/universal',
  client_id: AUTH_CONFIG.clientID
}))

router.get('/', (req, res) => {
  res.render('universal', {
    isAuthenticated: req.oidc.isAuthenticated(),
    user: req.oidc.user,
  })
})

router.get('/user', requiresAuth(), (req, res) => {
  res.render('user', { user: req.oidc.user })
})

export default router