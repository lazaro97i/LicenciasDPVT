import { User } from "../models/users_model.js"
import defaultResponse from "../config/response.js"

const userExists = async (req, res, next) => {

  const { fileNumber } = req.body

  const user = await User.findOne({ fileNumber: fileNumber })

  if (user) {
    req.body.success = false
    req.body.sc = 400
    req.body.data = ['El legajo ingresado ya pertenece a un usuario activo']
    return defaultResponse(req, res)
  } else {
    next()
  }
}

export default userExists