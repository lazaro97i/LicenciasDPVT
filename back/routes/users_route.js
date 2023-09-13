import express from 'express'
import controller from "../controllers/users_controller.js"
import accountExistsSignin from '../middlewares/account_signin.js'
import mustSignin from '../middlewares/mustSignin.js'
import passport from '../config/passport.js'

const router = express.Router()

const { signin, get_user, signinToken, signout, signup } = controller

// router.get('/', read)
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
  signup)
router.get('/profile',
  passport.authenticate('jwt', { session: false }),
  get_user
)

router.put('/signout',
  passport.authenticate('jwt', { session: false }),
  signout
)

export default router

