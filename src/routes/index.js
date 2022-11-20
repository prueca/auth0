import { Router } from 'express'
import { requiresAuth } from 'express-openid-connect'
import universal from './universal'
import embedded from './embedded'

const router = new Router()

// redirect to /user after universal login
// AUTH_CONFIG.routes.login must be false
// universal login's default callback URL is /
router.get('/login', (req, res) => res.oidc.login({ returnTo: '/user' }))

// display logged in user
router.get('/user', requiresAuth(), (req, res) => {
  res.render('user', { user: req.oidc.user })
})

router.get('/universal', universal)
router.use('/embedded', embedded)

export default router