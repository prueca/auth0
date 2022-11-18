import { Router } from 'express'

const routes = new Router()

routes.get('/', (_req, res) => {
  res.render('login', { status: 'success' })
})

export default routes