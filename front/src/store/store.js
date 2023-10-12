import { configureStore } from '@reduxjs/toolkit'
import userReducer from './users/reducers'
import licenceReducer from './licenses/reducers'
import employeeReducer from './employees/reducers'
import authReducer from './users/auth/reducers'

const store = configureStore({
  reducer: {
    user: userReducer,
    license: licenceReducer,
    employee: employeeReducer,
    auth: authReducer
  }
})

export default store