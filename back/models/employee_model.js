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
    default: ''
  },
  function: {
    type: String,
    required: false,
    default: ''
  },
  keyDate: {
    type: String,
    required: false,
    default: ''
  },
  zone: {
    type: String,
    required: true
  },
  camp: {
    type: String,
    required: false,
    default: ''
  },
  viaticB: {
    type: String,
    required: false,
    default: ''
  },
  added: {
    type: String,
    required: false,
    default: ''
  },
  uprooting: {
    type: String,
    required: false,
    default: ''
  },
  dedicationOp: {
    type: String,
    required: false,
    default: ''
  }
}, { timestamps: true })

export const Employee = mongoose.model('empleado', schema)