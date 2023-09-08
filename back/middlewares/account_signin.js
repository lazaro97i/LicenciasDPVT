import { User } from "../models/users_model.js"
import defaultResponse from "../config/response.js"

const accountExistsSignin = async (req, res, next) => {

  const { dni } = req.body
  const user = await User.findOne({ dni: dni })

  if (user) {
    req.user = {
      id: user._id,
      dni: user.dni,
      email: user.email,
      name: user.name,
      password: user.password
    }
    return next()
  }
  req.body.success = false
  req.body.sc = 400
  req.body.data = 'User not found :('
  return defaultResponse(req, res)
}

export default accountExistsSignin