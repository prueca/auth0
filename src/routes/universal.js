import { Router } from 'express'
import { requiresAuth } from 'express-openid-connect'

const router = new Router()

// redirect to /user after universal login
// AUTH_CONFIG.routes.login must be false
// universal login's default callback URL is /
router.get('/login', (req, res) => res.oidc.login({ returnTo: '/universal/user' }))

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