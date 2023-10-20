import regLicensesActions from "./actions"
import { createReducer } from "@reduxjs/toolkit"

const {
  getRegLicenses,
  createRegLicense,
  getOneReg
} = regLicensesActions

const initialState = {
  regLicenses: [],
  message: [],
  success: false
}

const regLicensesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getRegLicenses.fulfilled, (state, action) => {
      let newState = {
        regLicenses: action.payload.response,
        message: action.payload.message,
        success: action.payload.success
      }
      return newState
    })
    .addCase(createRegLicense.fulfilled, (state, action) => {
      let newState = {
        regLicenses: action.payload.response,
        message: action.payload.message,
        success: action.payload.success
      }
      return newState
    })
    .addCase(getOneReg.fulfilled, (state, action) => {
      let newState = {
        regLicenses: action.payload.response,
        message: action.payload.message,
        success: action.payload.success
      }
      return newState
    })
})

export default regLicensesReducer