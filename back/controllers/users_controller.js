import { User } from "../models/users_model.js"
import defaultResponse from '../config/response.js'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import 'dotenv/config.js'

const controller = {

  read: async (req, res) => {
    try {
      const users = await User.find()
      if (users) {
        req.body.success = true
        req.body.sc = 200
        req.body.data = users
        return defaultResponse(req, res)
      }
      req.body.success = false
      req.body.sc = 400
      req.body.data = "Users not found :("
    } catch (e) {
      console.log(e)
    }
  },

  signin: async (req, res) => {

    const { password } = req.body
    let { user } = req

    try {
      const verified = bcryptjs.compareSync(password, user.password)
      if (verified) {
        await User.findOneAndUpdate(
          { email: user.email },
          { status: true },
          { new: true }
        )
        let token = jwt.sign(
          { id: user.id },
          process.env.KEY_JWT,
          { expiresIn: 60 * 60 * 24 }
        )
        user = {
          email: user.email,
          photo: user.photo,
          role: user.role
        }
        req.body.success = true
        req.body.sc = 200
        req.body.data = { user, token }
        return defaultResponse(req, res)
      }
      req.body.success = false
      req.body.sc = 400
      req.body.data = "Invalid password"
      return defaultResponse(req, res)

    } catch (e) {
      console.log(e)
    }
  }
}

export default controller