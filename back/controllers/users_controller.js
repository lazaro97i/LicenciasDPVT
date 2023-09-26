import { User } from "../models/users_model.js"
import { Employee } from '../models/employee_model.js'
import defaultResponse from '../config/response.js'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import 'dotenv/config.js'

const controller = {

  read: async (req, res) => {
    try {
      let users = await User.find({}, '-_id -password -__v -createdAt -updatedAt')
      if (users) {
        req.body.success = true
        req.body.sc = 200
        req.body.data = users
        return defaultResponse(req, res)
      } else {
        req.body.success = false
        req.body.sc = 400
        req.body.data = "Usuarios no encontrados"
        return defaultResponse(req, res)
      }
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
          { fileNumber: user.fileNumber },
          { isOnline: true },
          { new: true }
        )
        let token = jwt.sign(
          { id: user.id },
          process.env.KEY_JWT,
          { expiresIn: 60 * 60 * 3 }
        )
        user = {
          fileNumber: user.fileNumber,
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
      req.body.data = "Contraseña incorrecta"
      return defaultResponse(req, res)

    } catch (e) {
      console.log(e)
    }
  },

  signout: async (req, res) => {
    const { user } = req
    try {
      await User.findByIdAndUpdate(user.id,
        { isOnline: false },
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
      const employe = await Employee.findOne({ fileNumber: user.fileNumber })
      req.body.success = true
      req.body.sc = 200
      req.body.data = {
        fileNumber: user.fileNumber,
        photo: user.photo,
        role: user.role,
      }
      if (employe) {
        req.body.data.name = employe.name
      }
      defaultResponse(req, res)
    } catch (e) {
      console.log(e)
    }
  },

  signup: async (req, res) => {

    const data = {
      fileNumber: req.body.fileNumber,
      role: req.body.role,
      status: true
    }
    if (req.body.password) {
      data.password = bcryptjs.hashSync(req.body.password, 10)
    }
    if (!req.body.photo || req.body.photo === '') {
      data.photo = 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png'
    }

    try {
      const newUser = await User.create(data)
      if (newUser) {
        req.body.success = true
        req.body.sc = 201
        req.body.data = "Usuario creado con éxito!"
        return defaultResponse(req, res)
      } else {
        req.body.success = false
        req.body.sc = 400
        req.body.data = "Error al crear el usuario verifique los datos"
        return defaultResponse(req, res)
      }
    } catch (e) {
      console.log(e)
    }
  },

  get_user: async (req, res) => {

    const { file } = req.params
    const { employee } = req

    try {
      const user = await User.findOne({ fileNumber: file }, '-_id -__v -createdAt -updatedAt')
      req.body.success = true
      req.body.sc = 200
      req.body.data = { user, employee }
      return defaultResponse(req, res)
    } catch (e) {
      console.log(e)
    }
  },

  softDelete: async (req, res) => {

    const { file } = req.body

    try {
      await User.findOneAndUpdate(
        { fileNumber: file },
        { isDeleted: true },
        { new: true }
      )
      req.body.success = true
      req.body.sc = 200
      req.body.data = 'Usuario eliminado correctamente'
      return defaultResponse(req, res)
    } catch (e) {
      console.log(e)
    }
  },

  updateUser: async (req, res) => {

    let data = {
      fileNumber: req.body.fileNumber,
      status: req.body.status
    }
    if (req.body.role) {
      data.role = req.body.role
    }
    if (req.body.password) {
      data.password = bcryptjs.hashSync(req.body.password, 10)
    }

    console.log(data)

    try {
      const user = await User.findOneAndUpdate(
        { fileNumber: data.fileNumber },
        data,
        { new: true }
      )
      req.body.success = true
      req.body.sc = 200
      req.body.data = user
      return defaultResponse(req, res)
    } catch (e) {
      console.log(e)
    }
  }

}

export default controller