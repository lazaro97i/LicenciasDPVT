import { configureStore } from '@reduxjs/toolkit'
import userReducer from './users/reducers'
import licenceReducer from './licenses/reducers'

const store = configureStore({
  reducer: {
    user: userReducer,
    license: licenceReducer
  }
})

export default store