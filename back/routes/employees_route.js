import express from 'express'
import passport from '../config/passport.js'
import controller from '../controllers/employee_controller.js'
import employeeExists from '../middlewares/employeeExists.js'

const router = express.Router()

const { get_employee, newEmployee } = controller

router.get('/:file',
  passport.authenticate('jwt', { session: false }),
  get_employee
)

//post
router.post('/',
  passport.authenticate('jwt', { session: false }),
  employeeExists,
  newEmployee
)

export default router