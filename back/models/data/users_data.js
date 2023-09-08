import '../../config/database.js'
import 'dotenv/config.js'
import bcryptjs from 'bcryptjs'
import { User } from "../users_model.js"


const users = [
  {
    name: 'Admin',
    dni: 12345678,
    password: bcryptjs.hashSync('admin1234', 10),
    phone: 3815222333,
    email: 'admin@admin.com',
    is_online: false
  }
]

User.insertMany(users)