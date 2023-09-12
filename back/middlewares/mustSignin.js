import defaultResponse from "../config/response.js"

const mustSignin = (req, res, next) => {
  if (req.user) {
    return next()
  }
  req.body.success = false
  req.body.sc = 400
  req.body.data = 'Debe iniciar sesion'
  return (defaultResponse(req, res))
}

export default mustSignin