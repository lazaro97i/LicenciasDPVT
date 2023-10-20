import { configureStore } from '@reduxjs/toolkit'
import userReducer from './users/reducers'
import licenceReducer from './licenses/reducers'
import employeeReducer from './employees/reducers'
import authReducer from './users/auth/reducers'
import regLicensesReducer from './regLicenses/reducers'

const store = configureStore({
  reducer: {
    user: userReducer,
    license: licenceReducer,
    employee: employeeReducer,
    auth: authReducer,
    regLicenses: regLicensesReducer
  }
})

export default store