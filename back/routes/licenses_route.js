import express from 'express'
import controller from '../controllers/licenses_controller.js'
import passport from '../config/passport.js'

const router = express.Router()

const { create } = controller

router.post('/', passport.authenticate('jwt', { session: false }), create)

export default router