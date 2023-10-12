import { Employee } from '../models/employee_model.js'
import defaultResponse from '../config/response.js'


const controller = {

  get_employee: async (req, res) => {

    const { file } = req.params

    try {
      const employee = await Employee.findOne({ fileNumber: file })
      if (employee) {
        req.body.success = true
        req.body.sc = 200
        req.body.data = employee
        defaultResponse(req, res)
      } else {
        req.body.success = false
        req.body.sc = 400
        req.body.data = "No se encontro legajo"
        defaultResponse(req, res)
      }
    } catch (e) {
      console.log(e)
    }
  },

  newEmployee: async (req, res) => {

    const { user } = req
    const { fileNumber, name, apartDiv, position, keyDate, zone, camp, viaticB, added, uprooting, dedicationOp } = req.body

    const dataEmployee = {
      fileNumber: fileNumber,
      name: name,
      apartDiv: apartDiv,
      position: position,
      function: req.body.function,
      keyDate: keyDate,
      zone: zone,
      camp: camp,
      viaticB: viaticB,
      added: added,
      uprooting: uprooting,
      dedicationOp: dedicationOp,
      userId: user.id
    }

    try {
      const newEmploye = await Employee.create(dataEmployee)
      if (newEmploye) {
        req.body.success = true
        req.body.sc = 201
        req.body.data = newEmploye
        return defaultResponse(req, res)
      } else {
        req.body.success = false
        req.body.sc = 400
        req.body.data = 'Error al agregar nuevo empleado'
        return defaultResponse(req, res)
      }
    } catch (e) {
      console.log(e)
    }
  },

  read: async (req, res) => {

    try {
      const employees = await Employee.find()
      req.body.success = true
      req.body.sc = 200
      req.body.data = employees
      return defaultResponse(req, res)
    } catch (e) {
      console.log(e)
    }
  }
}

export default controller