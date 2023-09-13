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
  },

  signout: async (req, res) => {
    const { user } = req
    try {
      await User.findByIdAndUpdate(user.id,
        { status: false },
        { new: true }
      )
      req.body.success = true
      req.body.sc = 200
      req.body.data = 'Sesion cerrada correctamente'
      defaultResponse(req, res)
    } catch (e) {
      console.log(e)
    }
  },

  signinToken: async (req, res) => {
    const { user } = req
    let { token } = req.body
    try {
      token = jwt.verify(token, process.env.KEY_JWT)
      req.body.success = true
      req.body.sc = 200
      req.body.data = {
        email: user.email,
        photo: user.photo,
        role: user.role
      }
      defaultResponse(req, res)
    } catch (e) {
      console.log(e)
    }
  },

  signup: async (req, res) => {

    const data = {
      fileNumber: req.body.fileNumber,
      password: bcryptjs.hashSync(req.body.password, 10),
      photo: req.body.photo,
      role: req.body.role,
      status: false
    }

    try {
      await User.create(data)
      req.body.success = true
      req.body.sc = 201
      req.body.data = "Usuario creado con éxito!"
      return defaultResponse(req, res)
    } catch (e) {
      console.log(e)
    }
  },

  get_user: async (req, res) => {

    const { user } = req

    try {
      const userData = await User.findById(user.id, '-password -__v -status -createdAt -updatedAt')
      req.body.success = true
      req.body.sc = 200
      req.body.data = userData
      return defaultResponse(req, res)
    } catch (e) {
      console.log(e)
    }
  }

}

export default controller