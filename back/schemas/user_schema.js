import Joi from "joi"

const schema = Joi.object({
  fileNumber: Joi.number().required().positive().integer().messages({
    'any.required': 'Legajo obligatorio',
    'number.empty': 'Legajo obligatorio',
    'number.base': 'Legajo obligatorio',
    'number.positive': 'Numero de legajo incorrecto'
  }),
  password: Joi.string().required().min(6).messages({
    'any.required': 'Contraseña obligatoria',
    'string.empty': 'Contraseña obligatoria',
    'string.base': 'Contraseña obligatoria',
    'string.min': 'La contraseña debe tener minimo 6 caracteres',
  }),
  role: Joi.string().required().messages({
    'any.required': 'Rol de usuario obligatorio',
    'string.empty': 'Rol de usuario obligatorio',
  }),
  photo: Joi.string().uri().empty('').default('default value')
})

export default schema