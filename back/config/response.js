function defaultResponse(req, res) {

  return res.status(req.body.sc).json({
    success: req.body.success,
    message: req.body.message,
    method: req.method,
    path: req.url,
    response: req.body.data
  })
}

export default defaultResponse