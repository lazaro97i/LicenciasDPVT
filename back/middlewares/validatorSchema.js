import defaultResponse from "../config/response.js"

const validatorSchema = (schema) => [
  (req, res, next) => {
    const data = schema.validate(req.body, { abortEarly: false })
    if (data.error) {
      // return res.status(400).json({
      //   success: false,
      //   message: data.error.details
      // })
      req.body.success = false
      req.body.sc = 400
      req.body.data = data.error.details
      return defaultResponse(req, res)
    }
    next()
  }
]

export default validatorSchema