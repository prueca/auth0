import { Router } from 'express'

const router = new Router()

router.get('/', (req, res) => {
  res.render('universal', {
    isAuthenticated: req.oidc.isAuthenticated(),
    user: req.oidc.user,
  })
})

export default router