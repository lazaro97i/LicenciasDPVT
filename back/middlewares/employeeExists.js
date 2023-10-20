import { Employee } from "../models/employee_model.js"
import defaultResponse from "../config/response.js"

const employeeExists = async (req, res, next) => {

  const { file } = req.params
  const { fileNumber } = req.body
  const { legajo } = req.body

  if (file) {
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
  if (fileNumber) {
    const employee = await Employee.findOne({ fileNumber: fileNumber })
    if (employee) {
      req.body.success = false
      req.body.sc = 400
      req.body.data = 'El legjao ingresado ya pertenece a un empleado'
      return defaultResponse(req, res)
    } else {
      next()
    }
  }
  if (legajo) {
    const employee = await Employee.findOne({ fileNumber: legajo })
    if (employee) {
      req.employee = employee
      next()
    } else {
      req.body.success = false
      req.body.sc = 400
      req.body.message = 'El legjao ingresado no pertenece a un empleado'
      return defaultResponse(req, res)
    }
  }

}

export default employeeExists