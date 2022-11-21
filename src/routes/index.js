import { Router } from 'express'
import universal from './universal'
import embedded from './embedded'
import api from './api'

const router = new Router()

router.use('/universal', universal)
router.use('/embedded', embedded)
router.use('/api', api)

export default router