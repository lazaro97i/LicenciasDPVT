import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const API_URL = import.meta.env.VITE_APP_API_URL

const token = localStorage.getItem('token')

const sendAuth = () => {

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  return config
}

const createLicense = createAsyncThunk('licenses/createLicense', async (data) => {
  console.log(data);
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

const licenseActions = {
  createLicense
}

export default licenseActions