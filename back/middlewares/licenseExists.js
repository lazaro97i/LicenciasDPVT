import { License } from "../models/licenses_model.js"
import defaultResponse from "../config/response.js"


const licenseExists = async (req, res, next) => {


  const { fileNumber, startDate, endDate } = req.body

  let file

  if (fileNumber) {
    file = parseInt(fileNumber)
  } else {
    next()
  }

  let yearIni = startDate.split('-')[0]
  let yearEnd = endDate.split('-')[0]
  let monthIni = (startDate.split('-')[1] % 10).toString()
  let monthEnd = (endDate.split('-')[1] % 10).toString()
  let dayIni = startDate.split('-')[2]
  let dayEnd = endDate.split('-')[2]

  const license = await License.find({
    $and: [
      { fileNumber: file },
      { $or: [{ year: yearIni }, { year: yearEnd }] },
      { $or: [{ month: monthIni }, { month: monthEnd }] },
      { $or: [{ day: dayIni }, { day: dayEnd }] },
    ]
  })
  if (license.length === 0) {
    next()
  } else {
    req.body.success = false
    req.body.sc = 400
    req.body.data = 'Los dias seleccionados ya contienen una licencia'
    return defaultResponse(req, res)
  }
}

export default licenseExists