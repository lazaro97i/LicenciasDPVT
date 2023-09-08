import mongoose from "mongoose"

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  dni: { type: Number, required: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
  is_online: { type: Boolean, required: true }
})

export const User = mongoose.model('user', schema)