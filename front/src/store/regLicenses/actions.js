import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const API_URL = import.meta.env.VITE_APP_API_URL

const sendAuth = () => {

  let token = localStorage.getItem('token')
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return config
}

const getRegLicenses = createAsyncThunk('regLicenses/getRegLicenses', async () => {

  try {
    const response = await axios.get(`${API_URL}/reg-licenses`)
    return {
      response: response.data,
      message: 'Registro de licencias encontrado',
      success: response.data.success
    }
  } catch (e) {
    console.log(e)
    return {
      response: null,
      message: e.response.message,
      success: e.response.success
    }
  }

})

const createRegLicense = createAsyncThunk('regLicenses/createRegLicense', async (data) => {

  console.log(data)

  try {
    const response = await axios.post(
      `${API_URL}/reg-licenses`,
      data,
      sendAuth()
    )
    return {
      response: response.data,
      message: 'El registro se agrego correctamente',
      success: true
    }
  } catch (e) {
    console.log(e)
    return {
      response: null,
      message: e.response.data.message,
      success: e.response.data.success
    }
  }

})

const getOneReg = createAsyncThunk('regLicenses/getOneReg', async (file) => {

  try {
    const response = await axios.get(
      `${API_URL}/reg-licenses/${file}`,
      sendAuth()
    )
    return {
      response: response.data,
      message: 'Registros encontrados',
      success: true
    }

  } catch (e) {
    console.log(e)
    return {
      response: null,
      message: e.respones.data.message,
      success: e.response.data.success
    }
  }

})

const regLicensesActions = {
  getRegLicenses,
  createRegLicense,
  getOneReg
}

export default regLicensesActions