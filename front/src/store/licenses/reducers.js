import { createReducer } from "@reduxjs/toolkit"
import licenseActions from "./actions"

const { createLicense } = licenseActions

const initialState = {
  license: [],
  message: []
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
})

export default licenceReducer