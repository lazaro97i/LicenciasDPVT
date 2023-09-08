import { User } from "../models/users_model.js"
import defaultResponse from '../config/response.js'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import 'dotenv/config.js'

const controller = {

  read: async (req, res, next) => {
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
      next(e)
    }
  },

  signin: async (req, res, next) => {

    const { password } = req.body
    const { dni } = req.body
    // let { user } = req.body

    try {
      let user = await User.findOne({ dni: dni })
      if (user) {
        const verified = bcryptjs.compareSync(password, user.password)
        if (verified) {
          await User.findOneAndUpdate(
            { dni: user.dni },
            { is_online: true },
            { new: true }
          )
          let token = jwt.sign(
            { id: user._id },
            process.env.KEY_JWT,
            { expiresIn: 60 * 60 * 24 }
          )
          user = {
            dni: user.dni,
            email: user.email,
            name: user.name
          }
          req.body.success = true
          req.body.sc = 200
          req.body.data = { user, token }
          return defaultResponse(req, res)
        }
      }
      req.body.success = false
      req.body.sc = 400
      req.body.data = "Invalid credentials"
      return defaultResponse(req, res)

    } catch (e) {
      console.log(e)
      next(e)
    }
  }
}

export default controller