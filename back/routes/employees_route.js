import express from 'express'
import passport from '../config/passport.js'
import controller from '../controllers/employee_controller.js'

const router = express.Router()

const { get_employee } = controller

router.get('/:file',
  passport.authenticate('jwt', { session: false }),
  get_employee
)

export default router