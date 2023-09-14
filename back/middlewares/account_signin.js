import { User } from "../models/users_model.js"
import defaultResponse from "../config/response.js"

const accountExistsSignin = async (req, res, next) => {

  const { fileNumber } = req.body
  const user = await User.findOne({ fileNumber: fileNumber })

  if (user) {
    req.user = {
      id: user._id,
      fileNumber: user.fileNumber,
      password: user.password,
      photo: user.photo,
      role: user.role
    }
    return next()
  }
  req.body.success = false
  req.body.sc = 400
  req.body.data = 'Usuario incorrecto'
  return defaultResponse(req, res)
}

export default accountExistsSignin