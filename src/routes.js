import { Router } from 'express'

const routes = new Router()

routes.get('/', (_req, res) => {
  res.render('index', { name: 'Peter' })
})

export default routes