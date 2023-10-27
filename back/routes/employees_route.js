import express from 'express'
import passport from '../config/passport.js'
import controller from '../controllers/employee_controller.js'
import employeeExists from '../middlewares/employeeExists.js'
import validatorSchema from '../middlewares/validatorSchema.js'
import schema from '../schemas/employee_schema.js'

const router = express.Router()

const { get_employee, newEmployee, read } = controller

//get
router.get('/',
  passport.authenticate('jwt', { session: false }),
  read
)

router.get('/:file',
  passport.authenticate('jwt', { session: false }),
  get_employee
)

//post
router.post('/',
  passport.authenticate('jwt', { session: false }),
  // validatorSchema(schema),
  employeeExists,
  newEmployee
)

export default router