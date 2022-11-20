import { Router } from 'express'
import universal from './universal'
import embedded from './embedded'

const router = new Router()

router.use('/universal', universal)
router.use('/embedded', embedded)

export default router