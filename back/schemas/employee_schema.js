import Joi from "joi"

const schema = Joi.object({
  fileNumber: Joi.number().required().positive().integer().messages({
    'any.required': 'Legajo obligatorio',
    'number.empty': 'Legajo obligatorio',
    'number.base': 'Legajo obligatorio',
    'number.positive': 'Numero de legajo incorrecto'
  }),
  name: Joi.string().required().messages({
    'any.required': 'Nombre obligatorio',
    'string.empty': 'Nombre obligatorio',
    'string.base': 'Nombre obligatorio',
  }),
  apartDiv: Joi.string().required().messages({
    'any.required': 'Depto/Div campo obligatorio',
    'string.empty': 'Depto/Div campo obligatorio',
    'string.base': 'Depto/Div campo obligatorio',
  }),
  position: Joi.string().required().messages({
    'any.required': 'Cargo obligatorio',
    'string.empty': 'Cargo obligatorio',
    'string.base': 'Cargo obligatorio',
  }),
  function: Joi.string().required().messages({
    'any.required': 'Funcion obligatoria',
    'string.empty': 'Funcion obligatoria',
    'string.base': 'Funcion obligatoria',
  }),
  keyDate: Joi.string().required().messages({
    'any.required': 'Fecha clave obligatoria',
    'string.empty': 'Fecha clave obligatoria',
    'string.base': 'Fecha clave obligatoria',
  }),
  zone: Joi.string().required().messages({
    'any.required': 'Zona obligatoria',
    'string.empty': 'Zona obligatoria',
    'string.base': 'Zona obligatoria',
  }),
  camp: Joi.string().required().messages({
    'any.required': 'Campamento obligatorio',
    'string.empty': 'Campamento obligatorio',
    'string.base': 'Campamento obligatorio',
  }),
  viaticB: Joi.string().required().messages({
    'any.required': 'Viatico "B" obligatorio',
    'string.empty': 'Viatico "B" obligatorio',
    'string.base': 'Viatico "B" obligatorio',
  }),
  added: Joi.string().required().messages({
    'any.required': 'Campo adscripto obligatorio',
    'string.empty': 'Campo adscripto obligatorio',
    'string.base': 'Campo adscripto obligatorio',
  }),
  uprooting: Joi.string().required().messages({
    'any.required': 'Campo desarraigo obligatorio',
    'string.empty': 'Campo desarraigo obligatorio',
    'string.base': 'Campo desarraigo obligatorio',
  }),
  dedicationOp: Joi.string().required().messages({
    'any.required': 'Dedicacion Op. obligatoria',
    'string.empty': 'Dedicacion Op. obligatoria',
    'string.base': 'Dedicacion Op. obligatoria',
  }),
})

export default schema