import userActions from "./actions"
import { createReducer } from '@reduxjs/toolkit'

const {
  signIn
} = userActions

const initialState = {
  user: [],
  message: []
}

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(signIn.fulfilled, (state, action) => {
      let newState = {
        user: action.payload.response,
        message: action.payload.message,
        success: action.payload.success
      }
      return newState
    })
    .addCase(signIn.rejected, (state, action) => {
      let newState = {
        message: action.payload
      }
      return newState
    })
})

export default userReducer