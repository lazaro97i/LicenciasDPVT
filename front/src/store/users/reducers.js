import userActions from "./actions"
import { createReducer } from '@reduxjs/toolkit'

const {
  signIn,
  signinToken,
  signUp,
  getUsers,
  getUser
} = userActions

const initialState = {
  user: [],
  userAuth: [],
  new_user: [],
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
    .addCase(signUp.fulfilled, (state, action) => {
      let newState = {
        new_user: action.payload.response,
        message: action.payload.message,
        success: action.payload.success
      }
      return newState
    })
    .addCase(getUsers.fulfilled, (state, action) => {
      let newState = {
        users: action.payload.response,
        message: action.payload.message,
        success: action.payload.success
      }
      return newState
    })
    .addCase(getUser.fulfilled, (state, action) => {
      let newState = {
        response: action.payload.response,
        message: action.payload.message,
        success: action.payload.success
      }
      return newState
    })
})

export default userReducer