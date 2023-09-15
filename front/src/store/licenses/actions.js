import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const API_URL = import.meta.env.VITE_APP_API_URL


const sendAuth = () => {

  const token = localStorage.getItem('token')

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  return config
}

const createLicense = createAsyncThunk('licenses/createLicense', async (data) => {
  try {
    const license = await axios.post(
      `${API_URL}/license`,
      data,
      sendAuth()
    )
    return {
      response: license.data.response,
      message: 'Licencia registrada exitosamente!',
      success: license.data.success
    }
  } catch (e) {
    console.log(e)
    return {
      response: null,
      message: e.response.data.response,
      success: e.response.data.success
    }
  }
})

const get_licenses = createAsyncThunk('licenses/get_licenses', async (file) => {

  try {
    const licenses = await axios.get(
      `${API_URL}/license/${file}`,
      sendAuth()
    )
    return {
      response: licenses.data.response,
      message: 'Licencia/as encontrada/as',
      success: licenses.data.success
    }
  } catch (e) {
    console.log(e)
    return {
      response: null,
      message: e.response.data.response,
      success: e.response.data.success
    }
  }
})

const licenseActions = {
  createLicense,
  get_licenses
}

export default licenseActions