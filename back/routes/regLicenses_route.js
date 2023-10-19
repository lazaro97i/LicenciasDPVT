import express from 'express'
import controller from '../controllers/regLicences_controller.js'
import passport from 'passport'

const { create, read } = controller

const router = express.Router()

router.get('/', read)

router.post('/',
  passport.authenticate('jwt', { session: false }),
  create)

export default router