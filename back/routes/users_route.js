import controller from "../controllers/users_controller.js"
import express from 'express'

const router = express.Router()

const { signin, read } = controller

router.post('/', signin)
router.get('/', read)

export default router

