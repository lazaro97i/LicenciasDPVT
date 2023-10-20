import express from 'express'
import controller from '../controllers/regLicences_controller.js'
import passport from 'passport'
import employeeExists from '../middlewares/employeeExists.js'

const { create, read, readOne } = controller

const router = express.Router()

router.get('/:file',
  passport.authenticate('jwt', { session: false }),
  employeeExists,
  readOne
)

router.get('/', read)

router.post('/',
  passport.authenticate('jwt', { session: false }),
  employeeExists,
  create)

export default router