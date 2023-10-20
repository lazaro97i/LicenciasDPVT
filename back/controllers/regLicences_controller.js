import { RegistroDeLicencia } from "../models/regLicenses_model.js"
import defaultResponse from "../config/response.js"


const controller = {

  read: async (req, res) => {

    try {
      const regLicenses = await RegistroDeLicencia.find()
      req.body.success = true
      req.body.sc = 200
      req.body.data = regLicenses
      return defaultResponse(req, res)
    } catch (e) {
      console.log(e)
    }
  },

  readOne: async (req, res) => {
    const { file } = req.params
    try {
      const regLicenses = await RegistroDeLicencia.find({ legajo: file })
      req.body.success = true
      req.body.sc = 200
      req.body.data = regLicenses
      req.body.message = 'Registros encontrados'
      return defaultResponse(req, res)
    } catch (e) {
      console.log(e)
    }
  },

  create: async (req, res) => {

    const data = {
      legajo: req.body.legajo,
      nroExpediente: req.body.nroExpediente,
      enfermedadCD: req.body.enfermedadCD,
      enfermedadLD: req.body.enfermedadLD,
      estudios: req.body.estudios,
      inciso9AnticipoLic: req.body.inciso9AnticipoLic,
      familiarEnfermo: req.body.familiarEnfermo,
      anualReglamentaria: req.body.anualReglamentaria,
      horasExtras: req.body.horasExtras,
      descansoCompensatorio: req.body.descansoCompensatorio,
      fechaDeUtilizacion: req.body.fechaDeUtilizacion,
      observaciones: req.body.observaciones,
    }

    try {
      const regLicense = await RegistroDeLicencia.create(
        data
      )
      req.body.success = true
      req.body.sc = 201
      req.body.data = regLicense
      return defaultResponse(req, res)
    } catch (e) {
      console.log(e)
    }
  }

}

export default controller