import { License } from "../models/licenses_model.js"
import defaultResponse from "../config/response.js"


const licenseExists = async (req, res, next) => {


  const { fileNumber, startDate, endDate } = req.body

  let file

  if (fileNumber) {
    file = parseInt(fileNumber)
  }
  if (!startDate || !endDate) {
    req.body.success = false
    req.body.sc = 400
    req.body.data = 'Debe ingresar fechas válidas'
    return defaultResponse(req, res)
  }

  let yearIni = startDate.split('-')[0]
  let yearEnd = endDate.split('-')[0]
  let monthIni = (parseInt(startDate.split('-')[1]) < 10 ? startDate.split('-')[1] % 10 : startDate.split('-')[1]).toString()
  let monthEnd = (parseInt(endDate.split('-')[1]) < 10 ? endDate.split('-')[1] % 10 : endDate.split('-')[1]).toString()
  let dayIni = (parseInt(startDate.split('-')[2]) < 10 ? startDate.split('-')[2] % 10 : startDate.split('-')[2]).toString()
  let dayEnd = (parseInt(endDate.split('-')[2]) < 10 ? endDate.split('-')[2] % 10 : endDate.split('-')[2]).toString()

  // const license = await License.find({
  //   $and: [
  //     { fileNumber: file },
  //     { $or: [{ year: yearIni }, { year: yearEnd }] },
  //     { $or: [{ month: monthIni }, { month: monthEnd }] },
  //     { $or: [{ day: dayIni }, { day: dayEnd }] },
  //   ]
  // })

  // console.log(dayIni + '-' + monthIni + '-' + yearIni)
  // console.log(dayEnd + '-' + monthEnd + '-' + yearEnd)

  const dateIni = await License.find({
    $and: [
      { fileNumber: file },
      { year: yearIni },
      { month: monthIni },
      { day: dayIni },
    ]
  })
  const dateEnd = await License.find({
    $and: [
      { fileNumber: file },
      { year: yearEnd },
      { month: monthEnd },
      { day: dayEnd }
    ]
  })
  if (dateIni.length === 0 && dateEnd.length === 0) {
    next()
  } else {
    req.body.success = false
    req.body.sc = 400
    req.body.data = 'Los dias seleccionados ya contienen una licencia'
    return defaultResponse(req, res)
  }
}

export default licenseExists

