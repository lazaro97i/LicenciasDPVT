import mongoose from "mongoose"

const schema = new mongoose.Schema({
  fileNumber: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  cuil: {
    type: Number,
    required: true
  },
  apartDiv: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: false,
    default: 'sin datos'
  },
  function: {
    type: String,
    required: false,
    default: 'sin datos'
  },
  keyDate: {
    type: String,
    required: false,
    default: 'sin datos'
  },
  zone: {
    type: String,
    required: true
  },
  camp: {
    type: String,
    required: false,
    default: 'sin datos'
  },
  viaticB: {
    type: String,
    required: false,
    default: 'sin datos'
  },
  added: {
    type: String,
    required: false,
    default: 'sin datos'
  },
  uprooting: {
    type: String,
    required: false,
    default: 'sin datos'
  },
  dedicationOp: {
    type: String,
    required: false,
    default: 'sin datos'
  }
}, { timestamps: true })

export const Employee = mongoose.model('empleado', schema)