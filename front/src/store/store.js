import { configureStore } from '@reduxjs/toolkit'
import userReducer from './users/reducers'
import licenceReducer from './licenses/reducers'
import employeeReducer from './employees/reducers'

const store = configureStore({
  reducer: {
    user: userReducer,
    license: licenceReducer,
    employee: employeeReducer
  }
})

export default store