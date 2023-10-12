import mongoose from "mongoose"

const schema = new mongoose.Schema({
  fileNumber: {
    type: Number,
    required: [true, 'Legajo requerido'],
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
  },
  role: {
    type: String,
    required: true,
    enum: ['ADMIN_ROLE', 'USER_ROLE']
  },
  status: {
    type: Boolean,
    required: true
  },
  isOnline: {
    type: Boolean,
    required: true
  },
  isDeleted: {
    type: Boolean,
    required: true
  }
}, { timestamps: true })

export const User = mongoose.model('user', schema)