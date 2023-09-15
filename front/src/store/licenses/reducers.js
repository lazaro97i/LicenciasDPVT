import { createReducer } from "@reduxjs/toolkit"
import licenseActions from "./actions"

const { createLicense, get_licenses } = licenseActions

const initialState = {
  license: [],
  licenses: [],
  message: [],
  success: false
}

const licenceReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createLicense.fulfilled, (state, action) => {
      let newState = {
        license: action.payload.response,
        message: action.payload.message
      }
      return newState
    })
    .addCase(get_licenses.fulfilled, (state, action) => {
      let newState = {
        licenses: action.payload.response,
        message: action.payload.message,
        success: action.payload.success
      }
      return newState
    })
    .addCase(get_licenses.rejected, (state, action) => {
      let newState = {
        message: action.payload.message,
        success: action.payload.success
      }
      return newState
    })
})

export default licenceReducer