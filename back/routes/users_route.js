import express from 'express'
import controller from "../controllers/users_controller.js"
import accountExistsSignin from '../middlewares/account_signin.js'
import mustSignin from '../middlewares/mustSignin.js'
import passport from '../config/passport.js'
import userExists from '../middlewares/userExists.js'
import validatoSchema from '../middlewares/validatorSchema.js'
import schema from '../schemas/user_schema.js'
import isAdmin from '../middlewares/isAdmin.js'
import employeeExists from '../middlewares/employeeExists.js'

const router = express.Router()

const { signin, get_user, signinToken, signout, signup, read } = controller

//get
router.get('/profile/:file',
  passport.authenticate('jwt', { session: false }),
  employeeExists,
  get_user
)
router.get('/',
  passport.authenticate('jwt', { session: false }),
  isAdmin,
  read
)

//post
router.post('/signin',
  accountExistsSignin,
  signin
)
router.post('/token',
  passport.authenticate('jwt', { session: false }),
  mustSignin,
  signinToken
)
router.post('/signup',
  passport.authenticate('jwt', { session: false }),
  validatoSchema(schema),
  userExists,
  isAdmin,
  signup)
router.put('/signout',
  passport.authenticate('jwt', { session: false }),
  signout
)

export default router

