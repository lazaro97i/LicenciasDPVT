import { createReducer } from "@reduxjs/toolkit"
import authActions from "./actions"

const { signinToken } = authActions

const initialState = {
  auth: [],
  message: [],
  success: false
}

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(signinToken.fulfilled, (state, action) => {
      let newState = {
        auth: action.payload.response,
        message: action.payload.message,
        success: action.payload.success
      }
      return newState
    })
    .addCase(signinToken.rejected, (state, action) => {
      let newState = {
        auth: null,
        message: action.payload
      }
      return newState
    })
})

export default authReducer