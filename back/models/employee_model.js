import mongoose from "mongoose"

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  apartDiv: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  function: {
    type: String,
    required: true
  },
  keyDate: {
    type: String,
    required: true
  },
  zone: {
    type: String,
    required: true
  },
  camp: {
    type: String,
    required: true
  },
  viaticB: {
    type: String,
    required: true
  },
  added: {
    type: String,
    required: true
  },
  uprooting: {
    type: String,
    required: true
  },
  dedicationOp: {
    type: String,
    required: true
  },
  userData: {
    type: mongoose.ObjectId,
    required: true
  }
}, { timestamps: true })

export const Employee = mongoose.model('empleado', schema)