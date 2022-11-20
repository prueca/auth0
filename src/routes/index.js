import { Router } from 'express'
import universal from './universal'
import embedded from './embedded'

const router = new Router()

// redirect to /user after universal login
// AUTH_CONFIG.routes.login must be false
// universal login's default callback URL is /
router.get('/login', (req, res) => res.oidc.login({ returnTo: '/universal/user' }))

router.use('/universal', universal)
router.use('/embedded', embedded)

export default router