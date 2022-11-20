import { Router } from 'express'

const router = new Router()

router.get('/', (req, res) => {
  res.render('embedded', {
    signup: req.query.signup === '1'
  })
})

router.get('/signup', (req, res) => {
  res.render('signup')
})

router.get('/user', (req, res) => {

})

export default router