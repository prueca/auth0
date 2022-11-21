import { Router } from 'express'
import { expressjwt as jwt } from 'express-jwt'
import jwks from 'jwks-rsa'
import { AUTH_CONFIG, BASE_URL } from '../config'

const router = new Router()

const authorizeAccessToken = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${AUTH_CONFIG.issuerBaseURL}/.well-known/jwks.json`
  }),
  audience: `${BASE_URL}/api`,
  issuer: `${AUTH_CONFIG.issuerBaseURL}/`,
  algorithms: ['RS256']
})

router.get('/', (req, res) => {
  res.render('api')
})

router.post('/public', (req, res) => {
  res.json({ message: 'You ping the public endpoint' })
})

router.post('/private', authorizeAccessToken, (req, res) => {
  res.json({ message: 'You ping the private endpoint' })
})

export default router