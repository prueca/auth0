import { Router } from 'express'

const router = new Router()

router.get('/', (req, res) => {
  res.render('embedded')
})

router.get('/signup', (req, res) => {
  res.render('embedded')
})

export default router