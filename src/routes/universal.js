import { Router } from 'express'
import { requiresAuth } from 'express-openid-connect'

const router = new Router()

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