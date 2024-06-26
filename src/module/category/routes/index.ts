import express from 'express'

import category from './category'
import { authAccessToken } from '../../auth/middleware/authAccessToken'

const router = express.Router()

router.use('/:version/category', authAccessToken, category)
export default router
