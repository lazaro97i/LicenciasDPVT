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

  }
}

export default controller