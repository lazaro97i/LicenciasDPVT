import '../../config/database.js'
import 'dotenv/config.js'
import bcryptjs from 'bcryptjs'
import { User } from "../users_model.js"


const users = [
  {
    email: 'admin@admin.com',
    password: bcryptjs.hashSync('admin1234', 10),
    photo: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png',
    role: 'ADMIN_ROLE',
    status: false
  }
]

User.insertMany(users)