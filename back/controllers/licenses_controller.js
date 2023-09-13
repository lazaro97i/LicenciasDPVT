import { License } from "../models/licenses_model.js"
import { Employee } from "../models/employee_model.js"
import defaultResponse from "../config/response.js"

const controller = {

  create: async (req, res) => {

    const { user } = req

    const dataLicense = {
      file: req.body.file,
      typeLicense: req.body.typeLicense,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      observation: req.body.observation,
      userData: user.id
    }

    const dataEmployee = {
      name: req.body.name,
      apartDiv: req.body.apartDiv,
      position: req.body.position,
      function: req.body.function,
      keyDate: req.body.keyDate,
      zone: req.body.zone,
      camp: req.body.camp,
      viaticB: req.body.viaticB,
      added: req.body.added,
      uprooting: req.body.uprooting,
      dedicationOp: req.body.dedicationOp,
      userData: user.id
    }

    try {
      const license = await License.create(dataLicense)
      const employee = await Employee.create(dataEmployee)
      req.body.success = true
      req.body.sc = 201
      req.body.data = { license, employee }
      defaultResponse(req, res)
    } catch (e) {
      console.log(e)
    }
  }
}

export default controller