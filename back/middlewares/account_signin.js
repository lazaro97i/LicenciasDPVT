import { User } from "../models/users_model.js"
import defaultResponse from "../config/response.js"

const accountExistsSignin = async (req, res, next) => {

  const { email } = req.body
  const user = await User.findOne({ email: email })

  if (user) {
    req.user = {
      id: user._id,
      email: user.email,
      password: user.password,
      photo: user.photo,
      role: user.role
    }
    return next()
  }
  req.body.success = false
  req.body.sc = 400
  req.body.data = 'User not found :('
  return defaultResponse(req, res)
}

export default accountExistsSignin