import { createReducer } from "@reduxjs/toolkit"
import employeeActions from "./actions"

const {
  getEmployee,
  newEmployee
} = employeeActions

const initialState = {
  employee: [],
  message: [],
  success: null
}

const employeeReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getEmployee.fulfilled, (state, action) => {
      let newState = {
        employee: action.payload.response,
        message: action.payload.message,
        success: action.payload.success
      }
      return newState
    })
    .addCase(newEmployee.fulfilled, (state, action) => {
      let newState = {
        employee: action.payload.response,
        message: action.payload.message,
        success: action.payload.message
      }
      return newState
    })
})

export default employeeReducer