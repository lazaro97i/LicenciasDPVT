import { Employee } from "../models/employee_model.js"
import defaultResponse from "../config/response.js"

const employeeExists = async (req, res, next) => {

  const { file } = req.params

  const employee = await Employee.findOne({ fileNumber: file })
  if (employee) {
    req.employee = employee
    next()
  } else {
    req.body.success = false
    req.body.sc = 400
    req.body.data = 'Legajo de empleado inexistente'
    return defaultResponse(req, res)
  }
}

export default employeeExists