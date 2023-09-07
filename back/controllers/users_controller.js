import { User } from "../models/users_model.js"
import defaultResponse from '../config/response.js'
import bcryptjs from 'bcryptjs'

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
            { new: true }
          )
          user = {
            dni: user.dni,
            email: user.email,
            id: user._id
          }
          req.body.success = true
          req.body.sc = 200
          req.body.data = user
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