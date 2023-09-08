import express from 'express'
import controller from "../controllers/users_controller.js"
import accountExistsSignin from '../middlewares/account_signin.js'

const router = express.Router()

const { signin, read } = controller

router.post('/', accountExistsSignin, signin)
router.get('/', read)

export default router

