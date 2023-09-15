import { License } from "../models/licenses_model.js"
import { Employee } from "../models/employee_model.js"
import defaultResponse from "../config/response.js"

const controller = {

  create: async (req, res) => {

    const { user } = req

    const { fileNumber, typeLicense, startDate, endDate, observation, name, apartDiv, position, keyDate, zone, camp, viaticB, added, uprooting, dedicationOp } = req.body

    const dataLicense = {
      fileNumber: fileNumber,
      typeLicense: typeLicense,
      startDate: startDate,
      endDate: endDate,
      observation: observation,
      userId: user.id
    }
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
      const findEmployee = await Employee.findOne({ fileNumber: fileNumber })
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
  },

  read: async (req, res) => {

    const { file } = req.params
    let { user } = req
    try {
      const licenses = await License.find({ fileNumber: file })

      user = {
        user: user.id
      }

      req.body.success = true
      req.body.sc = 200
      req.body.data = { licenses, user }
      defaultResponse(req, res)
    } catch (e) {
      console.log(e)
    }
  }
}

export default controller