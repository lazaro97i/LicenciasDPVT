import { License } from "../models/licenses_model.js"
import { Employee } from "../models/employee_model.js"
import defaultResponse from "../config/response.js"

const controller = {

  create: async (req, res) => {

    const { user } = req

    const dataLicense = {
      fileNumber: req.body.fileNumber,
      typeLicense: req.body.typeLicense,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      observation: req.body.observation,
      userId: user.id
    }
    const dataEmployee = {
      fileNumber: req.body.fileNumber,
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
      userId: user.id
    }

    try {
      const findEmployee = await Employee.findOne({ fileNumber: req.body.fileNumber })
      if (!findEmployee) {
        const employee = await Employee.create(dataEmployee)
        const license = await License.create(dataLicense)
        req.body.success = true
        req.body.sc = 201
        req.body.data = { license, employee }
        defaultResponse(req, res)
      } else {
        const license = await License.create(dataLicense)
        req.body.success = true
        req.body.sc = 201
        req.body.data = license
        defaultResponse(req, res)
      }
    } catch (e) {
      console.log(e)
    }
  }
}

export default controller