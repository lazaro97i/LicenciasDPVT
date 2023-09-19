import { License } from "../models/licenses_model.js"
import { Employee } from "../models/employee_model.js"
import defaultResponse from "../config/response.js"

const controller = {

  create: async (req, res) => {

    const { user } = req

    const { fileNumber, typeLicense, startDate, endDate, observation, name, apartDiv, position, keyDate, zone, camp, viaticB, added, uprooting, dedicationOp } = req.body

    let licenseData = []

    function daysOfLicense() {
      let initialDate = startDate.split('-')
      let finalDate = endDate.split('-')
      let initialDateFormat = new Date(initialDate[0], initialDate[1] - 1, initialDate[2])
      let finalDateFormat = new Date(finalDate[0], finalDate[1] - 1, finalDate[2])
      let days = Math.floor((finalDateFormat - initialDateFormat) / (1000 * 60 * 60 * 24)) + 1
      console.log(days);
      for (let i = 0; i < days; i++) {
        let year = ''
        let month = ''
        let day = ''
        if (initialDateFormat > finalDateFormat) {
          break
        }
        if (initialDateFormat.getDay() !== 0 && initialDateFormat.getDay() !== 6) {
          year = initialDateFormat.getFullYear()
          month = initialDateFormat.getMonth() + 1
          day = initialDateFormat.getDate()
          let data = {
            fileNumber: fileNumber,
            typeLicense: typeLicense,
            year: year,
            month: month,
            day: day,
            observation: observation,
            userId: user.id
          }
          licenseData.push(data)
        } else {
          days = days + 1
        }
        initialDateFormat.setDate(initialDateFormat.getDate() + 1)
      }
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
        daysOfLicense()
        const employee = await Employee.create(dataEmployee)
        const license = await License.create(licenseData)
        req.body.success = true
        req.body.sc = 201
        req.body.data = { license, employee }
        defaultResponse(req, res)
      } else {
        daysOfLicense()
        const license = await License.create(licenseData)
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
    let { employee } = req

    try {
      const licenses = await License.find({ fileNumber: file })
      user = {
        user: user.id
      }
      employee = {
        name: employee.name
      }
      req.body.success = true
      req.body.sc = 200
      req.body.data = { licenses, user, employee }
      defaultResponse(req, res)
    } catch (e) {
      console.log(e)
    }
  }
}

export default controller